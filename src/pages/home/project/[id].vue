<script setup lang="ts">
	const route = useRoute('home-project-id')
	const id = route.params.id
	const router = useRouter()
	const { data } = await useGetProjectById(id)
	onMounted(() => {
		if (!data.value || !data.value.existingProject) {
			router.push('/home')
		}
	})
	useSeoMeta({
		title: `Ashou | Proyecto actual: ${data?.value?.existingProject?.name}`,
	})
</script>
<template>
	<div>{{ data?.existingProject?.name }}</div>
</template>
