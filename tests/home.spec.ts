import { expect, test } from '@playwright/test'

test.describe('Home private test integration', () => {
	test('Should redirect if user is not logged in', async ({ page }) => {
		await page.goto('./login')

		expect(page.url()).toContain('/login')
	})
})
