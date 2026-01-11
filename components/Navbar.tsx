import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Zap, ArrowUpRight, History, LayoutGrid, Users, Smartphone, Play, Video } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

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
    }
    setIsMobileMenuOpen(false); // Close mobile menu after navigation
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-[100] overflow-x-hidden">
      <div className="w-full max-w-[100vw] px-4 sm:px-6 lg:px-12 pt-2 mx-auto">
        <nav className="w-full max-w-6xl mx-auto min-w-0 h-14 sm:h-16 flex items-center justify-between px-6 sm:px-8 rounded-full border bg-white/95 backdrop-blur-2xl border-white/50 shadow-[0_10px_30px_-5px_rgba(0,0,0,0.1)]">
          {/* Logo Section */}
          <div 
            className="flex-shrink-0 flex items-center gap-4 cursor-pointer group" 
            onClick={() => {
              window.scrollTo({ top: 0, behavior: 'smooth' });
              setIsMobileMenuOpen(false);
            }}
          >
            <div className="h-16 sm:h-12 w-auto">
              <img 
                src="/image.png" 
                alt="Codex Africa" 
                className="h-full w-auto dark:hidden"
              />
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
              }
            ].map((item) => (
              <div key={item.label} className="relative group">
                <a 
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="px-4 py-2 rounded-full text-xs font-bold text-gray-500 hover:text-black uppercase tracking-[0.2em] transition-all hover:bg-gray-50/80 active:scale-95 whitespace-nowrap"
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
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
            className="fixed inset-0 top-20 left-4 right-4 mt-4 mx-auto max-w-md bg-white/98 backdrop-blur-3xl rounded-[3rem] p-8 shadow-2xl border border-white/40 lg:hidden flex flex-col gap-5 z-[99] h-[calc(100vh-7rem)] overflow-y-auto"
          >
            {[
              { label: 'Process', href: '#process', icon: History },
              { label: 'Features', href: '#features', icon: LayoutGrid },
              { label: 'Team', href: '#team', icon: Users },
              { 
                label: 'Our Mobile App',
                href: '#mobile-app', 
                icon: Smartphone 
              }
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
                <ArrowRight size={20} className="text-gray-300 group-hover:text-black transition-colors" />
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
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
