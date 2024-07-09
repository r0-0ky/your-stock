import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "preload-logo": "url('../../shared/images/for-preload/logo.svg')",
        "search-icon": "url('../../shared/images/for-input/search.svg')",
      },
      fontFamily: {
        raleway: ["var(--font-raleway)", "sans-serif"],
        aquma: ["var(--font-aquma)", "sans-serif"],
        sfPro: ["var(--font-sf-pro)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
