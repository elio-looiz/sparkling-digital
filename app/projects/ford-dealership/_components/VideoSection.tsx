// app/projects/ford-dealership/_components/VideoSection.tsx
'use client';

import { useState, useEffect, useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Users, TrendingUp, Handshake, BarChart2 } from 'lucide-react';
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';
import HudStat from './HudStat';
import FinalStatCard from './FinalStatCard';

type Props = {
  posterSrc: string;
  videoSrc: string;
};

const statsData = [
  { Icon: Users, label: "Audience Growth", value: 400, unit: "%" },
  { Icon: TrendingUp, label: "Lead Increase", value: 250, unit: "%" },
  { Icon: Handshake, label: "Engagement Rate", value: 75, unit: "%" },
  { Icon: BarChart2, label: "Q4 Sales Growth", value: 75, unit: "%" },
];

export default function VideoSection({ posterSrc, videoSrc }: Props) {
  const [isVideoReady, setIsVideoReady] = useState(false);
  const [activeStatIndex, setActiveStatIndex] = useState(-1);
  const [visibleCardCount, setVisibleCardCount] = useState(0); // ✅ Новый state для карточек
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 });
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (inView) {
      videoRef.current?.play().catch(console.error);
    }
  }, [inView]);

  // ✅ FIX: Новая логика для последовательной анимации
  useEffect(() => {
    if (isVideoReady) {
      const timers: NodeJS.Timeout[] = [];
      const sequenceDuration = 2500; // 2.5 секунды на каждый шаг

      // Запускаем цикл для каждой цели
      for (let i = 0; i < statsData.length; i++) {
        // Показываем "цель" в центре
        timers.push(setTimeout(() => {
          setActiveStatIndex(i);
        }, i * sequenceDuration));

        // Через 2 секунды добавляем карточку в сетку внизу
        timers.push(setTimeout(() => {
          setVisibleCardCount(prev => prev + 1);
        }, i * sequenceDuration + 2000));
      }

      // В конце скрываем последнюю "цель" из центра
      timers.push(setTimeout(() => {
        setActiveStatIndex(-1);
      }, statsData.length * sequenceDuration));

      return () => timers.forEach(clearTimeout);
    }
  }, [isVideoReady]);

  return (
    <section ref={ref} className="max-w-7xl mx-auto px-6 my-16 md:my-24">
      <div className="relative h-[70vh] md:h-screen rounded-2xl overflow-hidden bg-black">
        <Image src={posterSrc} alt="Background poster" fill priority className="object-cover" />
        <AnimatePresence>
          {!isVideoReady && (
            <motion.div initial={{ opacity: 1 }} exit={{ opacity: 0 }} className="absolute inset-0 z-20 flex items-center justify-center bg-black/50">
              <div className="w-16 h-16 border-4 border-purple-500 border-t-transparent rounded-full animate-spin" />
            </motion.div>
          )}
        </AnimatePresence>
        <video
          ref={videoRef}
          src={videoSrc}
          loop
          muted
          playsInline
          onCanPlay={() => setIsVideoReady(true)}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${isVideoReady ? 'opacity-100' : 'opacity-0'}`}
        />
        
        <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none">
          <AnimatePresence mode="wait">
            {activeStatIndex !== -1 && (
              <motion.div
                key={activeStatIndex}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.5 }}
                transition={{ duration: 0.5 }}
              >
                <HudStat {...statsData[activeStatIndex]} />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* ✅ FIX: Финальная сетка теперь анимирует появление каждой карточки отдельно */}
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <AnimatePresence>
          {statsData.slice(0, visibleCardCount).map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              <FinalStatCard {...stat} />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
}