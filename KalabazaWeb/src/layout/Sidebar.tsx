import React, { useState } from 'react';
import './Sidebar.css';
import personIcon from '../assets/icons/person-circle.svg';

type MenuItem = {
  id: string;
  label: string;
  icon: React.ReactNode;
};

const items: MenuItem[] = [
  { id: 'alquilar', label: 'ALQUILAR', icon: <span className="icon"></span> },
  { id: 'pendientes', label: 'PENDIENTES', icon: <span className="icon">📋</span> },
  { id: 'entregados', label: 'ENTREGADOS', icon: <span className="icon">✅</span> },
];

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const [selected, setSelected] = useState('alquilar');

  const toggle = () => setCollapsed((c) => !c);

  return (
    <aside className={`sidebar ${collapsed ? 'collapsed' : 'expanded'}`} aria-expanded={!collapsed}>
      <div className="sidebar-top">
        <div className="profile">
          <div className="avatar"><img src={personIcon} alt="Person Icon" width={40}/></div>
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
            onClick={() => setSelected(it.id)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => { if (e.key === 'Enter') setSelected(it.id); }}
          >
            <div className="menu-icon">{it.icon}</div>
            <div className="menu-text">{it.label}</div>
          </div>
        ))}
      </nav>
    </aside>
  );
}
