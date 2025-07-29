// app/projects/ford-dealership/_components/BarChart.tsx
'use client';

import { motion, type Variants } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Counter from './Counter'; // Используем наш счетчик

type BarData = {
  label: string;
  value: number;
  cost: string;
};

type Props = {
  data: BarData[];
};

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15, // Плавное появление каждого ряда
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 },
};

export default function BarChart({ data }: Props) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const maxValue = Math.max(...data.map(d => d.value));

  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      className="w-full space-y-4"
    >
      {data.map((bar, index) => (
        <motion.div
          key={index}
          variants={itemVariants}
          className="grid grid-cols-12 gap-x-4 items-center"
        >
          {/* Название кампании */}
          <div className="col-span-4 text-left">
            <p className="text-sm text-gray-300 truncate">{bar.label}</p>
          </div>

          {/* Полоса графика */}
          <div className="col-span-6 bg-white/5 rounded-full h-8 p-1">
            <motion.div
              className="bg-purple-500 h-full rounded-full flex items-center justify-end pr-3"
              initial={{ width: '0%' }}
              animate={{ width: inView ? `${(bar.value / maxValue) * 100}%` : '0%' }}
              transition={{ duration: 1.5, delay: index * 0.1, ease: 'easeOut' }}
            >
              {/* Значение внутри полосы */}
              <p className="text-white font-bold text-sm">
                <Counter to={bar.value} />
              </p>
            </motion.div>
          </div>

          {/* Стоимость */}
          <div className="col-span-2 text-right">
            <p className="text-xs text-gray-400">{bar.cost}</p>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}
