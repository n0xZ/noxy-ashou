<script setup lang="ts">
	const route = useRoute('home-project-id-registry-registryId')
	const registryId = route.params.registryId
	const { data: registry } = await useGetRegistryById(registryId)
	useSeoMeta({ title: 'Ashou - View registry results' })
</script>
<template>
	<section class="flex flex-col h-full min-h-screen place-items-center">
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
	</section>
</template>
