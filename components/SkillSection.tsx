import React from 'react';
import {
  FaPython,
  FaReact,
  FaGit,
  FaCloud,
  FaDatabase,
  FaServer,
  FaTerminal,
  FaBrain,
  FaChartBar,
} from 'react-icons/fa';
import {
  SiTypescript,
  SiGooglecloud,
  SiMongodb,
  SiOpenai,
  SiStreamlit,
} from 'react-icons/si';

// Icon mapping for each skill
const iconMap: Record<string, JSX.Element> = {
  // Programming & Databases
  'Python': <FaPython className="text-blue-500" />,
  'SQL': <FaDatabase className="text-amber-500" />,
  'Typescript': <SiTypescript className="text-blue-600" />,
  'MongoDB': <SiMongodb className="text-green-500" />,
  'Cloud Spanner': <FaDatabase className="text-cyan-500" />,
  
  // Gen AI & Agentic AI Frameworks
  'Google ADK': <FaBrain className="text-red-500" />,
  'LangChain': <FaBrain className="text-emerald-500" />,
  'LangGraph': <FaBrain className="text-indigo-500" />,
  'LlamaIndex': <FaBrain className="text-purple-500" />,
  'CrewAI': <FaBrain className="text-pink-500" />,
  'Agno': <FaBrain className="text-rose-500" />,
  'LangFlow': <FaBrain className="text-teal-500" />,
  'Flowise': <FaBrain className="text-cyan-500" />,

  // LLMs & RAG Pipelines
  'OpenAI': <SiOpenai className="text-gray-900 dark:text-gray-100" />,
  'Google Gemini': <SiGooglecloud className="text-blue-400" />,
  'HuggingFace Embeddings': <FaCloud className="text-yellow-500" />,
  'FAISS': <FaCloud className="text-gray-500" />,
  'Pinecone': <FaCloud className="text-emerald-600" />,

  // Cloud & Deployment
  'Google Cloud Platform (GCP)': <SiGooglecloud className="text-blue-500" />,
  'Vertex AI': <SiGooglecloud className="text-indigo-500" />,
  'Bedrock': <FaCloud className="text-orange-500" />,
  'SageMaker': <FaCloud className="text-orange-600" />,

  // AI Operations
  'AgentOps': <FaServer className="text-indigo-400" />,
  'Arize Phoenix': <FaServer className="text-teal-400" />,
  'Logging & Observability': <FaTerminal className="text-gray-600 dark:text-gray-400" />,
  'Metrics': <FaChartBar className="text-green-400" />,

  // Frontend & UI
  'Streamlit': <SiStreamlit className="text-red-500" />,
  'React': <FaReact className="text-cyan-400" />,
  'Flask': <FaServer className="text-gray-700 dark:text-gray-300" />,
  'React Native': <FaReact className="text-indigo-400" />,

  // Data Processing
  'Pandas': <FaChartBar className="text-indigo-600" />,
  'NumPy': <FaChartBar className="text-sky-500" />,
  'Scikit-learn': <FaChartBar className="text-orange-400" />,
  'Matplotlib': <FaChartBar className="text-green-600" />,
  'Seaborn': <FaChartBar className="text-teal-600" />,

  // Version Control & DevTools
  'Git': <FaGit className="text-orange-500" />,
  'GitHub': <FaGit className="text-gray-900 dark:text-gray-100" />,
  'JIRA': <FaTerminal className="text-blue-500" />,
  'Confluence': <FaTerminal className="text-blue-400" />,
};

// Skill categories
const categories = [
  {
    title: 'Gen AI & Agentic AI Frameworks',
    items: ['Google ADK', 'LangChain', 'LangGraph', 'LlamaIndex', 'CrewAI', 'Agno', 'LangFlow', 'Flowise'],
  },
  {
    title: 'LLMs & Vector DBs',
    items: ['OpenAI', 'Google Gemini', 'HuggingFace Embeddings', 'FAISS', 'Pinecone'],
  },
  {
    title: 'Cloud & Deployments',
    items: ['Google Cloud Platform (GCP)', 'Vertex AI', 'Bedrock', 'SageMaker'],
  },
  {
    title: 'AI Operations & Logging',
    items: ['AgentOps', 'Arize Phoenix', 'Logging & Observability', 'Metrics'],
  },
  {
    title: 'Programming & Databases',
    items: ['Python', 'SQL', 'Typescript', 'MongoDB', 'Cloud Spanner'],
  },
  {
    title: 'Frontend & UI Integration',
    items: ['Streamlit', 'React', 'Flask', 'React Native'],
  },
  {
    title: 'Data Processing & ML',
    items: ['Pandas', 'NumPy', 'Scikit-learn', 'Matplotlib', 'Seaborn'],
  },
  {
    title: 'Tools & DevOps',
    items: ['Git', 'GitHub', 'JIRA', 'Confluence'],
  },
];

const Skills = () => {
  return (
    <section
      id='skills'
      className='relative py-24 bg-gray-100 dark:bg-slate-900 text-gray-900 dark:text-gray-100 transition-colors duration-300 overflow-hidden'
    >
      {/* Background Grid Pattern */}
      <div className='absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none z-0'></div>

      <div className='container mx-auto px-6 max-w-7xl relative z-10'>
        <div className='text-center max-w-2xl mx-auto mb-16'>
          <div className='inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-semibold bg-emerald-100 dark:bg-emerald-950/40 text-emerald-800 dark:text-emerald-400 border border-emerald-200/30 w-fit mb-4'>
            <span>Tech Stack</span>
          </div>
          <h2 className='text-3xl sm:text-5xl font-black tracking-tight'>
            Skills & Technologies
          </h2>
          <p className='mt-4 text-gray-600 dark:text-gray-400'>
            My engineering toolkit across Generative AI, machine learning pipelines, cloud operations, and software engineering.
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
          {categories.map((category, index) => (
            <div
              key={index}
              className='group relative bg-white dark:bg-slate-950 p-6 rounded-2xl border border-gray-250/20 dark:border-slate-800/80 shadow-md hover:shadow-[0_15px_35px_-10px_rgba(16,185,129,0.18)] dark:hover:shadow-[0_15px_35px_-10px_rgba(16,185,129,0.12)] hover:-translate-y-2 hover:scale-[1.02] hover:border-emerald-500/40 dark:hover:border-emerald-400/30 transition-all duration-500 ease-out'
            >
              {/* Corner Glow Accent */}
              <div className='absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-emerald-500/10 to-cyan-500/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none' />

              <h3 className='text-lg font-bold text-gray-900 dark:text-white mb-4 border-b border-gray-100 dark:border-slate-850 pb-2 flex items-center justify-between group-hover:text-emerald-500 dark:group-hover:text-emerald-400 transition-colors duration-300'>
                {category.title}
              </h3>
              <ul className='space-y-3.5'>
                {category.items.map((item, i) => (
                  <li
                    key={i}
                    className='flex items-center space-x-3 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-emerald-500 dark:hover:text-emerald-400 hover:translate-x-1 transition-all duration-200 cursor-default group/item'
                  >
                    <span className='text-lg flex-shrink-0 transition-transform duration-200 group-hover/item:scale-125 group-hover/item:rotate-6'>
                      {iconMap[item] || <FaCloud className="text-gray-400" />}
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
