import { object, string, minLength, url, Output, Issues } from 'valibot'

export const createProjectSchema = object({
	name: string([minLength(3, 'Name is required')]),
	description: string([minLength(3, 'Description is required')]),
	siteUrl: string([url('Invalid site URL')]),
})
export const registrySchema = object({
	lcpScore: string([minLength(1, 'This field is required')]),
	fcpScore: string([minLength(1, 'This field is required')]),
	ttiScore: string([minLength(1, 'This field is required')]),
	blockingTimeScore: string([minLength(1, 'This field is required')]),
	siScore: string([minLength(1, 'This field is required')]),
	clsScore: string([minLength(1, 'This field is required')]),
})

export type ProjectOutput = Output<typeof createProjectSchema>
export type RegistryOutput = Output<typeof registrySchema>
// It returns an boolean if the key exists in the issues

export const containsErrors = (key: keyof ProjectOutput, issues: Issues) =>
	issues && issues.some((i) => i.path?.[0].key === key)

//It returns an error message related to the key and issues specified
export const errorFromField = (key: keyof ProjectOutput, issues: Issues) => {
	const error = issues?.find((i) => i.path?.[0].key === key)
	return error?.message
}
