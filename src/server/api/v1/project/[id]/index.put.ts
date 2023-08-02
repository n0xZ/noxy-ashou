import { updateProject } from '@/server/models/project.server'
import { ProjectOutput, createProjectSchema } from '@/utils/valibot'

// It updates a project based on its ID. Every field should be optional.
export default defineEventHandler(async (ev) => {
	try {
		const params = ev.context.params
		if (!params)
			throw createError({ statusMessage: 'Missing ID', statusCode: 400 })
		const body = await readBody(ev)
		const { description, name, siteUrl }: Partial<ProjectOutput> =
			createProjectSchema.parse(body)
		const updatedProject = await updateProject({
			description,
			name,
			siteUrl,
			id: params.id,
		})
		return { updatedProject }
	} catch (e) {
		if (e instanceof Error)
			throw createError({ statusCode: 500, message: e.message })
	}
})
