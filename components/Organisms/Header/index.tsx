'use client';

import React, { useState } from 'react';
import cn from 'classnames';
import LanguageSelector from '@/components/Molecules/LanguageSelector';

import style from './styles.module.scss';

const Header: React.FC = (): React.JSX.Element => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className={style.layout}>
      <header className={style.header}>
        <div className={style.brand}>Zakarian</div>
        <div className="flex gap-4">
          <div>
            <LanguageSelector />
          </div>
          <div>
            <button className={style.hamburger} onClick={() => setSidebarOpen(true)}>
              &#9776;
            </button>
          </div>
        </div>
      </header>

      {sidebarOpen && <div className={style.overlay} onClick={() => setSidebarOpen(false)} />}

      <aside
        className={cn(style.sidebar, {
          [style.open]: sidebarOpen,
        })}
      >
        <button className={style.close_btn} onClick={() => setSidebarOpen(false)}>
          &times;
        </button>
        <ul>
          <li>
            <a href="#">Dashboard</a>
          </li>
          <li>
            <a href="#">Users</a>
          </li>
        </ul>
      </aside>
    </div>
  );
};

export default Header;
