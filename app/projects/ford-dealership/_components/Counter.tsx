// app/projects/ford-dealership/_components/Counter.tsx
'use client';

import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { animate } from 'framer-motion';

type Props = {
  from?: number;
  to: number;
  prefix?: string;
  postfix?: string;
  decimals?: number;
};

export default function Counter({ from = 0, to, prefix = '', postfix = '', decimals = 0 }: Props) {
  const [displayValue, setDisplayValue] = useState(from.toFixed(decimals));
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 });

  useEffect(() => {
    if (inView) {
      const controls = animate(from, to, {
        duration: 2,
        ease: 'easeOut',
        onUpdate(value) {
          setDisplayValue(value.toFixed(decimals));
        },
      });
      return () => controls.stop();
    }
  }, [inView, from, to, decimals]);

  return (
    <span ref={ref}>
      {prefix}{displayValue}{postfix}
    </span>
  );
}
