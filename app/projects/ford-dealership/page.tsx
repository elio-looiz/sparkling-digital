// app/projects/ford-dealership/page.tsx

import Image from 'next/image';
import { Target, GaugeCircle, Users } from 'lucide-react';
import InteractiveImage from './_components/InteractiveImage';
import Counter from './_components/Counter';
import BarChart from './_components/BarChart';
import SocialPostCard from './_components/SocialPostCard';
import InteractiveHero from './_components/InteractiveHero';
import VideoSection from './_components/VideoSection';

// Пути к вашим локальным изображениям
const AUTHENTIC_IMAGES = {
  logo: '/images/projects/ford-dealership/logo.png',
  hero: '/images/projects/ford-dealership/jet.jpg',
  hud: '/images/projects/ford-dealership/jet-hud.jpg',
  dealership: '/images/projects/ford-dealership/raptor.jpg',
  heroJet: '/images/projects/ford-dealership/jet.jpg',
  heroRaptor: '/images/projects/ford-dealership/raptor.jpg',
  hudVideo: '/images/projects/ford-dealership/cockpit-flight-3-hd.mp4', // ✅ Путь к вашему видео
};

// Данные для диаграммы из вашего скриншота
const campaignData = [
    { label: "New Traffic (F350)", value: 909, cost: "CA$0.15/click" },
    { label: "Engagement (U66)", value: 35, cost: "CA$6.75/msg" },
    { label: "Messaging Convos", value: 168, cost: "CA$1.50/msg" },
    { label: "New Vehicle Traffic", value: 497, cost: "CA$0.42/click" },
    { label: "Off-Traffic", value: 309, cost: "CA$0.57/click" },
];

export default function FordDealershipPage() {
  return (
    <main className="bg-[#0A0E13] text-gray-200 font-sans">
      {/* --- Секции 1-4 остаются без изменений --- */}
      {/* <section className="h-screen flex flex-col justify-center items-center text-center p-6 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src={AUTHENTIC_IMAGES.hero} alt="CF-18 Hornet взлетает" fill priority className="object-cover opacity-30"/>
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0E13] via-transparent to-transparent"></div>
        </div>
        <div className="relative z-10">
          <Image src={AUTHENTIC_IMAGES.logo} alt="Логотип Cold Lake Ford" width={350} height={100} className="mx-auto invert"/>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-white uppercase">Operation: Afterburner</h1>
          <p className="max-w-3xl mx-auto mt-6 text-lg text-gray-300">A high-octane digital marketing campaign for Cold Lake Ford, aligning dealership prestige with the power of Canada's fighter jets.</p>
        </div>
      </section> */}
        <InteractiveHero 
        logoSrc={AUTHENTIC_IMAGES.logo}
        leftImageSrc={AUTHENTIC_IMAGES.heroRaptor}
        rightImageSrc={AUTHENTIC_IMAGES.heroJet}
      />
      <section className="max-w-5xl mx-auto py-20 md:py-32 px-6 grid md:grid-cols-5 gap-8 md:gap-12 items-center">
        <div className="md:col-span-2">
          <h2 className="text-sm font-bold text-purple-400 uppercase tracking-widest">Mission Briefing</h2>
          <p className="text-4xl font-bold mt-2 text-white">Objective: Dominate the Digital Airspace</p>
        </div>
        <div className="md:col-span-3">
          <p className="text-lg md:text-xl text-gray-400 leading-relaxed">Cold Lake Ford, located next to Canada&apos;s largest fighter base, had a powerful brand identity that wasn&apos;t being utilized online. Their digital presence was grounded, failing to connect with a community proud of its aviation heritage and resulting in low engagement and missed sales opportunities.</p>
        </div>
      </section>
      {/* <section className="max-w-7xl mx-auto px-6 my-16 md:my-24">
        <div className="relative h-[60vh] md:h-[90vh] rounded-2xl overflow-hidden">
          <Image src={AUTHENTIC_IMAGES.hud} alt="Вид из кабины истребителя" fill className="object-cover"/>
          <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
            <p className="text-2xl md:text-4xl font-bold text-white/80 border-2 border-white/50 p-4 rounded-lg backdrop-blur-sm">Engaging The Target Audience</p>
          </div>
        </div>
      </section> */}
          <VideoSection 
        posterSrc={AUTHENTIC_IMAGES.hud}
        videoSrc={AUTHENTIC_IMAGES.hudVideo}
      />
      <section className="max-w-5xl mx-auto py-16 md:py-24 px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-sm font-bold text-purple-400 uppercase tracking-widest">Execution</h2>
          <p className="text-4xl md:text-5xl font-bold mt-2 text-white">Multi-Vector Engagement Strategy</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white/5 p-8 rounded-lg border border-white/10"><Target className="w-8 h-8 text-purple-400 mb-4"/><h3 className="text-xl font-bold text-white">Authentic Content Sorties</h3><p className="text-gray-400 mt-2">Partnered with local photographers to create high-impact visuals of Ford trucks (like the F-150 and Raptor) alongside CF-18 Hornets, creating a powerful visual synergy.</p></div>
          <div className="bg-white/5 p-8 rounded-lg border border-white/10"><GaugeCircle className="w-8 h-8 text-purple-400 mb-4"/><h3 className="text-xl font-bold text-white">Social Media Afterburner</h3><p className="text-gray-400 mt-2">Launched viral Reels and TikToks showcasing the power and precision of Ford vehicles, mirroring the performance of fighter jets. Organically reached millions of views.</p></div>
          <div className="bg-white/5 p-8 rounded-lg border border-white/10"><Users className="w-8 h-8 text-purple-400 mb-4"/><h3 className="text-xl font-bold text-white">Community & Seasonal Ops</h3><p className="text-gray-400 mt-2">Developed targeted seasonal campaigns (&quot;Winter Warrior Sales Event&quot;) and engaged with the community by celebrating local aviation milestones and personnel.</p></div>
        </div>
      </section>

      {/* --- ✅ Секция 5: Mission Accomplished (The Results) - ПОЛНОСТЬЮ ПЕРЕРАБОТАНА --- */}
      <section className="bg-gradient-to-b from-purple-900/20 to-transparent py-20 md:py-32 mt-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-sm font-bold text-purple-400 uppercase tracking-widest">Mission Accomplished</h2>
          <p className="text-4xl md:text-5xl font-bold mt-2 text-white">Organic Social Media Dominance</p>
          
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
            <SocialPostCard platform="TikTok" imageSrc={AUTHENTIC_IMAGES.dealership} views={2.8}/>
            <SocialPostCard platform="TikTok" imageSrc={AUTHENTIC_IMAGES.hero} views={0.860}/>
            <SocialPostCard platform="Instagram" imageSrc={AUTHENTIC_IMAGES.hud} likes={99.8} comments={238} shares={29.9}/>
          </div>
        </div>
        
        <div className="max-w-4xl mx-auto px-6 text-center mt-24">
             <h3 className="text-3xl font-bold text-white mb-8">Paid Campaign Performance Analysis</h3>
             {/* ✅ Используем новый, улучшенный компонент диаграммы */}
             <BarChart data={campaignData} />
        </div>
      </section>
    </main>
  );
}