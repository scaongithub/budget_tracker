import { useNavigate } from 'react-router-dom';
import PillButton from '../components/shared/PillButton.jsx';
import { useAppContext } from '../context/AppContext.jsx';

export default function LoginPage() {
  const navigate = useNavigate();
  const { toggleLanguage, language } = useAppContext();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    navigate('/dashboard');
  };

  return (
    <div className="login-screen">
      <div className="hero-background" aria-hidden />
      <div className="login-content">
        <section className="hero-copy">
          <h1>
            <span>Bienvenidos</span> / <span>Benvenuti</span>
          </h1>
          <p>Una herramienta vibrante para armonizar los sueños de Paola y Carlo.</p>
          <div className="language-pill-group" role="group" aria-label="Idioma principal">
            {['es', 'it', 'en'].map((code) => (
              <button
                key={code}
                type="button"
                className={code === language ? 'hero-pill active' : 'hero-pill'}
                onClick={() => toggleLanguage(code)}
              >
                {code.toUpperCase()}
              </button>
            ))}
          </div>
        </section>
        <section className="login-card" aria-labelledby="login-title">
          <h2 id="login-title">Access Your Budget</h2>
          <form onSubmit={handleSubmit} className="login-form">
            <label>
              <span>Email</span>
              <input type="email" name="email" placeholder="paola.carlo@email.com" required />
            </label>
            <label>
              <span>Password</span>
              <input type="password" name="password" required />
            </label>
            <PillButton type="submit" className="login-submit">
              Entrar / Accedi
            </PillButton>
            <a className="forgot-link" href="#">Forgot Password?</a>
          </form>
        </section>
      </div>
    </div>
  );
}
