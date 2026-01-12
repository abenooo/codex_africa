
import React from 'react';
import {
  Facebook,
  Instagram,
  Youtube,
  Linkedin,
} from 'lucide-react';

const Footer: React.FC = () => {
  const footerSections: Array<{
    title: string;
    links: Array<{ label: string; href: string; target?: string }>;
  }> = [
    {
      title: 'Platform',
      links: [
        { label: 'Process', href: '#process' },
        { label: 'Core Features', href: '#features' },
        { label: 'Our Team', href: '#team' },
        { label: 'Mobile App', href: '#mobile-app' },
      ],
    },
    {
      title: 'Solutions',
      links: [
        { label: 'Member onboarding', href: '#features' },
        { label: 'Savings & loans', href: '#features' },
        { label: 'Collections & payments', href: '#features' },
        { label: 'Reports & analytics', href: '#features' },
        { label: 'Compliance & audit trail', href: '#features' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { label: 'Book a demo', href: 'https://cal.com/abenezer-kifle-t8tqcf/platform-demo', target: '_blank' },
        { label: 'FAQs', href: '#contact' },
        { label: 'Support', href: '#contact' },
      ],
    },
    {
      title: 'Company',
      links: [
        { label: 'About Codex Africa', href: '#team' },
        { label: 'Contact', href: '#contact' },
      ],
    },
    {
      title: 'Get started',
      links: [
        { label: 'Request a callback', href: '#contact' },
        { label: 'Visit our office', href: '#contact' },
      ],
    },
  ];

  return (
    <footer className="bg-[#060B1A] text-gray-400 py-20 px-6 lg:px-12 border-t border-white/5">
      <div className="max-w-[100rem] mx-auto">
        
        {/* Main Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-12 mb-20">
          {footerSections.map((section, idx) => (
            <div key={idx} className="space-y-6">
              <h4 className="text-white font-black text-sm uppercase tracking-widest">{section.title}</h4>
              <ul className="space-y-4">
                {section.links.map((link, lIdx) => (
                  <li key={lIdx}>
                    <a
                      href={link.href}
                      target={link.target}
                      rel={link.target === '_blank' ? 'noopener noreferrer' : undefined}
                      className="text-[13px] font-medium hover:text-white transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Social Bar Section */}
        <div className="flex items-center gap-6 mb-12">
          <div className="flex-1 h-[1px] bg-white/10"></div>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-white transition-colors" aria-label="Facebook"><Facebook size={20} /></a>
            <a href="#" className="hover:text-white transition-colors" aria-label="Instagram"><Instagram size={20} /></a>
            <a href="#" className="hover:text-white transition-colors" aria-label="YouTube"><Youtube size={20} /></a>
            <a href="#" className="hover:text-white transition-colors" aria-label="LinkedIn"><Linkedin size={20} /></a>
          </div>
          <div className="flex-1 h-[1px] bg-white/10"></div>
        </div>

        {/* Branding & Copyright */}
        <div className="flex flex-col items-center text-center space-y-4">
          <div className="flex items-center gap-3 group">
            <img
              src="/image-168w.png"
              srcSet="/image-168w.png 168w, /image-336w.png 336w"
              sizes="168px"
              width={48}
              height={32}
              alt="Codex Africa"
              className="h-8 w-auto"
              decoding="async"
            />
            <div className="leading-tight text-left">
              <div className="text-2xl font-black tracking-tighter text-white">CODEX</div>
              <div className="text-sm font-bold text-white/70">Codex Africa</div>
            </div>
          </div>

          <p className="text-sm font-bold">Copyright © 2026 Codex Africa, Inc.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
