/** @type {import('tailwindcss').Config} */

export default {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx,}",
    './node_modules/preline/preline.js',
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('preline/plugin'),
    require('flowbite/plugin')
  ],
}

