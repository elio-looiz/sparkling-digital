// components/CallToAction.tsx

'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import ContactPanel from './ContactPanel'; // Импортируем нашу новую панель

export default function CallToAction() {
  const [isPanelOpen, setIsPanelOpen] = useState(false);

  return (
    <>
      <section className="relative py-32 bg-[#1f2125] text-center overflow-hidden">
        {/* Background effect */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 0.15, scale: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 2 }}
          className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[#7927e0] blur-[150px] rounded-full z-0"
        />

        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1 }}
            className="text-4xl md:text-5xl font-bold text-white"
          >
            We create clarity, build momentum,
            <br className="hidden md:block" /> and make ideas shine.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1, delay: 0.1 }}
            className="mt-6 text-xl text-gray-400"
          >
            Let’s build something extraordinary together.
          </motion.p>
          
          {/* Меняем <a> на <button> и добавляем обработчик клика */}
          <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            onClick={() => setIsPanelOpen(true)}
            className="inline-block mt-10 px-8 py-4 bg-[#7927e0] text-white font-semibold rounded-xl hover:bg-[#6a22c2] transition-colors transform hover:scale-105"
          >
            Get in Touch
          </motion.button>
        </div>
      </section>

      {/* Условный рендеринг панели */}
      <ContactPanel isOpen={isPanelOpen} onClose={() => setIsPanelOpen(false)} />
    </>
  );
}