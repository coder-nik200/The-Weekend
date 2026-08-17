/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Bebas Neue"', 'Impact', 'sans-serif'],
        serif: ['"Playfair Display"', 'serif'],
        mono: ['"DM Mono"', 'monospace'],
      },
      colors: {
        blood: '#c71d24',
        bloodlight: '#e21c26',
        ink: '#060607',
      },
      keyframes: {
        drift: { to: { transform: 'scale(1.04) translate(-.5%,-.7%)' } },
        spin_slow: { to: { transform: 'rotate(360deg)' } },
        blink: { '50%': { opacity: '.15' } },
        eq: { to: { height: '9px' } },
        quotein: { from: { opacity: '0', transform: 'translateY(5px)' }, to: { opacity: '1', transform: 'none' } },
        flicker: { '20%': { opacity: '.3' }, '30%': { opacity: '1' }, '50%': { opacity: '.5' } },
        glitchmove: { '20%': { transform: 'translate(7px,-2px)', filter: 'hue-rotate(40deg) contrast(1.5)' }, '60%': { transform: 'translate(-4px,1px)' } },
      },
      animation: {
        drift: 'drift 16s ease-in-out infinite alternate',
        spinslow: 'spin_slow 7s linear infinite',
        blink: 'blink 1.3s infinite',
        eq: 'eq .5s ease-in-out infinite alternate',
        quotein: 'quotein .5s ease',
        flicker: 'flicker .35s 1',
        glitchmove: 'glitchmove .35s steps(2) 1',
      },
    },
  },
  plugins: [],
};
