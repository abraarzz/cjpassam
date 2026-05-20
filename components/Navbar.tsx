"use client";

import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-[#F4EBD7]/95 backdrop-blur-md border-b-2 border-[#1A1108]">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-[56px] py-4 grid grid-cols-[1fr_auto] lg:grid-cols-[auto_1fr_auto] items-center gap-4 lg:gap-[40px] transition-all">
        <div className="flex items-center gap-[14px] cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <div className="w-12 h-12 flex items-center justify-center">
            <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="w-full h-full">
              <circle cx="32" cy="32" r="29" fill="none" stroke="#E0651E" strokeWidth="3" strokeDasharray="46 1000" transform="rotate(-90 32 32)"></circle>
              <circle cx="32" cy="32" r="29" fill="none" stroke="#1F5A2E" strokeWidth="3" strokeDasharray="46 1000" transform="rotate(30 32 32)"></circle>
              <circle cx="32" cy="32" r="29" fill="none" stroke="#2A1A10" strokeWidth="0.8"></circle>
              <ellipse cx="32" cy="36" rx="11" ry="16" fill="#5A2F12"></ellipse>
              <ellipse cx="32" cy="25" rx="7" ry="6" fill="#5A2F12"></ellipse>
              <path d="M28 17 Q22 10 18 8 M36 17 Q42 10 46 8" stroke="#2A1A10" strokeWidth="1.6" fill="none" strokeLinecap="round"></path>
              <rect x="26" y="23" width="12" height="3.5" rx="1" fill="#0a0807"></rect>
            </svg>
          </div>
          <div className="flex flex-col gap-1.5 leading-none">
            <span className="font-display text-[16px] leading-[0.94] tracking-[0.01em] uppercase text-[#1A1108]">Cockroach<br/>Janta Party</span>
            <span className="font-mono text-[10px] text-[#B84915] tracking-[0.16em] uppercase flex flex-col sm:flex-row items-start sm:items-center gap-1.5 mt-1 sm:mt-0">
              <span className="bg-[#B84915] text-[#F4EBD7] px-1.5 py-0.5 rounded-sm font-bold shadow-[1px_1px_0_#1A1108] leading-none">ASSAM WING</span> 
              <span>ককৰোচ জনতা পাৰ্টি</span>
            </span>
          </div>
        </div>

        {/* Desktop Links */}
        <div className="hidden lg:flex justify-center">
          <ul className="flex items-center gap-[36px] font-condensed text-[14px] tracking-[0.18em] font-medium uppercase text-[#1A1108]">
            <li><a href="#vision" className="hover:text-[#B84915] py-1.5 transition-colors relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-[#E0651E] after:scale-x-0 overflow-hidden after:origin-left hover:after:scale-x-100 after:transition-transform">Vision</a></li>
            <li><a href="#manifesto" className="hover:text-[#B84915] py-1.5 transition-colors relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-[#E0651E] after:scale-x-0 overflow-hidden after:origin-left hover:after:scale-x-100 after:transition-transform">Manifesto</a></li>
            <li><a href="#join" className="hover:text-[#B84915] py-1.5 transition-colors relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-[#E0651E] after:scale-x-0 overflow-hidden after:origin-left hover:after:scale-x-100 after:transition-transform">Eligibility</a></li>
            <li><a href="#contact" className="hover:text-[#B84915] py-1.5 transition-colors relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-[#E0651E] after:scale-x-0 overflow-hidden after:origin-left hover:after:scale-x-100 after:transition-transform">Contact</a></li>
          </ul>
        </div>

        <button
          onClick={() => document.getElementById('join')?.scrollIntoView({ behavior: 'smooth' })}
          className="hidden lg:block bg-[#1A1108] hover:bg-[#B84915] text-[#F4EBD7] px-[22px] py-[12px] font-condensed text-[12px] font-semibold uppercase tracking-[0.2em] transition-all border-2 border-[#1A1108] hover:border-[#B84915] hover:-translate-y-[2px] hover:-translate-x-[2px] hover:shadow-[4px_4px_0_#1A1108] justify-self-end"
        >
          Join The Party
        </button>

        {/* Mobile Menu Button */}
        <button className="lg:hidden text-[#1A1108] p-2 border-2 border-[#1A1108] hover:bg-[#1A1108] hover:text-[#F4EBD7] transition-colors justify-self-end w-fit" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 right-0 bg-[#F4EBD7] border-b-2 border-x-0 lg:border-x-2 border-[#1A1108] flex flex-col font-condensed text-[14px] tracking-[0.18em] font-medium uppercase text-[#1A1108] lg:hidden">
          <a href="#vision" onClick={() => setIsOpen(false)} className="p-4 px-6 border-b-2 border-[#1A1108] hover:bg-[#E0651E] hover:text-white transition-colors">Vision</a>
          <a href="#manifesto" onClick={() => setIsOpen(false)} className="p-4 px-6 border-b-2 border-[#1A1108] hover:bg-[#E0651E] hover:text-white transition-colors">Manifesto</a>
          <a href="#join" onClick={() => setIsOpen(false)} className="p-4 px-6 border-b-2 border-[#1A1108] hover:bg-[#E0651E] hover:text-white transition-colors">Eligibility</a>
          <a href="#contact" onClick={() => setIsOpen(false)} className="p-4 px-6 border-b-2 border-[#1A1108] hover:bg-[#E0651E] hover:text-white transition-colors">Contact</a>
          <button
            onClick={() => {
              setIsOpen(false);
              document.getElementById('join')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="p-6 bg-[#1A1108] text-white hover:bg-[#B84915] transition-colors text-left"
          >
            Join The Party
          </button>
        </div>
      )}
    </nav>
  );
}
