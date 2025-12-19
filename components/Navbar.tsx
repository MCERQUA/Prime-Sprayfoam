
import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed w-full z-[100] transition-all duration-300 ${
        isScrolled ? 'bg-black/95 backdrop-blur-md border-b border-gray-800 h-20' : 'bg-transparent h-24'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex items-center justify-between h-full">
          {/* Logo Area */}
          <div className="flex-shrink-0 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="flex items-center gap-3">
               <img
                 src="/images/prime-spray-foam-logo.png"
                 alt="Prime Spray Foam Logo"
                 className="h-10 md:h-12 w-auto"
               />
               <h1 className="text-xl md:text-2xl font-display font-black italic tracking-tighter uppercase leading-none">
                  PRIME <span className="text-prime-blue">SPRAY FOAM</span>
               </h1>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              <a href="#services" className="text-white hover:text-prime-blue transition-colors text-sm font-bold uppercase tracking-widest">Services</a>
              <a href="#benefits" className="text-white hover:text-prime-blue transition-colors text-sm font-bold uppercase tracking-widest">Why Foam?</a>
              <a href="#contact" className="bg-prime-blue text-black hover:bg-white hover:scale-105 transition-all duration-300 px-6 py-2.5 rounded-sm font-bold uppercase text-sm shadow-[0_0_15px_rgba(0,191,255,0.4)]">
                Get a Quote
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-white hover:text-prime-blue focus:outline-none transition-colors"
            >
              <i className={`fa-solid ${isMenuOpen ? 'fa-times' : 'fa-bars-staggered'} text-2xl`}></i>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      <div className={`fixed inset-0 bg-black z-[-1] transition-transform duration-500 md:hidden ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col items-center justify-center h-full space-y-10">
          <a href="#services" onClick={() => setIsMenuOpen(false)} className="text-3xl font-display font-black italic hover:text-prime-blue transition-colors uppercase">Services</a>
          <a href="#benefits" onClick={() => setIsMenuOpen(false)} className="text-3xl font-display font-black italic hover:text-prime-blue transition-colors uppercase">Why Foam?</a>
          <a href="#contact" onClick={() => setIsMenuOpen(false)} className="text-3xl font-display font-black italic hover:text-prime-blue transition-colors uppercase">Contact</a>
          <a 
            href="tel:+12705718100" 
            className="bg-prime-blue text-black px-10 py-4 rounded-sm font-bold uppercase text-xl"
          >
            Call Now
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
