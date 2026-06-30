// pages/index.tsx
import Head from 'next/head';

import MainLayout from '../layouts/MainLayout';
import HomeSection from '../components/HomeSection';
import AboutSection from '../components/AboutSection';
import ProjectsSection from '../components/ProjectsSection';
import ContactSection from '../components/ContactSection';
import InspiringQuotes from '../components/InspiringSection';
import Skills from '../components/SkillSection';
import CertificateViewer from '../components/CerticationSection';
import Footer from '../components/FooterSection';
import ChatbotWidget from '../components/ai/ChatbotWidget';

const Home = () => {
  return (
    <>
      <MainLayout>
        <section className='bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 py-2'>
          <Head>
            <title>Md Ghazanfar Alam - Gen AI &amp; Agentic AI Specialist</title>
            <meta
              name='description'
              content='Professional portfolio of Md Ghazanfar Alam, Associate Engineer specializing in Generative AI, Agentic AI, and Google Cloud Machine Learning.'
            />
          </Head>
          <HomeSection />
          <AboutSection />
          <Skills />
          <CertificateViewer />
          <ProjectsSection />
          <InspiringQuotes />
          <ContactSection />
          <Footer />
        </section>
      </MainLayout>
      <ChatbotWidget />
    </>
  );
};

export default Home;
