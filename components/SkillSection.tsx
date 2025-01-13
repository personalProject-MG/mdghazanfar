// import React from 'react';
// import {
//   FaJs,
//   FaPython,
//   FaReact,
//   FaNode,
//   FaCloud,
//   FaGit,
// } from 'react-icons/fa';
// import {
//   SiTypescript,
//   SiHtml5,
//   SiCss3,
//   SiTailwindcss,
//   SiNextdotjs,
//   SiMongodb,
//   SiMysql,
//   SiGooglecloud,
//   SiFigma,
//   SiSwagger,
//   SiPostman,
// } from 'react-icons/si';

// // Icon mapping for each skill
// const iconMap: Record<string, JSX.Element> = {
//   // Programming Languages
//   JavaScript: <FaJs />,
//   TypeScript: <SiTypescript />,
//   Python: <FaPython />,
//   'C++': <FaJs />, // Add a relevant icon if needed
//   C: <FaJs />, // Add a relevant icon if needed

//   // Web Frontend
//   HTML: <SiHtml5 />,
//   CSS: <SiCss3 />,
//   React: <FaReact />,
//   Bootstrap: <FaReact />, // Placeholder, replace with relevant icon
//   Sass: <FaReact />, // Placeholder, replace with relevant icon
//   'Tailwind CSS': <SiTailwindcss />,
//   'Next.js': <SiNextdotjs />,

//   // Web Backend
//   Node: <FaNode />,
//   Express: <FaNode />, // Placeholder, replace with relevant icon
//   Django: <FaPython />,
//   Flask: <FaPython />,
//   Streamlit: <FaPython />,

//   // Mobile
//   'React Native': <FaReact />,

//   // Generative AI
//   'OpenAI API (ChatGPT, DALL·E)': <FaCloud />,
//   'Hugging Face Transformers': <FaCloud />,
//   'Google Vertex AI (Text and Image Generation)': <SiGooglecloud />,
//   LangChain: <FaCloud />,
//   PyTorch: <FaCloud />,
//   'Bard API': <FaCloud />,
//   'GPT-4': <FaCloud />,
//   'GitHub Copilot': <FaCloud />,

//   // Databases
//   MongoDB: <SiMongodb />,
//   MySQL: <SiMysql />,

//   // Cloud
//   GCP: <SiGooglecloud />,
//   'Compute Engine': <SiGooglecloud />,
//   'Cloud Run': <SiGooglecloud />,
//   'Kubernetes Engine (GKE)': <SiGooglecloud />,
//   'App Engine': <SiGooglecloud />,
//   'Cloud Storage': <SiGooglecloud />,
//   'Networking (VPC, Load Balancer)': <SiGooglecloud />,

//   // Other Tools
//   Git: <FaGit />,
//   GitHub: <FaGit />, // Placeholder, replace with relevant icon
//   VSCode: <FaGit />, // Placeholder, replace with relevant icon
//   'Unix Shells (Bash/fish)': <FaGit />, // Placeholder, replace with relevant icon
//   Postman: <SiPostman />,
//   Swagger: <SiSwagger />,
//   Figma: <SiFigma />,
//   JIRA: <FaGit />, // Placeholder, replace with relevant icon
//   Slack: <FaGit />, // Placeholder, replace with relevant icon
//   PowerShell: <FaGit />, // Placeholder, replace with relevant icon
//   Nginx: <FaGit />, // Placeholder, replace with relevant icon
// };

