<script setup lang="ts">
	definePageMeta({ auth: true })
	const route = useRoute()
	const isRouteOnProjectPath = computed(() =>
		route.path.includes('/home/project')
	)
</script>

<template>
	<div>
		<header class="p-5 ">
			<nav
				class="container flex flex-row items-center justify-between max-w-4xl mx-auto"
			>
				<NuxtLink to="/home/project" v-if="isRouteOnProjectPath">Projects</NuxtLink>
				<NuxtLink to="/home" v-else>Home</NuxtLink>
				<HomeMenubar />
			</nav>
		</header>

		<NuxtPage />
	</div>
</template>
