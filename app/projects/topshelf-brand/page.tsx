// app/projects/topshelf-brand/page.tsx
'use client';

import { useRef } from 'react';
import { useScroll } from 'framer-motion';

import HeroSection from './_components/HeroSection';
import TheStartingPointSection from './_components/TheStartingPointSection';
import CreativeStrategySection from './_components/CreativeStrategySection';
import VisualExecutionSection from './_components/VisualExecutionSection';
import BrandInTheWildSection from './_components/BrandInTheWildSection';
import FinalOutcomeSection from './_components/FinalOutcomeSection';
import AnimatedCard from './_components/AnimatedCard';

// ✨ ИЗМЕНЕНО: Цвета заменены на более выразительные и насыщенные
const sections = [
  { Component: HeroSection, color: 'bg-purple-200' },
  { Component: TheStartingPointSection, color: 'bg-white' },
  { Component: CreativeStrategySection, color: 'bg-pink-200' },
  { Component: VisualExecutionSection, color: 'bg-cyan-200' },
  { Component: BrandInTheWildSection, color: 'bg-white' },
  { Component: FinalOutcomeSection, color: 'bg-purple-600' },
];

export default function TopShelfBrandProjectPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  return (
    <main
      ref={containerRef}
      className="relative bg-gray-900"
      style={{ height: `${sections.length * 100}vh` }}
    >
      {sections.map(({ Component, color }, index) => (
        <AnimatedCard
          key={index}
          i={index}
          total={sections.length}
          scrollYProgress={scrollYProgress}
          color={color}
        >
          <Component />
        </AnimatedCard>
      ))}
    </main>
  );
}