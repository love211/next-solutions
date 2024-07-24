/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "320px", // Extra small devices (e.g., iPhone SE)
        sm: "375px", // Small devices (e.g., iPhone 6/7/8)
        md: "425px", // Medium devices (e.g., large smartphones)
        // Large devices (e.g., small tablets)
        lg: "768px", // Extra large devices (e.g., tablets)
        xl: "1024px",
        "2xl": "1440px",
        // 2x Extra large devices (e.g., small laptops)
      },
    },
  },
  plugins: [],
};
