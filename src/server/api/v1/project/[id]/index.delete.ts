import { deleteProject } from '@/server/models/project.server'

// It deletes  a project based on its ID
export default defineEventHandler(async (ev) => {
	try {
		const params = ev.context.params
		if (!params)
			throw createError({ statusCode: 400, statusMessage: 'Missing ID' })
		const deletedUser = await deleteProject({ id: params.id })
		return { deletedUser }
	} catch (e) {
		if (e instanceof Error)
			throw createError({ statusCode: 500, statusMessage: e.message })
	}
})
