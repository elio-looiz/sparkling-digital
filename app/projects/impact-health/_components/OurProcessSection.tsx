// app/projects/impact-health/_components/OurProcessSection.tsx
import { Briefcase, Paintbrush, Code, Target } from 'lucide-react';

const processSteps = {
  strategy: {
    title: "Phase 1: Discovery & Strategy",
    icon: Briefcase,
    steps: [
      { title: "Stakeholder Workshops", description: "We began with in-depth workshops with the Impact Health founders and key therapists to align on business goals, target audiences, and core values." },
      { title: "Competitive Analysis", description: "Our team conducted a thorough audit of their top 5 local competitors, analyzing their digital strategies to identify market gaps and opportunities for differentiation." },
      { title: "Patient Persona Development", description: "Based on research, we created three detailed patient personas to guide all future design, content, and marketing decisions, ensuring a patient-centric approach." },
      { title: "Strategic Roadmap", description: "We consolidated our findings into a comprehensive strategic roadmap with clear milestones, KPIs, and a timeline for the entire project." }
    ]
  },
  branding: {
    title: "Phase 2: Brand Identity & Creative",
    icon: Paintbrush,
    steps: [
      { title: "Visual Identity System", description: "Our design team developed a new logo, a calming and professional color palette, and a typography system that projected expertise and empathy." },
      { title: "Messaging & Tone of Voice", description: "We crafted a consistent brand voice—authoritative yet caring—and developed key messaging pillars for the website, ads, and social media content." },
      { title: "Photography Art Direction", description: "We created a detailed brief for a new photoshoot, focusing on capturing authentic, bright, and modern images of the clinic and staff in action." }
    ]
  },
  development: {
    title: "Phase 3: Web Platform Development",
    icon: Code,
    steps: [
      { title: "UX Wireframing & Prototyping", description: "We mapped the entire user journey, creating low-fidelity wireframes that prioritized a frictionless online booking process, later refined into interactive prototypes." },
      { title: "Headless CMS & Next.js Build", description: "We developed a blazing-fast website using Next.js for the frontend and a headless CMS, allowing the client to easily manage content without technical help." },
      { title: "Patient Management Integration", description: "We seamlessly integrated their chosen EMR software (Jane App) for secure, real-time online appointment scheduling, a critical conversion feature." }
    ]
  },
  growth: {
    title: "Phase 4: Growth Marketing Engine",
    icon: Target,
    steps: [
      { title: "Local SEO Foundation", description: "We completely optimized their Google Business Profile, built local citations, and structured service pages to dominate local search for high-intent keywords." },
      { title: "Paid Acquisition (PPC)", description: "We launched targeted Google Ads campaigns focused on specific conditions (e.g., 'back pain relief,' 'sports injury clinic'), constantly A/B testing for the lowest cost-per-acquisition." },
      { title: "Content Marketing & Authority Building", description: "We established a content calendar for their blog, creating expert articles that answered common patient questions, driving organic traffic and establishing thought leadership." }
    ]
  },
};

export default function OurProcessSection() {
  return (
    <section className="bg-gray-50 py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Our Blueprint for Success</h2>
          <p className="mt-3 text-lg text-gray-600 max-w-3xl mx-auto">
            We don't believe in guesswork. Our process is a methodical journey from deep understanding to measurable results.
          </p>
        </div>

        <div className="space-y-16">
          {Object.values(processSteps).map((phase) => (
            <div key={phase.title} className="grid md:grid-cols-3 gap-8 items-start">
              <div className="md:col-span-1 p-6 bg-white rounded-lg border sticky top-24">
                <phase.icon className="w-10 h-10 text-teal-500 mb-4" />
                <h3 className="text-2xl font-bold text-gray-900">{phase.title}</h3>
              </div>
              <div className="md:col-span-2 space-y-6">
                {phase.steps.map((step, index) => (
                  <div key={index} className="p-6 bg-white rounded-lg border border-gray-200">
                    <h4 className="font-bold text-lg text-gray-800">{step.title}</h4>
                    <p className="mt-1 text-gray-600">{step.description}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}