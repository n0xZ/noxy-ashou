import { prisma } from '@/server/db/prisma'

// It deletes an project based on specified ID.
export default defineEventHandler(async (ev) => {
	try {
		const body = await readBody(ev)
		const params = ev.context.params

		if (!params)
			throw createError({ statusCode: 400, statusMessage: 'Missing ID' })

		const deletedProjectRegistry = await prisma.registry.delete({
			where: { id: params.registryId },
		})
		return { deletedProjectRegistry }
	} catch (e) {
		if (e instanceof Error) {
			throw createError({ statusCode: 400, statusMessage: e.message })
		}
	}
})
