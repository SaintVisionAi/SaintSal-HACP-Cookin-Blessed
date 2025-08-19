import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'SaintSal™',
  description: 'Saint Vision AI — unified execution stack.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
