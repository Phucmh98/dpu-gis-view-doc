import './global.css';
import { RootProvider } from 'fumadocs-ui/provider';
import { Metadata } from 'next';
import { Inter } from 'next/font/google';
import type { ReactNode } from 'react';

const inter = Inter({
  subsets: ['latin'],
});
 export const metadata: Metadata = {
	icons: {
		icon: [
			{
				url: '/assets/img/favicon.ico',
				href: '/assets/img/favicon.ico',
			},
			{
				url: '/assets/img/favicon.ico',
				href: '/assets/img/favicon.ico',
			},
		],
		shortcut: [
			{
				url: '/assets/img/favicon.ico',
				href: '/assets/img/favicon.ico',
			},
			{
 				url: '/assets/img/favicon.ico',
				href: '/assets/img/favicon.ico',
			},
		],
		
	},
}

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}
