// components/Hero.tsx

'use client';

import { motion } from 'framer-motion';
import { useCallback } from 'react';
import Particles from 'react-tsparticles';
import type { Container, Engine } from 'tsparticles-engine';
import { loadSlim } from 'tsparticles-slim';

export default function Hero() {
  const particlesInit = useCallback(async (engine: Engine) => {
    // Инициализация движка tsparticles
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(
    async (container: Container | undefined) => {
      // Эта функция вызывается, когда частицы загружены
      // Можно добавить свою логику здесь
    },
    []
  );

  return (
    // Добавляем класс для градиентного фона
    <section className="gradient-background flex flex-col justify-center h-screen px-6 text-center items-center">
      {/* Компонент с частицами */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          background: {
            color: {
              value: 'transparent', // Фон частиц прозрачный, чтобы был виден градиент
            },
          },
          fpsLimit: 60,
          interactivity: {
            events: {
              onHover: {
                enable: true,
                mode: 'repulse', // Частицы будут "разбегаться" от курсора
              },
              resize: true,
            },
            modes: {
              repulse: {
                distance: 150,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: '#ffffff', // Цвет частиц
            },
            links: {
              color: '#ffffff',
              distance: 150,
              enable: true,
              opacity: 0.2,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              direction: 'none',
              enable: true,
              outModes: {
                default: 'bounce',
              },
              random: false,
              speed: 0.5, // Скорость движения частиц
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 80, // Количество частиц
            },
            opacity: {
              value: 0.2, // Прозрачность частиц
            },
            shape: {
              type: 'circle',
            },
            size: {
              value: { min: 1, max: 3 }, // Размер частиц
            },
          },
          detectRetina: true,
        }}
        // Стили для позиционирования частиц на весь экран
        className="absolute top-0 left-0 w-full h-full z-0"
      />

      {/* Ваш контент будет поверх частиц благодаря z-index */}
      <div className="relative z-10 flex flex-col items-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold text-white drop-shadow-lg" // Добавим тень для лучшей читаемости
        >
          Sparkling
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mt-6 max-w-xl text-lg text-gray-200 drop-shadow-md" // Тень и чуть светлее текст
        >
          A digital studio designing and building bold brands and experiences.
        </motion.p>
      </div>
    </section>
  );
}