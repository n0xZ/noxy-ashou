import { getServerSession } from '#auth'
export default defineEventHandler(async (event) => {
	const session = await getServerSession(event)
	if (!event.node.req.url?.startsWith('/api/protected/middleware')) {
		return
	}

	if (!session && event.path.includes('/api')) {
		throw createError({
			statusMessage: 'You are not authorized to perform this action.',
			statusCode: 403,
		})
	}
})
