import { useState, useEffect } from 'react';
import { FaQuoteLeft, FaQuoteRight, FaSyncAlt, FaRobot, FaLightbulb, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import NoImageAvilable from '../public/Image/NoImage.png';

import SteveJobs from '../public/Image/steve-jobs.jpg';
import MahatmaGandhi from '../public/Image/gandhi.jpg';
import AlbertEinstein from '../public/Image/albertEinstein.jpg';
import WilliamButler from '../public/Image/williamButler.jpg';
import ThomasEdison from '../public/Image/ThomasEdison.jpg';
import EleanorRoosevelt from '../public/Image/eleanorRoosevelt.jpg';
import Confucius from '../public/Image/Confucius.jpg';
import HenryFord from '../public/Image/HenryFord.jpg';
import RalphWaldo from '../public/Image/RalphWaldo.jpg';

type StaticQuote = {
  text: string;
  author: string;
  image: any;
};

const InspiringQuotes: React.FC = () => {
  // Curated static quotes as backups/secondary slide list
  const staticQuotes: StaticQuote[] = [
    {
      text: 'Your time is limited, so don’t waste it living someone else’s life.',
      author: 'Steve Jobs',
      image: SteveJobs,
    },
    {
      text: 'Be the change that you wish to see in the world.',
      author: 'Mahatma Gandhi',
      image: MahatmaGandhi,
    },
    {
      text: 'In the middle of every difficulty lies opportunity.',
      author: 'Albert Einstein',
      image: AlbertEinstein,
    },
    {
      text: 'Do not wait to strike till the iron is hot, but make it hot by striking.',
      author: 'William Butler Yeats',
      image: WilliamButler,
    },
    {
      text: "I have not failed. I've just found 10,000 ways that won't work.",
      author: 'Thomas Edison',
      image: ThomasEdison,
    },
  ];

  // Dynamic Quote State
  const [dynamicQuote, setDynamicQuote] = useState<{ text: string; author: string; category: string } | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [isRotating, setIsRotating] = useState(false);
  const [staticIndex, setStaticIndex] = useState(0);

  // Fetch Dynamic Quote from Gemini API
  const fetchDynamicQuote = async () => {
    setIsGenerating(true);
    setIsRotating(true);
    try {
      const response = await fetch('/api/ai/quote');
      if (!response.ok) throw new Error('API request failed');
      const data = await response.json();
      setDynamicQuote(data);
    } catch (err) {
      console.error('Failed to fetch dynamic quote:', err);
      // Fallback
      setDynamicQuote({
        text: 'The best way to predict the future is to invent it.',
        author: 'Alan Kay',
        category: 'Innovation',
      });
    } finally {
      setIsGenerating(false);
      // Stop rotation animation shortly after
      setTimeout(() => setIsRotating(false), 600);
    }
  };

  useEffect(() => {
    fetchDynamicQuote();
  }, []);

  const nextStatic = () => {
    setStaticIndex((prev) => (prev === staticQuotes.length - 1 ? 0 : prev + 1));
  };

  const prevStatic = () => {
    setStaticIndex((prev) => (prev === 0 ? staticQuotes.length - 1 : prev - 1));
  };

  return (
    <section
      id='quotes'
      className='relative py-24 bg-gray-50 dark:bg-slate-950 text-gray-900 dark:text-gray-100 transition-colors duration-300 overflow-hidden'
    >
      {/* Background Grid Pattern */}
      <div className='absolute inset-0 bg-grid-pattern opacity-45 pointer-events-none z-0'></div>

      {/* Decorative Blobs */}
      <div className='absolute top-1/4 left-10 w-[250px] h-[250px] md:w-[400px] md:h-[400px] bg-purple-500/10 dark:bg-purple-500/5 rounded-full blur-[80px] md:blur-[120px] pointer-events-none z-0 animate-glow-slow'></div>
      <div className='absolute bottom-1/4 right-10 w-[220px] h-[220px] md:w-[350px] md:h-[350px] bg-emerald-500/10 dark:bg-emerald-500/5 rounded-full blur-[70px] md:blur-[100px] pointer-events-none z-0 animate-float-slow'></div>

      <div className='container mx-auto px-6 max-w-6xl relative z-10'>
        {/* Section Header */}
        <div className='text-center max-w-2xl mx-auto mb-16'>
          <div className='inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-semibold bg-emerald-100 dark:bg-emerald-950/40 text-emerald-800 dark:text-emerald-400 border border-emerald-200/30 w-fit mb-4'>
            <FaLightbulb className='w-3.5 h-3.5 text-emerald-500 animate-pulse' />
            <span>Interactive Quote Generator</span>
          </div>
          <h2 className='text-3xl sm:text-5xl font-black tracking-tight'>
            Tech Wisdom & AI Insights
          </h2>
          <p className='mt-4 text-gray-600 dark:text-gray-400'>
            Explore static quotes or generate real-time AI thoughts and tech wisdom dynamically using Google Gemini.
          </p>
        </div>

        {/* Dashboard Grid Layout */}
        <div className='grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch'>
          
          {/* Left Column: Dynamic LLM Quote Generator (7 Cols) */}
          <div className='lg:col-span-7 flex flex-col justify-between relative bg-white dark:bg-slate-900 rounded-3xl border border-gray-200/60 dark:border-slate-800/80 shadow-xl p-8 md:p-10 overflow-hidden hover:-translate-y-1 hover:shadow-2xl hover:shadow-emerald-500/5 hover:border-emerald-500/30 dark:hover:border-emerald-500/20 transition-all duration-500 group/card min-h-[400px]'>
            {/* Shifting Gradient Top Bar */}
            <div className='absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500'></div>
            
            {/* Background Floating Decorative Quotes */}
            <FaQuoteLeft className='absolute top-6 left-6 text-8xl text-emerald-500/5 dark:text-emerald-400/5 pointer-events-none z-0' />
            <FaQuoteRight className='absolute bottom-6 right-8 text-8xl text-cyan-500/5 dark:text-cyan-400/5 pointer-events-none z-0' />

            <div className='relative z-10 flex flex-col items-start w-full h-full justify-between'>
              {/* Header Info */}
              <div className='flex items-center justify-between w-full mb-6'>
                <span className='px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-purple-100 dark:bg-purple-950/40 text-purple-800 dark:text-purple-400 border border-purple-200/20'>
                  {isGenerating ? 'Analyzing...' : dynamicQuote?.category || 'AI Insight'}
                </span>
                
                <button
                  onClick={fetchDynamicQuote}
                  disabled={isGenerating}
                  className='inline-flex items-center gap-2 text-xs font-semibold text-emerald-600 dark:text-emerald-400 hover:text-emerald-500 transition-colors py-1.5 px-3 rounded-lg bg-emerald-50 dark:bg-emerald-950/20 hover:bg-emerald-100 dark:hover:bg-emerald-950/40 disabled:opacity-50'
                >
                  <FaSyncAlt className={`w-3 h-3 ${isRotating ? 'animate-spin' : ''}`} />
                  Generate Live AI Insight
                </button>
              </div>

              {/* Quote Body */}
              <div className='my-auto py-4 min-h-[140px] flex flex-col justify-center w-full'>
                {isGenerating ? (
                  <div className='space-y-4 animate-pulse w-full'>
                    <div className='h-4 bg-gray-200 dark:bg-slate-800 rounded-md w-11/12'></div>
                    <div className='h-4 bg-gray-200 dark:bg-slate-800 rounded-md w-full'></div>
                    <div className='h-4 bg-gray-200 dark:bg-slate-800 rounded-md w-4/5'></div>
                  </div>
                ) : (
                  <p className='text-xl md:text-2xl font-serif font-medium text-gray-800 dark:text-slate-100 leading-relaxed italic'>
                    &ldquo;{dynamicQuote?.text}&rdquo;
                  </p>
                )}
              </div>

              {/* Footer Info */}
              <div className='w-full border-t border-gray-150 dark:border-slate-800/80 pt-6 mt-6 flex items-center gap-4'>
                <div className='flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-tr from-emerald-500 to-cyan-500 flex items-center justify-center text-white shadow-md'>
                  <FaRobot className='w-6 h-6 animate-pulse' />
                </div>
                <div>
                  {isGenerating ? (
                    <div className='h-4 bg-gray-200 dark:bg-slate-800 rounded-md w-24 animate-pulse'></div>
                  ) : (
                    <>
                      <p className='text-sm font-bold text-gray-900 dark:text-white'>{dynamicQuote?.author}</p>
                      <p className='text-xs text-gray-500 dark:text-gray-400'>Powered by Gemini LLM API</p>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Classic Curated Quotes Carousel (5 Cols) */}
          <div className='lg:col-span-5 flex flex-col justify-between bg-white dark:bg-slate-900 rounded-3xl border border-gray-200/60 dark:border-slate-800/80 shadow-xl p-8 md:p-10 hover:-translate-y-1 hover:shadow-2xl hover:shadow-cyan-500/5 hover:border-cyan-500/30 dark:hover:border-cyan-500/20 transition-all duration-500 min-h-[400px] relative overflow-hidden'>
            <div className='absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 via-teal-500 to-emerald-500'></div>
            
            <div className='flex items-center justify-between mb-6'>
              <span className='px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-cyan-100 dark:bg-cyan-950/40 text-cyan-800 dark:text-cyan-400 border border-cyan-200/20'>
                Classic Wisdom
              </span>
              <div className='flex items-center gap-1.5'>
                <button
                  onClick={prevStatic}
                  aria-label='Previous Quote'
                  className='p-1.5 rounded-full hover:bg-gray-100 dark:hover:bg-slate-800 border border-gray-200/50 dark:border-slate-800 text-gray-600 dark:text-gray-400 transition-colors'
                >
                  <FaChevronLeft className='w-3 h-3' />
                </button>
                <button
                  onClick={nextStatic}
                  aria-label='Next Quote'
                  className='p-1.5 rounded-full hover:bg-gray-100 dark:hover:bg-slate-800 border border-gray-200/50 dark:border-slate-800 text-gray-600 dark:text-gray-400 transition-colors'
                >
                  <FaChevronRight className='w-3 h-3' />
                </button>
              </div>
            </div>

            <div className='my-auto py-4 flex flex-col items-center text-center'>
              <div className='relative mb-5 group/avatar cursor-pointer'>
                <div className='absolute -inset-1.5 bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-full blur opacity-25 group-hover/avatar:opacity-50 group-hover/avatar:scale-105 transition-all duration-500'></div>
                <img
                  src={staticQuotes[staticIndex].image.src}
                  alt={staticQuotes[staticIndex].author}
                  loading='lazy'
                  onError={(e) => (e.currentTarget.src = NoImageAvilable.src)}
                  className='relative w-20 h-20 rounded-full object-cover border-2 border-white dark:border-slate-800 shadow-md transition-transform duration-500'
                />
              </div>

              <p className='text-base md:text-lg text-gray-700 dark:text-slate-200 italic leading-relaxed px-4'>
                &ldquo;{staticQuotes[staticIndex].text}&rdquo;
              </p>
              
              <p className='mt-4 text-sm font-bold text-gray-900 dark:text-white'>
                — {staticQuotes[staticIndex].author}
              </p>
            </div>

            {/* Dot indicator */}
            <div className='flex justify-center mt-6 gap-1.5'>
              {staticQuotes.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setStaticIndex(idx)}
                  className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${staticIndex === idx ? 'w-4 bg-cyan-500' : 'bg-gray-300 dark:bg-slate-800'}`}
                />
              ))}
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default InspiringQuotes;
