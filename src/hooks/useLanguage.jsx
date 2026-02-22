import { createContext, useContext, useState, useCallback } from 'react';
import pt from '../i18n/pt';
import en from '../i18n/en';

const translations = { pt, en };
const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState('pt');
  const t = translations[lang];
  const toggleLang = useCallback(() => setLang(l => l === 'pt' ? 'en' : 'pt'), []);
  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within LanguageProvider');
  return context;
}
