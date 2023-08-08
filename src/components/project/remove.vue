<script setup lang="ts">
	type Props = {
		id: string
	}
	const props = defineProps<Props>()
	const { isLoading: isRemoving, remove } = useRemoveProject(props.id)
</script>
<template>
	<UiButton
		@click="() => remove()"
		class="flex flex-row items-center space-x-2 bg-destructive hover:bg-destructive/70"
	>
		<template v-if="isRemoving">
			<UiSpinner />
			<span>Removing...</span>
		</template>
		<template v-else>Remove project</template>
	</UiButton>
</template>
