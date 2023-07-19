import { z } from 'zod'

export const createProjectSchema = z.object({
	name: z.string(),
	description: z.string(),
	siteUrl: z.string().url(),
})
