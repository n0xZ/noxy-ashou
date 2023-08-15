<script setup lang="ts">
	defineProps<{ status: 'success' | 'error' | 'warning' }>()
</script>
<template>
	<template v-if="status === 'success'">
		<Icon
			name="carbon:checkmark-filled"
			class="self-center w-10 h-10 text-emerald-500"
		/>
	</template>
	<template v-else-if="status === 'warning'">
		<Icon
			name="carbon:warning-filled"
			class="self-center w-10 h-10 text-amber-500"
		/>
	</template>
		<template v-else>
		<Icon
			name="carbon:error-filled"
			class="self-center w-10 h-10 text-red-500"
		/>
	</template>
</template>
