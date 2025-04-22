import React, { ReactNode } from 'react';
import { StoreProvider } from './StoreProvider';

interface Props {
  readonly children: ReactNode;
}

export default function RootLayout({ children }: Props) {
  return (
    <StoreProvider>
      <html lang="en">
        <head>
          <title>Zakarian Jewelry</title>
          <link rel="stylesheet" href="/assets/css/global.min.css" />
          <link rel="stylesheet" href="/assets/css/account.min.css" />
        </head>
        <body suppressHydrationWarning={true}>
          <div className="mainContent">{children}</div>
        </body>
      </html>
    </StoreProvider>
  );
}
