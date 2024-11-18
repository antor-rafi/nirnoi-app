/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // Enable class-based dark mode
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Include all source files
    "./index.html",              // Include the HTML entry point
  ],
  theme: {
    extend: {
      colors: {
        primary: '#4F46E5', // Indigo
        backgroundDark: '#1F2937', // Dark background
        textDark: '#E5E7EB', // Light text for dark mode
        cardDark: '#374151', // Card background for dark mode
        success: '#10B981', // Success green
        warning: '#F59E0B', // Warning yellow
        danger: '#EF4444', // Error red
      },
      boxShadow: {
        'dark-md': '0 4px 6px -1px rgba(0, 0, 0, 0.8), 0 2px 4px -2px rgba(0, 0, 0, 0.7)', // Shadow for dark mode
      },
      typography: (theme) => ({
        dark: {
          css: {
            color: theme('colors.textDark'),
            a: { color: theme('colors.primary') },
            h1: { color: theme('colors.textDark') },
            h2: { color: theme('colors.textDark') },
            h3: { color: theme('colors.textDark') },
            blockquote: {
              color: theme('colors.textDark'),
              borderLeftColor: theme('colors.primary'),
            },
          },
        },
      }),
    },
  },
  plugins: [
    require('@tailwindcss/forms'), // Better form styling
    require('@tailwindcss/typography'), // Typography plugin for rich text
    require('@tailwindcss/aspect-ratio'), // Maintain aspect ratios for images/videos
  ],
};
