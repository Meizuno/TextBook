import { createI18n } from 'vue-i18n'
import en from './en'
import ua from './ua'
import cs from './cs'

const userLanguage = navigator.language || navigator.languages[0] || 'en'

const i18n = createI18n({
  legacy: false,
  locale: userLanguage,
  fallbackLocale: 'en',
  messages: {
    en,
    ua,
    cs,
  },
})

export default i18n
