/** @type {import('tailwindcss').Config} */

const { fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
   content: [
      './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
      './src/components/**/*.{js,ts,jsx,tsx,mdx}',
      './src/app/**/*.{js,ts,jsx,tsx,mdx}',
   ],
   darkMode: 'class',
   theme: {
      extend: {
         dropShadow: {
            'l': '0 0 0 5vw rgba(0, 0, 0, 0.25)',
            'xl': '1px 1px 1px rgba(0, 0, 0, 0.25)',
            '3xl': '0 35px 35px rgba(0, 0, 0, 0.25)',
            '4xl': [
               '8px -5px 15px rgba(51, 51, 51, 0.75)',
            ]
         },
         blur: {
            xs: '1px',
         },
         fontFamily: {
            mont: ['var(--font-mont)', ...fontFamily.sans],
            atrament: ['Atrament', 'sans-serif'],
         },
         colors: {
            dark: "#000000",
            light: "#f5f5f5",
            custom: "#210303",
            customTwo: "#add8e6",
            customThree: "#d0dde2",
            primary: "#B63E96", // 240,86,199
            primaryDark: "#58E6D9", // 80,230,217
         },
         animation: {
            'spin-slow': 'spin 8s linear infinite',
            tilt: "tilt 5s linear infinite",
            shine: "shine 1s",
            pulse: "pulse 4.5s cubic-bezier(0.4, 0, 0.6, 1) infinite",
         },
         backgroundImage: {
            'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
            'gradient-conic':
               'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            circularLight:
               "repeating-radial-gradient(rgba(0,0,0,0.4) 2px,#add8e6 5px,#add8e6 100px)",

            circularDark:
               "repeating-radial-gradient(rgba(255,255,255,0.5) 2px,#1b1b1b 8px,#1b1b1b 100px)",

            circularLightLg:
               "repeating-radial-gradient(rgba(0,0,0,0.4) 2px,#add8e6 5px,#add8e6 80px)",

            circularDarkLg:
               "repeating-radial-gradient(rgba(255,255,255,0.5) 2px,#1b1b1b 8px,#1b1b1b 80px)",

            circularLightMd:
               "repeating-radial-gradient(rgba(0,0,0,0.4) 2px,#add8e6 5px,#add8e6 60px)",

            circularDarkMd:
               "repeating-radial-gradient(rgba(255,255,255,0.5) 2px,#1b1b1b 6px,#1b1b1b 60px)",

            circularLightSm:
               "repeating-radial-gradient(rgba(0,0,0,0.4) 2px,#add8e6 5px,#add8e6 40px)",

            circularDarkSm:
               "repeating-radial-gradient(rgba(255,255,255,0.5) 2px,#1b1b1b 4px,#1b1b1b 40px)",
         },
         keyframes: {
            shine: {
               "100%": { left: "125%" },
            },
            tilt: {
               "0%, 50%, 100%": {
                  transform: "rotate(40deg)",
               },
               "25%": {
                  transform: "rotate(35deg)",
               },
               "75%": {
                  transform: "rotate(-35deg)",
               },
            },
            pulse: {
               "0%, 100%": {
                  opacity: "1",
               },
               "50%": {
                  opacity: ".5",
               }
            }
         },
      },
      screens: {
         "3xl": { max: "1901px" },
         // => @media (max-width: 1901px) { ... }

         "2xl": { max: "1535px" },
         // => @media (max-width: 1535px) { ... }

         xl: { max: "1279px" },
         // => @media (max-width: 1279px) { ... }

         lg: { max: "1023px" },
         // => @media (max-width: 1023px) { ... }

         md: { max: "767px" },
         // => @media (max-width: 767px) { ... }

         sm: { max: "639px" },
         // => @media (max-width: 639px) { ... }

         xs: { max: "479px" },
         // => @media (max-width: 479px) { ... }
      },
   },
   plugins: [],
};
