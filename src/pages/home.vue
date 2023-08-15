<script setup lang="ts">
	definePageMeta({ auth: true })
	const route = useRoute()
	const isRouteOnProjectPath = computed(() =>
		route.path.includes('/home/project')
	)
</script>

<template>
	<div>
		<header class="p-5 border-b-2">
			<nav
				class="container flex flex-row items-center justify-between max-w-4xl mx-auto"
			>
				<NuxtLink to="/home/project" v-if="isRouteOnProjectPath">Projects</NuxtLink>
				<NuxtLink to="/home" v-else>Home</NuxtLink>
				<ul class="flex flex-row items-center space-x-4">
					<li>
						<ClientOnly>
							<UiThemeSwitcher />
						</ClientOnly>
					</li>
					<li><HomeMenubar /></li>
				</ul>
			</nav>
		</header>

		<NuxtPage />
	</div>
</template>
