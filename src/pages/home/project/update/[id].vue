<script setup lang="ts">
	

	const route = useRoute('home-project-update-id')
	const id = route.params.id
	const { data: project } = await useGetProjectById(id)
	const { formErrors, formFields, isLoading, update } = useUpdateProject({
		data: project.value,
		id,
	})

	useSeoMeta({ title: `Ashou - Update ${project.value?.existingProject?.name}` })
</script>
<template>
	<main class="container w-full h-screen max-w-4xl mx-auto mt-5">
		<form
			@submit.prevent="update"
			class="flex flex-col justify-center w-full h-screen space-y-3"
		>
			<h2
				class="pb-2 mb-4 text-3xl font-semibold tracking-tight text-center transition-colors border-b scroll-m-20 first:mt-0"
			>
				Update project: {{ project?.existingProject?.name }}
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
					containsErrors('name', formErrors.issues)
						? errorFromField('name', formErrors.issues)
						: null
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
					containsErrors('description', formErrors.issues)
						? errorFromField('description', formErrors.issues)
						: null
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
					containsErrors('siteUrl', formErrors.issues)
						? errorFromField('siteUrl', formErrors.issues)
						: null
				}}</UiFormError>
			</UiFormField>
			<UiButton class="space-x-2" :disabled="isLoading" type="submit">
				<template v-if="isLoading">
					<UiSpinner />
					<span>Updating...</span>
				</template>
				<span v-else>Update project</span></UiButton
			>
		</form>
	</main>
</template>
