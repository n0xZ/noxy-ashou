import { projectById } from '@/server/models/project.server'

// This route returns an project based on a specified ID set on query params.
export default defineEventHandler(async (ev) => {
	try {
		const query = getQuery(ev)
		if (!query || !query.id)
			throw createError({ statusCode: 400, statusMessage: 'Missing ID' })
		const id = String(query.id)
		const existingProject = await projectById({ id })
		return { existingProject }
	} catch (e) {
		if (e instanceof Error)
			throw createError({ statusCode: 500, statusMessage: e.message })
	}
})
