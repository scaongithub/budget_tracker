import { createContext, useCallback, useContext, useMemo, useState } from 'react';
import { translations } from '../data/translations.js';

const AppContext = createContext(null);

const localeMap = {
  es: 'es-ES',
  it: 'it-IT',
  en: 'en-US'
};

export function AppProvider({ children }) {
  const [language, setLanguage] = useState('es');
  const [modalState, setModalState] = useState({ open: false, tab: 'income' });

  const toggleLanguage = useCallback((lang) => setLanguage(lang), []);
  const openModal = useCallback((tab = 'income') => setModalState({ open: true, tab }), []);
  const closeModal = useCallback(() => setModalState((prev) => ({ ...prev, open: false })), []);
  const setModalTab = useCallback((tab) => setModalState((prev) => ({ ...prev, tab })), []);

  const locale = localeMap[language] ?? 'en-US';
  const dictionary = useMemo(() => translations[language], [language]);
  const t = useCallback(
    (path) =>
      path
        .split('.')
        .reduce((acc, key) => (acc && typeof acc === 'object' ? acc[key] : undefined), dictionary) ?? path,
    [dictionary]
  );

  const value = useMemo(
    () => ({
      language,
      locale,
      toggleLanguage,
      modalState,
      openModal,
      closeModal,
      setModalTab,
      t
    }),
    [language, locale, toggleLanguage, modalState, openModal, closeModal, setModalTab, t]
  );

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export const useAppContext = () => {
  const ctx = useContext(AppContext);
  if (!ctx) {
    throw new Error('useAppContext must be used within AppProvider');
  }
  return ctx;
};
