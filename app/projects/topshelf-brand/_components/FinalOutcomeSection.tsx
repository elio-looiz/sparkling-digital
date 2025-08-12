// app/projects/topshelf-brand/_components/FinalOutcomeSection.tsx
'use client';
import { motion, Variants } from 'framer-motion';

export default function FinalOutcomeSection() {
  const checkVariants: Variants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: { pathLength: 1, opacity: 1, transition: { duration: 1, ease: "easeInOut" } }
  };

  const textVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.8, delay: 0.8, ease: "easeOut" } }
  };

  return (
    <motion.div 
      className="w-full h-full flex items-center justify-center bg-purple-600 text-white p-8"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      transition={{ staggerChildren: 0.3 }}
    >
      <div className="max-w-4xl text-center">
        <svg className="w-24 h-24 mx-auto" viewBox="0 0 24 24">
          <motion.path
            d="M5 13l4 4L19 7"
            fill="transparent"
            strokeWidth="2"
            stroke="white"
            strokeLinecap="round"
            strokeLinejoin="round"
            variants={checkVariants}
          />
        </svg>
        <motion.h2 className="mt-6 text-3xl md:text-5xl font-bold" variants={textVariants}>
          The Result: A Confident Launch
        </motion.h2>
        <motion.p className="mt-4 text-lg text-purple-200 leading-relaxed" variants={textVariants}>
          We delivered a complete, strategic brand ecosystem. TopShelf launched not with a product, but with a personality, fully equipped to build a loyal customer base and thrive in a competitive retail landscape.
        </motion.p>
      </div>
    </motion.div>
  );
}