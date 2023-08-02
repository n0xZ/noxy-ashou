import { getServerSession } from '#auth'
export default defineEventHandler(async (event) => {
	const session = await getServerSession(event)
	if (!event.node.req.url?.startsWith('/api/')) {
		return
	}

	if (!session && event.node.req.url?.startsWith('/api')) {
		throw createError({
			statusMessage: 'You are not authorized to perform this action.',
			statusCode: 403,
		})
	}
})
