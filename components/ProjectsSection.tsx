import React, { useState } from 'react';
import { FaLaptopCode, FaChevronDown, FaChevronUp, FaChartLine } from 'react-icons/fa';

interface Project {
  id: string;
  title: string;
  subtitle: string;
  role: string;
  technologies: string[];
  description: string;
  responsibilities: string[];
  impacts: string[];
}

const ProjectsSection = () => {
  const [expandedProjectId, setExpandedProjectId] = useState<string | null>(null);
  const [showAll, setShowAll] = useState(false);

  const projects: Project[] = [
    {
      id: 'test-selection-gmail',
      title: 'Impact Based Test Selection - Gmail',
      subtitle: 'Google Project in Virtusa',
      role: 'Software Developer / AI Engineer',
      technologies: ['Python', 'Google Agent Development Kit (ADK)', 'AgentTools', 'Pydantic', 'JSON', 'Cloud Spanner', 'Google Internal Tools'],
      description: 'Built an AI-powered Impact-Based Test Selection Agent to automate identification, prioritization, and recommendation of relevant test cases based on Change Lists (CLs) and manual test requests.',
      responsibilities: [
        'Designed and developed a hybrid multi-agent orchestration pipeline integrating Gemini Enterprise LLMs, Cloud Spanner, and Google internal platforms including Critique, Buganizer, and Test Tracker.',
        'Engineered intelligent sub-agents for CL verification, test request validation, deduplication, and impact analysis to eliminate redundant testing workflows and improve QA efficiency.',
        'Developed an advanced deduplication engine using Infra Spanner embeddings and hybrid similarity search to identify previously processed requests and reduce repetitive analysis.',
        'Implemented automated validation logic for manual test requests, including mandatory field verification, link accessibility checks, and automated feedback generation via comments.',
        'Integrated historical execution data, bug metadata, code diffs, and feature-level insights to calculate risk scores and determine optimal test coverage requirements.',
        'Built intelligent recommendation categorization logic to classify tests into Must Run, Good to Have, and Exploratory tiers for prioritized execution planning.'
      ],
      impacts: [
        'Reduced regression test request analysis time by 96% (from 2 hours to 5 mins).',
        'Reduced CL analysis time by 75%, saving an estimated 358+ engineering hours annually.',
        'Maintained >70% recommendation accuracy.'
      ]
    },
    {
      id: 'test-selection-chat',
      title: 'Impact Based Test Selection - Chat',
      subtitle: 'Google Project in Virtusa',
      role: 'Software Developer',
      technologies: ['Python', 'Google Agent Development Kit (ADK)', 'AgentTools', 'Pydantic', 'JSON', 'Cloud Spanner', 'Google Internal Tools'],
      description: 'Developed an AI-powered Impact-Based Test Selection Agent to automate identification, prioritization, and recommendation of relevant test cases based on Change Lists (CLs) and manual test requests.',
      responsibilities: [
        'Designed a hybrid multi-agent orchestration pipeline integrating Gemini Enterprise LLMs, Cloud Spanner, and Google internal engineering platforms including Critique, Buganizer, and Test Tracker.',
        'Engineered intelligent AI sub-agents for: CL Verification, Test Request Validation, Deduplication, and Impact Analysis.',
        'Developed an advanced deduplication engine using Cloud Spanner embeddings and hybrid similarity search to identify previously processed requests and eliminate redundant analysis workflows.',
        'Implemented automated validation mechanisms for manual test requests, including mandatory field verification, link accessibility checks, relevancy analysis, and automated feedback generation.',
        'Integrated historical execution data, bug metadata, feature-level insights, and code diffs to calculate risk scores and determine optimal test coverage requirements.',
        'Optimized orchestration workflows for scalable, production-grade reliability and high-performance execution.'
      ],
      impacts: [
        'Eliminated redundant analysis workflows.',
        'Achieved production-grade reliability for scalable, real-time Gmail/Chat test priority classification.'
      ]
    },
    {
      id: 'rms-agentic-ai',
      title: 'RMs_AgenticAI – Multi-Agent Financial Analysis',
      subtitle: 'Training Project in Virtusa',
      role: 'AI Engineer / Developer',
      technologies: ['Python', 'LangGraph', 'Google Gemini', 'Scikit-learn', 'Streamlit'],
      description: 'Designed and developed an end-to-end multi-agent autonomous financial analysis system for Relationship Managers using LangGraph, LLMs, and Machine Learning models.',
      responsibilities: [
        'Built a 5-step LangGraph workflow coordinating 10+ agents for automated prospect analysis.',
        'Implemented validated Critical/Optional agent flows with fallback logic and error handling.',
        'Developed ML-driven Risk Profiling and Goal Success Prediction with rule-based backup.',
        'Created a Product Recommendation Engine and Portfolio Optimizer using suitability and risk alignment.',
        'Integrated Google Gemini for persona insights, risk explanations, and RM chat assistance.',
        'Built a Streamlit dashboard with analytics, KPIs, and workflow performance monitoring.'
      ],
      impacts: [
        'Automated 70–80% of manual RM workload with faster, accurate, and personalized financial insights.',
        'Delivered a modular, scalable, and extensible multi-agent architecture with real-time explainability.'
      ]
    },
    {
      id: 'rag-pdf-chatbot',
      title: 'RAG Based PDF Chatbot',
      subtitle: 'Personal Learning & Development Project',
      role: 'Full Stack AI Developer',
      technologies: ['Python', 'LangChain', 'RAG', 'React', 'Google Gemini', 'Flask', 'REST API', 'Prompt Engineering'],
      description: 'Developed an interactive chatbot capable of answering questions from uploaded PDF documents using Retrieval Augmented Generation (RAG) and Generative AI.',
      responsibilities: [
        'Built a Flask backend to handle PDF uploads and retrieval-based question answering.',
        'Created a React frontend for real-time chatbot interaction, including chat history and upload validation.',
        'Integrated LangChain for efficient document chunking, embeddings, and QA workflows.',
        'Implemented REST API communication between frontend and backend for seamless data flow.',
        'Gained hands-on experience in end-to-end AI application development, including deployment of RAG-based systems.'
      ],
      impacts: [
        'Completed full frontend-to-backend AI application with real-time feedback loops.',
        'Achieved fast, accurate Q&A responses from arbitrarily structured PDF files.'
      ]
    },
    {
      id: 'handyman-services',
      title: 'Handyman Services At your Doorsteps',
      subtitle: 'SmartService Project',
      role: 'Full Stack & Mobile Developer',
      technologies: ['React Native', 'Typescript', 'Node.js', 'MongoDB', 'Socket.io'],
      description: 'Created two interconnected React Native mobile apps (one for customers to book services and one for handymen to accept jobs in real time via sockets) with a management admin panel.',
      responsibilities: [
        'Developed and implemented back-end and front-end features using Typescript and React Native.',
        'Analyzed and understood specification requirements to ensure accurate implementation.',
        'Participated in technical development, coding, implementation, and testing processes.',
        'Collaborated effectively within a team of 5 members to achieve project goals.',
        'Engaged in code reviews to uphold high standards of code quality and ensure adherence to best practices.'
      ],
      impacts: [
        'Successfully deployed real-time booking dispatching systems utilizing socket connections.',
        'Delivered highly cloud-ready and resilient frontend-backend API integrations.'
      ]
    }
  ];

  const toggleExpand = (projectId: string) => {
    setExpandedProjectId(expandedProjectId === projectId ? null : projectId);
  };

  return (
    <section
      id='projects'
      className='relative py-24 bg-gray-100 dark:bg-slate-900 text-gray-900 dark:text-gray-100 transition-colors duration-300 overflow-hidden'
    >
      {/* Background Grid Pattern */}
      <div className='absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none z-0'></div>

      {/* Background Decorative Blobs */}
      <div className='absolute top-1/4 left-1/4 w-[250px] h-[250px] md:w-[400px] md:h-[400px] bg-emerald-500/10 dark:bg-emerald-500/5 rounded-full blur-[80px] md:blur-[120px] pointer-events-none z-0 animate-glow-slow'></div>
      <div className='absolute bottom-1/4 right-1/4 w-[280px] h-[280px] md:w-[450px] md:h-[450px] bg-cyan-500/10 dark:bg-cyan-500/5 rounded-full blur-[90px] md:blur-[130px] pointer-events-none z-0 animate-float-slow'></div>

      <div className='container mx-auto px-6 max-w-7xl relative z-10'>
        {/* Section Header */}
        <div className='text-center max-w-2xl mx-auto mb-16'>
          <div className='inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-semibold bg-emerald-100 dark:bg-emerald-950/40 text-emerald-800 dark:text-emerald-400 border border-emerald-200/30 w-fit mb-4'>
            <span>Works</span>
          </div>
          <h2 className='text-3xl sm:text-5xl font-black tracking-tight'>
            Featured Projects
          </h2>
          <p className='mt-4 text-gray-600 dark:text-gray-400'>
            A collection of production-grade Google AI agents, financial multi-agent graphs, RAG bots, and full-stack solutions.
          </p>
        </div>
        {/* Projects Grid */}
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
          {(showAll ? projects : projects.slice(0, 2)).map((project) => {
            const isExpanded = expandedProjectId === project.id;
            return (
              <div
                key={project.id}
                className='group relative bg-white dark:bg-slate-950 rounded-2xl border border-gray-250/20 dark:border-slate-800/80 shadow-md hover:shadow-[0_20px_40px_-15px_rgba(16,185,129,0.25)] dark:hover:shadow-[0_20px_40px_-15px_rgba(16,185,129,0.15)] hover:-translate-y-2 hover:scale-[1.01] hover:border-emerald-500/30 dark:hover:border-emerald-500/20 transition-all duration-500 ease-out overflow-hidden flex flex-col justify-between'
              >
                {/* Highlight bar */}
                <div className='absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-emerald-500 to-cyan-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left z-20'></div>

                {/* Glow Accent */}
                <div className='absolute top-0 right-0 w-36 h-36 bg-gradient-to-br from-emerald-500/5 to-cyan-500/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none' />

                <div className='p-8 relative z-10'>
                  <div className='flex items-start justify-between gap-4 mb-4'>
                    <div>
                      <span className='text-xs font-semibold text-emerald-600 dark:text-emerald-400 uppercase tracking-widest'>{project.subtitle}</span>
                      <h3 className='text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mt-1 group-hover:text-emerald-500 dark:group-hover:text-emerald-450 transition-colors duration-300'>
                        {project.title}
                      </h3>
                    </div>
                    <div className='p-3 bg-emerald-50 dark:bg-emerald-950/30 text-emerald-600 dark:text-emerald-400 rounded-xl flex-shrink-0 group-hover:scale-110 group-hover:rotate-12 transition-all duration-350'>
                      <FaLaptopCode className='text-xl' />
                    </div>
                  </div>

                  <p className='text-sm font-semibold text-gray-500 dark:text-gray-400 mb-3'>
                    Role: <span className='text-gray-800 dark:text-gray-250'>{project.role}</span>
                  </p>

                  <p className='text-gray-600 dark:text-gray-355 text-sm leading-relaxed mb-6'>
                    {project.description}
                  </p>

                  {/* Technology Tags */}
                  <div className='flex flex-wrap gap-2 mb-6'>
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className='text-xs px-2.5 py-1 rounded-md bg-gray-50 dark:bg-slate-900 text-gray-600 dark:text-gray-400 border border-gray-155/15 dark:border-slate-800 hover:bg-emerald-500 hover:text-white dark:hover:bg-emerald-500 hover:border-emerald-500 hover:-translate-y-0.5 transition-all duration-300 cursor-default shadow-sm hover:shadow-emerald-500/10'
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Expandable Content (Accordion) */}
                  {isExpanded && (
                    <div className='mt-6 pt-6 border-t border-gray-100 dark:border-slate-850 space-y-6 animate-fadeIn'>
                      {/* Responsibilities */}
                      <div>
                        <h4 className='text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-450 mb-3'>
                          Responsibilities & Achievements
                        </h4>
                        <ul className='space-y-2.5'>
                          {project.responsibilities.map((resp, i) => (
                            <li key={i} className='text-sm text-gray-605 dark:text-gray-350 flex items-start gap-2'>
                              <span className='text-emerald-500 mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-emerald-500'></span>
                              <span className='leading-relaxed'>{resp}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Impacts */}
                      {project.impacts.length > 0 && (
                        <div className='bg-emerald-50/50 dark:bg-emerald-950/20 p-4 rounded-xl border border-emerald-100/50 dark:border-emerald-900/30'>
                          <h4 className='text-xs font-bold uppercase tracking-wider text-emerald-800 dark:text-emerald-400 mb-2 flex items-center gap-1.5'>
                            <FaChartLine /> Key Metrics & Impact
                          </h4>
                          <ul className='space-y-2'>
                            {project.impacts.map((imp, i) => (
                              <li key={i} className='text-sm text-emerald-900 dark:text-emerald-350 font-medium flex items-start gap-2'>
                                <span>🚀</span>
                                <span>{imp}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  )}
                </div>

                {/* Expand Toggle Button */}
                <button
                  onClick={() => toggleExpand(project.id)}
                  className='w-full py-4 bg-gray-50 dark:bg-slate-900 hover:bg-gray-100 dark:hover:bg-slate-850 border-t border-gray-100 dark:border-slate-850 text-sm font-semibold text-emerald-600 dark:text-emerald-400 flex items-center justify-center gap-2 transition-colors duration-200 relative z-10 group/btn'
                >
                  {isExpanded ? (
                    <>
                      Hide Details <FaChevronUp className='transition-transform duration-300 group-hover/btn:-translate-y-0.5' />
                    </>
                  ) : (
                    <>
                      View Details & Impact <FaChevronDown className='transition-transform duration-300 group-hover/btn:translate-y-0.5' />
                    </>
                  )}
                </button>
              </div>
            );
          })}
        </div>

        {/* View All / Show Less Projects Button */}
        {projects.length > 2 && (
          <div className='flex justify-center mt-12 relative z-10'>
            <button
              onClick={() => setShowAll((prev) => !prev)}
              className='px-8 py-3.5 bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 text-white font-bold rounded-xl transition-all duration-300 transform hover:-translate-y-0.5 shadow-md hover:shadow-lg hover:shadow-emerald-500/20 active:scale-95 cursor-pointer btn-shine-effect'
            >
              {showAll ? 'Show Less Projects' : 'View All Projects'}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;
