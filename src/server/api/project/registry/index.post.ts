import { object, string, minLength } from 'valibot'
import { prisma } from '@/server/db/prisma'

export const registrySchema = object({
	lcpScore: string([minLength(1, 'This field is required')]),
	fcpScore: string([minLength(1, 'This field is required')]),
	ttiScore: string([minLength(1, 'This field is required')]),
	blockingTimeScore: string([minLength(1, 'This field is required')]),
	siScore: string([minLength(1, 'This field is required')]),
	clsScore: string([minLength(1, 'This field is required')]),
})

// It creates an Registry based on Lighthouse audit result.
export default defineEventHandler(async (ev) => {
	try {
		const body = await readBody(ev)
		const params = ev.context.params
		if (!params)
			throw createError({ statusCode: 400, statusMessage: 'Missing ID' })
		const { ...registryMetadata } = registrySchema.parse(body)

		const projectRegistry = await prisma.lighthouseScore.create({
			data: {
				...registryMetadata,
				project: { connect: { id: params.projectId } },
			},
		})
		return { projectRegistry }
	} catch (e) {
		if (e instanceof Error) {
			throw createError({ statusCode: 400, statusMessage: e.message })
		}
	}
})
