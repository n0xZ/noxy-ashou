<script setup lang="ts">
	const { data } = await useGetProjects()
	const { signOut } = useAuth()
</script>

<template>
	<div class="h-full ">
		<section class="hidden h-full xl:flex lg:flex md:flex xl:flex-row">
			<article class="flex flex-col justify-between h-full min-h-screen border-r-2 w-96">
				<div class="flex flex-col justify-center w-full h-full space-y-1">
					<h1 class="mx-4 mt-2 text-lg font-bold text-center">Recent projects</h1>
					<ProjectSidebarList
						v-if="data && data.projects"
						:projects="data.projects"
					/>
					<h2 v-else>There's no projects created at the moment.</h2>
				</div>
				<div
					class="container flex flex-col justify-center w-full mx-auto mb-3 space-y-5"
				>
					<NuxtLink
						to="/home"
						class="flex flex-row items-center justify-start w-full p-5 space-x-5 text-base font-medium duration-100 ease-in-out rounded-md hover:bg-primary/10"
					>
						<Icon name="material-symbols:arrow-back" class="w-6 h-6" />
						<span>Return back</span></NuxtLink
					>
					<NuxtLink
						to="/home/project/create"
						class="flex flex-row items-center justify-start w-full p-5 space-x-5 text-base font-medium duration-100 ease-in-out rounded-md hover:bg-primary/10"
						active-class="text-white bg-primary hover:bg-primary/80"
					>
						<Icon name="material-symbols:assignment-add" class="w-6 h-6" />
						<span>New project</span></NuxtLink
					>
					<NuxtLink
						to="/home/project/historial"
						class="flex flex-row items-center justify-start w-full p-5 space-x-5 text-base font-medium duration-100 ease-in-out rounded-md hover:bg-primary/10"
						active-class="text-white bg-primary"
					>
						<Icon name="material-symbols:list-alt" class="w-6 h-6" />
						<span>View historial</span>
					</NuxtLink>

					<button
						class="inline-flex items-center justify-start p-5 space-x-5 text-base font-medium transition-colors rounded-md ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90"
						@click="signOut({ callbackUrl: '/' })"
					>
						<Icon name="material-symbols:logout" class="w-6 h-6" />
						<span>Logout</span>
					</button>
				</div>
			</article>

			<article class="w-full h-full min-h-screen place-items-center bg-secondary dark:bg-secondary/10">
				<div
					class="container grid w-full h-full max-w-6xl mx-auto mt-4 rounded-md shadow-sm place-items-center bg-background"
				>
					<NuxtPage />
				</div>
			</article>
		</section>
		<section class="relative h-screen xl:h-full xl:hidden lg:hidden">
			<NuxtPage />
		</section>
	</div>
</template>
