<script setup lang="ts">
	definePageMeta({
		auth: {
			unauthenticatedOnly: true,
			navigateAuthenticatedTo: '/home',
		},
	})
	useSeoMeta({ title: 'Webmetrics - Sign in' })
	const { signIn } = useAuth()
	const runtime = useRuntimeConfig()
	const callbackUrl = runtime.app.baseURL + 'home'
</script>

<template>
	<main class="container grid h-screen max-w-3xl mx-auto place-items-center">
		<section
			class="flex flex-col justify-center w-full p-3 space-y-3 rounded-md shadow-md h-3/5 bg-gray-100/20"
		>
			<h2
				class="text-4xl font-extrabold tracking-tight text-center scroll-m-20 lg:text-5xl"
			>
				Sign in to Webmetrics!
			</h2>
			<UiParagraph class="text-center"
				>You're close to organize your projects with its web metrics!</UiParagraph
			>
			<button
				type="button"
				title="Ingresar a Webmetrics desde Github"
				class="inline-flex items-center self-center justify-center w-full p-3 space-x-1 text-sm font-medium transition-colors rounded-md shadow bg-primary text-primary-foreground hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
				@click="
					signIn('github', {
						callbackUrl,
					})
				"
			>
				<Icon name="mdi:github" class="w-6 h-6" />
				<span>Sign in via Github</span>
			</button>
		</section>
	</main>
</template>
