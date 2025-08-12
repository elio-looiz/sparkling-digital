// app/projects/impact-health/_components/ThreePhaseApproach.tsx
import { Palette, Laptop, Megaphone } from 'lucide-react';

const ourPhases = [
  {
    icon: Palette,
    title: "Phase 1: Brand & Identity Foundation",
    description: "We crafted a new brand identity that conveyed trust and modernity. This included a new logo, a calming color palette, and a clear messaging strategy to resonate with their target audience."
  },
  {
    icon: Laptop,
    title: "Phase 2: Digital Platform Development",
    description: "We designed and built a high-performance, mobile-first website focused on user experience. Key features included a seamless online booking system and SEO-optimized educational content."
  },
  {
    icon: Megaphone,
    title: "Phase 3: Patient Acquisition & Growth",
    description: "With the new platform live, we launched hyper-local Google Ads, targeted social media campaigns, and a system to generate and showcase positive patient reviews, driving measurable growth."
  }
];

export default function ThreePhaseApproach() {
  return (
    <section className="py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Our Strategic Execution</h2>
        <p className="mt-3 text-lg text-gray-600 max-w-3xl mx-auto">A disciplined, three-pronged approach ensured success at every stage of the project.</p>
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          {ourPhases.map((phase, index) => (
            <div key={index} className="border border-gray-200 rounded-lg p-8 text-left hover:shadow-xl hover:border-teal-400 transition-all">
              <phase.icon className="w-10 h-10 text-teal-500 mb-4" />
              <h3 className="text-xl font-bold text-gray-900">{phase.title}</h3>
              <p className="mt-2 text-gray-600">{phase.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}