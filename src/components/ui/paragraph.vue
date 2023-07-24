<script setup lang="ts">
	const props = defineProps<{ class?: string }>()
</script>
<template>
	<p :class="props.class + ' leading-7 [&:not(:first-child)]:mt-6'"><slot /></p>
</template>
