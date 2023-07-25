<script setup lang="ts">
	definePageMeta({
		auth: false,
	})
	useSeoMeta({ title: 'Bienvenid@ a Ashou!' })
</script>

<template>
	<header class="p-5">
		<nav
			class="container flex flex-row items-center justify-between max-w-2xl mx-auto"
		>
			<NuxtLink to="/">Ashou</NuxtLink>
			<NuxtLink to="/login">Iniciar sesión</NuxtLink>
		</nav>
	</header>
	<main
		class="container flex flex-col justify-center h-screen max-w-4xl mx-auto space-y-2 text-center"
	>
		<h1
			className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl"
		>
			Medí el rendimiento de tu página web de manera<span class="text-sky-500">
				rápida y eficiente.</span
			>
		</h1>
		<UiParagraph class="opacity-90">
			En ashou, vas a poder registrar tus proyectos de páginas web, y realizar
			auditorías de rendimiento basado en lighthouse.
		</UiParagraph>
	</main>
</template>
