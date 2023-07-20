<script setup lang="ts">
	defineProps<{ src?: string; alt: string }>()
</script>

<template>
	<img
		:src="src"
		:alt="alt"
		width="56"
		height="56"
		class="rounded-full  aspect-auto"
	/>
</template>
