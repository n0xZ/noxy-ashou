<script setup lang="ts">
	type Props = {
		projectMetadata: { id: string; siteUrl?: string }
	}
	const props = defineProps<Props>()
	const { create, isLoading: isCreating } = useCreateRegistry(
		props.projectMetadata.id
	)
</script>
<template>
	<UiButton
		@click="() => create({ siteUrl: projectMetadata.siteUrl })"
		class="flex flex-row items-center space-x-2"
	>
		<template v-if="isCreating">
			<UiSpinner />
			<span>Creating...</span>
		</template>
		<template v-else>Create new registry</template>
	</UiButton>
</template>
