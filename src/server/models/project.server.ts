import { prisma } from '../db/prisma'
import { ProjectOutput } from '../../utils/valibot'

export async function projectsByUserCredential({ email }: { email?: string }) {
	try {
		const projects = await prisma.project.findMany({
			where: { user: { email } },
			orderBy: { createdAt: 'desc' },
		})
		return projects
	} catch (e) {
		if (e instanceof Error) console.error(e)
	}
}
export async function projectById({ id }: { id: string }) {
	try {
		const existingProject = await prisma.project.findUnique({ where: { id } })
		return existingProject
	} catch (e) {
		if (e instanceof Error) console.error(e)
	}
}
export async function createProject({
	description,
	name,
	siteUrl,
	email,
}: ProjectOutput & { email?: string }) {
	try {
		const project = await prisma.project.create({
			data: {
				name,
				description,
				siteUrl,
				user: { connect: { email } },
			},
		})
		return { project }
	} catch (e) {
		if (e instanceof Error) console.error(e)
	}
}
export async function updateProject({
	id,
	description,
	name,
	siteUrl,
}: Partial<ProjectOutput> & { id: string }) {
	try {
		const project = await prisma.project.update({
			data: { description, name, siteUrl },
			where: { id },
		})
		return { project }
	} catch (e) {
		if (e instanceof Error) console.error(e)
	}
}

export async function deleteProject({ id }: { id: string }) {
	try {
		const project = await prisma.project.delete({
			where: { id },
		})
		return { project }
	} catch (e) {
		if (e instanceof Error) console.error(e)
	}
}
