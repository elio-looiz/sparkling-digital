// components/Services.tsx

'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
// ✅ FIX 1: We don't need to import a type for the icon here.
import { Code, Megaphone, Blend, Rocket } from 'lucide-react';
import type { ComponentType } from 'react'; // Import the correct type for a component

// --- ТИПЫ И ДАННЫЕ УСЛУГ ---
type Service = {
  id: string;
  title: string;
  description: string;
  // ✅ FIX 2: Use the standard React type for a component.
  Icon: ComponentType<{ className?: string }>;
};

const servicesData: Service[] = [
  {
    id: 'dev',
    title: 'Digital Platforms & Web Apps',
    description: 'We don&apos;t just build websites, we engineer robust digital experiences. From high-load platforms to interactive web applications, our code is clean, scalable, and built for performance. Your business goals are our technical blueprint.',
    Icon: Code,
  },
  {
    id: 'marketing',
    title: 'Brand Strategy & Growth Marketing',
    description: 'A great product needs a powerful story. We craft data-driven marketing strategies that build brand resonance and drive measurable growth. From audience research to conversion funnels, we connect you with your customers.',
    Icon: Megaphone,
  },
  {
    id: 'hybrid',
    title: 'Growth-Driven Design',
    description: 'This is where dev and marketing merge. We create digital products that are not only beautiful but are also optimized for user acquisition and retention from day one. It’s an iterative approach that turns your platform into a marketing machine.',
    Icon: Blend,
  },
  {
    id: 'launch',
    title: 'Product Launch & Acceleration',
    description: 'Have an idea ready to conquer the market? We provide a full-cycle service from pre-launch hype to post-launch scaling. Combining technical deployment with aggressive marketing, we ensure your product makes a memorable entrance.',
    Icon: Rocket,
  },
];


// --- КОМПОНЕНТ ---
export default function Services() {
  const [activeServiceId, setActiveServiceId] = useState(servicesData[0].id);
  const activeService = servicesData.find(s => s.id === activeServiceId);

  return (
    <section className="relative w-full bg-[#111] py-24 sm:py-32 px-6">
      {/* Декоративный градиент на фоне */}
      <div className="absolute inset-0 z-0">
        <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-[#111] to-transparent"></div>
        <div
          className="absolute top-1/4 left-1/2 -translate-x-1/2 w-3/4 h-1/2 bg-purple-900/40 rounded-full blur-3xl"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Where Code Meets Creativity
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            We are a hybrid studio that blends technical excellence with marketing acumen to build solutions that don't just work, but also grow.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Левая колонка: Список услуг */}
          <div className="lg:col-span-1">
            <ul className="space-y-2">
              {servicesData.map((service) => (
                <li key={service.id}>
                  <button
                    onClick={() => setActiveServiceId(service.id)}
                    className={`w-full text-left p-4 rounded-lg transition-colors duration-300 relative ${
                      activeServiceId === service.id
                        ? 'bg-white/10'
                        : 'hover:bg-white/5'
                    }`}
                  >
                    <span className={`text-lg font-semibold transition-colors ${
                      activeServiceId === service.id ? 'text-white' : 'text-gray-400'
                    }`}>
                      {service.title}
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Правая колонка: Описание активной услуги */}
          <div className="lg:col-span-2 min-h-[300px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeServiceId}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
                className="bg-white/5 p-8 rounded-xl border border-white/10 h-full"
              >
                {activeService && (
                  <div>
                    <activeService.Icon className="w-12 h-12 mb-6 text-purple-400" />
                    <h3 className="text-2xl font-bold text-white mb-4">
                      {activeService.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      {activeService.description}
                    </p>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}