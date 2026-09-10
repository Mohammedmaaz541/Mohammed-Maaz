import './globals.css';
import { Inter } from 'next/font/google';
import AppShell from '@/components/layout/AppShell';
import ThemeScript from '@/components/layout/ThemeScript';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  metadataBase: new URL('https://example.com'),
  title: 'Mohammed Maaz | Full-Stack Developer | AI & Cloud DevOps Engineer',
  description:
    'Mohammed Maaz is a Full-Stack Developer, AI & Automation Engineer, and Cloud DevOps Engineer building scalable web applications, AI-powered solutions, automation workflows, and secure Azure infrastructure.',
  openGraph: {
    title: 'Mohammed Maaz | Full-Stack Developer | AI & Cloud DevOps Engineer',
    description:
      'Mohammed Maaz is a Full-Stack Developer, AI & Automation Engineer, and Cloud DevOps Engineer building scalable web applications, AI-powered solutions, automation workflows, and secure Azure infrastructure.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mohammed Maaz | Full-Stack Developer | AI & Cloud DevOps Engineer',
    description:
      'Mohammed Maaz is a Full-Stack Developer, AI & Automation Engineer, and Cloud DevOps Engineer building scalable web applications, AI-powered solutions, automation workflows, and secure Azure infrastructure.',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <ThemeScript />
      </head>
      <body className={`${inter.className} bg-[var(--background)] text-[var(--foreground)]`}>
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
