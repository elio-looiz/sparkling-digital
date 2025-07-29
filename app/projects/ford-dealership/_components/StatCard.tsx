// app/projects/ford-dealership/_components/StatCard.tsx
'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

type Props = {
  label: string;
  value: string;
  unit: string;
  delay?: number;
};

export default function StatCard({ label, value, unit, delay = 0 }: Props) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay } },
  };

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      className="bg-white/5 border border-white/10 p-6 rounded-xl text-center"
    >
      <p className="text-gray-400 text-sm uppercase tracking-wider">{label}</p>
      <p className="text-5xl font-bold text-white mt-2">
        {value}
        <span className="text-purple-400 text-4xl ml-1">{unit}</span>
      </p>
    </motion.div>
  );
}