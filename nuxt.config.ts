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
      title: 'Портфолио - Александр Гаген',
      meta: [
        {
          name: 'description',
          content: 'Портфолио Александра Гагена - фронтенд-разработчик с навыками работы с Vue, Nuxt и другими инструментами. Создание адаптивных и SEO-оптимизированных веб-приложений.'
        },
        {
          name: 'keywords',
          content: 'Vue, Nuxt, Frontend разработчик, SSR, SEO, веб-разработка, создание веб-приложений, анимация интерфейсов, оптимизация сайтов, адаптивная верстка, компонентный подход, разработка с нуля, работа с базами данных'
        },
        { charset: 'utf-8' },
        {
          name: 'viewport',
          content: 'width=device-width, height=device-height, initial-scale=1.0, maximum-scale=1.0',
        },
        {
          name: 'author',
          content: 'Александр Гаген'
        },
        {
          name: 'robots',
          content: 'index, follow'
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