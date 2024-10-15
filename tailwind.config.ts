import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "lightpurple":"rgb(102, 108, 255)",
        "darkpurple":"rgb(48, 51, 78)",
        "borderpurple":"rgba(234, 234, 255, 0.12)",
        "primarygreen":"rgb(114, 225, 40)",
        "submenu":"rgba(234, 234, 255, 0.38)",
        "togglepurple":"rgb(120, 126, 255)",
        "report-bg":"#30334E",
        "sub-text":"#EAEAFE99"
      },
    },
  },
  plugins: [],
};
export default config;