/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
	  extend: {
		container: {
		  center: "true",
		  padding: "1rem",
		},
		fontFamily: {
		  sans: ["Lexend", "sans-serif"],
		},
		aria: {
		  current: 'current="page"',
		},
		colors: {
		  bgm: "#212121",
		  bgm2 : "#E11D48",
		  pmb: "#196BE9",
		  pmg: "#34A064",
		  pmr: "#E11D48",
		  pmo : "E0442C",
		},
	  },
	},
	plugins: [],
  };