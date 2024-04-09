/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		fontFamily: {
			josefin: ['Josefin Sans', 'sans-serif'],
		},
		extend: {
			backgroundImage: {
				main: "url('/background.jpg')",
			},
		},
	},
	plugins: [],
};
