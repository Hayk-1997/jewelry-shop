'use client';

import React, { useState, useEffect } from 'react';
import cn from 'classnames';
import HeaderSearch from '@/components/Molecules/HeaderSearch';
import LanguageSelector from '@/components/Molecules/LanguageSelector';
import { useDebounce } from '@/hooks/useDebounce';
import { useSearchQuery } from '@/lib/apiModules/search/api';

import styles from './styles.module.scss';

const Header: React.FC = (): React.JSX.Element => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const debouncedSearch = useDebounce<string>(searchTerm, 500);

  const { data, isLoading, error } = useSearchQuery({ query: debouncedSearch }, { skip: !debouncedSearch });

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className={styles.layout}>
      <header
        className={cn(styles.header, {
          [styles.scrolled]: isScrolled,
        })}
      >
        <button className={styles.hamburger} onClick={() => setSidebarOpen(!sidebarOpen)}>
          &#9776;
        </button>
        <div className={styles.brand}>Zakarian</div>
        <div className="flex gap-4 items-center">
          <div className="relative flex items-center flex-row-reverse">
            <HeaderSearch onChange={handleSearchChange} value={searchTerm} />
          </div>
          <div>
            <LanguageSelector />
          </div>
        </div>
      </header>

      {sidebarOpen && <div className={styles.overlay} onClick={() => setSidebarOpen(false)} />}

      <aside
        className={cn(styles.sidebar, {
          [styles.open]: sidebarOpen,
        })}
      >
        <button className={styles.close_btn} onClick={() => setSidebarOpen(false)}>
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
