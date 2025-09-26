import { Outlet } from 'react-router-dom';
import TopNav from './TopNav.jsx';

export default function AppLayout() {
  return (
    <div className="app-shell">
      <TopNav />
      <main className="app-main">
        <Outlet />
      </main>
    </div>
  );
}
