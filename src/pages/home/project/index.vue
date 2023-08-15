<script setup lang="ts">

useSeoMeta({title:"Webmetrics | Projects"})
</script>
<template>
	<main
		class="flex flex-col justify-center w-full h-full max-w-2xl space-y-3 sm:min-h-screen"
	>
		<h2
			class="pb-2 mb-4 text-3xl font-semibold tracking-tight text-center transition-colors border-b scroll-m-20 first:mt-0"
		>
			Welcome to your project lists!
		</h2>
		<UiParagraph
			>These projects can contain different registries based on Lighthouse
			Auditories, where you can analyze each one of them, in order to fullfit a
			full-time web performance scan.</UiParagraph
		>
		<UiParagraph class="text-center">
			If you'd like to start creating a project.
			<NuxtLink to="/home/project/create" class="underline"
				>Click over here.</NuxtLink
			>
		</UiParagraph>
	</main>
</template>
