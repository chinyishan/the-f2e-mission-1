// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { 
    enabled: true
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/scss/style.scss" as *;'
        }
      }
    }
  },
  build: {
    transpile: ['gsap'],
  },
  app: {
    head: {
      title: '喵立翰 Miao Li-Han - 喵的未來，人的希望',
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      meta: [
        { name: 'description', content: '藉由推動更完善的貓咪福利和相關政策，更是間接地投資於台灣的未來。' },
        { name: 'format-detection', content: 'telephone=no' },
        { property: "og:title", content: "喵立翰 Miao Li-Han - 喵的未來，人的希望" },
        { property: "og:description", content: "藉由推動更完善的貓咪福利和相關政策，更是間接地投資於台灣的未來。" },
        { property: "og:img", content: "@/public/favicon.ico" },
      ],
      bodyAttrs: {
        class: 'app-body'
      },
    },
    pageTransition: { name: 'page', mode: 'out-in' },
  }
})
