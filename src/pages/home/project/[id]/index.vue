<script setup lang="ts">
	const route = useRoute('home-project-id')
	const id = route.params.id
	const router = useRouter()
	const { data } = await useGetProjectById(id)
	onMounted(() => {
		if (!data.value || !data.value.existingProject) {
			router.push('/home')
		}
	})
	useSeoMeta({
		title: `Webmetrics | Actual project: ${data?.value?.existingProject?.name}`,
	})
</script>
<template>
	<main
		class="flex flex-col justify-center w-full h-full max-w-4xl space-y-3 sm:min-h-screen"
	>
		<h2
			class="pb-2 mb-4 text-3xl font-semibold tracking-tight text-center transition-colors border-b scroll-m-20 first:mt-0"
		>
			{{ data?.existingProject?.name }}
		</h2>

		<NuxtLink
			class="p-3 text-center underline rounded-md"
			:to="`/home/project/${id}/history`"
			>View registry history</NuxtLink
		>
		<RegistryCreate
			:project-metadata="{ id, siteUrl: data?.existingProject?.siteUrl }"
		/>
		<ProjectRemove :id="id" />
	</main>
</template>
