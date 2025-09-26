import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { useAppContext } from '../../context/AppContext.jsx';
import LanguageToggle from '../shared/LanguageToggle.jsx';
import ProfileChips from '../shared/ProfileChips.jsx';

const navLinks = [
  { to: '/dashboard', label: 'Dashboard' },
  { to: '/categories', label: 'Categories' },
  { to: '/reports', label: 'Reports' }
];

export default function TopNav() {
  const location = useLocation();
  const navigate = useNavigate();
  const { language } = useAppContext();

  const handleLogoKey = (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      navigate('/dashboard');
    }
  };

  return (
    <header className="top-nav" aria-label="Primary navigation">
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
          <span className="logo-subtitle">Fusion Budget</span>
        </div>
      </div>
      <nav className="nav-links" aria-label="Main pages">
        {navLinks.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            className={({ isActive }) =>
              isActive || location.pathname === '/' ? 'nav-link nav-link-active' : 'nav-link'
            }
          >
            {link.label}
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
