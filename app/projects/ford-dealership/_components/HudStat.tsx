// app/projects/ford-dealership/_components/HudStat.tsx
'use client';

import { motion } from 'framer-motion';
import type { LucideIcon } from 'lucide-react';
import Counter from './Counter';

type Props = {
  Icon: LucideIcon;
  label: string;
  value: number;
  unit?: string;
};

export default function HudStat({ Icon, label, value, unit = '' }: Props) {
  return (
    <div className="relative w-52 h-52 flex flex-col items-center justify-center text-center drop-shadow-[0_0_10px_rgba(168,85,247,0.5)]">
      <svg className="absolute w-full h-full" viewBox="0 0 100 100">
        <motion.circle
          cx="50" cy="50" r="45"
          stroke="rgba(192, 132, 252, 0.7)"
          strokeWidth="4"
          fill="none"
          strokeDasharray="60 230"
          initial={{ rotate: 0 }}
          animate={{ rotate: -360 }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        />
        <path
          d="M 5 30 A 25 25 0 0 1 30 5 L 20 5 L 5 20 Z M 70 5 A 25 25 0 0 1 95 30 L 95 20 L 80 5 Z M 95 70 A 25 25 0 0 1 70 95 L 80 95 L 95 80 Z M 30 95 A 25 25 0 0 1 5 70 L 5 80 L 20 95 Z"
          fill="rgba(192, 132, 252, 1)"
        />
      </svg>
      <div className="relative z-10">
        <Icon className="w-10 h-10 text-purple-400 mx-auto mb-2" />
        <p className="text-md font-semibold text-gray-200 leading-tight">{label}</p>
        <p className="text-5xl font-black text-white tracking-tighter">
          <Counter to={value} />
          <span className="text-4xl">{unit}</span>
        </p>
      </div>
    </div>
  );
}
