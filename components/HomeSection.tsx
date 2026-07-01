// components/HomeSection.tsx
import { useState } from 'react';
import Head from 'next/head';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGithub,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const HomeSection = () => {
  const [showTailor, setShowTailor] = useState(false);
  const [jobDescription, setJobDescription] = useState('');
  const [loading, setLoading] = useState(false);
  const [loadingStage, setLoadingStage] = useState('');
  const [tailoredData, setTailoredData] = useState<any>(null);
  const [showModal, setShowModal] = useState(false);
  const [downloading, setDownloading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleTailor = async () => {
    if (!jobDescription.trim()) return;
    setLoading(true);
    setError(null);
    setLoadingStage('Analyzing job description...');

    try {
      const response = await fetch('/api/tailor/analyze', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ jobDescription }),
      });

      if (!response.ok) {
        throw new Error('Failed to analyze the job description.');
      }

      setLoadingStage('Formatting tailored highlights...');
      const data = await response.json();
      setTailoredData(data);
      setShowModal(true);
    } catch (err: any) {
      console.error(err);
      setError(err.message || 'Something went wrong.');
    } finally {
      setLoading(false);
      setLoadingStage('');
    }
  };

  const downloadPdf = async () => {
    if (!tailoredData) return;
    setDownloading(true);
    try {
      const response = await fetch('/api/tailor/generate-pdf', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(tailoredData),
      });

      if (!response.ok) throw new Error('Failed to generate tailored PDF.');

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'Md_Ghazanfar_Alam_Tailored_Resume.pdf';
      document.body.appendChild(a);
      a.click();
      a.remove();
    } catch (err: any) {
      console.error(err);
      alert('Failed to download PDF. Please try again.');
    } finally {
      setDownloading(false);
    }
  };

  return (
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
          <button
            onClick={() => setShowTailor(!showTailor)}
            className={`px-8 py-3.5 rounded-xl font-semibold transition-all duration-300 transform hover:-translate-y-0.5 flex items-center gap-2 border ${
              showTailor
                ? 'bg-cyan-500 text-white border-cyan-500 shadow-lg shadow-cyan-500/25'
                : 'border-emerald-500/30 bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400'
            }`}
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            Tailor with AI
          </button>
          <a
            href='#about'
            className='border border-gray-300 dark:border-slate-700 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm text-gray-800 dark:text-gray-200 px-8 py-3.5 rounded-xl font-semibold hover:bg-gray-50 dark:hover:bg-slate-800/80 transition-all duration-300 transform hover:-translate-y-0.5 btn-shine-effect'
          >
            About Me
          </a>
        </div>

        {/* Expandable Tailor Panel */}
        {showTailor && (
          <div className="mt-8 mx-auto max-w-xl p-6 bg-white/60 dark:bg-slate-900/60 backdrop-blur-sm rounded-2xl border border-gray-250/20 dark:border-slate-800/50 shadow-lg text-left transition-all duration-300">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white flex items-center gap-2">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              Tailor Resume for a Job Description
            </h3>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 mb-4">
              Paste the job description or role requirements. Gemini will customize your summary, matching skills, and project descriptions to highlight exactly what the recruiter is looking for.
            </p>
            <textarea
              className="w-full h-32 px-4 py-3 text-sm text-gray-900 dark:text-white bg-white/80 dark:bg-slate-950/80 rounded-xl border border-gray-250/30 dark:border-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent resize-none transition-all duration-300"
              placeholder="Paste job description details (e.g. Seeking a Python Developer with LangChain, GCP, and React experience...)"
              value={jobDescription}
              onChange={(e) => setJobDescription(e.target.value)}
            />
            {error && (
              <p className="text-xs text-red-500 mt-2 font-medium">{error}</p>
            )}
            <div className="flex justify-end gap-3 mt-4">
              <button
                onClick={() => setShowTailor(false)}
                className="px-4 py-2 text-xs font-semibold text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-white transition-colors duration-200"
              >
                Cancel
              </button>
              <button
                onClick={handleTailor}
                disabled={loading || !jobDescription.trim()}
                className="px-5 py-2.5 text-xs font-semibold text-white bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-xl shadow-md hover:from-emerald-600 hover:to-cyan-600 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-1.5"
              >
                {loading ? (
                  <>
                    <svg className="animate-spin h-3.5 w-3.5 text-white" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    <span>{loadingStage || 'Tailoring...'}</span>
                  </>
                ) : (
                  <span>Tailor Resume</span>
                )}
              </button>
            </div>
          </div>
        )}

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

      {/* Tailor Modal */}
      {showModal && tailoredData && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md overflow-y-auto">
          <div className="relative w-full max-w-3xl bg-white dark:bg-slate-950 rounded-3xl border border-gray-250/20 dark:border-slate-800 shadow-2xl p-6 md:p-8 my-8 text-left max-h-[90vh] overflow-y-auto flex flex-col animate-fadeIn">
            
            {/* Modal Header */}
            <div className="flex justify-between items-start mb-6">
              <div>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-100 dark:bg-emerald-950/40 text-emerald-800 dark:text-emerald-400 border border-emerald-200/30">
                  <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
                  AI Optimized Highlights
                </span>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mt-2">
                  Tailored Resume Preview
                </h3>
              </div>
              <button
                onClick={() => setShowModal(false)}
                className="p-2 text-gray-400 hover:text-gray-600 dark:hover:text-white rounded-full bg-gray-100 dark:bg-slate-900 transition-colors duration-200"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Modal Scrollable Body */}
            <div className="flex-1 space-y-6 overflow-y-auto pr-2">
              {/* Custom Summary */}
              <div>
                <h4 className="text-xs font-bold text-emerald-500 uppercase tracking-wider mb-2">Professional Summary</h4>
                <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-300 bg-gray-50 dark:bg-slate-900/40 p-4 rounded-xl border border-gray-100 dark:border-slate-800">
                  {tailoredData.tailoredSummary}
                </p>
              </div>

              {/* Matched Skills */}
              <div>
                <h4 className="text-xs font-bold text-emerald-500 uppercase tracking-wider mb-2">Matching Skills</h4>
                <div className="flex flex-wrap gap-2">
                  {tailoredData.highlightedSkills?.map((skill: string, i: number) => (
                    <span key={i} className="px-3 py-1 text-xs font-medium bg-emerald-500/10 dark:bg-emerald-500/5 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 rounded-lg">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Match Projects */}
              <div>
                <h4 className="text-xs font-bold text-emerald-500 uppercase tracking-wider mb-3">Key Project Alignments</h4>
                <div className="space-y-4">
                  {tailoredData.matchedProjects?.map((proj: any, i: number) => (
                    <div key={i} className="p-4 bg-gray-50 dark:bg-slate-900/40 rounded-xl border border-gray-100 dark:border-slate-800">
                      <div className="flex justify-between items-start flex-wrap gap-2">
                        <h5 className="text-sm font-bold text-gray-900 dark:text-white">{proj.title}</h5>
                        <span className="text-xs font-semibold text-gray-500 dark:text-gray-400">{proj.role}</span>
                      </div>
                      <p className="text-xs text-cyan-500 dark:text-cyan-400 font-mono mt-1">{proj.tech}</p>
                      <ul className="mt-3.5 space-y-2 list-disc list-inside text-xs text-gray-600 dark:text-gray-300">
                        {proj.highlights?.map((hl: string, j: number) => (
                          <li key={j} className="leading-relaxed">{hl}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* Certifications */}
              {tailoredData.matchedCertifications && tailoredData.matchedCertifications.length > 0 && (
                <div>
                  <h4 className="text-xs font-bold text-emerald-500 uppercase tracking-wider mb-2">Matched Certifications</h4>
                  <ul className="list-disc list-inside space-y-1.5 text-xs text-gray-600 dark:text-gray-300">
                    {tailoredData.matchedCertifications.map((cert: string, i: number) => (
                      <li key={i}>{cert}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Modal Footer Actions */}
            <div className="flex justify-end gap-3 pt-6 mt-6 border-t border-gray-100 dark:border-slate-900">
              <button
                onClick={() => setShowModal(false)}
                className="px-5 py-2.5 text-sm font-semibold text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-white transition-colors duration-200"
              >
                Close
              </button>
              <button
                onClick={downloadPdf}
                disabled={downloading}
                className="px-6 py-2.5 text-sm font-semibold text-white bg-emerald-500 rounded-xl shadow-lg shadow-emerald-500/25 hover:bg-emerald-600 transition-all duration-200 flex items-center gap-2"
              >
                {downloading ? (
                  <>
                    <svg className="animate-spin h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    <span>Generating PDF...</span>
                  </>
                ) : (
                  <>
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    <span>Download Tailored PDF</span>
                  </>
                )}
              </button>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};

export default HomeSection;
