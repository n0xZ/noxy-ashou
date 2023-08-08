import { Project } from '@prisma/client'
import { ProjectOutput } from 'utils/valibot'
import { ValiError, safeParse } from 'valibot'

export const useGetProjects = async () =>
	await useFetch<{ projects: Project[] }>('/api/v1/project', {
		responseType: 'json',
		key: 'projects',
	})
export const useGetProjectById = async (id: string) =>
	await useFetch<{ existingProject?: Project }>('/api/v1/project/search', {
		params: { id },
		responseType: 'json',
		key: `project-by-id-${id}`,
	})

export const useCreateProject = () => {
	const formFields = ref<ProjectOutput>({
		name: '',
		description: '',
		siteUrl: '',
	})
	const formErrors = ref<ValiError>({} as ValiError)
	const router = useRouter()
	const isLoading = ref(false)
	async function create() {
		try {
			isLoading.value = true
			const result = safeParse(createProjectSchema, formFields.value)
			if (result.success) {
				const newProject = await $fetch(`/api/v1/project`, {
					body: JSON.stringify({ ...formFields.value }),
					method: 'POST',
					headers: { 'content-type': 'application/json' },
				})

				if (newProject) {
					refreshNuxtData('projects')
					isLoading.value = false
					router.push(`/home/project/${newProject.project.id}`)
				}
			} else {
				formErrors.value = result.error
				isLoading.value = false
			}
		} catch (e) {
			isLoading.value = false
			if (e instanceof Error) {
				throw createError(e)
			}
		}
	}
	return { formErrors, create, isLoading, formFields }
}
export const useRemoveProject = (id?: string) => {
	const config = useRuntimeConfig()
	const API_URL = config.public.API_URL
	const router = useRouter()
	const isLoading = ref(false)
	async function remove() {
		try {
			isLoading.value = true
			const res = await fetch(`${API_URL}/project/${id}`, {
				headers: {
					'content-type': 'application/json',
				},
				method: 'DELETE',
			})
			const data = (await res.json()) as { deletedProject: Project }
			if (data) {
				isLoading.value = false
				router.push('/home')
			}
		} catch (e) {
			isLoading.value = false
			if (e instanceof Error) {
				throw createError(e)
			}
		}
	}
	return { remove, isLoading }
}
export const useUpdateProject = ({
	data,
	id,
}: {
	data: { existingProject?: Project } | null
	id: string
}) => {
	const formFields = ref<ProjectOutput>({
		name: data?.existingProject?.name ?? '',
		description: data?.existingProject?.description ?? '',
		siteUrl: data?.existingProject?.siteUrl ?? '',
	})
	const formErrors = ref<ValiError>({} as ValiError)
	const config = useRuntimeConfig()
	const API_URL = config.public.API_URL
	const router = useRouter()
	const isLoading = ref(false)
	async function update() {
		try {
			isLoading.value = true
			const result = safeParse(createProjectSchema, formFields.value)
			if (result.success) {
				const res = await fetch(`${API_URL}/project/${id}`, {
					body: JSON.stringify({ ...formFields.value }),
					method: 'PUT',
					headers: { 'content-type': 'application/json' },
				})
				const data = (await res.json()) as { updatedProject: Project }

				if (data.updatedProject) {
					isLoading.value = false
					router.push('/home')
				}
			} else {
				formErrors.value = result.error
				isLoading.value = false
			}
		} catch (e) {
			isLoading.value = false
			if (e instanceof Error) {
				throw createError(e)
			}
		}
	}
	return { update, formErrors, isLoading, formFields }
}
