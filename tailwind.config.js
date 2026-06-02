/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        cream:  '#FAF6F0',
        deep:   '#130B06',
        warm:   '#3D1F12',
        terra:  '#C2622D',
        gold:   '#C9922A',
        goldl:  '#E8C278',
        mid:    '#5C3D2A',
        slate:  '#0F1C14',
        footer: '#0C0804',
      },
      fontFamily: {
        display: ["'Cormorant Garamond'", 'serif'],
        sans:    ["'DM Sans'", 'sans-serif'],
      },
      letterSpacing: {
        widest2: '0.2em',
        widest3: '0.3em',
        widest4: '0.4em',
      },
      fontSize: {
        '10': '10px',
        '11': '11px',
        '13': '13px',
      },
      maxWidth: {
        '1080': '1080px',
        '900':  '900px',
        '860':  '860px',
        '760':  '760px',
        '680':  '680px',
        '640':  '640px',
        '580':  '580px',
      },
      height: {
        navbar: '72px',
      },
      animation: {
        'fade-up-hero':  'fadeUp 1.1s ease 0.3s forwards',
        'fade-up-btns':  'fadeUp 1s ease 0.75s forwards',
        'fade-up-pills': 'fadeUp 1s ease 0.9s forwards',
        'pulse-dot':     'pulseDot 2s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(24px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
        pulseDot: {
          '0%,100%': { opacity: '1', transform: 'scale(1)' },
          '50%':     { opacity: '0.5', transform: 'scale(1.4)' },
        },
      },
    },
  },
  plugins: [],
};