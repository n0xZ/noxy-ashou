<script setup lang="ts">
	import { Project } from '@prisma/client'
	defineProps<{ projects: Project[] }>()
</script>

<template>
	<aside class="grid h-full grid-rows-3 mt-6 overflow-y-auto place-items-center ">
		<div
			v-for="item in projects"
			class="container flex flex-row items-center justify-between w-full p-3 mx-auto text-sm border-b-2"
		>
			<div class="flex flex-col justify-center">
				<h2 class="font-semibold">{{ item.name }}</h2>
				<a
					:href="item.siteUrl"
					target="_blank"
					rel="noreferrer"
					class="text-xs underline opacity-80"
					>{{ item.siteUrl }}</a
				>
			</div>
			<div class="flex flex-row items-center space-x-3">
				
				<NuxtLink :to="`/home/project/${item.id}`" :title="`View ${item.name}`">
					<Icon name="uil:external-link-alt" class="w-5 h-5 hover:opacity-80" />
				</NuxtLink>
			</div>
		</div>
	</aside>
</template>
