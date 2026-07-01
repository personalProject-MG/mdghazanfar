import Head from 'next/head';
import mga from '../public/Image/105430.png';

const AboutSection = () => (
  <section
    id='about'
    className='relative py-24 bg-gray-50 dark:bg-slate-950 text-gray-900 dark:text-gray-100 transition-colors duration-300 overflow-hidden'
  >
    {/* Background Grid Pattern */}
    <div className='absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none z-0'></div>

    {/* Background Decorative Blobs */}
    <div className='absolute top-10 left-10 w-[200px] h-[200px] md:w-[300px] md:h-[300px] bg-cyan-500/10 dark:bg-cyan-500/5 rounded-full blur-[70px] md:blur-[100px] pointer-events-none z-0 animate-float-slow'></div>
    <div className='absolute bottom-10 right-10 w-[250px] h-[250px] md:w-[400px] md:h-[400px] bg-emerald-500/10 dark:bg-emerald-500/5 rounded-full blur-[80px] md:blur-[120px] pointer-events-none z-0 animate-glow-slow'></div>

    <Head>
      <title>About Me - Md Ghazanfar Alam</title>
      <meta
        name='description'
        content='Learn more about Md Ghazanfar Alam, an Associate Engineer specializing in Generative AI, Agentic AI, and Cloud Machine Learning.'
      />
    </Head>

    <div className='container mx-auto px-6 sm:px-12 lg:px-24 max-w-7xl z-10 relative'>
      <div className='grid grid-cols-1 lg:grid-cols-12 gap-12 items-center'>
        {/* Profile Image Column */}
        <div className='lg:col-span-5 flex justify-center'>
          <div className='relative group'>
            {/* Spinning Glow Ring */}
            <div className='absolute -inset-1.5 bg-gradient-to-tr from-emerald-500 via-teal-500 to-cyan-500 rounded-2xl blur opacity-35 group-hover:opacity-65 animate-spin-slow transition-opacity duration-500 pointer-events-none'></div>
            <div className='relative bg-white dark:bg-slate-900 p-3 rounded-2xl border border-gray-100 dark:border-slate-800 shadow-xl overflow-hidden'>
              <img
                src={mga.src}
                alt='Md Ghazanfar Alam'
                className='w-72 h-auto sm:w-80 rounded-xl group-hover:scale-103 transition-transform duration-500 ease-out'
              />
            </div>
          </div>
        </div>

        {/* About Me Content Column */}
        <div className='lg:col-span-7 text-left flex flex-col justify-center'>
          <div className='inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-semibold bg-emerald-100 dark:bg-emerald-950/40 text-emerald-800 dark:text-emerald-400 border border-emerald-200/30 w-fit mb-6'>
            <span>Who I Am</span>
          </div>
          <h2 className='text-3xl sm:text-5xl font-black tracking-tight mb-6'>
            About Me
          </h2>
          <div className='space-y-6 text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed'>
            <p>
              Hello! I am an <span className='text-emerald-500 font-semibold'>Associate Engineer in Emerging Technologies</span> at{' '}
              <span className='text-emerald-500 font-semibold'>Virtusa Corporation, Hyderabad</span>, with{' '}
              <span className='font-semibold dark:text-gray-100'>3+ years of experience</span> specializing in{' '}
              <span className='font-semibold dark:text-gray-100'>Generative AI (Gen AI)</span> and{' '}
              <span className='font-semibold dark:text-gray-100'>Agentic AI</span>, with strong expertise in cloud-based AI deployments, LLM frameworks, and AI workflow orchestration.
            </p>
            <p>
              I hold multiple premium industry credentials, including the{' '}
              <span className='text-cyan-500 font-semibold'>Google Cloud Professional Machine Learning Engineer</span>,{' '}
              <span className='text-cyan-500 font-semibold'>Associate Cloud Engineer</span>, and{' '}
              <span className='text-cyan-500 font-semibold'>Cloud Digital Leader</span> certifications. I completed the Gen AI GCP L300 & L400 courses, alongside 17+ weeks of intensive hands-on training in building production-ready multi-agent systems and RAG pipelines.
            </p>
            <p>
              I am driven by a commitment to solving complex, real-world engineering challenges. By integrating machine learning models with state-of-the-art Large Language Models, I focus on building scalable, resilient, and highly automated software solutions.
            </p>
          </div>

          {/* Quick Info Grid */}
          <div className='grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8 pt-8 border-t border-gray-200/50 dark:border-slate-800/50'>
            <div className='hover:translate-x-1.5 transition-transform duration-300 group/info'>
              <p className='text-sm text-gray-500 dark:text-gray-450 uppercase tracking-wider font-semibold group-hover/info:text-emerald-500 transition-colors duration-200'>Current Role</p>
              <p className='font-medium mt-1 text-gray-800 dark:text-gray-200'>Associate Engineer</p>
              <p className='text-sm text-gray-500 dark:text-gray-400'>Virtusa Corporation (Hyderabad)</p>
            </div>
            <div className='hover:translate-x-1.5 transition-transform duration-300 group/info'>
              <p className='text-sm text-gray-500 dark:text-gray-450 uppercase tracking-wider font-semibold group-hover/info:text-cyan-500 transition-colors duration-200'>Education</p>
              <p className='font-medium mt-1 text-gray-800 dark:text-gray-200'>B.Tech in Computer Science & Engineering</p>
              <p className='text-sm text-gray-500 dark:text-gray-400'>Sister Nivedita University (2019-2023)</p>
            </div>
            <div className='hover:translate-x-1.5 transition-transform duration-300 group/info'>
              <p className='text-sm text-gray-500 dark:text-gray-450 uppercase tracking-wider font-semibold group-hover/info:text-emerald-500 transition-colors duration-200'>Location & Email</p>
              <p className='font-medium mt-1 text-gray-800 dark:text-gray-200'>Hyderabad, India</p>
              <p className='text-sm text-gray-500 dark:text-gray-400'>ghazanfaralam642786@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;
