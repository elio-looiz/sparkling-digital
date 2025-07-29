// components/ProjectCarousel.tsx

'use client';

import { useState } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

// --- ТИПЫ ДАННЫХ ---
type Project = {
  title: string;
  category: string;
  description: string;
  image: string;
};

type Props = {
  projects: Project[];
};

// --- МАССИВ С ДАННЫМИ ПРОЕКТОВ (замените на свои) ---
const dummyProjects: Project[] = [
  {
    title: 'Aura',
    category: 'Branding & Website',
    description: 'A complete redesign of the brand identity and a new e-commerce platform for a modern wellness company, focusing on a minimalist aesthetic and a seamless user experience.',
    image: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    title: 'Nexus',
    category: 'UI/UX Mobile App',
    description: 'A native mobile application for a fintech startup, designed to simplify crypto trading. We developed an intuitive interface with powerful data visualization tools.',
    image: 'https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    title: 'Orbit',
    category: 'Interactive Experience',
    description: 'An immersive WebGL experience for a science museum, allowing users to explore the solar system in 3D. The project pushed the boundaries of browser-based interactions.',
    image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    title: 'Momentum',
    category: 'Marketing Campaign',
    description: 'A high-impact landing page and digital assets for a new electric vehicle launch. The campaign focused on dynamic visuals and compelling storytelling to drive pre-orders.',
    image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
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
export default function ProjectCarousel({ projects = dummyProjects }: Props) {
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
            {/* AnimatePresence теперь будет работать правильно */}
            <AnimatePresence initial={false}>
              {activeProject === index ? (
                <motion.div
                  // ✅ ИСПРАВЛЕНИЕ 1: Добавлен key
                  key="active-content"
                  variants={contentVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit" // Используем кастомный exit
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
                  <motion.a
                    href="#"
                    variants={itemVariants}
                    className="inline-flex items-center gap-2 mt-6 px-4 py-2 bg-purple-600/80 text-white rounded-md hover:bg-purple-500 transition-colors backdrop-blur-sm"
                  >
                    View Project <ArrowUpRight size={18} />
                  </motion.a>
                </motion.div>
              ) : (
                <motion.div
                  // ✅ ИСПРАВЛЕНИЕ 2: Добавлен key
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