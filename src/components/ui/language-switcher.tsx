'use client';

import { useTranslation } from 'react-i18next';
import { Globe } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const languages = [
  { code: 'en', name: 'English', nativeName: 'English' },
  { code: 'hi', name: 'Hindi', nativeName: 'हिंदी' },
];

export function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const currentLanguage = languages.find((lang) => lang.code === i18n.language) || languages[0];

  const changeLanguage = (langCode: string) => {
    i18n.changeLanguage(langCode);
    setIsOpen(false);
    // Update HTML lang attribute
    if (typeof document !== 'undefined') {
      document.documentElement.lang = langCode;
    }
  };

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 text-navy-500 hover:text-gold-300 transition-colors focus-visible-ring rounded-lg"
        aria-label="Select language"
        aria-expanded={isOpen}
      >
        <Globe className="w-5 h-5" aria-hidden="true" />
        <span className="hidden sm:inline text-sm font-medium">{currentLanguage.nativeName}</span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40"
              onClick={() => setIsOpen(false)}
              aria-hidden="true"
            />

            {/* Dropdown */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 z-[60] overflow-hidden"
            >
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  type="button"
                  onClick={() => changeLanguage(lang.code)}
                  className={`w-full text-left px-4 py-3 hover:bg-gray-50 transition-colors focus-visible-ring ${
                    i18n.language === lang.code ? 'bg-teal-50 text-teal-600 font-semibold' : 'text-gray-700'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span>{lang.nativeName}</span>
                    {i18n.language === lang.code && (
                      <span className="text-teal-500">✓</span>
                    )}
                  </div>
                </button>
              ))}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}

