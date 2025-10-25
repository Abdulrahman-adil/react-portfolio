
import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <footer className="relative py-8 text-center text-light-text dark:text-slate">
      <div className="container mx-auto px-6">
        <p className="font-mono text-sm">
          Designed & Built by Abdo Adel &copy; {new Date().getFullYear()}
        </p>
      </div>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 p-3 rounded-full bg-light-accent/20 dark:bg-accent/10 text-light-accent dark:text-accent hover:bg-light-accent/30 dark:hover:bg-accent/20 transition-all duration-300"
        >
          <ArrowUp size={24} />
        </button>
      )}
    </footer>
  );
};

export default Footer;
