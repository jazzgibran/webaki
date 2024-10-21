import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'midnavy': '#134b70',
        'navy': '#201e43',
        'tosca':'#508c9b',
        'cyan':'#9bebff'
      },
      fontFamily: {
        mont: ["var(--font-mont)"],
      },
    },
  },
  plugins: [],
};
export default config;
