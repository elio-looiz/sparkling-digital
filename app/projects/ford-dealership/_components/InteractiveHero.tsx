// app/projects/ford-dealership/_components/InteractiveHero.tsx
'use client';

import { useState } from 'react';
import Image from 'next/image';
import styles from './InteractiveHero.module.css';

type Props = {
  logoSrc: string;
  leftImageSrc: string; // Изображение Raptor
  rightImageSrc: string; // Изображение истребителя
};

export default function InteractiveHero({ logoSrc, leftImageSrc, rightImageSrc }: Props) {
  // Состояние для хранения позиции маски (в процентах)
  const [maskPosition, setMaskPosition] = useState({ x: 50, y: 50 });

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMaskPosition({ x, y });
  };

  return (
    <section
      className={styles.heroContainer}
      onMouseMove={handleMouseMove}
    >
      {/* Нижний слой: Ford Raptor */}
      <div className={styles.backgroundImage}>
        <Image
          src={leftImageSrc}
          alt="Ford Raptor"
          fill
          priority
          className="object-cover"
        />
      </div>

      {/* Верхний слой: Истребитель (проявляется через маску) */}
      <div
        className={styles.backgroundImage}
        style={{
          // Маска в виде радиального градиента следует за курсором
          maskImage: `radial-gradient(circle 300px at ${maskPosition.x}% ${maskPosition.y}%, black 20%, transparent 100%)`,
          WebkitMaskImage: `radial-gradient(circle 300px at ${maskPosition.x}% ${maskPosition.y}%, black 20%, transparent 100%)`,
        }}
      >
        <Image
          src={rightImageSrc}
          alt="CF-18 Hornet"
          fill
          priority
          className="object-cover"
        />
      </div>

      {/* Контент поверх изображений */}
      <div className={styles.contentOverlay}>
        <Image src={logoSrc} alt="Логотип Cold Lake Ford" width={350} height={100} className="mx-auto invert" />
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-white uppercase">
          Operation: Afterburner
        </h1>
        <p className="max-w-3xl mx-auto mt-6 text-lg text-gray-300">
          A high-octane digital marketing campaign for Cold Lake Ford, aligning dealership prestige with the power of Canada&apos;s fighter jets.
        </p>
      </div>
    </section>
  );
}
