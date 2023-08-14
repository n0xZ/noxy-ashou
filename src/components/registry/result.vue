<script setup lang="ts">
	type Props = {
		metric: string
		label: string
	}
	const props = defineProps<Props>()
	const { resultStatus } = useMetricStatus(props.metric)
	const metricStyles = ` text-sm text-center ${
		resultStatus.value === 'success'
			? 'text-emerald-500'
			: resultStatus.value === 'warning'
			? 'text-amber-500'
			: 'text-red-500'
	}`
</script>
<template>
	<aside class="flex flex-col justify-center h-48 space-y-1">
		<RegistryResultIcon :status="resultStatus" />
		<UiParagraph class="text-center">{{ label }}</UiParagraph>
		<p :class="metricStyles">{{ metric }}</p>
	</aside>
</template>
