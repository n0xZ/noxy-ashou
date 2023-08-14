<script setup lang="ts">
	const route = useRoute('home-project-id-history')
	const router = useRouter()
	const id = route.params.id

	const navigateBackward = () => router.go(-1)
	const { data } = await useGetRegistriesByProjectId(id)
</script>
<template>
	<main class="w-full h-full mt-3">
		<aside class="flex flex-row items-center p-5 mb-3 space-x-1">
			<Icon
				name="carbon:arrow-left"
				class="duration-100 ease-in-out w-7 h-7 hover:cursor-pointer hover:opacity-70"
				@click="navigateBackward"
			/>
		</aside>
		<div
			class="container grid w-full h-full max-w-4xl mx-auto space-y-1 place-items-center"
		>
			<h2
				class="pb-2 mb-4 text-3xl font-semibold tracking-tight text-center transition-colors border-b scroll-m-20 first:mt-0"
			>
				Registry list
			</h2>
			<RegistryList
				v-if="data && data.length"
				:registries="data"
				:project-id="id"
			/>
			<RegistryEmpty v-else :project-id="id" />
		</div>
	</main>
</template>
