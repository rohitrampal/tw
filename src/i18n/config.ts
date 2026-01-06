import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';

// Track initialization state to prevent re-initialization
let isInitializing = false;
let hasInitialized = false;

// Initialize i18n with SSR-safe configuration
const initI18n = () => {
  // Prevent multiple initializations
  if (hasInitialized || isInitializing) {
    return i18n;
  }

  isInitializing = true;

  // Only initialize if we're on the client side
  if (typeof window !== 'undefined') {
    i18n
      // Load translation using http -> see /public/locales/<lang_code>/translation.json
      .use(Backend)
      // Detect user language
      .use(LanguageDetector)
      // Pass the i18n instance to react-i18next
      .use(initReactI18next)
      // Initialize i18next
      .init({
        fallbackLng: 'en',
        debug: process.env.NODE_ENV === 'development',
        
        interpolation: {
          escapeValue: false, // React already escapes values
        },

        // Language detection options
        detection: {
          // Order and from where user language should be detected
          order: ['localStorage', 'navigator', 'htmlTag'],
          
          // Keys or params to lookup language from
          lookupLocalStorage: 'i18nextLng',
          
          // Cache user language on
          caches: ['localStorage'],
        },

        // Backend options
        backend: {
          loadPath: '/locales/{{lng}}/{{ns}}.json',
        },

        // Namespace configuration
        defaultNS: 'common',
        ns: ['common', 'hero', 'footer', 'trustBadges', 'exitIntent', 'calculators', 'navigation'],
        
        react: {
          useSuspense: false, // Disable suspense for SSR compatibility
        },
      })
      .then(() => {
        hasInitialized = true;
        isInitializing = false;
      })
      .catch(() => {
        isInitializing = false;
      });
  } else {
    // Server-side: create a minimal i18n instance
    i18n.use(initReactI18next).init({
      fallbackLng: 'en',
      lng: 'en',
      interpolation: {
        escapeValue: false,
      },
      react: {
        useSuspense: false,
      },
    });
    hasInitialized = true;
    isInitializing = false;
  }
  
  return i18n;
};

// Initialize immediately
initI18n();

export default i18n;

