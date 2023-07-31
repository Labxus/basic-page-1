/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
		'./public/**/*.svg'
	],

	theme: {
		extend: {
			colors:{
				'titleColor' : '#203F71',
				'twoTitleColor' : '#1CB9C8',
				'bgColor': '',
				'btnColor' : '#203F71'
			},
		},
	},
	plugins: [],
}
