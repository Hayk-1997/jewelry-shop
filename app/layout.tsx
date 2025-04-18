import type { ReactNode } from 'react';
import { StoreProvider } from './StoreProvider';
import Header from '@/components/Templates/Header';

import './styles/globals.css';
import styles from './styles/layout.module.css';

interface Props {
  readonly children: ReactNode;
}

export default function RootLayout({ children }: Props) {
  return (
    <StoreProvider>
      <html lang="en">
        <head>
          <link rel="stylesheet" href="/assets/css/global.min.css" />
        </head>
        <body suppressHydrationWarning={true}>
          <Header />
          <main className={styles.main}>{children}</main>
        </body>
      </html>
    </StoreProvider>
  );
}
