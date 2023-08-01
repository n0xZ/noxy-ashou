<script setup lang="ts">
	import { ProjectOutput, createProjectSchema } from '@/utils/valibot'
	import { Project } from '@prisma/client'
	import { ValiError, safeParse } from 'valibot'

	useSeoMeta({ title: 'Ashou - Update existing project' })
	const route = useRoute('home-project-update-id')
	const router = useRouter()
	const config = useRuntimeConfig()
	const id = route.params.id
	const { data } = await useAsyncData(`project-by-id-${id}`, async () => {
		const data = await $fetch(`/api/project/${id}`)
		return data
	})
	const formFields = ref<ProjectOutput>({
		name: data.value?.existingProject.projects?.name ?? '',
		description: data.value?.existingProject.projects?.description ?? '',
		siteUrl: data.value?.existingProject.projects?.siteUrl ?? '',
	})
	const formErrors = ref<ValiError>()

	const isLoading = ref(false)
	async function createProject() {
		try {
			isLoading.value = true
			const result = safeParse(createProjectSchema, formFields.value)
			if (result.success) {
				const res = await fetch(`${config.app.baseURL}/api/project/${id}`, {
					body: JSON.stringify({ ...formFields.value }),
					method: 'PUT',
					headers: { 'content-type': 'application/json' },
				})
				const newProject = (await res.json()) as { updatedProject: Project }
				console.log(newProject)
				if (newProject.updatedProject) {
					isLoading.value = false
					router.push('/home')
				}
			} else {
				formErrors.value = result.error
				isLoading.value = false
			}
		} catch (e) {
			isLoading.value = false
			if (e instanceof Error) {
				throw createError(e)
			}
		}
	}
	const containsErrors = (key: keyof ProjectOutput) =>
		formErrors.value?.issues &&
		formErrors.value.issues.some((i) => i.path?.[0].key === key)

	const errorFromField = (key: keyof ProjectOutput) => {
		const error = formErrors.value?.issues?.find((i) => i.path?.[0].key === key)
		return error?.message
	}
</script>
<template>
	<main class="container w-full h-screen max-w-4xl mx-auto mt-5">
		<form
			@submit.prevent="createProject"
			class="flex flex-col justify-center w-full h-screen space-y-3"
		>
			<h2
				class="pb-2 mb-4 text-3xl font-semibold tracking-tight text-center transition-colors border-b scroll-m-20 first:mt-0"
			>
				Update project: {{ data?.existingProject.projects?.name }}
			</h2>
			<UiFormField>
				<UiFormLabel>Project name <span class="text-red-500">*</span></UiFormLabel>
				<input
					class="flex w-full h-10 px-3 py-2 text-sm border rounded-md border-input bg-background ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
					required
					type="text"
					placeholder="My awesome project"
					v-model="formFields.name"
					:disabled="isLoading"
				/>
				<UiFormError>{{
					containsErrors('name') ? errorFromField('name') : null
				}}</UiFormError>
			</UiFormField>
			<UiFormField>
				<UiFormLabel
					>Project description <span class="text-red-500">*</span></UiFormLabel
				>
				<input
					class="flex w-full h-10 px-3 py-2 text-sm border rounded-md border-input bg-background ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
					required
					type="text"
					placeholder="My awesome project is awesome, but quite odd!"
					v-model="formFields.description"
					:disabled="isLoading"
				/>
				<UiFormError>{{
					containsErrors('description') ? errorFromField('description') : null
				}}</UiFormError>
			</UiFormField>
			<UiFormField>
				<UiFormLabel
					>Project site URL <span class="text-red-500">*</span></UiFormLabel
				>
				<input
					class="flex w-full h-10 px-3 py-2 text-sm border rounded-md border-input bg-background ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
					required
					type="url"
					placeholder="https://my-awesome-project.whateverelse"
					v-model="formFields.siteUrl"
					:disabled="isLoading"
				/>
				<UiFormError>{{
					containsErrors('siteUrl') ? errorFromField('siteUrl') : null
				}}</UiFormError>
			</UiFormField>
			<UiButton :disabled="isLoading" type="submit">
				<template v-if="isLoading">
					<UiSpinner />
					<span>Updating...</span>
				</template>
				<span v-else>Update project</span></UiButton
			>
		</form>
	</main>
</template>
