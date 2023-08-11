<script setup lang="ts">
	const route = useRoute('home-project-id-registry-registryId')
	const registryId = route.params.registryId
	const router = useRouter()
	const navigateBackward = () => router.go(-1)

	const { data: registry } = await useGetRegistryById(registryId)
	useSeoMeta({ title: 'Ashou - View registry results' })
</script>
<template>
	<main
		class="flex flex-col justify-center w-full h-full max-w-4xl space-y-1 sm:min-h-screen"
	>
		<aside class="flex flex-row items-center p-5 mb-3 space-x-1">
			<Icon
				name="carbon:arrow-left"
				class="duration-100 ease-in-out w-7 h-7 hover:cursor-pointer hover:opacity-70"
				@click="navigateBackward"
			/>
		</aside>
		<h2
			class="pb-2 text-3xl font-semibold tracking-tight text-center transition-colors border-b scroll-m-20 first:mt-0"
		>
			Registry results
		</h2>
		<article class="grid w-full h-full grid-cols-2" v-if="registry">
			<RegistryResult
				label="Largest contentful paint"
				:metric="registry.lcpScore"
			/>
			<RegistryResult label="First contentful paint" :metric="registry.fcpScore" />
			<RegistryResult
				label="Cumulative layout shift"
				:metric="registry.clsScore"
			/>
			<RegistryResult label="Speed index" :metric="registry.siScore" />
			<RegistryResult
				label="Total blocking time"
				:metric="registry.blockingTimeScore"
			/>
			<RegistryResult label="Time to interactive" :metric="registry.ttiScore" />
		</article>
		<aside class="p-5 border-t-2 border-primary/5">
			<UIParagraph class="text-center">
				For more information about these metrics, you can check
				<a href="https://web.dev/tags/performance/" class="underline">this out</a>
			</UIParagraph>
		</aside>
	</main>
</template>
