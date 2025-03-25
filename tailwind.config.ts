/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      // padding: '2rem',
      screens: {
        '2xl': '1440px'
      }
    },
    extend: {
      colors: {
        primary: '#A554E6', // Replace this with your desired color code
      },
    },
  },
  // eslint-disable-next-line @typescript-eslint/no-require-imports
<<<<<<< HEAD

=======
  plugins: [],
>>>>>>> d00c83c1226153c07d06c563ae39585868797175

}

