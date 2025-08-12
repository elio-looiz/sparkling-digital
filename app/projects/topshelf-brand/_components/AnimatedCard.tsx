// app/projects/topshelf-brand/_components/AnimatedCard.tsx
'use client';

import { motion, useTransform, MotionValue } from 'framer-motion';
import { ReactNode } from 'react';

type Props = {
  i: number;
  total: number;
  scrollYProgress: MotionValue<number>;
  children: ReactNode;
  color: string;
};

export default function AnimatedCard({ i, total, scrollYProgress, children, color }: Props) {
  
  // ✨ 1. Динамически вычисляем ширину для каждой карточки
  // Каждая следующая карточка на 2% уже предыдущей.
  const cardWidth = 98 - (i * 2);

  // ✨ 2. Используем исправленную и более простую логику анимации для плавности
  // Диапазон, в котором карточка анимируется (появляется).
  const range: [number, number] = [(i - 0.5) / total, i / total];
  // Масштаб плавно анимируется от 0.95 до 1.
  const scale = useTransform(scrollYProgress, range, [0.95, 1]);

  return (
    <motion.div
      style={{
        position: 'sticky',
        top: 0, // Карточки теперь выровнены по центру, т.к. разная ширина создает нужный эффект
        scale,
        // ✨ 3. Применяем вычисленную ширину
        width: `${cardWidth}%`, 
      }}
      // Центрируем блок с измененной шириной
      className="mx-auto h-screen"
    >
      <div className={`w-full h-full p-8 md:p-12 rounded-3xl overflow-hidden ${color}`}>
        {children}
      </div>
    </motion.div>
  );
}