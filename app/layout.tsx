import "./globals.css";
import { UserfrontProvider } from "@userfront/next/client";

import Header from "./_components/Header";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="flex flex-col size-full max-w-5xl p-4 md:p-8 mx-auto min-h-screen gap-y-4 md:gap-y-8">
          <UserfrontProvider
            tenantId={process.env.NEXT_PUBLIC_USERFRONT_WORKSPACE_ID}
            loginRedirect="/dashboard"
          >
            <Header />
            {children}
          </UserfrontProvider>
        </div>
      </body>
    </html>
  );
}
