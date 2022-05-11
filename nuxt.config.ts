import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  app: {
    head: {
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/public/favicon.ico' },
      ],
    },
  },
  typescript: {
    strict: true,
  },
  buildModules: ['@pinia/nuxt', '@vueuse/nuxt'],
  vueuse: {
    ssrHandlers: true,
  },
  build: {
    postcss: {
      postcssOptions: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },
    },
  },
  css: ['~/assets/css/tailwind.css'],
})
