import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "website-background-black": "#0c0c0c",
      },
      animation: {
        custom:
          "custome-animation-for-sections .6s cubic-bezier(0.2, 0.6, 0.2, 0.1) forwards",
      },
      screens: {
        max767px: "767px",
      },
      spacing: {
        "5%": "5%",
        "75%": "75%",
        "10%": "10%",
      },
      zIndex: {
        "999": "999",
      },
    },
  },
  variants: {
    extends: {
      animation: ["hover", "focus"],
    },
  },
  plugins: [],
};
export default config;
