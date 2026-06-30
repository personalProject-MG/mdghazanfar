import { useEffect, useState } from 'react';

const PageLoader: React.FC = () => {
  const [visible, setVisible] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Start fade-out after 1.8s
    const fadeTimer = setTimeout(() => setFadeOut(true), 1800);
    // Remove from DOM after fade completes
    const hideTimer = setTimeout(() => setVisible(false), 2300);
    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-slate-950 transition-opacity duration-500 ${
        fadeOut ? 'opacity-0' : 'opacity-100'
      }`}
    >
      {/* Background grid */}
      <div className='absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none' />

      {/* Glow blobs */}
      <div className='absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none animate-glow-slow' />
      <div className='absolute bottom-1/3 right-1/4 w-[350px] h-[350px] bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none animate-float-slow' />

      {/* Content */}
      <div className='relative z-10 flex flex-col items-center gap-6'>
        {/* Animated logo ring */}
        <div className='relative flex items-center justify-center'>
          {/* Spinning outer ring */}
          <svg
            className='absolute w-24 h-24 animate-spin'
            style={{ animationDuration: '2s' }}
            viewBox='0 0 96 96'
            fill='none'
          >
            <circle
              cx='48'
              cy='48'
              r='44'
              stroke='url(#loaderGradient)'
              strokeWidth='3'
              strokeLinecap='round'
              strokeDasharray='60 220'
            />
            <defs>
              <linearGradient id='loaderGradient' x1='0' y1='0' x2='96' y2='96' gradientUnits='userSpaceOnUse'>
                <stop offset='0%' stopColor='#10b981' />
                <stop offset='100%' stopColor='#06b6d4' />
              </linearGradient>
            </defs>
          </svg>

          {/* Inner circle with initials */}
          <div className='w-16 h-16 rounded-full bg-gradient-to-br from-emerald-500 to-cyan-500 flex items-center justify-center shadow-lg shadow-emerald-500/30'>
            <span className='text-white text-xl font-black tracking-tight'>MGA</span>
          </div>
        </div>

        {/* Name */}
        <div className='text-center'>
          <h1 className='text-2xl font-black tracking-tight bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent'>
            Md Ghazanfar Alam
          </h1>
          <p className='text-sm text-gray-500 mt-1 font-medium tracking-widest uppercase'>
            Gen AI &amp; Agentic AI Specialist
          </p>
        </div>

        {/* Loading bar */}
        <div className='w-48 h-0.5 bg-slate-800 rounded-full overflow-hidden'>
          <div
            className='h-full bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full animate-loading-bar'
          />
        </div>
      </div>
    </div>
  );
};

export default PageLoader;
