import React, { ReactNode } from 'react';
import Header from '@/components/Organisms/Header';
import { StoreProvider } from './StoreProvider';

import '@assets/styles/font.scss';
import '@assets/styles/color.scss';
import '@assets/styles/global.min.css';
import '@assets/styles/account.min.css';
import './globals.css';

interface Props {
  readonly children: ReactNode;
}

export default function RootLayout({ children }: Props) {
  return (
    <StoreProvider>
      <html lang="en">
        <head>
          <title>Zakarian Jewelry</title>
        </head>
        <body suppressHydrationWarning={true}>
          <Header />
          <div className="mainContent">{children}</div>
        </body>
      </html>
    </StoreProvider>
  );
}
