/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./templates/**/*.{html,js,twig}",
    "./css/*",
    "./js/*"
  ],
  theme: {
    extend: {},
  },
  plugins: [
    [
      "postcss-preset-env",
      {
        // Options
      },
    ],
  ],

}
