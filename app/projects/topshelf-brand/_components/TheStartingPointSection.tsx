// app/projects/topshelf-brand/_components/TheStartingPointSection.tsx
'use client';

import { motion, Variants } from 'framer-motion';
import { Sparkles, Heart, Smile, Palette, MessageCircle, MousePointerClick } from 'lucide-react';

// Данные для левой колонки (Атрибуты Бренда)
const brandPillars = [
  { icon: Sparkles, title: "Vibrant", description: "A brand that feels energetic and full of life." },
  { icon: Heart, title: "Approachable", description: "An identity that feels friendly and welcoming to all." },
  { icon: Smile, title: "Charming", description: "Creating delightful moments and a positive customer experience." }
];

export default function TheStartingPointSection() {
  const containerVariants = {
    visible: { transition: { staggerChildren: 0.2 } }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };
  
  const lineVariants: Variants = {
      hidden: { pathLength: 0, opacity: 0 },
      visible: { pathLength: 1, opacity: 1, transition: { duration: 1, ease: "easeInOut", delay: 0.5 } }
  };

  return (
    <div className="w-full h-full flex items-center justify-center p-8 md:p-12 bg-white">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* === КОЛОНКА СЛЕВА: АТРИБУТЫ БРЕНДА (ИНФОГРАФИКА) === */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          <h2 className="text-sm font-bold text-purple-600 uppercase tracking-widest">The Vision</h2>
          <p className="mt-3 text-3xl md:text-4xl font-bold text-gray-800">Deconstructing the Founder's Dream</p>
          <p className="mt-4 text-lg text-gray-600 leading-relaxed">
            We started by translating the client's passion into core brand pillars. This became our guide for every design decision.
          </p>
          <div className="mt-8 space-y-6">
            {brandPillars.map((pillar) => (
              <motion.div key={pillar.title} variants={itemVariants} className="flex items-start gap-4">
                <div className="flex-shrink-0 bg-purple-100 p-3 rounded-lg mt-1">
                  <pillar.icon className="w-6 h-6 text-purple-600"/>
                </div>
                <div>
                  <h4 className="font-bold text-lg text-gray-900">{pillar.title}</h4>
                  <p className="text-gray-600">{pillar.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        {/* === КОЛОНКА СПРАВА: АРХИТЕКТУРА БРЕНДА (ИНТЕРАКТИВНАЯ СХЕМА) === */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.5 }}
        >
          <h3 className="text-sm font-bold text-purple-600 uppercase tracking-widest">Our Mission</h3>
          <p className="mt-3 text-3xl md:text-4xl font-bold text-gray-800">Engineering a Cohesive Brand Architecture</p>
          <p className="mt-4 text-lg text-gray-600 leading-relaxed">
            Our mission was to build a strategic framework that transformed these attributes into a consistent and compelling brand experience.
          </p>
          <div className="mt-8 relative h-80 flex items-center justify-center">
            {/* Анимированные SVG линии */}
            <svg className="absolute w-full h-full" viewBox="0 0 300 200">
                <motion.line x1="150" y1="100" x2="50" y2="30" stroke="#d1d5db" strokeWidth="2" variants={lineVariants} />
                <motion.line x1="150" y1="100" x2="250" y2="30" stroke="#d1d5db" strokeWidth="2" variants={lineVariants} />
                <motion.line x1="150" y1="100" x2="150" y2="170" stroke="#d1d5db" strokeWidth="2" variants={lineVariants} />
            </svg>
            
            {/* Центральный и дочерние блоки */}
            <motion.div variants={itemVariants} className="absolute z-10 bg-purple-600 text-white rounded-full w-32 h-32 flex items-center justify-center text-center font-bold p-2">Brand Core</motion.div>
            
            <motion.div variants={itemVariants} className="absolute top-0 left-0 bg-white p-3 rounded-lg shadow-lg border flex items-center gap-2"><Palette className="w-5 h-5 text-purple-500"/> Visual Identity</motion.div>
            <motion.div variants={itemVariants} className="absolute top-0 right-0 bg-white p-3 rounded-lg shadow-lg border flex items-center gap-2"><MessageCircle className="w-5 h-5 text-purple-500"/> Messaging</motion.div>
            <motion.div variants={itemVariants} className="absolute bottom-0 left-1/2 -translate-x-1/2 bg-white p-3 rounded-lg shadow-lg border flex items-center gap-2"><MousePointerClick className="w-5 h-5 text-purple-500"/> User Experience</motion.div>
          </div>
        </motion.div>

      </div>
    </div>
  );
}