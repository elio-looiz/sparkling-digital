// app/projects/ford-dealership/_components/SocialPostCard.tsx
'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Heart, MessageCircle, Send, PlayCircle } from 'lucide-react';
import Counter from './Counter'; // Мы используем наш существующий компонент Counter

type Props = {
  platform: 'TikTok' | 'Instagram';
  imageSrc: string;
  views?: number;
  likes?: number;
  comments?: number;
  shares?: number;
};

export default function SocialPostCard({ platform, imageSrc, views, likes, comments, shares }: Props) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 });

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  };

  const platformStyles = {
    TikTok: 'from-black to-transparent',
    Instagram: 'from-purple-900/80 to-transparent',
  };

  return (
    <motion.div
      ref={ref}
      variants={cardVariants}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      className="relative aspect-[9/16] w-full max-w-xs mx-auto rounded-2xl overflow-hidden border border-white/10 shadow-lg"
    >
      <Image src={imageSrc} alt={`${platform} post`} fill className="object-cover" />
      <div className={`absolute inset-0 bg-gradient-to-t ${platformStyles[platform]}`}></div>
      <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
        <p className="font-bold text-lg">@{platform === 'TikTok' ? 'ColdLakeFordTok' : 'ColdLakeFord'}</p>
        <p className="text-sm mt-1">Check out the new F-150! Power meets precision. #Ford #ColdLake #FighterJet</p>
        <div className="mt-4 flex items-center gap-4 text-sm">
          {views && (
            <div className="flex items-center gap-1">
              <PlayCircle size={18} />
              <strong><Counter to={views} decimals={1} />{views > 1 ? 'M' : 'K'}</strong>
            </div>
          )}
        </div>
      </div>
      <div className="absolute right-2 bottom-4 flex flex-col items-center gap-4 text-white">
        {likes && (
          <div className="flex flex-col items-center">
            <Heart size={28} />
            <span className="text-xs font-bold"><Counter to={likes} decimals={1} />K</span>
          </div>
        )}
        {comments && (
          <div className="flex flex-col items-center">
            <MessageCircle size={28} />
            <span className="text-xs font-bold"><Counter to={comments} /></span>
          </div>
        )}
        {shares && (
          <div className="flex flex-col items-center">
            <Send size={28} />
            <span className="text-xs font-bold"><Counter to={shares} decimals={1} />K</span>
          </div>
        )}
      </div>
    </motion.div>
  );
}
