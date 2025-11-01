/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ranchBrown: "#5C4033",
        ranchGold: "#C19A6B",
        ranchOlive: "#708238",
        ranchIvory: "#F8F3E7",
        ranchCoal: "#1C1C1C",
      },
      backgroundImage: {
        "wood-dark": "linear-gradient(145deg, rgba(193,154,107,0.06), rgba(0,0,0,0.25)), radial-gradient(100% 100% at 0% 0%, rgba(255, 120, 0, 0.10), transparent 60%), radial-gradient(100% 100% at 100% 100%, rgba(255, 50, 0, 0.08), transparent 60%)",
      },
      fontFamily: {
        display: ["Georgia", "serif"],
        body: ["ui-sans-serif", "system-ui", "Segoe UI", "Roboto", "Helvetica", "Arial", "Noto Sans", "sans-serif"],
      }
    },
  },
  plugins: [],
}
