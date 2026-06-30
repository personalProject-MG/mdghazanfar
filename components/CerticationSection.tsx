import React from 'react';
import { SiGooglecloud } from 'react-icons/si';
import { FaCertificate, FaTrophy, FaAward, FaMicrosoft } from 'react-icons/fa';

const CerticationSection = () => {
  const certifications = [
    {
      title: 'Google Cloud Professional Machine Learning Engineer',
      issuer: 'Google Cloud',
      date: 'Active',
      type: 'gcp',
      icon: <SiGooglecloud className='text-blue-500 text-3xl' />,
      description: 'Validation of expertise in designing, building, and productionizing ML models on Google Cloud Platform using Vertex AI and MLOps best practices.',
      verifyUrl: 'https://www.credly.com/badges/184c3176-a511-4caf-8792-f1a8200ac9f5',
    },
    {
      title: 'Google Cloud Associate Cloud Engineer',
      issuer: 'Google Cloud',
      date: 'Active',
      type: 'gcp',
      icon: <SiGooglecloud className='text-cyan-500 text-3xl' />,
      description: 'Demonstrated skills in deploying applications, monitoring operations, and managing enterprise projects on GCP.',
      verifyUrl: 'https://www.credly.com/users/md-ghazanfar-alam',
    },
    {
      title: 'Google Cloud Digital Leader',
      issuer: 'Google Cloud',
      date: 'Active',
      type: 'gcp',
      icon: <SiGooglecloud className='text-indigo-500 text-3xl' />,
      description: 'Validation of foundational knowledge of Google Cloud services and cloud capabilities to enable business transformation.',
      verifyUrl: 'https://www.credly.com/users/md-ghazanfar-alam',
    },
    {
      title: 'Google Cloud Generative AI Leader',
      issuer: 'Google Cloud',
      date: 'Active',
      type: 'gcp',
      icon: <SiGooglecloud className='text-emerald-500 text-3xl' />,
      description: 'Demonstrated proficiency in Generative AI development models, tuning, prompt engineering, and Vertex AI foundation model APIs.',
      verifyUrl: 'https://www.credly.com/badges/0700af3b-22d4-4e32-9d31-5bc4c5298592',
    },
    {
      title: 'Virtusa Certified Gen AI Assisted Engineer',
      issuer: 'Virtusa Corp',
      date: '2025',
      type: 'virtusa',
      icon: <FaCertificate className='text-amber-500 text-3xl' />,
      description: 'Internal certification verifying technical competencies in leveraging Large Language Models and AI engineering workflows within professional software development.',
      verifyUrl: 'https://learn.microsoft.com/en-us/users/me/achievements#badges-section',
    },
  ];

  const achievements = [
    {
      title: 'Virtusa Jatayu Hackathon Season 2 – Runner-Up',
      issuer: 'Virtusa Corp',
      detail: 'Runner-up placement in Virtusa\'s prestigious internal hackathon for designing and building innovative AI-driven tools.',
      icon: <FaTrophy className='text-yellow-500 text-3xl' />,
    },
    {
      title: 'Multiple Professional GCP Certifications',
      issuer: 'Industry Recognition',
      detail: 'Successfully attained 4 Google Cloud credentials validating deep technical mastery of cloud-native systems, ML architectures, and digital scaling.',
      icon: <FaAward className='text-teal-500 text-3xl' />,
    },
  ];

  return (
    <section
      id='certifications'
      className='relative py-24 bg-gray-50 dark:bg-slate-950 text-gray-900 dark:text-gray-100 transition-colors duration-300 overflow-hidden'
    >
      {/* Background Grid Pattern */}
      <div className='absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none z-0'></div>

      {/* Background Decorative Blobs */}
      <div className='absolute top-1/4 right-1/4 w-[250px] h-[250px] md:w-[400px] md:h-[400px] bg-cyan-500/10 dark:bg-cyan-500/5 rounded-full blur-[80px] md:blur-[120px] pointer-events-none z-0 animate-float-slow'></div>
      <div className='absolute bottom-1/4 left-1/4 w-[250px] h-[250px] md:w-[400px] md:h-[400px] bg-emerald-500/10 dark:bg-emerald-500/5 rounded-full blur-[80px] md:blur-[120px] pointer-events-none z-0 animate-glow-slow'></div>

      <div className='container mx-auto px-6 max-w-7xl relative z-10'>
        {/* Section Header */}
        <div className='text-center max-w-2xl mx-auto mb-16'>
          <div className='inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-semibold bg-emerald-100 dark:bg-emerald-950/40 text-emerald-800 dark:text-emerald-400 border border-emerald-200/30 w-fit mb-4'>
            <span>Credentials</span>
          </div>
          <h2 className='text-3xl sm:text-5xl font-black tracking-tight'>
            Certifications & Achievements
          </h2>
          <p className='mt-4 text-gray-600 dark:text-gray-400'>
            Professional certifications validating cloud-native intelligence, ML systems development, and corporate awards.
          </p>
        </div>        {/* Certifications Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16'>
          {certifications.map((cert, index) => (
            <div
              key={index}
              className='group relative bg-white dark:bg-slate-900 p-6 rounded-2xl border border-gray-250/20 dark:border-slate-800/80 shadow-sm hover:shadow-[0_15px_35px_-10px_rgba(6,182,212,0.22)] dark:hover:shadow-[0_15px_35px_-10px_rgba(6,182,212,0.14)] hover:-translate-y-2 hover:scale-[1.02] hover:border-cyan-500/40 dark:hover:border-cyan-400/30 transition-all duration-500 ease-out flex flex-col justify-between overflow-hidden'
            >
              {/* Corner Glow Accent */}
              <div className='absolute top-0 right-0 w-28 h-28 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none' />

              {/* Highlight bar */}
              <div className='absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-emerald-500 to-cyan-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left'></div>

              <div>
                <div className='flex items-center justify-between mb-4'>
                  <span className='p-2 rounded-xl bg-gray-50 dark:bg-slate-800/50 border border-gray-100 dark:border-slate-800 group-hover:scale-110 group-hover:rotate-6 transition-all duration-350'>
                    {cert.icon}
                  </span>
                  <span className='text-xs font-semibold px-2.5 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/30 text-emerald-700 dark:text-emerald-400 border border-emerald-100/50 dark:border-emerald-900/30 group-hover:bg-emerald-100 dark:group-hover:bg-emerald-900/40 transition-colors duration-300'>
                    {cert.issuer}
                  </span>
                </div>
                <h3 className='text-lg font-bold text-gray-900 dark:text-white group-hover:text-cyan-500 dark:group-hover:text-cyan-450 transition-colors duration-300 mb-2'>
                  {cert.title}
                </h3>
                <p className='text-sm text-gray-650 dark:text-gray-400 leading-relaxed mb-4'>
                  {cert.description}
                </p>
              </div>
              <div className='space-y-4'>
                <a
                  href={cert.verifyUrl}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='w-full inline-flex items-center justify-center gap-2 px-4 py-2 text-xs font-bold text-cyan-600 dark:text-cyan-400 bg-cyan-50/50 dark:bg-cyan-950/20 border border-cyan-100/50 dark:border-cyan-900/30 rounded-xl hover:bg-cyan-100/80 dark:hover:bg-cyan-950/50 hover:text-cyan-700 dark:hover:text-cyan-300 transition-all duration-200 cursor-pointer'
                >
                  Verify Badge
                </a>
                <div className='pt-3 border-t border-gray-100 dark:border-slate-850 flex items-center justify-between text-xs text-gray-550 dark:text-gray-450'>
                  <span>Credential Status</span>
                  <span className='font-semibold text-emerald-500 flex items-center gap-1.5'>
                    <span className='w-2 h-2 rounded-full bg-emerald-500 animate-ping absolute' />
                    <span className='w-2 h-2 rounded-full bg-emerald-500 relative' />
                    {cert.date}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Digital Badge Profiles Sub-Section */}
        <div className='mb-16 bg-white dark:bg-slate-900/50 backdrop-blur-md p-8 rounded-3xl border border-gray-200/60 dark:border-slate-800/80 shadow-md relative overflow-hidden'>
          {/* Decorative aura */}
          <div className='absolute -top-24 -right-24 w-48 h-48 bg-gradient-to-br from-emerald-500/10 to-cyan-500/10 rounded-full blur-3xl pointer-events-none' />
          
          <div className='relative z-10 text-center max-w-2xl mx-auto mb-8'>
            <h3 className='text-xl sm:text-2xl font-bold text-gray-900 dark:text-white flex items-center justify-center gap-2'>
              <FaAward className='text-emerald-500' /> Digital Badge Profiles
            </h3>
            <p className='mt-2 text-sm text-gray-500 dark:text-gray-400'>
              Access my complete, live-verified public portfolios of professional technology badges and official credentials.
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10'>
            {/* Credly Card */}
            <a
              href='https://www.credly.com/users/md-ghazanfar-alam'
              target='_blank'
              rel='noopener noreferrer'
              className='group flex flex-col sm:flex-row items-center gap-5 p-6 bg-gray-50 dark:bg-slate-950/80 hover:bg-white dark:hover:bg-slate-950 rounded-2xl border border-gray-200/50 dark:border-slate-900 hover:border-orange-500/30 dark:hover:border-orange-500/20 hover:shadow-[0_10px_30px_-10px_rgba(239,68,68,0.15)] transition-all duration-300'
            >
              <div className='w-14 h-14 bg-orange-500/10 dark:bg-orange-500/5 rounded-xl border border-orange-500/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300'>
                <FaAward className='text-orange-500 text-3xl' />
              </div>
              <div className='text-center sm:text-left flex-1'>
                <h4 className='text-base font-bold text-gray-900 dark:text-white group-hover:text-orange-500 transition-colors duration-200'>
                  Credly Badge Portfolio
                </h4>
                <p className='text-xs text-gray-500 dark:text-gray-450 mt-1 leading-relaxed'>
                  Official verifications for Google Cloud Professional and Associate engineering badges.
                </p>
              </div>
              <span className='text-xs font-semibold px-4 py-2 rounded-xl bg-orange-500/10 text-orange-600 dark:text-orange-400 border border-orange-500/20 group-hover:bg-orange-500 group-hover:text-white transition-all duration-300'>
                View Badges
              </span>
            </a>

            {/* Microsoft Learn Card */}
            <a
              href='https://learn.microsoft.com/en-us/users/me/achievements#badges-section'
              target='_blank'
              rel='noopener noreferrer'
              className='group flex flex-col sm:flex-row items-center gap-5 p-6 bg-gray-50 dark:bg-slate-950/80 hover:bg-white dark:hover:bg-slate-950 rounded-2xl border border-gray-200/50 dark:border-slate-900 hover:border-blue-500/30 dark:hover:border-blue-500/20 hover:shadow-[0_10px_30px_-10px_rgba(59,130,246,0.15)] transition-all duration-300'
            >
              <div className='w-14 h-14 bg-blue-500/10 dark:bg-blue-500/5 rounded-xl border border-blue-500/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300'>
                <FaMicrosoft className='text-blue-500 text-3xl' />
              </div>
              <div className='text-center sm:text-left flex-1'>
                <h4 className='text-base font-bold text-gray-900 dark:text-white group-hover:text-blue-500 transition-colors duration-200'>
                  Microsoft Learn Achievements
                </h4>
                <p className='text-xs text-gray-505 dark:text-gray-450 mt-1 leading-relaxed'>
                  Verified training achievements, course badges, and learning path histories.
                </p>
              </div>
              <span className='text-xs font-semibold px-4 py-2 rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20 group-hover:bg-blue-500 group-hover:text-white transition-all duration-300'>
                View Badges
              </span>
            </a>
          </div>
        </div>

        {/* Achievements Grid Header */}
        <div className='border-t border-gray-200/50 dark:border-slate-800/50 pt-16 mb-10'>
          <h3 className='text-2xl sm:text-3xl font-bold tracking-tight text-gray-900 dark:text-white text-center md:text-left flex items-center justify-center md:justify-start gap-3'>
            <FaAward className='text-emerald-500 animate-bounce' style={{ animationDuration: '3s' }} /> Honors & Key Achievements
          </h3>
        </div>

        {/* Achievements Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          {achievements.map((ach, index) => (
            <div
              key={index}
              className='group relative bg-white dark:bg-slate-900 p-6 rounded-2xl border border-gray-250/20 dark:border-slate-800/80 shadow-sm hover:shadow-[0_15px_35px_-10px_rgba(16,185,129,0.15)] dark:hover:shadow-[0_15px_35px_-10px_rgba(16,185,129,0.1)] hover:-translate-y-1.5 hover:scale-[1.01] hover:border-emerald-500/30 dark:hover:border-emerald-500/20 flex items-start gap-4 transition-all duration-500 ease-out overflow-hidden'
            >
              {/* Glow Accent */}
              <div className='absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-emerald-500/5 to-cyan-500/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none' />

              <div className='p-3 rounded-xl bg-gray-50 dark:bg-slate-800 border border-gray-150/15 dark:border-slate-800 flex-shrink-0 group-hover:scale-110 group-hover:-rotate-3 transition-all duration-350'>
                {ach.icon}
              </div>
              <div className='relative z-10'>
                <h4 className='text-lg font-bold text-gray-900 dark:text-white mb-1 group-hover:text-emerald-500 dark:group-hover:text-emerald-450 transition-colors duration-300'>
                  {ach.title}
                </h4>
                <p className='text-sm text-gray-500 dark:text-gray-400 mb-1 font-medium'>
                  {ach.issuer}
                </p>
                <p className='text-sm text-gray-600 dark:text-gray-400 leading-relaxed'>
                  {ach.detail}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CerticationSection;
