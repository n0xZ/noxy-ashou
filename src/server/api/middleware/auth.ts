import { getServerSession } from '#auth'
export default eventHandler(async (event) => {
	const session = await getServerSession(event)
	if (!session) {
		throw createError({
			statusMessage: 'You are not authorized to perform this action.',
			statusCode: 403,
		})
	}
})
