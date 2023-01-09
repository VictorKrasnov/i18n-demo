// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/i18n'
  ],
  i18n: {
    locales: [
      {
        name: 'Русский',
        title: 'Рус',
        code: 'ru',
        iso: 'ru-RU',
      },
      {
        name: 'English',
        title: 'Eng',
        code: 'en',
        iso: 'en-US',
      },
    ],
    defaultLocale: 'ru',
    vueI18n: {
      legacy: false,
      globalInjection: true,
      locale: 'ru',
      messages: { 
        ru: { 
          title: 'Заголовок приложения' 
        }, 
        en: { 
          title: 'Application title' 
        } 
      },
    },
  },
})
