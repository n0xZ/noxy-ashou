import { LighthouseAPIResult, Audits } from '@/types'
import { RegistryOutput } from '@/utils/valibot'
export const useCreateRegistry = (id: string) => {
	const router = useRouter()

	async function create({ siteUrl }: { siteUrl: string; projectId: string }) {
		const pagedSpeedInsightRes = await fetch(
			`'https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${siteUrl}`
		)
		const data = (await pagedSpeedInsightRes.json()) as {
			apiResponse: LighthouseAPIResult
		}
		data.apiResponse.lighthouseResult.audits.metrics
		const { audits } = data.apiResponse.lighthouseResult
		const parsedLighthouseScore: RegistryOutput = {
			ttiScore: audits.interactive.displayValue,
			blockingTimeScore: audits['total-blocking-time'].displayValue,
			clsScore: audits['cumulative-layout-shift'].displayValue,
			fcpScore: audits['first-contentful-paint'].displayValue,
			lcpScore: audits['largest-contentful-paint'].displayValue,
			siScore: audits['speed-index'].displayValue,
		}
		const apiRes = await $fetch('/api/v1/project/registry', {
			body: JSON.stringify(parsedLighthouseScore),
			method: 'POST',
			responseType: 'json',
		})
	}
	return { create }
}
