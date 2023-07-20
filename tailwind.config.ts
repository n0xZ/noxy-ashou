import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'

export default <Partial<Config>>{
	darkMode: 'class',
	theme: {
		...defaultTheme,
		extend: {
			fontFamily: {
				inter: 'Inter',
			},
		},
	},
	plugins: [require('tailwindcss-animate')],
}
