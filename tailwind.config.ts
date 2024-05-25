
import { nextui } from "@nextui-org/react";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
      },
      colors: {
        primary: "#092C4C"
      }
    },
  },
  darkMode: "class",
  plugins: [
    nextui({
      themes: {
        light: {
          colors: {
            background: "#F3F3F3",
            foreground: "#1F271B",
            focus: "#1F271B",
            primary: {
              50: "#1F271B",
              100: "#1F271B",
              200: "#1F271B",
              300: "#1F271B",
              400: "#1F271B",
              500: "#1F271B",
              600: "#1F271B",
              700: "#1F271B",
              800: "#1F271B",
              900: "#1F271B",

              DEFAULT: "#1F271B",
              foreground: "#F3F3F3",
            },
            secondary: {
              50: "#f2f2f2",
              100: "#e6e6e6",
              200: "#cccccc",
              300: "#b3b3b3",
              400: "#999999",
              500: "#808080",
              600: "#666666",
              700: "#4d4d4d",
              800: "#333333",
              900: "#1a1a1a",
              DEFAULT: "#1F271B",
              foreground: "#F3F3F3",
            },
            success: {
              50: "#e0f8e0",
              100: "#b3f0b3",
              200: "#80e680",
              300: "#4ddc4d",
              400: "#26d326",
              500: "#00c700",
              600: "#00a000",
              700: "#007a00",
              800: "#005300",
              900: "#002d00",
              DEFAULT: "#00c700",
              foreground: "#F3F3F3",
            },
            warning: {
              50: "#fff2e0",
              100: "#ffe0b3",
              200: "#ffcc80",
              300: "#ffb34d",
              400: "#ff9926",
              500: "#ff7f00",
              600: "#cc6600",
              700: "#994d00",
              800: "#663300",
              900: "#331a00",
              DEFAULT: "#ff7f00",
              foreground: "#1F271B",
            },
            danger: {
              50: "#ffe0e0",
              100: "#ffb3b3",
              200: "#ff8080",
              300: "#ff4d4d",
              400: "#ff2626",
              500: "#ff0000",
              600: "#cc0000",
              700: "#990000",
              800: "#660000",
              900: "#330000",
              DEFAULT: "#ff0000",
              foreground: "#F3F3F3",
            },
          }
        },
        dark: {
          colors: {
            background: "#1F271B",
            foreground: "#F3F3F3",
            focus: "#F3F3F3",
            primary: {
              50: "#F3F3F3",
              100: "#F3F3F3",
              200: "#F3F3F3",
              300: "#F3F3F3",
              400: "#F3F3F3",
              500: "#F3F3F3",
              600: "#F3F3F3",
              700: "#F3F3F3",
              800: "#F3F3F3",
              900: "#F3F3F3",
              DEFAULT: "#F3F3F3",
              foreground: "#1F271B",
            },
            secondary: {
              50: "#1a1a1a",
              100: "#333333",
              200: "#4d4d4d",
              300: "#666666",
              400: "#808080",
              500: "#999999",
              600: "#b3b3b3",
              700: "#cccccc",
              800: "#e6e6e6",
              900: "#f2f2f2",
              DEFAULT: "#1F271B",
              foreground: "#F3F3F3",
            },
            success: {
              50: "#002d00",
              100: "#005300",
              200: "#007a00",
              300: "#00a000",
              400: "#00c700",
              500: "#26d326",
              600: "#4ddc4d",
              700: "#80e680",
              800: "#b3f0b3",
              900: "#e0f8e0",
              DEFAULT: "#00c700",
              foreground: "#F3F3F3",
            },
            warning: {
              50: "#331a00",
              100: "#663300",
              200: "#994d00",
              300: "#cc6600",
              400: "#ff7f00",
              500: "#ff9926",
              600: "#ffb34d",
            },
        }
      },
    },
})],
};
export default config;
