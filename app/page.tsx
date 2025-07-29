// pages/index.tsx или app/page.tsx

'use client';

import Head from 'next/head';

// --- Импорт компонентов ---
import Header from './components/layout/header/Header';
import Hero from './_components/Hero';
import ProjectCarousel from './_components/ProjectCarousel';
import Services from './_components/Services';
import CallToAction from './_components/CallToAction';
import Footer from './components/layout/Footer';

import { projects } from './data/projects';

export default function Home() {
  return (
    <>
      <Head>
        <title>Sparkling — Digital Studio</title>
        <meta name="description" content="A digital studio designing and building bold brands and experiences." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="bg-[#111] text-white font-sans">
        
        <Header />

        <main>
          <Hero />
          
          {/* ✅ FIX: Добавляем ID к компонентам, чтобы навигация работала */}
          <div id="projects">
            <ProjectCarousel projects={projects} />
          </div>
          
          <div id="services">
            <Services />
          </div>

          {/* Компонент CallToAction может быть вашей секцией "About" или контактов.
            Присвойте ему соответствующий id.
          */}
          <div id="about">
            <CallToAction />
          </div>

        </main>

        <Footer />
      </div>
    </>
  );
}