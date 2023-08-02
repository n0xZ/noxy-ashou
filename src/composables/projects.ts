import { Project } from '@prisma/client'
import { ProjectOutput } from 'utils/valibot'
import { ValiError, safeParse } from 'valibot'

export const useGetProjects = async () =>
	await useFetch<{ projects: Project[] }>('/api/v1/project', {
		responseType: 'json',
	})
export const useGetProjectById = async (id: string) =>
	await useFetch<{ existingProject?: Project }>('/api/v1/project/search', {
		params: { id },
		responseType: 'json',
	})

export const useCreateProject = () => {
	const formFields = ref<ProjectOutput>({
		name: '',
		description: '',
		siteUrl: '',
	})
	const formErrors = ref<ValiError>({} as ValiError)
	const router = useRouter()
	const config = useRuntimeConfig()
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
	const router = useRouter()
	const isLoading = ref(false)

	async function update() {
		try {
			isLoading.value = true
			const result = safeParse(createProjectSchema, formFields.value)
			if (result.success) {
				const res = await fetch(`${config.app.baseURL}/api/project/${id}`, {
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
