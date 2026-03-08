import type { Metadata } from 'next';
import { Inter, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });
const jakarta = Plus_Jakarta_Sans({ subsets: ['latin'], variable: '--font-heading' });

export const metadata: Metadata = {
  title: 'Dream Labs Smart PP | Intelligent Patient Management',
  description: 'Transform your private practice with multi-tenant SaaS patient management tailored for Sri Lankan clinics. Features intelligent queues, pharmacy, and billing.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`dark ${inter.variable} ${jakarta.variable}`}>
      <body className="font-sans antialiased bg-slate-950 text-slate-50 min-h-screen flex flex-col">
        {children}
      </body>
    </html>
  );
}
