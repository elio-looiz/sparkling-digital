// components/ProjectCarousel.tsx

'use client';

import { useState } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

// --- ТИПЫ ДАННЫХ ---
type Project = {
  title: string;
  category: string;
  description: string;
  image: string;
  link: string;
};

// --- ✨ ИЗМЕНЕНО: Обновлен и отсортирован массив проектов ---
const dummyProjects: Project[] = [
  {
    title: 'Operation: Afterburner',
    category: 'Digital Marketing Campaign',
    description: 'A high-octane digital marketing campaign for Cold Lake Ford, aligning dealership prestige with the power of Canada\'s fighter jets to dominate the digital airspace and drive community engagement.',
    image: '/images/projects/ford-dealership/jet.jpg',
    link: '/projects/ford-dealership',
  },
  {
    title: 'Impact Health',
    category: 'Branding & Digital Strategy',
    description: 'A complete brand and digital identity for a physiotherapy clinic, focused on building patient trust through empathetic storytelling and a seamless online experience.',
    image: '/images/projects/impact-health/physio-session.jpg',
    link: '/projects/impact-health',
  },
  // ✨ ИЗМЕНЕНО: Третий проект заменен на TopShelf Brand
  {
    title: 'TopShelf Brand',
    category: 'Brand Identity Design',
    description: 'We developed a comprehensive brand identity from scratch for a new retail store, including a vibrant logo, brand guidelines, and visual assets to capture the owner\'s vision. [cite: 49, 52]',
    image: '/images/projects/topshelf/topshelf-store-sign.png', // Изображение из кейс-стади
    link: '/projects/topshelf-brand',
  },
];


// --- ВАРИАНТЫ АНИМАЦИИ ---
const contentVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
      staggerChildren: 0.1,
    },
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: { duration: 0.3, ease: 'easeIn' }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

// --- КОМПОНЕНТ ---
export default function ProjectCarousel({ projects = dummyProjects }) {
  const [activeProject, setActiveProject] = useState(0);

  return (
    <section className="h-screen w-full bg-[#111] flex overflow-hidden">
      {projects.map((project, index) => (
        <motion.div
          key={project.title}
          onClick={() => setActiveProject(index)}
          animate={{ flex: activeProject === index ? 4 : 1 }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="relative group cursor-pointer overflow-hidden border-l-2 border-[#222]"
        >
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-in-out group-hover:scale-105"
            style={{ backgroundImage: `url(${project.image})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/10" />

          <div className="relative h-full w-full flex items-end justify-center">
            <AnimatePresence initial={false}>
              {activeProject === index ? (
                <motion.div
                  key="active-content"
                  variants={contentVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="w-full p-6 md:p-10 text-left"
                >
                  <motion.p variants={itemVariants} className="text-sm font-semibold uppercase text-purple-400">
                    {project.category}
                  </motion.p>
                  <motion.h3 variants={itemVariants} className="text-3xl md:text-5xl font-bold text-white mt-2">
                    {project.title}
                  </motion.h3>
                  <motion.p variants={itemVariants} className="text-gray-300 mt-4 max-w-lg">
                    {project.description}
                  </motion.p>
                  
                  <Link
                    href={project.link}
                    target={project.link === '#' ? '_self' : '_blank'}
                    rel="noopener noreferrer"
                  >
                    <motion.div
                      variants={itemVariants}
                      className="inline-flex items-center gap-2 mt-6 px-4 py-2 bg-purple-600/80 text-white rounded-md hover:bg-purple-500 transition-colors backdrop-blur-sm"
                    >
                      View Project <ArrowUpRight size={18} />
                    </motion.div>
                  </Link>

                </motion.div>
              ) : (
                <motion.div
                  key="inactive-content"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                >
                  <div className="flex items-center gap-4 [writing-mode:vertical-rl] transform -rotate-180">
                     <h3 className="text-2xl font-semibold text-white whitespace-nowrap">
                       {project.title}
                     </h3>
                     <p className="text-sm text-purple-400 uppercase">{project.category}</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      ))}
    </section>
  );
}