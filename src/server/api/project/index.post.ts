import { getServerSession } from '#auth'
import { prisma } from '~/db/prisma'
import { createProjectSchema } from '~/utils/valibot'

// It creates an project with its name, description and siteUrl, and its related user.
export default defineEventHandler(async (ev) => {
	try {
		const sess = await getServerSession(ev)

		if (!sess)
			throw createError({ statusCode: 400, statusMessage: 'No session found' })
		const body = await readBody(ev)
		const { description, name, siteUrl } = createProjectSchema.parse(body)
		const project = await prisma.project.create({
			data: {
				name,
				description,
				siteUrl,
				user: { connect: { email: sess.user?.email ?? '' } },
			},
		})
		return { project }
	} catch (e) {
		if (e instanceof Error)
			throw createError({ message: e.message, statusCode: 500 })
	}
})
