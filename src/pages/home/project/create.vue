<script setup lang="ts">
	import { ProjectOutput, createProjectSchema } from '@/utils/valibot'
	import { ValiError, safeParse } from 'valibot'

	useSeoMeta({ title: 'Ashou - Create new project' })

	const formFields = ref<ProjectOutput>({
		name: '',
		description: '',
		siteUrl: '',
	})
	const formErrors = ref<ValiError>()

	const isLoading = ref(false)
	async function createProject() {
		try {
			isLoading.value = true
			const result = safeParse(createProjectSchema, formFields.value)
			if (result.success) {
				const newProject = await $fetch('/api/project', {
					body: JSON.stringify({ ...formFields.value }),
					headers: { 'content-type': 'application/json' },
				})
				if (newProject) isLoading.value = false
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
				Create new project
			</h2>
			<UiFormField>
				<UiFormLabel>Project name <span class="text-red-500">*</span></UiFormLabel>
				<input
					class="flex w-full h-10 px-3 py-2 text-sm border rounded-md border-input bg-background ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
					required
					type="text"
					placeholder="My awesome project"
					v-model="formFields.name"
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
				/>
				<UiFormError>{{
					containsErrors('siteUrl') ? errorFromField('siteUrl') : null
				}}</UiFormError>
			</UiFormField>
			<UiButton :disabled="isLoading" type="submit"> Create new project </UiButton>
		</form>
	</main>
</template>
