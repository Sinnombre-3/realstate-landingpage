import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      data-testid="main-navbar"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-brand-dark/80 backdrop-blur-md border-b border-white/5 py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <nav className="container mx-auto px-6 flex justify-between items-center">
        {/* Left Zone: Identity */}
        <div className="flex flex-col group cursor-pointer">
          <a href="/" className="text-white text-3xl font-serif font-bold tracking-tight group-hover:text-brand-primary transition-colors duration-300">
            NOMBRE APELLIDO
          </a>
          <span className="text-brand-secondary text-xs mt-0.5 tracking-widest uppercase opacity-80 group-hover:opacity-100 transition-opacity">
            Agente Asociado a Century 21
          </span>
        </div>

        {/* Center Zone: Navigation Links (Desktop) */}
        <div className="hidden lg:flex items-center space-x-8">
          {['Propiedades', 'Vender', 'Mi Enfoque', 'Blog', 'Contacto'].map((item) => (
            <a 
              key={item}
              href={`/${item.toLowerCase().replace(' ', '-')}`} 
              className="text-white uppercase tracking-widest text-xs font-sans font-medium relative group py-2"
            >
              {item}
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-brand-primary transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>

        {/* Right Zone: Action */}
        <div className="flex items-center space-x-4">
          <a
            href="/valoracion-gratuita"
            className="hidden lg:block bg-brand-primary text-brand-dark font-sans font-bold text-xs uppercase tracking-widest py-3 px-6 rounded-sm hover:bg-white hover:text-brand-dark transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            Valoración Gratuita
          </a>

          {/* Hamburger Menu (Mobile) */}
          <button
            className="lg:hidden text-white focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d={menuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}
              />
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu (Drawer) */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="lg:hidden bg-brand-dark/95 backdrop-blur-xl border-t border-white/10 overflow-hidden"
          >
            <div className="container mx-auto px-6 py-8 flex flex-col space-y-6">
              {['Propiedades', 'Vender', 'Mi Enfoque', 'Blog', 'Contacto'].map((item) => (
                <a 
                  key={item}
                  href={`/${item.toLowerCase().replace(' ', '-')}`} 
                  className="text-white uppercase tracking-widest text-sm font-sans hover:text-brand-primary transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
              <a
                href="/valoracion-gratuita"
                className="bg-brand-primary text-brand-dark font-sans font-bold text-sm uppercase tracking-widest py-3 px-6 rounded-sm hover:bg-white transition-colors text-center"
                onClick={() => setMenuOpen(false)}
              >
                Valoración Gratuita
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;