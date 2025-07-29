// app/projects/ford-dealership/_components/ImageZoom.tsx
'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';

type Props = {
  src: string;
  alt: string;
};

export default function ImageZoom({ src, alt }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    // Начинаем анимацию, когда низ контейнера достигает верха экрана,
    // и заканчиваем, когда верх контейнера уходит за низ экрана.
    offset: ['end end', 'start start'],
  });

  // Масштабируем от 1 до 1.15. Уменьшил значение для более мягкого эффекта.
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

  return (
    // Этот контейнер-трек задает только высоту для прокрутки
    <div ref={containerRef} className="h-[150vh] my-24">
      {/* Этот контейнер "прилипает" к экрану и действует как окно */}
      <div className="sticky top-0 h-screen w-full">
        {/* ✅ FIX: Добавлен дополнительный контейнер с overflow-hidden.
            Именно он будет надежно "обрезать" увеличенное изображение. */}
        <div className="relative w-full h-full overflow-hidden rounded-2xl">
          <motion.div
            style={{ scale }}
            className="w-full h-full"
          >
            {/* Изображение теперь внутри отцентровано и будет плавно масштабироваться */}
            <Image
              src={src}
              alt={alt}
              layout="fill"
              objectFit="cover"
              className="mx-auto" // Центрируем на всякий случай
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}