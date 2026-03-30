/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#E63027',
        'primary-container': '#DF2B23',
        'on-primary': '#FFFFFF',
        'on-surface': '#1A1F36',
        'on-surface-variant': '#555555',
        'surface': '#FFFFFF',
        'surface-container': '#F5F5F5',
        'surface-container-low': '#FFF5F5',
        'outline-variant': '#EEEEEE',
        'on-secondary-fixed': '#1A1F36',
        'star-gold': '#FFC107',
        'secondary': '#585d77',
      },
      fontFamily: {
        headline: ['"Plus Jakarta Sans"', 'sans-serif'],
        body: ['Manrope', 'sans-serif'],
      },
      borderRadius: {
        DEFAULT: '1rem',
        sm: '8px',
        lg: '2rem',
        xl: '3rem',
        full: '9999px',
      },
      maxWidth: {
        site: '1280px',
      },
    },
  },
  plugins: [],
}
