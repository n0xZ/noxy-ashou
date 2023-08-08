import {
	object,
	string,
	minLength,
	url,
	Output,
	Issues,
	optional,
} from 'valibot'

export const createProjectSchema = object({
	name: string([minLength(3, 'Name is required')]),
	description: string([minLength(3, 'Description is required')]),
	siteUrl: string([url('Invalid site URL')]),
})
export const registrySchema = object({
	lcpScore: string(),
	fcpScore: string(),
	ttiScore: string(),
	blockingTimeScore: string(),
	siScore: string(),
	clsScore: string(),
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
