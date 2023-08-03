/** @type {import('tailwindcss').Config} */
import colors from "tailwindcss/colors";

export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		screens: {
			xs: "280px",
			sm: "480px",
			md: "768px",
			lg: "976px",
			xl: "1440px",
		},
		colors: {
			primaryRed: "#FF3373",
			primaryBlue: "#001FFF",
			lightGray: "#F0F1F2",
			neutralGray: "#5F666D",
			...colors,
		},
		extend: {
			fontFamily: { inter: ["Inter", "sans-serif"] },
			boxShadow: {
				rightShadow: "-1px 61px 28px 0px rgba(0, 0, 0, 0.07), 2px 10px 10px 0px rgba(0, 0, 0, 0.06)",
			},
		},
	},
	plugins: [],
};
