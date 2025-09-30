/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],   // 👈 scans all HTML & JS in your root
  theme: {
    extend: {
      colors: {
        beige: "#f6f4f0",       // 👈 adds your custom beige color
      },
    },
  },
  plugins: [],
}
