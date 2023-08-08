import { registriesByProjectId } from '@/server/models/registry.server'

// This route returns registries based on the Project ID set on params.
export default defineEventHandler(async (ev) => {
	try {
		const params = ev.context.params
		if (!params)
			throw createError({ statusCode: 400, statusMessage: 'Missing ID' })
		const existingProject = await registriesByProjectId({ projectId: params.id })
		return { existingProject }
	} catch (e) {
		if (e instanceof Error)
			throw createError({ statusCode: 500, statusMessage: e.message })
	}
})
