import { registryById } from '@/server/models/registry.server'

// This route returns registries based on the Project ID set on params.
export default defineEventHandler(async (ev) => {
	try {
		const params = ev.context.params
		if (!params)
			throw createError({ statusCode: 400, statusMessage: 'Missing ID' })
		const id = params.registryId
		const existingRegistry = await registryById({
			id,
		})
		return { existingRegistry }
	} catch (e) {
		if (e instanceof Error)
			throw createError({ statusCode: 500, statusMessage: e.message })
	}
})
