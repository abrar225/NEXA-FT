/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#111111',
        secondary: '#6B6B6B',
        background: '#F5F5F3',
        surface: '#FFFFFF',
        'muted-surface': '#ECEBE7',
        border: '#D8D8D5',
        accent: '#9A9A9A',
        success: '#C7B89A',
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'system-ui', '-apple-system', 'sans-serif'],
      },
      fontSize: {
        'h1-desktop': ['88px', { lineHeight: '0.9', letterSpacing: '-2px', fontWeight: '800' }],
        'h1-mobile': ['52px', { lineHeight: '1', letterSpacing: '-1.5px', fontWeight: '800' }],
        'h2': ['56px', { lineHeight: '1.1', letterSpacing: '-1px', fontWeight: '700' }],
        'h3': ['34px', { lineHeight: '1.2', letterSpacing: '-0.5px', fontWeight: '600' }],
        'large-body': ['18px', { lineHeight: '1.5', letterSpacing: '0' }],
        'body': ['16px', { lineHeight: '1.5', letterSpacing: '0' }],
        'caption': ['13px', { lineHeight: '1.4', letterSpacing: '0.02em' }],
        'small-label': ['12px', { lineHeight: '1.4', letterSpacing: '0.1em', textTransform: 'uppercase' }],
      },
      spacing: {
        'section': '96px',
        'section-lg': '140px',
      },
      maxWidth: {
        'content': '1160px',
        'container': '1280px',
      },
      borderRadius: {
        'pill': '9999px',
        'card': '8px',
        'image': '6px',
      },
      transitionDuration: {
        '200': '200ms',
      },
      scale: {
        '102': '1.02',
      },
    },
  },
  plugins: [],
}
