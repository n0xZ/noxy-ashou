import { object, string, minLength } from 'valibot'
import { prisma } from '@/server/db/prisma'

export const lighthouseScoreSchema = object({
	lcpScore: string([minLength(1, 'This field is required')]),
	fcpScore: string([minLength(1, 'This field is required')]),
	ttiScore: string([minLength(1, 'This field is required')]),
	blockingTimeScore: string([minLength(1, 'This field is required')]),
	siScore: string([minLength(1, 'This field is required')]),
	clsScore: string([minLength(1, 'This field is required')]),
})

// It creates an post based on Lighthouse API Result.
export default defineEventHandler(async (ev) => {
	try {
		const body = await readBody(ev)
		const params = ev.context.params
		if (!params)
			throw createError({ statusCode: 400, statusMessage: 'Missing ID' })
		const { ...scores } = lighthouseScoreSchema.parse(body)

		const projectScores = await prisma.lighthouseScore.create({
			data: { ...scores, project: { connect: { id: params.projectId } } },
		})
		return { projectScores }
	} catch (e) {
		if (e instanceof Error) {
			throw createError({ statusCode: 400, statusMessage: e.message })
		}
	}
})
