// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  css: [
    '~/assets/styles/index.scss',
    // Анимация для появления блоков
    'animate.css/animate.min.css',
    'swiper/swiper-bundle.css'
  ],

  build: {
    transpile: ['swiper']
  },

  plugins: [
    '~/plugins/directives.js',
    '~/plugins/yandexMetrica.js'
  ],

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/styles/_variables.scss" as *;',
        },
      },
    },
  },

  modules: ['nuxt-icon'],

  app: {
    head: {
      htmlAttrs: {
        lang: 'ru',
      },
      meta: [
        {
          name: 'description',
          content: '',
        },
        { charset: 'utf-8' },
        {
          name: 'viewport',
          content:
            'width=device-width, height=device-height, initial-scale=1.0, maximum-scale=1.0',
        },
      ],
      link: [
        {
          rel: 'icon',
          type: 'image/x-icon',
          href: '/favicon.ico'
        },
      ],
    },
  },
})