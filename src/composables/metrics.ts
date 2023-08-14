export const useMetricStatus = (metric: string) => {
	const isMiliseconds = metric.trim().includes('ms')
	const isSeconds = metric.trim().includes('s')

	const resultStatus = computed(() => {
		if (isMiliseconds) {
			const parsedMetric = metric.trim().replace('ms', '')
			if (Number(parsedMetric) <= 100) {
				return 'success'
			}
			if (Number(parsedMetric) < 300) {
				return 'warning'
			}
			return 'error'
		} else if (isSeconds) {
			const parsedMetric = metric.trim().replace('s', '')

			if (Math.round(Number(parsedMetric)) >= 1) {
				return 'success'
			}
			if (Math.round(Number(parsedMetric)) >= 5) {
				return 'warning'
			}
			return 'error'
		} else {
			if (Number(metric) >= 0) {
				return 'success'
			}
			return 'error'
		}
	})
	return { resultStatus }
}
