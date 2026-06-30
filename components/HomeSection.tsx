// components/HomeSection.tsx
import Head from 'next/head';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGithub,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const HomeSection = () => (
  <section
    id='home'
    className='relative min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-slate-950 dark:to-slate-900 text-gray-900 dark:text-gray-100 flex flex-col justify-center items-center overflow-hidden transition-colors duration-300'
  >
    <Head>
      <title>Md Ghazanfar Alam - Gen AI & Agentic AI Specialist</title>
      <meta
        name='description'
        content='Portfolio of Md Ghazanfar Alam, Gen AI & Agentic AI Specialist, Google Cloud ML Engineer'
      />
      <link rel='icon' href='/favicon.ico' />
    </Head>

    {/* Background Grid Pattern */}
    <div className='absolute inset-0 bg-grid-pattern opacity-60 pointer-events-none z-0'></div>

    {/* Background Decorative Blobs */}
    <div className='absolute top-1/4 left-1/4 w-[280px] h-[280px] md:w-[500px] md:h-[500px] bg-emerald-500/15 dark:bg-emerald-500/10 rounded-full blur-[80px] md:blur-[120px] pointer-events-none z-0 animate-glow-slow'></div>
    <div className='absolute bottom-1/4 right-1/4 w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-cyan-500/15 dark:bg-cyan-500/10 rounded-full blur-[90px] md:blur-[140px] pointer-events-none z-0 animate-float-slow'></div>
    <div className='absolute top-1/3 right-1/3 w-[200px] h-[200px] md:w-[300px] md:h-[300px] bg-purple-500/10 dark:bg-indigo-500/5 rounded-full blur-[60px] md:blur-[90px] pointer-events-none z-0 animate-float-reverse'></div>

    {/* Decorative Floating Tech Graphics */}
    <div className='absolute left-12 top-1/4 opacity-25 dark:opacity-20 animate-float-slow pointer-events-none z-0 hidden lg:block text-slate-350 dark:text-slate-700'>
      <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="50" r="6" fill="#10B981" />
        <circle cx="150" cy="70" r="4" fill="#06B6D4" />
        <circle cx="100" cy="150" r="8" fill="#6366F1" />
        <line x1="50" y1="50" x2="150" y2="70" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
        <line x1="150" y1="70" x2="100" y2="150" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
        <line x1="100" y1="150" x2="50" y2="50" stroke="currentColor" strokeWidth="1" />
      </svg>
    </div>
    
    <div className='absolute right-12 bottom-1/4 opacity-25 dark:opacity-20 animate-float-reverse pointer-events-none z-0 hidden lg:block text-slate-350 dark:text-slate-700'>
      <svg width="220" height="220" viewBox="0 0 220 220" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="60" cy="160" r="5" fill="#06B6D4" />
        <circle cx="160" cy="140" r="7" fill="#10B981" />
        <circle cx="110" cy="40" r="4" fill="#6366F1" />
        <line x1="60" y1="160" x2="160" y2="140" stroke="currentColor" strokeWidth="1" />
        <line x1="160" y1="140" x2="110" y2="40" stroke="currentColor" strokeWidth="1" strokeDasharray="5 5" />
        <line x1="110" y1="40" x2="60" y2="160" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" />
      </svg>
    </div>

    <div className='container mx-auto px-6 text-center z-10 max-w-4xl'>
      <span className='px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-emerald-100 text-emerald-800 dark:bg-emerald-950/50 dark:text-emerald-400 border border-emerald-200/50 dark:border-emerald-800/30'>
        Available for AI Opportunities
      </span>
      <h1 className='text-4xl md:text-6xl font-bold mt-6 tracking-tight'>
        Hello! I am
      </h1>
      <h2 className='text-4xl sm:text-5xl md:text-8xl font-black mt-3 tracking-tight bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 bg-clip-text text-transparent pb-2'>
        Md Ghazanfar Alam
      </h2>
      <p className='mt-8 text-lg md:text-2xl font-medium text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed'>
        Specializing in <span className='text-emerald-500 font-semibold'>Generative AI</span>,{' '}
        <span className='text-teal-500 font-semibold'>Agentic AI Frameworks</span>, and{' '}
        <span className='text-cyan-500 font-semibold'>Google Cloud ML Deployments</span>.
      </p>

      {/* Stats */}
      <div className='flex flex-wrap justify-center gap-6 mt-10'>
        <div className='flex flex-col items-center px-6 py-3 bg-white/60 dark:bg-slate-900/60 backdrop-blur-sm rounded-2xl border border-gray-200/50 dark:border-slate-800/50 shadow-sm hover:-translate-y-1 hover:shadow-md hover:border-emerald-500/30 dark:hover:border-emerald-500/20 transition-all duration-300 cursor-default group'>
          <span className='text-2xl font-black bg-gradient-to-r from-emerald-500 to-cyan-500 bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300'>3+</span>
          <span className='text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mt-0.5'>Years Experience</span>
        </div>
        <div className='flex flex-col items-center px-6 py-3 bg-white/60 dark:bg-slate-900/60 backdrop-blur-sm rounded-2xl border border-gray-200/50 dark:border-slate-800/50 shadow-sm hover:-translate-y-1 hover:shadow-md hover:border-emerald-500/30 dark:hover:border-emerald-500/20 transition-all duration-300 cursor-default group'>
          <span className='text-2xl font-black bg-gradient-to-r from-emerald-500 to-cyan-500 bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300'>4</span>
          <span className='text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mt-0.5'>GCP Certifications</span>
        </div>
        <div className='flex flex-col items-center px-6 py-3 bg-white/60 dark:bg-slate-900/60 backdrop-blur-sm rounded-2xl border border-gray-200/50 dark:border-slate-800/50 shadow-sm hover:-translate-y-1 hover:shadow-md hover:border-emerald-500/30 dark:hover:border-emerald-500/20 transition-all duration-300 cursor-default group'>
          <span className='text-2xl font-black bg-gradient-to-r from-emerald-500 to-cyan-500 bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300'>5+</span>
          <span className='text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mt-0.5'>AI Projects</span>
        </div>
      </div>
      
      <div className='flex flex-wrap justify-center mt-10 gap-4'>
        <a
          href='/resume.pdf'
          target='_blank'
          rel='noopener noreferrer'
          className='bg-emerald-500 text-white px-8 py-3.5 rounded-xl font-semibold shadow-lg shadow-emerald-500/25 hover:bg-emerald-600 hover:shadow-emerald-600/30 transition-all duration-300 transform hover:-translate-y-0.5 btn-shine-effect'
        >
          Get Resume
        </a>
        <a
          href='#about'
          className='border border-gray-300 dark:border-slate-700 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm text-gray-800 dark:text-gray-200 px-8 py-3.5 rounded-xl font-semibold hover:bg-gray-50 dark:hover:bg-slate-800/80 transition-all duration-300 transform hover:-translate-y-0.5 btn-shine-effect'
        >
          About Me
        </a>
      </div>

      {/* Social Icons for Mobile */}
      <div className='flex md:hidden justify-center mt-10'>
        <ul className='flex gap-6 justify-center items-center bg-white/40 dark:bg-slate-900/40 backdrop-blur-md px-6 py-3 rounded-full border border-gray-200/50 dark:border-slate-800/50 shadow-md'>
          <li>
            <a
              href='https://github.com/mdghazanfar'
              target='_blank'
              rel='noopener noreferrer'
              className='text-gray-500 hover:text-emerald-500 dark:text-gray-400 dark:hover:text-emerald-400 transition-colors duration-200'
              aria-label='GitHub'
            >
              <FontAwesomeIcon icon={faGithub} className='w-6 h-6' />
            </a>
          </li>
          <li>
            <a
              href='https://www.linkedin.com/in/mdghazanfar/'
              target='_blank'
              rel='noopener noreferrer'
              className='text-gray-500 hover:text-emerald-500 dark:text-gray-400 dark:hover:text-emerald-400 transition-colors duration-200'
              aria-label='LinkedIn'
            >
              <FontAwesomeIcon icon={faLinkedin} className='w-6 h-6' />
            </a>
          </li>
          <li>
            <a
              href='mailto:ghazanfaralam642786@gmail.com'
              className='text-gray-500 hover:text-emerald-500 dark:text-gray-400 dark:hover:text-emerald-400 transition-colors duration-200'
              aria-label='Email'
            >
              <FontAwesomeIcon icon={faEnvelope} className='w-6 h-6' />
            </a>
          </li>
        </ul>
      </div>
    </div>

    {/* Side Social Panel (Desktop Only) */}
    <div className='hidden md:block absolute left-8 top-1/2 -translate-y-1/2 z-20'>
      <ul className='flex flex-col gap-6 justify-center items-center bg-white/40 dark:bg-slate-900/40 backdrop-blur-md px-3 py-6 rounded-full border border-gray-200/50 dark:border-slate-800/50 shadow-md'>
        <li>
          <a
            href='https://github.com/mdghazanfar'
            target='_blank'
            rel='noopener noreferrer'
            className='text-gray-500 hover:text-emerald-500 dark:text-gray-400 dark:hover:text-emerald-400 transition-colors duration-200'
            aria-label='GitHub'
          >
            <FontAwesomeIcon icon={faGithub} className='w-6 h-6' />
          </a>
        </li>
        <li>
          <a
            href='https://www.linkedin.com/in/mdghazanfar/'
            target='_blank'
            rel='noopener noreferrer'
            className='text-gray-500 hover:text-emerald-500 dark:text-gray-400 dark:hover:text-emerald-400 transition-colors duration-200'
            aria-label='LinkedIn'
          >
            <FontAwesomeIcon icon={faLinkedin} className='w-6 h-6' />
          </a>
        </li>
        <li>
          <a
            href='mailto:ghazanfaralam642786@gmail.com'
            className='text-gray-500 hover:text-emerald-500 dark:text-gray-400 dark:hover:text-emerald-400 transition-colors duration-200'
            aria-label='Email'
          >
            <FontAwesomeIcon icon={faEnvelope} className='w-6 h-6' />
          </a>
        </li>
      </ul>
    </div>
  </section>
);

export default HomeSection;
