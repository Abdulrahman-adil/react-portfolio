
import React, { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X } from 'lucide-react';

interface HeaderProps {
  theme: string;
  toggleTheme: () => void;
}

const Header: React.FC<HeaderProps> = ({ theme, toggleTheme }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navLinks = [
    { href: '#about', label: 'About' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' },
  ];

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-light-bg/80 dark:bg-light-navy/80 backdrop-blur-sm shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 sm:px-8 md:px-16 lg:px-24 xl:px-40 flex justify-between items-center h-20">
        <a href="#" className="text-2xl font-bold font-mono text-light-accent dark:text-accent tracking-tighter">
          AA
        </a>
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link, index) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href)}
              className="font-mono text-sm text-light-heading dark:text-lightest-slate hover:text-light-accent dark:hover:text-accent transition-colors duration-300"
            >
              <span className="text-light-accent dark:text-accent">0{index + 1}.</span> {link.label}
            </a>
          ))}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full text-light-accent dark:text-accent hover:bg-light-accent/10 dark:hover:bg-accent/10 transition-colors"
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </nav>
        <div className="md:hidden flex items-center">
           <button
            onClick={toggleTheme}
            className="p-2 mr-2 rounded-full text-light-accent dark:text-accent hover:bg-light-accent/10 dark:hover:bg-accent/10 transition-colors"
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-light-accent dark:text-accent z-50">
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed top-0 right-0 h-full w-3/4 bg-light-bg dark:bg-light-navy shadow-xl transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <nav className="flex flex-col items-center justify-center h-full space-y-8">
          {navLinks.map((link, index) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href)}
              className="font-mono text-lg text-light-heading dark:text-lightest-slate hover:text-light-accent dark:hover:text-accent transition-colors"
            >
               <span className="text-light-accent dark:text-accent block text-center mb-1">0{index + 1}.</span> {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
