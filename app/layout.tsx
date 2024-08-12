import './globals.css';
import { UserfrontProvider } from '@userfront/next/client';

import Header from './_components/Header';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className='flex justify-center'>
        <div className='w-full max-w-5xl px-4 pt-8'>
        <UserfrontProvider tenantId={process.env.NEXT_PUBLIC_USERFRONT_TENANT_ID!}>
          <Header />
          {children}
        </UserfrontProvider>
        </div>
      </body>
    </html>
  );
}
