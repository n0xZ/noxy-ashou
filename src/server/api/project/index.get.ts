import { getServerSession } from '#auth'
import { prisma } from '../../../db/prisma'
// This  should return projects based on user credentials, related from its session

export default defineEventHandler(async (ev) => {
	const sess = await getServerSession(ev)
	if (!sess)
		throw createError({ statusCode: 400, statusMessage: 'No session found' })
	const projects = await prisma.project.findMany({
		where: { user: { email: sess.user?.email } },
	})
	return { projects }
})
