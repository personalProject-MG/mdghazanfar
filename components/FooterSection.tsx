import React from 'react';
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaEnvelope,
  FaReact,
  FaNode,
  FaDatabase,
  FaJs,
  FaCss3Alt,
} from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className='bg-gray-900 text-gray-100 py-6'>
      <div className='max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center'>
        {/* Left Section */}
        <div className='text-center md:text-left mb-4 md:mb-0'>
          <p className='text-sm'>
            © 2024 <span className='font-semibold'>Md Ghazanfar Alam</span>
          </p>
          <p className='text-sm'>
            Crafted with ❤️ using modern web technologies.
          </p>
        </div>

        {/* Middle Section */}
        <div className='flex space-x-4 text-lg'>
          <a
            href='https://linkedin.com'
            target='_blank'
            rel='MGA'
            className='hover:text-blue-500'
            aria-label='LinkedIn'
          >
            <FaLinkedin />
          </a>
          <a
            href='https://github.com'
            target='_blank'
            rel='noopener noreferrer'
            className='hover:text-gray-400'
            aria-label='GitHub'
          >
            <FaGithub />
          </a>
          <a
            href='https://instagram.com'
            target='_blank'
            rel='noopener noreferrer'
            className='hover:text-pink-500'
            aria-label='Instagram'
          >
            <FaInstagram />
          </a>
          <a
            href='mailto:your-email@example.com'
            className='hover:text-red-500'
            aria-label='Email'
          >
            <FaEnvelope />
          </a>
        </div>

        {/* Right Section */}
        <div className='flex space-x-2 text-lg mt-4 md:mt-0'>
          <FaJs className='text-yellow-500' aria-label='JavaScript' />
          <FaReact className='text-blue-400' aria-label='React' />
          <FaNode className='text-green-500' aria-label='Node.js' />
          <FaDatabase className='text-gray-500' aria-label='MongoDB' />
          <FaCss3Alt className='text-blue-500' aria-label='CSS' />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
