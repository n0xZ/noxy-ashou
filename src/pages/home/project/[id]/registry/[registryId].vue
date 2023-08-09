<script setup lang="ts">
	const route = useRoute('home-project-id-registry-registryId')
	const registryId = route.params.registryId
	const { data: registry } = await useGetRegistryById(registryId)

</script>
<template>
	<div>{{ JSON.stringify(registry) }}</div>
</template>
