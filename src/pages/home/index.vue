<script setup lang="ts">
	useSeoMeta({ title: 'Ashou - Home' })

	const { data, pending } = useFetch('/api/project', {
		headers: { 'content-type': 'application/json' },
		responseType: 'json',
	})
</script>

<template>
	<main class="container max-w-4xl mx-auto mt-3">
		<h2
			class="pb-2 text-3xl font-semibold tracking-tight text-center transition-colors border-b scroll-m-20 first:mt-0"
		>
			My project list
		</h2>
		<ProjectSkeleton v-if="pending" />
		<ProjectList
			v-else-if="!pending && data?.projects && data.projects.length !== 0"
			:projects="data.projects"
		/>
		<ProjectEmpty v-else />
	</main>
</template>
