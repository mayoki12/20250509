/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',   // App Router 用
    './components/**/*.{js,ts,jsx,tsx}',   // コンポーネント用
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

