/** @type {import('tailwindcss').Config} */

const config = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{ts,tsx}", // required for Shadcn
  ],
  theme: {
    extend: {},
  },
  plugins: [
    // require("@heathmont/moon-core-tw/lib/es/private/presets/ds-moon-preset"),
    require("./assets/js/moon-base-preset"),
  ],
};
export default config;
