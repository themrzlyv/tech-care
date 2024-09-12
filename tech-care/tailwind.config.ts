import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./modules/**/*.{js,ts,jsx,tsx,mdx}",
    "./ui/**/*.{js,ts,jsx,tsx,mdx}",
    "./shared/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        white: "#FFFFFF",
        active: {
          v1: "#D8FCF7",
        },
        primary: {
          main: "#01F0D0",
        },
        blue: {
          light: "#E0F3FA",
        },
        purple: {
          chart: "#F5F0FE",
          main: "#E66FD2",
          dark: "#8C6FE6",
        },
        black: {
          main: "#072635",
          light: "#707070",
        },
        gray: {
          light: "#EDEDED",
          main: "#CBC8D4",
          table: "#F6F7F8",
        },
        pink: {
          light: "#FFE6E9",
          main: "#FFE6F1",
        },
      },
      borderRadius: {
        max: "4.375rem",
        menu: "2.563rem",
      },
      margin: {
        "4.5": "1.125rem",
      },
      height: {
        content: "65rem",
      },
    },
  },
  plugins: [],
};
export default config;
