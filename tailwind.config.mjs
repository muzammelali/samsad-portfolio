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
		  Montserrat: ["Montserrat", "sans-serif"],
		  Poppins: ["Poppins", "sans-serif"],
		},
		aria: {
		  current: 'current="page"',
		},
		colors: {
		  bgm: "#212121",
		  bgm2 : "#E11D48",
		  bgm3 : "#292A2B",
		  pmb: "#196BE9",
		  pmg: "#34A064",
		  pmr: "#E11D48",
		  pmo : "E0442C",
		  textHover : "#cbcbcb",
		},
	  },
	},
	plugins: [],
  };