import { useAppContext } from '../../context/AppContext.jsx';

const languages = [
  { code: 'es', label: 'ES' },
  { code: 'it', label: 'IT' },
  { code: 'en', label: 'EN' }
];

export default function LanguageToggle({ current }) {
  const { toggleLanguage, t } = useAppContext();
  const label = t('languageToggle.current');
  const groupLabel = t('languageToggle.primaryLabel');

  return (
    <div className="language-toggle" role="group" aria-label={groupLabel}>
      {languages.map((lang) => (
        <button
          key={lang.code}
          type="button"
          className={lang.code === current ? 'pill active' : 'pill'}
          onClick={() => toggleLanguage(lang.code)}
          aria-pressed={lang.code === current}
          aria-label={lang.code === current ? label : undefined}
        >
          {lang.label}
        </button>
      ))}
    </div>
  );
}
