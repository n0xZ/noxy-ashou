// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: true },
	modules: [
		'@nuxtjs/tailwindcss',
		'@nuxtjs/google-fonts',
		'@sidebase/nuxt-auth',
	],
	srcDir: 'src/',
	alias: { '~/*': './src/*' },
	googleFonts: {
		download: true,
		families: { Inter: true },
		useStylesheet: true,
	},
	app: {
		head: {
			htmlAttrs: { class: 'dark' },
			bodyAttrs: { class: 'dark:bg-[#171717] dark:text-[#fafaf9]' },
		},
	},
	experimental: { typedPages: true },
})
