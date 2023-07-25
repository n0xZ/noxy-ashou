<script setup lang="ts">
	import { Project } from '@prisma/client'

	type Props = {
		project: Project
	}
	const props = defineProps<Props>()
	const projectPath = '/home/project/' + props.project.id
</script>

<template>
	<NuxtLink
		:to="projectPath"
		class="flex flex-col justify-between w-full h-32 gap-1 p-3 rounded-md shadow-md"
	>
		<aside class="flex flex-col space-y-2">
			<h2 class="font-medium">{{ props.project.name }}</h2>
			<p class="text-sm text-primary/50">{{ props.project.description }}</p>
		</aside>
		<a
			:href="props.project.siteUrl"
			target="_blank"
			rel="noreferrer"
			class="self-end w-full p-2 text-center text-white rounded-md xl:w-1/6 place-self-end bg-secondary-foreground"
			>Visit site</a
		>
	</NuxtLink>
</template>
