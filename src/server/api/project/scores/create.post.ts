import { z } from 'zod'
import { prisma } from '~/db/prisma'

export const lighthouseScoreSchema = z.object({
	lcpScore: z.string(),
	fcpScore: z.string(),
	ttiScore: z.string(),
	blockingTimeScore: z.string(),
	siScore: z.string(),
	clsScore: z.string(),
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
