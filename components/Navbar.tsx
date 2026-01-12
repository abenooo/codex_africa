import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ArrowRight, History, LayoutGrid, Users, Smartphone, Video } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  useEffect(() => {
    const getActiveSection = () => {
      // Account for fixed navbar height + a bit of breathing room.
      const offset = 120;
      const scrollPos = window.scrollY + offset;

      // Only track the sections we actually have in the navbar.
      // Scanning every `[id]` can pick up unrelated ids (e.g. "root" or nested mockup ids)
      // which makes the navbar look like it's not highlighting anything.
      const navIds = ['process', 'features', 'team', 'mobile-app', 'contact'] as const;
      const sections = navIds
        .map((id) => document.getElementById(id))
        .filter((el): el is HTMLElement => Boolean(el));

      // Find the last nav section whose top is above the current scroll position.
      let current: string | null = null;
      for (const el of sections) {
        if (el.offsetTop <= scrollPos) current = `#${el.id}`;
      }

      // If we haven't reached the first section yet, clear highlight.
      setActiveSection(current ?? '');
    };

    // Run once on mount and then on scroll/resize.
    getActiveSection();

    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(() => {
        getActiveSection();
        ticking = false;
      });
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const offset = 100; // Account for fixed navbar height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      
      // Update active section immediately on click
      setActiveSection(href);
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-[100] overflow-x-hidden">
      <div className="w-full max-w-[100vw] px-4 sm:px-6 lg:px-12 pt-2 mx-auto">
        <nav className="w-full max-w-6xl mx-auto min-w-0 h-14 sm:h-16 flex items-center justify-between px-6 sm:px-8 rounded-full border bg-white border-gray-100">
          {/* Logo Section */}
          <div 
            className="flex-shrink-0 flex items-center gap-4 cursor-pointer group" 
            onClick={() => {
              window.scrollTo({ top: 0, behavior: 'smooth' });
              setIsMobileMenuOpen(false);
            }}
          >
            <div className="h-12 sm:h-12 md:h-14 lg:h-16 w-auto">
              <picture>
                <source
                  type="image/webp"
                  srcSet="/image-168w.webp 168w, /image-336w.webp 336w"
                  sizes="(min-width: 1024px) 224px, (min-width: 768px) 192px, 168px"
                />
                <img
                  src="/image-168w.png"
                  srcSet="/image-168w.png 168w, /image-336w.png 336w"
                  sizes="(min-width: 1024px) 224px, (min-width: 768px) 192px, 168px"
                  width={224}
                  height={149}
                  alt="Codex Africa"
                  className="h-full w-auto dark:hidden"
                  decoding="async"
                />
              </picture>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1 flex-1 min-w-0 justify-center px-2">
            {[
              { label: 'Process', href: '#process' },
              { label: 'Features', href: '#features' },
              { label: 'Team', href: '#team' },
              { 
                label: 'Our Mobile App',
                href: '#mobile-app'
              },
              { 
                label: 'Contact',
                href: '#contact'
              }
            ].map((item) => (
              <div key={item.label} className="relative group">
                <a 
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-[0.2em] transition-all hover:bg-gray-50/80 active:scale-95 whitespace-nowrap ${
                    activeSection === item.href 
                      ? 'text-black bg-gray-100' 
                      : 'text-gray-500 hover:text-black'
                  }`}
                >
                  {item.label}
                </a>
              </div>
            ))}
          </div>

          {/* Right Action Section */}
          <div className="flex-shrink-0 flex items-center gap-4">
            {/* Desktop CTA */}
            <a 
              href="https://cal.com/abenezer-kifle-t8tqcf/platform-demo" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hidden sm:flex flex-shrink-0 bg-black text-white text-xs sm:text-sm font-medium px-5 py-2 sm:py-2.5 rounded-full items-center gap-2 hover:bg-red-600 transition-all duration-300 shadow-md active:scale-95 whitespace-nowrap"
            >
              <div className="flex-shrink-0 bg-white/20 p-1.5 rounded-full">
                <Video className="w-3.5 h-3.5" />
              </div>
              Book A Session
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="lg:hidden p-2 text-gray-900 bg-white/50 border border-white/50 rounded-full hover:bg-white transition-all shadow-sm active:scale-90"
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 top-20 left-4 right-4 mt-4 mx-auto max-w-md bg-white/98 backdrop-blur-3xl rounded-[3rem] p-8 shadow-2xl border border-white/40 lg:hidden flex flex-col gap-5 z-[99] h-[calc(100vh-7rem)] overflow-y-auto"
        >
          {[
            { label: 'Process', href: '#process', icon: History },
            { label: 'Features', href: '#features', icon: LayoutGrid },
            { label: 'Team', href: '#team', icon: Users },
            {
              label: 'Our Mobile App',
              href: '#mobile-app',
              icon: Smartphone,
            },
            {
              label: 'Contact',
              href: '#contact',
              icon: ArrowRight,
            },
          ].map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className="text-2xl font-bold text-gray-900 py-4 border-b border-gray-100 flex items-center justify-between group"
            >
              <div className="flex items-center gap-5">
                <div className="w-12 h-12 rounded-2xl bg-gray-50 flex items-center justify-center text-gray-500 group-hover:text-red-600 transition-colors">
                  <item.icon size={24} />
                </div>
                <span>{item.label}</span>
              </div>
              <ArrowRight size={20} className="text-gray-500 group-hover:text-black transition-colors" />
            </a>
          ))}
          <div className="pt-4">
            <a
              href="https://cal.com/abenezer-kifle-t8tqcf/platform-demo"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black text-white w-full py-4 rounded-[2rem] font-bold text-lg flex justify-center items-center gap-3 active:scale-95 transition-transform hover:bg-red-600 shadow-2xl shadow-red-500/10"
            >
              Book A Session
              <Video size={18} className="text-white" />
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
