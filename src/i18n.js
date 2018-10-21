import i18n from 'i18next'
import { reactI18nextModule } from 'react-i18next'

i18n
  .use(reactI18nextModule) // passes i18n down to react-i18next
  .init({
    resources: {
      en: {
        translation: {
          'Files': 'Files'
        }
      },
      es: {
        translation: {
          'Files': 'Ficheros'
        }
      },
      fr: {
        translation: {
          'Files': 'Fichiers'
        }
      }
    },
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  })

export default i18n
