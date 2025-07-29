// components/Header.tsx

'use client';

import React, { useState, useEffect } from 'react';
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { ISourceOptions } from "@tsparticles/engine";

export default function Header() {
  const [engineReady, setEngineReady] = useState(false);
  const [particlesConfig, setParticlesConfig] = useState<ISourceOptions | null>(null);
  const [hidingLinkId, setHidingLinkId] = useState<string | null>(null);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setEngineReady(true);
    });
  }, []);

  const handleNavClick = (event: React.MouseEvent<HTMLAnchorElement>, linkId: string) => {
    event.preventDefault();
    if (hidingLinkId || !engineReady) return;

    const link = event.currentTarget;
    const href = link.getAttribute('href');
    if (!href) return;

    const rect = link.getBoundingClientRect();
    const sourcePos = {
      x: rect.left + rect.width / 2,
      y: rect.top + rect.height / 2,
    };

    setHidingLinkId(linkId);

    // ✅ FIX: Убрали опцию `fullScreen` из конфигурации.
    // Стили будут применены вручную ниже.
    setParticlesConfig({
      emitters: [
        {
          position: sourcePos,
          rate: {
            quantity: 40,
            delay: 0,
          },
          life: {
            duration: 0.15,
            count: 1,
          },
          particles: {
            move: {
              direction: "none",
              enable: true,
              outModes: { default: "destroy" },
              random: true,
              speed: { min: 30, max: 50 },
              straight: false,
              gravity: {
                enable: true,
                acceleration: 20,
              },
            },
            color: {
              value: ["#a855f7", "#ffffff", "#d8b4fe"],
            },
            size: {
              value: { min: 1, max: 3 },
            },
            opacity: {
              value: { min: 0.5, max: 1 },
              animation: {
                enable: true,
                speed: 3,
                startValue: "max",
                destroy: "min",
              },
            },
          },
        },
      ],
    });

    setTimeout(() => {
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
      setHidingLinkId(null);
      setParticlesConfig(null);
    }, 1500);
  };

  const navLinks = [
    { id: 'projects', href: '#projects', label: 'Projects' },
    { id: 'services', href: '#services', label: 'Services' },
    { id: 'about', href: '#about', label: 'About' },
  ];
  
  const particlesComponent = engineReady && particlesConfig ? (
    // ✅ FIX: Применяем стили напрямую к компоненту для гарантии видимости
    <Particles
        id="tsparticles"
        options={particlesConfig}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 9999,
          pointerEvents: 'none' // Чтобы холст не мешал кликам
        }}
    />
  ) : null;

  return (
    <>
      {particlesComponent}
      <header className="relative bg-[#111] text-white p-6 md:px-10 flex items-center justify-between z-50">
        <div className="text-2xl font-bold tracking-wider">Sparkling</div>
        <nav className="hidden md:flex items-center gap-8 text-gray-300">
          {navLinks.map(link => (
            <a
              key={link.id}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.id)}
              className={`hover:text-white transition-all duration-300 ${
                hidingLinkId === link.id ? 'opacity-0 scale-75' : 'opacity-100 scale-100'
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>
        <button className="hidden md:block px-5 py-2 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-500 transition-colors">
          Get in Touch
        </button>
      </header>
    </>
  );
}