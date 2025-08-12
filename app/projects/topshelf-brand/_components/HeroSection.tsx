// app/projects/topshelf-brand/_components/HeroSection.tsx
'use client';
import { motion, Variants } from 'framer-motion';

export default function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3, delayChildren: 0.5 }
    }
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.7, ease: "easeOut" } }
  };

  return (
    <motion.div 
      className="w-full h-full flex flex-col items-center justify-center text-center p-8"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.img
        src="/images/projects/topshelf/topshelf-logo.png"
        alt="TopShelf Brand Logo"
        className="w-80 mx-auto mb-6"
        variants={itemVariants}
      />
      <motion.h1 
        className="text-4xl md:text-6xl font-bold tracking-tight text-gray-800"
        variants={itemVariants}
      >
        Crafting an Identity as Vibrant as the Vision
      </motion.h1>
      <motion.p 
        className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto"
        variants={itemVariants}
      >
        Every great store begins with a spark. This is the story of how we turned that spark into a brand people love.
      </motion.p>
    </motion.div>
  );
}