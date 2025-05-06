import React from 'react';
import AuthPagesTab from '@/components/Organisms/AuthPagesTab';

export default function AuthPagesLayout({ children }: { children: React.ReactNode }): React.JSX.Element {
  return (
    <div className="login-page grid-container">
      <div className="login-tabs grid-x grid-margin-x">
        <div className="login-tabs__nav cell grid-x grid-margin-x align-center">
          <div className="cell medium-8 large-5 opacity-bg">
            <AuthPagesTab />
          </div>
        </div>
        <div className="login-tabs__panels cell grid-x grid-margin-x align-center">{children}</div>
      </div>
    </div>
  );
}
