<script setup lang="ts">
	definePageMeta({
		auth: false,
	})
	useSeoMeta({ title: 'Welcome to Webmetrics!' })
</script>

<template>
	<div>
		<header class="p-5">
			<nav
				class="container flex flex-row items-center justify-between max-w-2xl mx-auto"
			>
				<NuxtLink to="/">Webmetrics</NuxtLink>
				<NuxtLink to="/login" class="underline opacity-60" >Sign in</NuxtLink>
			</nav>
		</header>
		<main
			class="container flex flex-col justify-center h-screen max-w-4xl mx-auto space-y-2 text-center"
		>
			<h1 class="text-4xl font-extrabold tracking-tight scroll-m-20 lg:text-5xl">
				Optimize <span class="text-sky-500">web metrics</span> with Webmetrics
			</h1>
			<UiParagraph class="opacity-90">
				With Webmetrics, you can define a web page registry, that contains web page
				metrics, and then you can compare each registry.
			</UiParagraph>
			<NuxtLink
				to="/login"
				class="inline-flex items-center self-center justify-center w-full p-3 text-sm font-medium transition-colors rounded-md shadow bg-primary text-primary-foreground hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
				>Get started!</NuxtLink
			>
		</main>
	</div>
</template>
