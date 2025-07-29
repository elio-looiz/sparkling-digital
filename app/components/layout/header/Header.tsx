// components/Header.tsx

'use client';

import React, { useState } from 'react';
import styles from './Header.module.css';

export default function Header() {
  const [explodingLinkId, setExplodingLinkId] = useState<string | null>(null);

  const handleNavClick = (event: React.MouseEvent<HTMLAnchorElement>, linkId: string) => {
    event.preventDefault();
    if (explodingLinkId) return;

    const href = event.currentTarget.getAttribute('href');
    if (!href) return;

    setExplodingLinkId(linkId);

    setTimeout(() => {
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
      setExplodingLinkId(null);
    }, 800);
  };

  const navLinks = [
    { id: 'projects', href: '#projects', label: 'Projects' },
    { id: 'services', href: '#services', label: 'Services' },
    { id: 'about', href: '#about', label: 'About' },
  ];

  return (
    // ✅ FIX: Добавлены классы для "липкого" хедера
    <header className={`${styles.header} sticky top-0 z-50`}>
      <div className="text-2xl font-bold tracking-wider">Sparkling</div>

      <nav className="hidden md:flex items-center gap-8">
        {navLinks.map((link) => (
          // ✅ FIX: Убрана сложная структура с обертками и span-частицами.
          // Теперь класс для анимации применяется прямо к ссылке.
          <a
            key={link.id}
            href={link.href}
            onClick={(e) => handleNavClick(e, link.id)}
            className={`${styles.navLink} ${
              explodingLinkId === link.id ? styles.isExploding : ''
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
  );
}