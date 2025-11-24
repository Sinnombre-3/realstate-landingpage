import React, { useState, useEffect } from 'react';

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
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-brand-dark/90 backdrop-blur-sm' : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Left Zone: Identity */}
        <div className="flex flex-col">
          <a href="/" className="text-white text-3xl font-serif font-bold">
            NOMBRE APELLIDO
          </a>
          <span className="text-brand-secondary text-xs mt-1">
            Agente Asociado a Century 21
          </span>
        </div>

        {/* Center Zone: Navigation Links (Desktop) */}
        <div className="hidden lg:flex items-center space-x-8">
          <a href="/propiedades" className="text-white uppercase tracking-wider text-sm font-sans relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-white after:transition-all after:duration-300 hover:after:w-full">Propiedades</a>
          <a href="/vender" className="text-white uppercase tracking-wider text-sm font-sans relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-white after:transition-all after:duration-300 hover:after:w-full">Vender</a>
          <a href="/mi-enfoque" className="text-white uppercase tracking-wider text-sm font-sans relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-white after:transition-all after:duration-300 hover:after:w-full">Mi Enfoque</a>
          <a href="/blog" className="text-white uppercase tracking-wider text-sm font-sans relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-white after:transition-all after:duration-300 hover:after:w-full">Blog</a>
          <a href="/contacto" className="text-white uppercase tracking-wider text-sm font-sans relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-white after:transition-all after:duration-300 hover:after:w-full">Contacto</a>
        </div>

        {/* Right Zone: Action */}
        <div className="flex items-center">
          <a
            href="/valoracion-gratuita"
            className="hidden lg:block bg-brand-primary text-brand-dark font-sans font-semibold py-2 px-6 rounded-sm hover:bg-ui-hover transition-colors duration-300"
          >
            Valoración Gratuita
          </a>

          {/* Hamburger Menu (Mobile) */}
          <button
            className="lg:hidden text-white"
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
                strokeWidth={2}
                d={menuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}
              />
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu (Drawer) */}
      {menuOpen && (
        <div className="lg:hidden bg-brand-dark/95 backdrop-blur-sm py-4">
          <div className="container mx-auto px-6 flex flex-col space-y-4">
            <a href="/propiedades" className="text-white uppercase tracking-wider text-sm font-sans">Propiedades</a>
            <a href="/vender" className="text-white uppercase tracking-wider text-sm font-sans">Vender</a>
            <a href="/mi-enfoque" className="text-white uppercase tracking-wider text-sm font-sans">Mi Enfoque</a>
            <a href="/blog" className="text-white uppercase tracking-wider text-sm font-sans">Blog</a>
            <a href="/contacto" className="text-white uppercase tracking-wider text-sm font-sans">Contacto</a>
            <a
              href="/valoracion-gratuita"
              className="bg-brand-primary text-brand-dark font-sans font-semibold py-2 px-6 rounded-sm hover:bg-ui-hover transition-colors duration-300 text-center"
            >
              Valoración Gratuita
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;