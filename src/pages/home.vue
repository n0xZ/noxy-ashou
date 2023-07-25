<script setup lang="ts">
	definePageMeta({ auth: true })
</script>

<template>
	<div>
		<header class="p-5">
			<nav
				class="container flex flex-row items-center justify-between max-w-4xl mx-auto"
			>
				<NuxtLink to="/home">Home</NuxtLink>
				<HomeMenubar />
			</nav>
		</header>

		<NuxtPage />
	</div>
</template>
