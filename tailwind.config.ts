import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        plum: {
          DEFAULT: "#3D2B4C",
          50: "#f5f0f8",
          100: "#e8ddf0",
          200: "#d4bee3",
          300: "#b690cd",
          400: "#9561b5",
          500: "#7a3f9c",
          600: "#633082",
          700: "#4e2468",
          800: "#3D2B4C",
          900: "#2a1e36",
        },
        surface: "#FAF9FA",
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        clash: ["var(--font-clash)", "serif"],
        sans: ["var(--font-dm-sans)", "DM Sans", "sans-serif"],
      },
      animation: {
        float: "float 3s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(-10px)" },
          "50%": { transform: "translateY(10px)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
