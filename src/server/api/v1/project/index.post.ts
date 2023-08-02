import { getServerSession } from '#auth'
import { createProject } from '@/server/models/project.server'
import { createProjectSchema } from '~/utils/valibot'

// It creates an project with its name, description and siteUrl, and its related user.
export default defineEventHandler(async (ev) => {
	try {
		const sess = await getServerSession(ev)

		if (!sess)
			throw createError({ statusCode: 400, statusMessage: 'No session found' })
		const body = await readBody(ev)

		const { description, name, siteUrl } = createProjectSchema.parse(body)
		const project = await createProject({
			description,
			name,
			siteUrl,
			email: sess.user?.email ?? '',
		})

		return project
	} catch (e) {
		if (e instanceof Error)
			throw createError({ message: e.message, statusCode: 500 })
	}
})
