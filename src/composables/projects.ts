import { Project } from '@prisma/client'
import { ProjectOutput } from 'utils/valibot'

export const useGetProjects = async () =>
	await useFetch<{ projects: Project[] }>('/api/v1/project', {
		responseType: 'json',
	})
export const useGetProjectById = async (id: string) =>
	await useFetch('/api/v1/project/search', {
		params: { id },
		responseType: 'json',
	})

export const useCreateProject = () => {
	return {
		createProject: async (input: ProjectOutput) => {
			try {
				const newProject = await $fetch('/api/v1/project', {
					body: JSON.stringify({ input }),
					method: 'POST',
					headers: { 'content-type': 'application/json' },
				})
				return { newProject }
			} catch (e) {
				if (e instanceof Error)
					throw createError({ statusMessage: e.message, statusCode: 500 })
			}
		},
	}
}
export const useUpdateProject = (id: string) => {
	const config = useRuntimeConfig()
	return {
		update: async (input: ProjectOutput) => {
			const res = await fetch(`${config.app.baseURL}/api/project/${id}`, {
				body: JSON.stringify({ input }),
				method: 'PUT',
				headers: { 'content-type': 'application/json' },
			})
			const data = (await res.json()) as { updatedProject: Project }
			return data
		},
	}
}
