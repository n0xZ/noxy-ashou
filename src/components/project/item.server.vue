<script setup lang="ts">
	import { Project } from '@prisma/client'

	type Props = {
		project: Project
	}
	const props = defineProps<Props>()
	const projectPath = '/home/project/' + props.project.id
</script>

<template>
	<article
		class="flex flex-col justify-between w-full h-full p-3 space-y-1 rounded-md shadow-md min-h-[9rem]"
	>
		<aside class="flex flex-col mb-3 space-y-2">
			<h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
				{{ props.project.name }}
			</h3>
			<p class="text-sm text-primary/50">{{ props.project.description }}</p>
		</aside>
		<aside
			class="flex flex-col items-center justify-end mt-3 space-y-1 xl:space-x-1 xl:mt-0 xl:flex-row"
		>
			<NuxtLink
				:to="projectPath"
				class="w-full p-2 text-center text-white rounded-sm hover:opacity-90 xl:w-1/6 place-self-end bg-secondary-foreground"
				>View Project</NuxtLink
			>
		</aside>
	</article>
</template>