// // Skill categories
// const categories = [
//   {
//     title: 'Programming Languages',
//     items: ['JavaScript', 'TypeScript', 'Python', 'C++', 'C'],
//   },
//   {
//     title: 'Web Frontend',
//     items: [
//       'HTML',
//       'CSS',
//       'React',
//       'Bootstrap',
//       'Sass',
//       'JavaScript',
//       'TypeScript',
//       'Tailwind CSS',
//       'Next.js',
//     ],
//   },
//   {
//     title: 'Web Backend',
//     items: ['Node', 'Express', 'Django', 'Flask', 'Streamlit'],
//   },
//   {
//     title: 'Mobile',
//     items: ['React Native'],
//   },
//   {
//     title: 'Generative AI',
//     items: [
//       'OpenAI API (ChatGPT, DALL·E)',
//       'Hugging Face Transformers',
//       'Google Vertex AI (Text and Image Generation)',
//       'LangChain',
//       'PyTorch',
//       'Streamlit',
//       'Bard API',
//       'GPT-4',
//       'GitHub Copilot',
//     ],
//   },

//   {
//     title: 'Databases',
//     items: ['MongoDB', 'MySQL'],
//   },
//   {
//     title: 'Cloud',
//     items: [
//       'GCP',
//       'Compute Engine',
//       'Cloud Run',
//       'Kubernetes Engine (GKE)',
//       'App Engine',
//       'Cloud Storage',
//       'Networking (VPC, Load Balancer)',
//     ],
//   },
//   {
//     title: 'Other Tools',
//     items: [
//       'Git',
//       'GitHub',
//       'VSCode',
//       'Unix Shells (Bash/fish)',
//       'Postman',
//       'Swagger',
//       'Figma',
//       'JIRA',
//       'Slack',
//       'PowerShell',
//       'Nginx',
//     ],
//   },
// ];

// const Skills = () => {
//   return (
//     <div className='min-h-screen bg-gray-100 dark:bg-gray-900 flex flex-col justify-center items-center px-4'>
//       <h2 className='text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-10'>
//         Skills
//       </h2>
//       <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-7xl'>
//         {categories.map((category, index) => (
//           <div
//             key={index}
//             className='bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-6 rounded-xl shadow-lg'
//           >
//             <h3 className='text-xl font-semibold mb-4'>{category.title}</h3>
//             <ul className='space-y-2'>
//               {category.items.map((item, i) => (
//                 <li
//                   key={i}
//                   className='flex items-center space-x-2 text-gray-700 dark:text-gray-300'
//                 >
//                   <span>{iconMap[item] || <FaCloud />}</span>{' '}
//                   {/* Fallback icon */}
//                   <span>{item}</span>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Skills;

import React from 'react';
import {
  FaJs,
  FaPython,
  FaReact,
  FaNode,
  FaCloud,
  FaGit,
  FaBootstrap,
  FaSass,
  FaCss3,
  FaHtml5,
} from 'react-icons/fa';
import {
  SiTypescript,
  SiTailwindcss,
  SiNextdotjs,
  SiMongodb,
  SiMysql,
  SiGooglecloud,
  SiFigma,
  SiSwagger,
  SiPostman,
} from 'react-icons/si';
import { DiDjango } from 'react-icons/di';

