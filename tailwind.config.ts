import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        "verido-green": "#08A730",
        "gray-text": "#636E72",
        "light-green": "#EBFAEE",
        "black-light": "#2D3436",
        danger: "#FF0022",
        "light-danger":'#FCE8EC',
        "light-gray": "#AEAEB2",
        "verido-orange": "#FF9500",
        "light-orange":'#FCF6E8',
        "gray-body": "#F0F3F5",
        "active-green": "#EBFAFA",
        "verido-blue": "#0010F7",
        "verido-white": "#FFFFFF",
        "verido-light-blue": "#F7FAFC",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
