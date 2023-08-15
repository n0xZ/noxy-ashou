<script setup lang="ts">
	import { Registry } from '@prisma/client'

	type Props = {
		registries: Registry[]
		projectId:string;
	}
	defineProps<Props>()
</script>
<template>
	<section class="grid w-full grid-rows-3 mx-auto mt-10 gap-9">
		<RegistryItem
			v-for="registry in registries"
			:key="registry.id"
			:registry="registry"
			:project-id="projectId"
		/>
	</section>
</template>
