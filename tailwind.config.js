/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-cornice': `
          linear-gradient(to right, hsl(0 0% 0%) -70%, transparent 15%),
          linear-gradient(to left, hsl(0 0% 0%) -70%, transparent 15%),
          linear-gradient(to bottom, hsl(0 0% 0%) -70%, transparent 15%),
          linear-gradient(to top, hsl(0 0% 0%) -70%, transparent 15%)
        `,
      },
    },
  },
  plugins: [],
};
