import { projectById } from '@/server/models/project.server'

// This route returns an project based on the ID set on params.
export default defineEventHandler(async (ev) => {
	try {
		const params = ev.context.params
		if (!params)
			throw createError({ statusCode: 400, statusMessage: 'Missing ID' })
		const existingProject = await projectById({ id: params.id })
		return { existingProject }
	} catch (e) {
		if (e instanceof Error)
			throw createError({ statusCode: 500, statusMessage: e.message })
	}
})
