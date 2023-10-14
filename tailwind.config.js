/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#4f46e5",

          secondary: "#a4d666",

          accent: "#155b87",

          neutral: "#22182b",

          "base-100": "#f3f4f6",

          info: "#22d3ee",

          success: "#22c55e",

          warning: "#f59e0b",

          error: "#fa1420",
        },
      },
    ],
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
};
