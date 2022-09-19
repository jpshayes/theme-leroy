/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./templates/**/*.{html,js,twig,php}",
    "./css/*",
    "./js/*"
  ],
  theme: {
    extend: {},
  },
  plugins: [
    ["postcss-preset-env",{},],
    require('@tailwindcss/forms'),
  ],

}
