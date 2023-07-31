import { object, string, minLength, url, Output } from 'valibot'

export const createProjectSchema = object({
	name: string([minLength(3, 'Name is required')]),
	description: string([minLength(3, 'Description is required')]),
	siteUrl: string([url('Invalid site URL')]),
})
export type ProjectOutput = Output<typeof createProjectSchema>
