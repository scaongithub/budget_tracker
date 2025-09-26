import { createContext, useContext, useMemo, useState } from 'react';

const AppContext = createContext(null);

export function AppProvider({ children }) {
  const [language, setLanguage] = useState('es');
  const [modalState, setModalState] = useState({ open: false, tab: 'income' });

  const toggleLanguage = (lang) => setLanguage(lang);
  const openModal = (tab = 'income') => setModalState({ open: true, tab });
  const closeModal = () => setModalState((prev) => ({ ...prev, open: false }));
  const setModalTab = (tab) => setModalState((prev) => ({ ...prev, tab }));

  const value = useMemo(
    () => ({
      language,
      toggleLanguage,
      modalState,
      openModal,
      closeModal,
      setModalTab
    }),
    [language, modalState]
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
