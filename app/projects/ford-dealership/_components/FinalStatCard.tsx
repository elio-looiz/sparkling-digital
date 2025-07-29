// app/projects/ford-dealership/_components/FinalStatCard.tsx
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

export default function FinalStatCard({ Icon, label, value, unit = '' }: Props) {
  return (
    <div className="bg-white/5 p-6 rounded-lg border border-white/10 text-center h-full flex flex-col justify-center">
      <Icon className="w-10 h-10 text-purple-400 mx-auto mb-4" />
      <p className="text-5xl font-black text-white tracking-tighter">
        <Counter to={value} />
        <span className="text-4xl">{unit}</span>
      </p>
      <p className="text-md font-semibold text-gray-300 leading-tight mt-2">{label}</p>
    </div>
  );
}
