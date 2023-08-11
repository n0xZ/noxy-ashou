<script setup lang="ts">
	import { Registry } from '@prisma/client'
	import { retrieveDateOnISOFormat } from '@/utils/parse-date'
	type Props = {
		registry: Registry
		projectId: string
	}
	const props = defineProps<Props>()
	const registryDate = new Date(props.registry.createdAt)
	const registryTime = retrieveDateOnISOFormat(registryDate)

	const registryHref = `/home/project/${props.projectId}/registry/${props.registry.id}`
</script>
<template>
	<article
		class="flex flex-col justify-center w-full h-full p-3 space-y-1 rounded-md shadow-md min-h-[9rem] border-2 border-primary/5"
	>
		<span class="flex flex-row items-center space-x-1">
			<time :datetime="registryDate.toString()">{{ registryTime }}</time>
			<p>({{ registry.id }})</p>
		</span>
		<NuxtLink
			class="w-full p-2 text-center rounded-sm text-background hover:opacity-90 xl:w-1/6 place-self-end bg-secondary-foreground"
			:to="registryHref"
			>View registry</NuxtLink
		>
	</article>
</template>
