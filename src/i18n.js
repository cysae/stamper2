import i18n from 'i18next'
import { reactI18nextModule } from 'react-i18next'

const enTranslation = {
  'Files': 'Files',
  'Receipt': 'Receipt',
  'Verify': 'Verify',
}

const esTranslation = {
  'Files': 'Ficheros',
  'Receipt': 'Recivo',
}

const frTranslation = {
  'Files': 'Fichiers',
}

i18n
  .use(reactI18nextModule) // passes i18n down to react-i18next
  .init({
    resources: {
      en: { translation: enTranslation },
      es: { translation: esTranslation },
      fr: { translation: frTranslation }
    },
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  })

export default i18n