// Icon mapping for each skill
const iconMap: Record<string, JSX.Element> = {
  // Programming Languages
  JavaScript: <FaJs />,
  TypeScript: <SiTypescript />,
  Python: <FaPython />,
  'C++': <FaJs />, // Add a relevant icon if needed
  C: <FaJs />, // Add a relevant icon if needed

  // Web Frontend
  HTML: <FaHtml5 />,
  CSS: <FaCss3 />,
  React: <FaReact />,
  Bootstrap: <FaBootstrap />,
  Sass: <FaSass />,
  'Tailwind CSS': <SiTailwindcss />,
  'Next.js': <SiNextdotjs />,

  // Web Backend
  Node: <FaNode />,
  Express: <FaNode />, // Placeholder, replace with relevant icon
  Django: <DiDjango />,
  Flask: <DiDjango />,
  Streamlit: <FaPython />,

  // Mobile
  'React Native': <FaReact />,

  // Generative AI
  'OpenAI API (ChatGPT, DALL·E)': <FaCloud />,
  'Hugging Face Transformers': <FaCloud />,
  'Google Vertex AI (Text and Image Generation)': <SiGooglecloud />,
  LangChain: <FaCloud />,
  PyTorch: <FaCloud />,
  'Bard API': <FaCloud />,
  'GPT-4': <FaCloud />,
  'GitHub Copilot': <FaCloud />,

  // Databases
  MongoDB: <SiMongodb />,
  MySQL: <SiMysql />,

  // Cloud
  GCP: <SiGooglecloud />,
  'Compute Engine': <SiGooglecloud />,
  'Cloud Run': <SiGooglecloud />,
  'Kubernetes Engine (GKE)': <SiGooglecloud />,
  'App Engine': <SiGooglecloud />,
  'Cloud Storage': <SiGooglecloud />,
  'Networking (VPC, Load Balancer)': <SiGooglecloud />,

  // Other Tools
  Git: <FaGit />,
  GitHub: <FaGit />,
  VSCode: <FaGit />, // Placeholder, replace with relevant icon
  'Unix Shells (Bash/fish)': <FaGit />, // Placeholder, replace with relevant icon
  Postman: <SiPostman />,
  Swagger: <SiSwagger />,
  Figma: <SiFigma />,
  JIRA: <FaGit />, // Placeholder, replace with relevant icon
  Slack: <FaGit />, // Placeholder, replace with relevant icon
  PowerShell: <FaGit />, // Placeholder, replace with relevant icon
  Nginx: <FaGit />, // Placeholder, replace with relevant icon
};

// Skill categories
const categories = [
  {
    title: 'Programming Languages',
    items: ['JavaScript', 'TypeScript', 'Python', 'C++', 'C'],
  },
  {
    title: 'Web Frontend',
    items: [
      'HTML',
      'CSS',
      'React',
      'Bootstrap',
      'Sass',
      'JavaScript',
      'TypeScript',
      'Tailwind CSS',
      'Next.js',
    ],
  },
  {
    title: 'Web Backend',
    items: ['Node', 'Express', 'Django', 'Flask', 'Streamlit'],
  },
  {
    title: 'Mobile',
    items: ['React Native'],
  },
  {
    title: 'Generative AI',
    items: [
      'OpenAI API (ChatGPT, DALL·E)',
      'Hugging Face Transformers',
      'Google Vertex AI (Text and Image Generation)',
      'LangChain',
      'PyTorch',
      'Streamlit',
      'Bard API',
      'GPT-4',
      'GitHub Copilot',
    ],
  },

  {
    title: 'Databases',
    items: ['MongoDB', 'MySQL'],
  },
  {
    title: 'Cloud',
    items: [
      'GCP',
      'Compute Engine',
      'Cloud Run',
      'Kubernetes Engine (GKE)',
      'App Engine',
      'Cloud Storage',
      'Networking (VPC, Load Balancer)',
    ],
  },
  {
    title: 'Other Tools',
    items: [
      'Git',
      'GitHub',
      'VSCode',
      'Unix Shells (Bash/fish)',
      'Postman',
      'Swagger',
      'Figma',
      'JIRA',
      'Slack',
      'PowerShell',
      'Nginx',
    ],
  },
];

const Skills = () => {
  return (
    <div className='min-h-screen bg-gray-100 dark:bg-gray-900 flex flex-col justify-center items-center px-4'>
      <h2 className='text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-10'>
        Skills
      </h2>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-7xl'>
        {categories.map((category, index) => (
          <div
            key={index}
            className='bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-6 rounded-xl shadow-lg'
          >
            <h3 className='text-xl font-semibold mb-4'>{category.title}</h3>
            <ul className='space-y-2'>
              {category.items.map((item, i) => (
                <li
                  key={i}
                  className='flex items-center space-x-2 text-gray-700 dark:text-gray-300'
                >
                  <span>{iconMap[item] || <FaCloud />}</span>{' '}
                  {/* Fallback icon */}
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
