import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { useAppContext } from '../../context/AppContext.jsx';
import LanguageToggle from '../shared/LanguageToggle.jsx';
import ProfileChips from '../shared/ProfileChips.jsx';

const navLinks = [
  { to: '/dashboard', key: 'dashboard' },
  { to: '/categories', key: 'categories' },
  { to: '/reports', key: 'reports' }
];

export default function TopNav() {
  const location = useLocation();
  const navigate = useNavigate();
  const { language, t } = useAppContext();

  const handleLogoKey = (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      navigate('/dashboard');
    }
  };

  return (
    <header className="top-nav" aria-label={t('nav.ariaPrimary')}>
      <div
        className="logo-block"
        onClick={() => navigate('/dashboard')}
        onKeyDown={handleLogoKey}
        role="button"
        tabIndex={0}
      >
        <span className="crest" aria-hidden>🌵</span>
        <div className="logo-text">
          <span className="logo-title">Paola &amp; Carlo</span>
          <span className="logo-subtitle">{t('nav.logoSubtitle')}</span>
        </div>
      </div>
      <nav className="nav-links" aria-label={t('nav.ariaPages')}>
        {navLinks.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            className={({ isActive }) =>
              isActive || location.pathname === '/' ? 'nav-link nav-link-active' : 'nav-link'
            }
          >
            {t(`nav.links.${link.key}`)}
          </NavLink>
        ))}
      </nav>
      <div className="nav-meta">
        <LanguageToggle current={language} />
        <ProfileChips />
      </div>
    </header>
  );
}
