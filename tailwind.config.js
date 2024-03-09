/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	important: '#root',
	theme: {
		extend: {
			fontSize: {
				'3.5xl': '32px'
			}
		}
	},
	corePlugins: {
		// Remove the Tailwind CSS preflight styles so it can use Material UI's preflight instead (CssBaseline).
		preflight: false
	},
	plugins: []
};
