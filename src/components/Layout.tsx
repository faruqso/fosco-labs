import { type ReactNode, useEffect } from 'react';
import { useLenis } from 'lenis/react';
import { Nav } from './Nav';
import { Footer } from './Footer';
import { WhatsAppFab } from './WhatsAppFab';
import { ScrollToTopArrow } from './ScrollToTopArrow';

type LayoutProps = {
  children: ReactNode;
};

export function Layout({ children }: LayoutProps) {
  const lenis = useLenis();

  useEffect(() => {
    if (!lenis) return;

    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a[href^="#"]') as HTMLAnchorElement | null;
      if (!anchor || !anchor.hash) return;

      const id = anchor.hash.slice(1);
      if (!id) return;

      const el = document.getElementById(id);
      if (!el) return;

      e.preventDefault();
      const raw = getComputedStyle(document.documentElement).getPropertyValue('--scroll-anchor-offset')?.trim() || '120';
      const offset = parseInt(raw, 10) || 120;
      lenis.scrollTo(el, { duration: 1.2, offset: -offset });
      // Update URL hash without jumping
      window.history.replaceState(null, '', anchor.hash);
    };

    document.addEventListener('click', handleClick, true);
    return () => document.removeEventListener('click', handleClick, true);
  }, [lenis]);

  return (
    <div className="layout">
      <Nav />
      <div className="body">
        {children}
        <Footer />
      </div>
      <WhatsAppFab />
      <ScrollToTopArrow />
    </div>
  );
}
