import { useMemo } from 'react';
import { useAppContext } from '../../context/AppContext.jsx';

const languages = [
  { code: 'es', label: 'ES' },
  { code: 'it', label: 'IT' },
  { code: 'en', label: 'EN' }
];

export default function LanguageToggle({ current }) {
  const { toggleLanguage } = useAppContext();
  const label = useMemo(() => {
    switch (current) {
      case 'es':
        return 'Idioma actual español';
      case 'it':
        return 'Lingua attuale italiana';
      default:
        return 'Current language English';
    }
  }, [current]);

  return (
    <div className="language-toggle" role="group" aria-label={label}>
      {languages.map((lang) => (
        <button
          key={lang.code}
          type="button"
          className={lang.code === current ? 'pill active' : 'pill'}
          onClick={() => toggleLanguage(lang.code)}
          aria-pressed={lang.code === current}
        >
          {lang.label}
        </button>
      ))}
    </div>
  );
}
