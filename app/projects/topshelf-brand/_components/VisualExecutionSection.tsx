// app/projects/topshelf-brand/_components/VisualExecutionSection.tsx
'use client';
import { motion } from 'framer-motion';
import { PenTool, BookOpen } from 'lucide-react';

export default function VisualExecutionSection() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-8">
      <div className="max-w-4xl text-center">
        <h2 className="text-3xl font-bold text-gray-800">Chapter II: The Visual Execution</h2>
        <p className="mt-3 text-lg text-gray-600">With a clear strategy, our design team brought the brand to life.</p>
      </div>
      <div className="mt-12 grid md:grid-cols-2 gap-12 max-w-4xl w-full items-center">
        <motion.div 
          className="text-center"
          initial={{ scale: 0.5, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
        >
          <img src="/images/projects/topshelf/topshelf-logo.png" alt="TopShelf Logo" className="w-full"/>
          <p className="mt-2 font-semibold">The final logo combines playful typography and colorful cubes representing a "surprise on every shelf."</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <h3 className="text-xl font-bold flex items-center gap-3"><BookOpen className="text-teal-500"/>The Brand Guidelines</h3>
          <p className="mt-2 text-gray-700">We created a comprehensive 'brand bible' to ensure consistency. It included:</p>
          <ul className="mt-4 space-y-2 text-left">
            {['Color Palette', 'Typography Rules', 'Logo Usage', 'Iconography'].map((item, i) => (
              <motion.li 
                key={item}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.8 + i * 0.2 }}
                className="font-medium"
              >
                <span className="text-teal-500 mr-2">✓</span>{item}
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </div>
  );
}