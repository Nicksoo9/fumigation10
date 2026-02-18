import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Truck } from 'lucide-react';
import { Button } from './ui/button';
import { motion, AnimatePresence } from 'motion/react';
import { Link, useLocation, useNavigate } from 'react-router';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === '/';

  const toggleMenu = () => setIsOpen(!isOpen);

  // Handle scrolling to hash on page load
  useEffect(() => {
    if (location.hash) {
      setTimeout(() => {
        const element = document.querySelector(location.hash);
        if (element) {
          const headerOffset = 80;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
          
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }, 100);
    }
  }, [location]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    
    if (href === '#') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    
    if (!isHomePage) {
      // Navigate to home page with hash
      navigate('/' + href);
    } else {
      // Already on home page, just scroll
      const element = document.querySelector(href);
      if (element) {
        const headerOffset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
  };

  const navItems = [
    { name: 'Home', href: '/', isLink: true },
    { name: 'Services', href: '#services', isLink: false },
    { name: 'About Us', href: '/about', isLink: true },
    { name: 'Testimonials', href: '#testimonials', isLink: false },
    { name: 'Contact', href: '#contact', isLink: false },
  ];

  return (
    <header className="fixed w-full bg-white/95 backdrop-blur-sm z-50 shadow-sm">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0 flex items-center gap-2 cursor-pointer">
            <div className="bg-blue-600 p-2 rounded-lg text-white">
              <Truck size={24} />
            </div>
            <span className="font-bold text-xl text-gray-900">Daily Movers Fumigation</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              item.isLink ? (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-gray-600 hover:text-blue-600 font-medium transition-colors"
                >
                  {item.name}
                </Link>
              ) : (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="text-gray-600 hover:text-blue-600 font-medium transition-colors"
                >
                  {item.name}
                </a>
              )
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <div className="flex items-center gap-2 text-gray-600">
              <Phone size={18} />
              <span className="font-semibold">0717629399</span>
            </div>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white" onClick={() => window.open('https://wa.me/254717629399?text=Hello%20Daily%20Movers%2C%20I%20would%20like%20to%20get%20a%20free%20quote', '_blank')}>
              Get a Quote
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-gray-600 hover:text-gray-900 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t"
          >
            <div className="px-4 pt-2 pb-6 space-y-2">
              {navItems.map((item) => (
                item.isLink ? (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={() => setIsOpen(false)}
                    className="block px-3 py-3 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                  >
                    {item.name}
                  </Link>
                ) : (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className="block px-3 py-3 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                  >
                    {item.name}
                  </a>
                )
              ))}
              <div className="mt-4 pt-4 border-t border-gray-100">
                <div className="flex items-center gap-2 text-gray-600 mb-4 px-3">
                  <Phone size={18} />
                  <span className="font-semibold">0717629399</span>
                </div>
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white" onClick={() => window.open('https://wa.me/254717629399?text=Hello%20Daily%20Movers%2C%20I%20would%20like%20to%20get%20a%20free%20quote', '_blank')}>
                  Get a Quote
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}