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
        "slow-move": "backtrack duration-500",
      },
      transitionTimingFunction: {
        backtrack: "cubic-bezier(0.2, 0.6, 0.2, 1)",
      },
      transitionDuration: {
        "0.6s": "0.6s",
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
    fontFamily: {
      semibold: ["Semibold"],
    },
    lineHeight: {
      h1LineHeight: "110%",
    },
    letterSpacing: {
      negative2px: "-2px",
    },
    fontSize: {
      h1FontSize: "18vmin",
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
