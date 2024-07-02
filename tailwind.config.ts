import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "verido-green": "#08A730",
        "gray-text": "#636E72",
        "light-green": "#EBFAEE",
        "black-light": "#2D3436",
        danger: "#FF0022",
        "light-gray": "#AEAEB2",
        "verido-orange": "#FF9500",
        "gray-body": "#F0F3F5",
        "active-green": "#EBFAFA",
        "verido-blue": "#0010F7",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
