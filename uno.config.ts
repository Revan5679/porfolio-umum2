import {
  defineConfig,
  presetAttributify,
  presetUno,
  presetIcons
} from 'unocss'

export default defineConfig({
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons()
  ],
  theme: {
    colors: {
      primary: '#0B1120',
      secondary: '#F8FAFC',
      accent: '#38BDF8',
      accentHover: '#0EA5E9',
    },
    fontFamily: {
        sans: ['Inter', 'sans-serif'],
    },
  },
  rules: [
    ['animate-float', {
      animation: 'float 6s ease-in-out infinite',
    }],
    ['nav-link', {
      position: 'relative',
      'text-decoration': 'none',
      'padding-bottom': '4px',
    }],
    [/^nav-link::after$/, () => ({
      content: "''",
      position: 'absolute',
      width: '0',
      height: '2px',
      bottom: '0',
      left: '50%',
      'background-color': '#38BDF8',
      transition: 'all 0.3s ease-out',
      transform: 'translateX(-50%)',
    })],
    [/^nav-link:hover::after$/, () => ({
      width: '100%',
    })],
    [/^nav-link:hover$/, () => ({
      color: '#38BDF8',
    })],
    ['reveal-element', {
      transition: 'all 0.8s cubic-bezier(0.5, 0, 0, 1)',
    }],
    ['initial-reveal-state', {
      opacity: '0',
      transform: 'translateY(30px)',
    }],
    ['reveal-element.active', {
      opacity: '1 !important',
      transform: 'translateY(0) !important',
    }],
    ['delay-100', { 'transition-delay': '100ms' }],
    ['delay-200', { 'transition-delay': '200ms' }],
    ['delay-300', { 'transition-delay': '300ms' }],
    ['cursor', {
      display: 'inline-block',
      width: '2px',
      'background-color': '#38BDF8',
      animation: 'blink 1s infinite',
    }],
  ],
  variants: [
    {
      match: (s) => s === 'nav-link::after',
      selector: (s) => `${s}::after`,
    },
  ],
  shortcuts: {
    // custom shortcut
  },
  safelist: [
    'i-lucide-menu',
    'i-lucide-layout',
    'i-lucide-server',
    'i-lucide-wrench',
    'i-lucide-github',
    'i-lucide-linkedin',
    'i-lucide-twitter'
  ],
  keyframes: {
    float: {
      '0%, 100%': 'transform: translateY(0)',
      '50%': 'transform: translateY(-20px)',
    },
    blink: {
      '0%, 100%': 'opacity: 1',
      '50%': 'opacity: 0',
    },
  },
  preflights: [{
    getCSS: () => `
      html, body {
        background-color: #0B1120;
        color: #F8FAFC;
        overflow-x: hidden;
      }
      ::-webkit-scrollbar {
          width: 10px;
      }
      ::-webkit-scrollbar-track {
          background: #0B1120;
      }
      ::-webkit-scrollbar-thumb {
          background: #1e293b;
          border-radius: 5px;
      }
      ::-webkit-scrollbar-thumb:hover {
          background: #38BDF8;
      }
    `,
  }],
})