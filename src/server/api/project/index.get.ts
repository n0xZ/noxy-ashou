import { getServerSession } from '#auth'
import { projectsByUserCredential } from '../../../models/project.server'

// This  should return projects based on user credentials, related from its session
export default defineEventHandler(async (ev) => {
	const sess = await getServerSession(ev)

	const projects = await projectsByUserCredential({
		email: sess?.user?.email ?? '',
	})
	return { projects }
})
