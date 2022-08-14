import head from './head';
import locales from './locales';
import plugins from './plugins';

export default {
  head,
  css: [
    '@/assets/css/hiskio.pcss',
  ],
  loading: {
    color: '#178fac',
    height: '4px',
    continuous: true,
    failedColor: '#e34a4a',
  },
  i18n: {
    locales,
    defaultLocale: 'zh-TW',
    vueI18n: {
      fallbackLocale: 'zh-TW',
    },
    lazy: true,
    langDir: 'locales/messages/',
  },
  build: {
    postcss: {
      plugins: {
        'postcss-nested': {},
      },
    },
  },
  buildModules: [
    '@nuxtjs/i18n',
    '@nuxt/postcss8',
    '@nuxtjs/eslint-module',
    '@nuxtjs/tailwindcss',
  ],
  modules: [
    '@nuxtjs/dotenv',
    'cookie-universal-nuxt',
  ],
  server: {
    ...(process.env.NODE_ENV === 'production' && { port: 80 }),
    ...(process.env.NODE_ENV === 'production' && { host: '0.0.0.0' }),
  },
  serverMiddleware: [
    '@/middleware/redirect-https.js',
  ],
  router: {
    middleware: [
      'init-auth',
    ],
  },
  plugins,
};
