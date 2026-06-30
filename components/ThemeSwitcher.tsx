import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';

const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Prevent rendering until mounted on the client
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // Render nothing on the server

  const isDark = theme === 'dark';

  return (
    <button
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      aria-label='Toggle theme'
      className='relative p-2.5 rounded-full border border-gray-250 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm text-gray-700 dark:text-yellow-400 hover:text-emerald-500 dark:hover:text-yellow-300 hover:scale-110 active:scale-95 transition-all duration-300 shadow-sm hover:shadow-md cursor-pointer overflow-hidden group'
    >
      {/* Spin transition on hover */}
      <span className='block transition-transform duration-500 group-hover:rotate-[360deg]'>
        {isDark ? (
          <FaSun className='w-4 h-4' />
        ) : (
          <FaMoon className='w-4 h-4 text-slate-700 dark:text-slate-200' />
        )}
      </span>
    </button>
  );
};

export default ThemeSwitcher;
