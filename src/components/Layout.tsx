import { type ReactNode } from 'react';
import { Nav } from './Nav';
import { Footer } from './Footer';
import { WhatsAppFab } from './WhatsAppFab';

type LayoutProps = {
  children: ReactNode;
};

export function Layout({ children }: LayoutProps) {
  return (
    <div className="layout">
      <Nav />
      <div className="body">
        {children}
        <Footer />
      </div>
      <WhatsAppFab />
    </div>
  );
}
