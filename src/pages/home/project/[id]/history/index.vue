<script setup lang="ts">
	const route = useRoute('home-project-id-history')
	const id = route.params.id
	const { data } = await useGetRegistriesByProjectId(id)
	console.log(data.value)
</script>
<template>
	<main
		class="container w-full h-full max-w-5xl mx-auto mt-3 rounded-md shadow-sm bg-background"
	>
		<section v-for="registry in data">
			<time :datetime="new Date(registry.createdAt).toString()">{{
				new Date(registry.createdAt).toString()
			}}</time>
			<p>{{ registry.id }}</p>
		</section>
		<div>{{ JSON.stringify(data) }}</div>
	</main>
</template>
