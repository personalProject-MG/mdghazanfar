import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import ThemeSwitcher from './ThemeSwitcher';
import { FaBars, FaTimes } from 'react-icons/fa';

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#certifications', label: 'Certifications' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLElement>(null);

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent | TouchEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setMenuOpen(false);
      }
    };
    if (menuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('touchstart', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [menuOpen]);

  return (
    <nav ref={menuRef} className='bg-white/85 dark:bg-slate-950/85 backdrop-blur-md border-b border-gray-200/50 dark:border-slate-800/50 text-gray-900 dark:text-gray-100 sticky top-0 z-50 transition-colors duration-300'>
      <div className='container mx-auto flex items-center justify-between p-4 max-w-7xl'>
        {/* Logo */}
        <Link href='#home' className='flex items-center gap-2.5 group cursor-pointer'>
          <img
            src='/Image/logo.png'
            alt='MGA Logo'
            className='w-10 h-10 rounded-xl object-cover border border-emerald-500/20 shadow-md shadow-emerald-550/10 group-hover:scale-105 group-hover:border-emerald-500/40 group-hover:shadow-emerald-500/20 transition-all duration-300'
          />
          <span className='text-2xl font-black tracking-wider bg-gradient-to-r from-emerald-500 to-cyan-500 bg-clip-text text-transparent group-hover:text-emerald-500 transition-colors duration-300'>
            MGA
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className='hidden md:flex space-x-6 font-medium'>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className='hover:text-emerald-500 transition-colors duration-200'
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Right: Theme switcher + hamburger */}
        <div className='flex items-center space-x-3'>
          <ThemeSwitcher />
          <button
            className='md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-slate-800 transition-colors duration-200'
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          >
            {menuOpen ? (
              <FaTimes className='w-5 h-5' />
            ) : (
              <FaBars className='w-5 h-5' />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className='md:hidden animate-slideDown border-t border-gray-200/50 dark:border-slate-800/50 bg-white/95 dark:bg-slate-950/95 backdrop-blur-md'>
          <ul className='flex flex-col px-4 py-3 space-y-1'>
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className='block py-2.5 px-3 rounded-lg font-medium text-gray-700 dark:text-gray-300 hover:text-emerald-500 dark:hover:text-emerald-400 hover:bg-emerald-50 dark:hover:bg-emerald-950/20 transition-all duration-150'
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
