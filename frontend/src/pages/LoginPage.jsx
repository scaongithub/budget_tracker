import { useNavigate } from 'react-router-dom';
import PillButton from '../components/shared/PillButton.jsx';
import { useAppContext } from '../context/AppContext.jsx';

export default function LoginPage() {
  const navigate = useNavigate();
  const { toggleLanguage, language, t } = useAppContext();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    navigate('/dashboard');
  };

  return (
    <div className="login-screen">
      <div className="hero-background" aria-hidden />
      <div className="login-content">
        <section className="hero-copy">
          <h1>{t('login.heroHeading')}</h1>
          <p>{t('login.heroSubtitle')}</p>
          <div className="language-pill-group" role="group" aria-label={t('languageToggle.primaryLabel')}>
            {['es', 'it', 'en'].map((code) => (
              <button
                key={code}
                type="button"
                className={code === language ? 'hero-pill active' : 'hero-pill'}
                onClick={() => toggleLanguage(code)}
                aria-pressed={code === language}
              >
                {code.toUpperCase()}
              </button>
            ))}
          </div>
        </section>
        <section className="login-card" aria-labelledby="login-title">
          <h2 id="login-title">{t('login.accessTitle')}</h2>
          <form onSubmit={handleSubmit} className="login-form">
            <label>
              <span>{t('login.email')}</span>
              <input type="email" name="email" placeholder="paola.carlo@email.com" required />
            </label>
            <label>
              <span>{t('login.password')}</span>
              <input type="password" name="password" required />
            </label>
            <PillButton type="submit" className="login-submit">
              {t('login.submit')}
            </PillButton>
            <a className="forgot-link" href="#">{t('login.forgot')}</a>
          </form>
        </section>
      </div>
    </div>
  );
}
