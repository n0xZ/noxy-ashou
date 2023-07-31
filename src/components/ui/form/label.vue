<script setup lang="ts">
	import { Label } from 'radix-vue'
	defineProps<{ for?: string }>()
</script>
<template>
	<Label
		class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
		:for="$props.for"
	>
		<slot />
	</Label>
</template>
