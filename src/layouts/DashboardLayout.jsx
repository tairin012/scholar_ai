import { useEffect, useState } from 'react';
import { Outlet, useMatches, useParams } from 'react-router-dom';
import Sidebar from '../components/Sidebar.jsx';
import Navbar from '../components/Navbar.jsx';
import useHideScrollbar from '../hooks/useHideScrollbar.js';

export default function DashboardLayout() {
  const { role } = useParams();
  // Sidebar starts collapsed on narrow screens (same rule as the original script).
  const [collapsed, setCollapsed] = useState(() => window.innerWidth < 768);

  // Pick up per-route settings (`handle`) from the deepest matching route.
  const handle = [...useMatches()].reverse().find((m) => m.handle)?.handle ?? {};
  const title = typeof handle.title === 'function' ? handle.title(role) : handle.title ?? 'Dashboard';

  useHideScrollbar(Boolean(handle.hideScrollbar));

  useEffect(() => {
    document.title = `${title} | ScholarAI`;
  }, [title]);

  return (
    <>
      <Sidebar role={role} collapsed={collapsed} />
      <section id="content">
        <Navbar title={title} role={role} onToggleSidebar={() => setCollapsed((c) => !c)} />
        <main className={`main ${handle.mainClass ?? ''}`.trim()}>
          <Outlet />
        </main>
      </section>
    </>
  );
}
