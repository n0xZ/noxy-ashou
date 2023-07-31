<script setup lang="ts">
	defineProps<{
		class?: string
		title?: string
		onClick?: () => void
		type?: 'button' | 'submit'
		disabled?: boolean
	}>()
</script>
<template>
	<button
		@click="onClick"
		:class="`inline-flex items-center justify-center h-10 px-4 py-2 text-sm font-medium transition-colors rounded-md ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 ${$props.class}`"
		:disabled="disabled"
	>
		<slot />
	</button>
</template>
