'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import classNames from 'classnames';

const AuthPagesTab: React.FC = (): React.JSX.Element => {
  const pathname = usePathname();

  return (
    <ul className="login-tabs__links grid-x grid-margin-x align-justify">
      <li className="login-tabs__item cell small-6 align-self-bottom">
        <Link
          href="/login"
          className={classNames('login-tabs__link', {
            active: pathname === '/login',
          })}
        >
          Login
        </Link>
      </li>
      <li className="login-tabs__item cell small-6 align-self-bottom">
        <Link
          href="/register"
          className={classNames('login-tabs__link', {
            active: pathname === '/register',
          })}
        >
          Register
        </Link>
      </li>
    </ul>
  );
};

export default AuthPagesTab;
