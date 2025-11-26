import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './Sidebar.css';
import SvgIcon from '../components/SvgIcon';

type MenuItem = {
  id: string;
  label: string;
  icon: React.ReactNode;
  path: string;
};

const items: MenuItem[] = [
  { id: 'alquilar', label: 'ALQUILAR', icon: <SvgIcon iconName="rent-icon" size={20} />, path: '/rent' },
  { id: 'pendientes', label: 'PENDIENTES', icon: <SvgIcon iconName="pending-icon" size={20} />, path: '/pending' },
  { id: 'entregados', label: 'ENTREGADOS', icon: <SvgIcon iconName="delivered-icon" size={20} />, path: '/history' },
];

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const [selected, setSelected] = useState('alquilar');
  const navigate = useNavigate();
  const location = useLocation();

  const toggle = () => setCollapsed((c) => !c);

  // Sync selection with current route
  useEffect(() => {
    const found = items.find((it) => location.pathname.startsWith(it.path));
    if (found) setSelected(found.id);
  }, [location.pathname]);

  const goTo = (it: MenuItem) => {
    setSelected(it.id);
    navigate(it.path);
  };

  return (
    <aside className={`sidebar ${collapsed ? 'collapsed' : 'expanded'}`} aria-expanded={!collapsed}>
      <div className="sidebar-top">
        <div className="profile">
          <div className="avatar"><SvgIcon iconName="person-icon" size={40} /></div>
          <div className="profile-text">
            <div className="name">JAIRO QUILUMBAQUIN</div>
          </div>
        </div>
        <button className="toggle-btn" onClick={toggle} aria-label={collapsed ? 'Abrir sidebar' : 'Cerrar sidebar'}>
          {collapsed ? '☰' : '✕'}
        </button>
      </div>

      <nav className="menu" role="navigation">
        {items.map((it) => (
          <div
            key={it.id}
            className={`menu-item ${selected === it.id ? 'selected' : ''}`}
            onClick={() => goTo(it)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => { if (e.key === 'Enter') goTo(it); }}
          >
            <div className="menu-icon">{it.icon}</div>
            <div className="menu-text">{it.label}</div>
          </div>
        ))}
      </nav>
    </aside>
  );
}
