'use client';

import { usePathname } from 'next/navigation';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export default function AppShell({ children }) {
  const pathname = usePathname();
  const isAdminLoginPage = pathname === '/admin/login';

  return (
    <div className="min-h-screen">
      {!isAdminLoginPage && <Header />}
      <main>{children}</main>
      {!isAdminLoginPage && <Footer />}
    </div>
  );
}
