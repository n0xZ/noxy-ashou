<script setup lang="ts">
	definePageMeta({ auth:false})
	useSeoMeta({ title: 'Iniciar sesión en Ashou' })
	const { signIn } = useAuth()
	const runtime = useRuntimeConfig()
	const callbackUrl = runtime.app.baseURL + 'home'
</script>

<template>
	<main class="container grid h-screen max-w-3xl mx-auto place-items-center">
		<section
			class="grid w-full p-3 rounded-md shadow-md h-3/5 bg-gray-100/20 place-items-center"
		>
			<button
				type="button"
				title="Ingresar a Ashou desde Github"
				class="inline-flex items-center self-center justify-center w-full p-3 text-sm font-medium transition-colors rounded-md shadow bg-primary text-primary-foreground hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
				@click="
					signIn('github', {
						callbackUrl,
					})
				"
			>
				<span>Iniciar sesión desde Github</span>
			</button>
		</section>
	</main>
</template>
