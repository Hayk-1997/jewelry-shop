import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Auth Pages',
  description: 'Login or register here.',
};

export default function AuthPagesLayout({
  children,
}: {
  children: React.ReactNode;
}): React.JSX.Element {
  return (
    <div className="login-page grid-container">
      <div className="login-tabs grid-x grid-margin-x">
        <div className="login-tabs__nav cell grid-x grid-margin-x align-center">
          <div className="cell medium-8 large-5 opacity-bg">
            <ul className="login-tabs__links grid-x grid-margin-x align-justify">
              <li className="login-tabs__item cell small-6 align-self-bottom">
                <Link href="/login" className="login-tabs__link active">
                  Login
                </Link>
              </li>
              <li className="login-tabs__item cell small-6 align-self-bottom">
                <Link className="login-tabs__link" href="/register">
                  Register
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="login-tabs__panels cell grid-x grid-margin-x align-center">{children}</div>
      </div>
    </div>
  );
}
