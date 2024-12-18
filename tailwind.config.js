/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
         screens: {
      'xxs':'330px',  
      'xs':'400px',
      'sm': '640px',
      'md': '768px',
      'lg': '900px',
      "xl": '1024px',
      "2xl": '1280px',
    }
  },
  plugins: [],
};
