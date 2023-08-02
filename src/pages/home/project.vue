<script setup lang="ts">

	const { data } = await useGetProjects()
</script>

<template>
	<div class="h-screen">
		<section class="hidden h-full xl:flex lg:flex md:flex xl:flex-row">
			<article
				class="container h-full col-start-1 col-end-1 mx-auto border-r-2 shadow-sm w-96"
			>
				<h1 class="mx-4 mt-2 text-lg font-bold text-center">Recent projects</h1>
				<ProjectSidebarList
					v-if="data && data.projects"
					:projects="data.projects"
				/>
				<h2 v-else>There's no projects created at the momento.</h2>
			</article>

			<article class="grid items-center w-full place-items-center">
				<NuxtPage />
			</article>
		</section>
		<section class="relative h-full min-h-screen xl:hidden lg:hidden sm:hidden">
			<aside class="flex flex-row items-center justify-end p-5 border-b-2">
				<span class="self-end">Lista de proyectos</span>
			</aside>
			<NuxtPage />
		</section>
	</div>
</template>
