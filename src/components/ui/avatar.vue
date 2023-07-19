<script setup lang="ts">
	defineProps<{ src?: string; alt: string }>()
</script>

<template>
	<img
		:src="src"
		:alt="alt"
		width="56"
		height="56"
		class="rounded-full hover:opacity-60 duration-100 ease-in aspect-auto"
	/>
</template>
