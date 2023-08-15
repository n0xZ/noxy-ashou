<script setup lang="ts">
	const props = defineProps<{ projectId: string }>()
	const projectPath = `/home/project/${props.projectId}`
</script>
<template>
	<section
		class="flex flex-col items-center justify-center h-screen space-y-1 text-center"
	>
		<UiParagraph
			>It seems you have no registry defined yet. You can define your registries on
			your project panel.</UiParagraph
		>

		<NuxtLink :to="projectPath" class="underline"
			>Click over here to view your panel.</NuxtLink
		>
	</section>
</template>
