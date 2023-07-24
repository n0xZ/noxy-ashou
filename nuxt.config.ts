// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: true },
	modules: ['@nuxtjs/google-fonts', '@sidebase/nuxt-auth'],
	googleFonts: {
		download: true,
		families: { Inter: true },
		useStylesheet: true,
	},
	auth: {
		enableGlobalAppMiddleware: true,
	},
	srcDir: 'src/',
	postcss: { plugins: { tailwindcss: {}, autoprefixer: {} } },
	alias: { '~/*': './src/*' },
	css: ['~/assets/css/tailwind.css'],
	app: {
		head: {
			htmlAttrs: { class: 'dark' },
			bodyAttrs: { class: 'dark:bg-[#171717] dark:text-[#fafaf9]' },
		},
		pageTransition: { name: 'page', mode: 'out-in' },
	},
	experimental: { typedPages: true },
})
