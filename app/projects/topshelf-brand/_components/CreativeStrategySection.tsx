// app/projects/topshelf-brand/_components/CreativeStrategySection.tsx
'use client';
import { motion, Variants } from 'framer-motion';
import { Lightbulb, Users, BarChart2 } from 'lucide-react';

const strategySteps = [
  { icon: Lightbulb, title: "Vision Workshop", description: "A deep-dive session to align on the core values: 'vibrancy, approachability, and charm'." },
  { icon: Users, title: "Audience Persona", description: "Defining the ideal customer to guide all creative decisions." },
  { icon: BarChart2, title: "Market Analysis", description: "Identifying opportunities by analyzing competitor brands and market trends." }
];

export default function CreativeStrategySection() {
  const listVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.4 } }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
  };

  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-8">
      <div className="max-w-4xl text-center">
        <h2 className="text-3xl font-bold text-gray-800">Chapter I: Forging the Strategy</h2>
        <p className="mt-3 text-lg text-gray-600">Before a single pixel was placed, we built a solid strategic foundation.</p>
      </div>
      <motion.div 
        className="mt-12 w-full max-w-2xl space-y-4"
        variants={listVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {strategySteps.map((step, index) => (
          <motion.div key={index} className="flex items-center gap-6 p-4" variants={itemVariants}>
            <div className="bg-orange-100 p-4 rounded-full">
              <step.icon className="w-8 h-8 text-orange-500" />
            </div>
            <div>
              <h3 className="text-xl font-bold">{step.title}</h3>
              <p className="text-gray-700">{step.description}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}