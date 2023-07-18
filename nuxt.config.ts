// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: true },
	modules: ['@nuxtjs/tailwindcss', '@nuxtjs/google-fonts'],
	srcDir: 'src/',
	googleFonts: {
		download: true,
		families: { Inter: true },
		useStylesheet: true,
	},
	app: { head: { htmlAttrs: { class: 'dark' } } },
	experimental: { typedPages: true },
})
