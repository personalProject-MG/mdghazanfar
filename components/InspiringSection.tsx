import { useState, useEffect } from 'react';
import { StaticImageData } from 'next/image';
import { FaChevronLeft, FaChevronRight, FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';

import SteveJobs from '../public/Image/steve-jobs.jpg';
import MahatmaGandhi from '../public/Image/gandhi.jpg';
import AlbertEinstein from '../public/Image/albertEinstein.jpg';
import WilliamButler from '../public/Image/williamButler.jpg';
import ThomasEdison from '../public/Image/ThomasEdison.jpg';
import EleanorRoosevelt from '../public/Image/eleanorRoosevelt.jpg';
import Confucius from '../public/Image/Confucius.jpg';
import HenryFord from '../public/Image/HenryFord.jpg';
import RalphWaldo from '../public/Image/RalphWaldo.jpg';
import NoImageAvilable from '../public/Image/NoImage.png';

type Quote = {
  text: string;
  author: string;
  image: StaticImageData | string;
};

const InspiringQuotes: React.FC = () => {
  const quotes: Quote[] = [
    {
      text: 'Your time is limited, so don\u2019t waste it living someone else\u2019s life.',
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
    {
      text: 'The future belongs to those who believe in the beauty of their dreams.',
      author: 'Eleanor Roosevelt',
      image: EleanorRoosevelt,
    },
    {
      text: 'It does not matter how slowly you go as long as you do not stop.',
      author: 'Confucius',
      image: Confucius,
    },
    {
      text: "Whether you think you can or you think you can't, you're right.",
      author: 'Henry Ford',
      image: HenryFord,
    },
    {
      text: 'What lies behind us and what lies before us are tiny matters compared to what lies within us.',
      author: 'Ralph Waldo Emerson',
      image: RalphWaldo,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-play interval for quotes (cycles every 6 seconds)
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? quotes.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === quotes.length - 1 ? 0 : prev + 1));
  };

  const quote = quotes[currentIndex];

  return (
    <section
      id='quotes'
      className='relative py-24 bg-gray-50 dark:bg-slate-950 text-gray-900 dark:text-gray-100 transition-colors duration-300 overflow-hidden'
    >
      {/* Background Grid Pattern */}
      <div className='absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none z-0'></div>

      {/* Decorative Blobs */}
      <div className='absolute top-1/3 left-1/4 w-[250px] h-[250px] md:w-[400px] md:h-[400px] bg-purple-500/10 dark:bg-purple-500/5 rounded-full blur-[80px] md:blur-[120px] pointer-events-none z-0 animate-glow-slow'></div>
      <div className='absolute bottom-1/4 right-1/4 w-[220px] h-[220px] md:w-[350px] md:h-[350px] bg-cyan-500/10 dark:bg-cyan-500/5 rounded-full blur-[70px] md:blur-[100px] pointer-events-none z-0 animate-float-slow'></div>

      <div className='container mx-auto px-6 max-w-4xl relative z-10'>
        {/* Section Header */}
        <div className='text-center max-w-2xl mx-auto mb-16'>
          <div className='inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-semibold bg-emerald-100 dark:bg-emerald-950/40 text-emerald-800 dark:text-emerald-400 border border-emerald-200/30 w-fit mb-4'>
            <span>Inspiration</span>
          </div>
          <h2 className='text-3xl sm:text-5xl font-black tracking-tight'>
            Inspiring Quotes
          </h2>
          <p className='mt-4 text-gray-600 dark:text-gray-400'>
            Words that keep me grounded, motivated, and constantly growing.
          </p>
        </div>

        {/* Quote Card */}
        <div className='relative bg-white dark:bg-slate-900 rounded-3xl border border-gray-200/50 dark:border-slate-800/80 shadow-xl p-8 md:p-12 overflow-hidden hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-emerald-500/5 hover:border-emerald-500/30 dark:hover:border-emerald-500/20 transition-all duration-500 group/card'>
          {/* Decorative Shifting Gradient Bar */}
          <div className='absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 group-hover/card:h-1.5 transition-all duration-300'></div>

          {/* Background Floating Decorative Quotes */}
          <FaQuoteLeft className='absolute top-4 left-6 text-7xl md:text-8xl text-emerald-500/5 dark:text-emerald-400/5 pointer-events-none z-0 animate-float-quote-left' />
          <FaQuoteRight className='absolute bottom-6 right-8 text-7xl md:text-8xl text-cyan-500/5 dark:text-cyan-400/5 pointer-events-none z-0 animate-float-quote-right' />

          {/* Quote icon foreground */}
          <FaQuoteLeft className='relative text-4xl text-emerald-500/25 dark:text-emerald-400/25 mb-6 z-10' />

          {/* Slide content */}
          <div
            key={currentIndex}
            className='relative flex flex-col items-center text-center animate-fadeIn z-10'
          >
            <div className='relative mb-6 group/avatar cursor-pointer'>
              <div className='absolute -inset-1.5 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full blur opacity-35 group-hover/avatar:opacity-60 group-hover/avatar:scale-105 transition-all duration-500'></div>
              <img
                src={
                  typeof quote.image === 'string'
                    ? quote.image
                    : quote.image.src
                }
                alt={quote.author}
                loading='lazy'
                onError={(e) => (e.currentTarget.src = NoImageAvilable.src)}
                className='relative w-24 h-24 md:w-32 md:h-32 rounded-full object-cover border-2 border-white dark:border-slate-800 shadow-lg group-hover/avatar:scale-102 transition-transform duration-500'
              />
            </div>

            <p className='text-lg md:text-xl font-medium text-gray-700 dark:text-gray-200 leading-relaxed max-w-2xl italic px-4 md:px-8'>
              &ldquo;{quote.text}&rdquo;
            </p>
            <div className='mt-6 flex items-center gap-3'>
              <div className='h-0.5 w-8 bg-gradient-to-r from-transparent to-emerald-500'></div>
              <p className='text-base font-bold text-gray-900 dark:text-white tracking-wide'>
                {quote.author}
              </p>
              <div className='h-0.5 w-8 bg-gradient-to-l from-transparent to-emerald-500'></div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            aria-label='Previous Quote'
            className='absolute left-4 top-1/2 transform -translate-y-1/2 p-2.5 rounded-full bg-white dark:bg-slate-850 hover:bg-emerald-500 hover:text-white dark:hover:bg-emerald-500 hover:border-emerald-500 text-gray-500 dark:text-gray-400 border border-gray-200/60 dark:border-slate-800 shadow-md hover:scale-110 z-25 transition-all duration-300'
          >
            <FaChevronLeft className='w-4 h-4' />
          </button>
          <button
            onClick={nextSlide}
            aria-label='Next Quote'
            className='absolute right-4 top-1/2 transform -translate-y-1/2 p-2.5 rounded-full bg-white dark:bg-slate-850 hover:bg-emerald-500 hover:text-white dark:hover:bg-emerald-500 hover:border-emerald-500 text-gray-500 dark:text-gray-400 border border-gray-200/60 dark:border-slate-800 shadow-md hover:scale-110 z-25 transition-all duration-300'
          >
            <FaChevronRight className='w-4 h-4' />
          </button>

          {/* Linear Auto-play Progress Bar Indicator */}
          <div className='absolute bottom-0 left-0 right-0 h-[3px] bg-gray-100/50 dark:bg-slate-850/40 overflow-hidden'>
            <div
              key={currentIndex}
              className='h-full bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 animate-progress-bar'
            />
          </div>
        </div>

        {/* Dot Indicators */}
        <div className='flex justify-center mt-6 gap-2'>
          {quotes.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Go to quote ${index + 1}`}
              className={`rounded-full transition-all duration-300 ${currentIndex === index
                  ? 'w-6 h-2.5 bg-emerald-500'
                  : 'w-2.5 h-2.5 bg-gray-300 dark:bg-slate-700 hover:bg-emerald-300 dark:hover:bg-emerald-800'
                }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default InspiringQuotes;
