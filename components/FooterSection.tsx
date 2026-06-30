import React from 'react';
import Link from 'next/link';
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaEnvelope,
} from 'react-icons/fa';
import {
  SiMongodb,
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
} from 'react-icons/si';

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
];

const socialLinks = [
  {
    href: 'https://www.linkedin.com/in/mdghazanfar/',
    icon: <FaLinkedin />,
    label: 'LinkedIn',
    hoverClass: 'hover:text-blue-400',
  },
  {
    href: 'https://github.com/mdghazanfar',
    icon: <FaGithub />,
    label: 'GitHub',
    hoverClass: 'hover:text-gray-300',
  },
  {
    href: 'https://instagram.com',
    icon: <FaInstagram />,
    label: 'Instagram',
    hoverClass: 'hover:text-pink-400',
  },
  {
    href: 'mailto:ghazanfaralam642786@gmail.com',
    icon: <FaEnvelope />,
    label: 'Email',
    hoverClass: 'hover:text-emerald-400',
  },
];

const techStack = [
  { icon: <SiNextdotjs className='text-gray-300' />, label: 'Next.js' },
  { icon: <SiTypescript className='text-blue-400' />, label: 'TypeScript' },
  { icon: <SiTailwindcss className='text-teal-400' />, label: 'Tailwind CSS' },
  { icon: <SiMongodb className='text-green-500' />, label: 'MongoDB' },
];

const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer className='bg-gray-950 text-gray-400 border-t border-slate-800/60'>
      <div className='max-w-7xl mx-auto px-6 py-10'>
        {/* Top Row */}
        <div className='flex flex-col md:flex-row justify-between items-start gap-8 mb-8'>
          {/* Branding */}
          <div className='max-w-xs'>
            <h2 className='text-lg font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent mb-2'>
              Md Ghazanfar Alam
            </h2>
            <p className='text-sm leading-relaxed text-gray-500'>
              Associate Engineer specializing in Generative AI, Agentic AI, and Google Cloud ML deployments.
            </p>
          </div>

          {/* Quick Nav */}
          <div>
            <h3 className='text-xs font-bold uppercase tracking-widest text-gray-550 mb-3'>Navigation</h3>
            <ul className='space-y-2'>
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className='text-sm text-gray-400 hover:text-emerald-400 hover:translate-x-1 inline-block transition-all duration-300'
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className='text-xs font-bold uppercase tracking-widest text-gray-550 mb-3'>Connect</h3>
            <div className='flex gap-3'>
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target='_blank'
                  rel='noopener noreferrer'
                  aria-label={s.label}
                  className={`flex items-center justify-center w-10 h-10 rounded-xl bg-slate-900/60 hover:bg-slate-900 border border-slate-850 hover:border-slate-700 text-xl text-gray-400 ${s.hoverClass} hover:scale-110 hover:-rotate-6 hover:shadow-lg hover:shadow-emerald-500/5 transition-all duration-300`}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className='border-t border-slate-800/60 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4'>
          {/* Copyright */}
          <p className='text-xs text-gray-600'>
            © {year} <span className='text-gray-400 font-semibold'>Md Ghazanfar Alam</span>. All rights reserved.
          </p>

          {/* Tech stack */}
          <div className='flex items-center gap-2.5 text-xs text-gray-600'>
            <span>Crafted with ❤️ using</span>
            {techStack.map((t) => (
              <span key={t.label} className='text-base hover:scale-125 hover:rotate-12 transition-transform duration-200 cursor-help' title={t.label}>
                {t.icon}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
