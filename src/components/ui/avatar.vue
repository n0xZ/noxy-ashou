<script setup lang="ts">
	import { AvatarFallback, AvatarImage, AvatarRoot } from 'radix-vue'
	defineProps<{ src?: string; alt: string }>()
</script>

<template>
	<AvatarRoot
		class="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full"
	>
		<AvatarImage class="aspect-square h-full w-full" :src="src" :alt="alt" />
		<AvatarFallback
			class="flex h-full w-full items-center justify-center rounded-full bg-muted"
			:alt="alt.slice(0, 2)"
		/>
	</AvatarRoot>
</template>
