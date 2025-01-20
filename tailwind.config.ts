import type { Config } from "tailwindcss";
import aspectRatioPlugin from "@tailwindcss/aspect-ratio";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: {
          primary: {
            light: "#EEECEC",
            dark: "#292929",
          },
          secondary: {
            light: "#D9D9D9",
            dark: "#525151",
          },
        },
        text: {
          primary: {
            light: "#002966",
            dark: "#A8E8DE",
          },
          secondary: {
            light: "#3E71F3",
            dark: "#FFFFFF",
          },
        },
      },
    },
  },
  plugins: [aspectRatioPlugin],
} satisfies Config;
