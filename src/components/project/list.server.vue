<script setup lang="ts">
	import { Project } from '@prisma/client'
	import ProjectItem from './item.server.vue'
	type Props = {
		projects: Project[]
	}
	const props = defineProps<Props>()
</script>

<template>
	<section class="grid w-full grid-rows-3 mx-auto mt-10 gap-9">
		<ProjectItem
			v-for="project in props.projects"
			:project="project"
			:key="project.id"
		/>
	</section>
</template>
