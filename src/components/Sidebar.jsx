import { Link, useLocation } from 'react-router-dom';

// Placeholder user; swap for real auth data when a backend exists.
export const CURRENT_USER = { name: 'Name', avatar: '/img/student.jpg' };

const MAIN_MENU = [
  { label: 'Dashboard', icon: 'bxs-dashboard', to: '', end: true },
  { label: 'PrepMate', icon: 'bxs-shopping-bag-alt', to: '/prepmate' },
  { label: 'Scan', icon: 'bxs-doughnut-chart', to: '/image-to-text' },
  { label: 'Live Classes', icon: 'bxs-message-dots', to: '/live-class' },
  { label: 'AI Evaluation', icon: 'bxs-group', to: '/assignments' },
  { label: 'CV Generator', icon: 'bxs-group', to: '/cv-generator' },
  { label: 'Plagiarism Checker', icon: 'bxs-group', to: '/plagiarism-checker' },
];

export default function Sidebar({ role, collapsed }) {
  const { pathname } = useLocation();
  const base = `/${role}`;

  const isActive = ({ to, end }) => {
    const full = base + to;
    return end ? pathname === full || pathname === `${full}/` : pathname === full || pathname.startsWith(`${full}/`);
  };

  return (
    <section id="sidebar" className={collapsed ? 'hide' : ''}>
      <Link to={`${base}/profile`} className="brand">
        <img className="student-img" src={CURRENT_USER.avatar} alt="" />
        <span className="text">{CURRENT_USER.name}</span>
      </Link>

      <ul className="side-menu top">
        {MAIN_MENU.map((item) => (
          <li key={item.label} className={isActive(item) ? 'active' : ''}>
            <Link to={base + item.to}>
              <i className={`bx ${item.icon}`}></i>
              <span className="text">{item.label}</span>
            </Link>
          </li>
        ))}
      </ul>

      <ul className="side-menu">
        <li className={pathname === `${base}/profile` ? 'active' : ''}>
          <Link to={`${base}/profile`}>
            <i className="bx bxs-cog"></i>
            <span className="text">Settings</span>
          </Link>
        </li>
        <li>
          <a href="#" onClick={(e) => e.preventDefault()}>
            <i className="bx bxs-cog"></i>
            <span className="text">Help</span>
          </a>
        </li>
      </ul>

      <ul className="side-menu">
        <li>
          <Link to="/login" className="logout">
            <i className="bx bxs-log-out-circle"></i>
            <span className="text">Logout</span>
          </Link>
        </li>
      </ul>
    </section>
  );
}
