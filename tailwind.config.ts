import type { Config } from "tailwindcss";
import { nextui } from "@nextui-org/react";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // backgroundImage: {
      // 	"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      // 	"gradient-conic":
      // 		"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      // },
      boxShadow: {
        inputHover: "0 0 32px rgba(99, 60, 255, 0.25)",
        cardShadow: "0 0 32px rgba(0,0,0,0.10)",
      },
    },
    colors: {
      purple: "#633CFF",
      purpleHover: "#BEADFF",
      grey: "#737373",
      red: "#FF3939",
      borders: "#D9D9D9",
      lightPurple: "#EFEBFF",
      lightGrey: "#FAFAFA",
      darkGrey: "#333333",
      white: "#ffffff",
      github:"#1A1A1A",
      facebook:"#1877F2",
      linkedin:"#2D68FF",
      youtube:"#EE3939",
      mentor:"#3e54a3"
    },
  },
  darkMode: "class",
  plugins: [
    nextui({
      themes: {
        light: {
          colors: {
            primary: "#633CFF",
            danger: "#FF3939",
          },
        },
      },
    }),
  ],
};
export default config;
