/** @type {import('tailwindcss').Config} */
module.exports = {
 content: [


    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: ["light",  "emerald", "corporate"],
  },
  plugins: [require("daisyui")],
}
