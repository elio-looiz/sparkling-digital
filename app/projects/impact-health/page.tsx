// app/projects/impact-health/page.tsx

import PatientJourneyHero from './_components/PatientJourneyHero';
import PhilosophySection from './_components/PhilosophySection';
// ЗАМЕНЯЕМ ThreePhaseApproach НА БОЛЕЕ ПОДРОБНЫЙ КОМПОНЕНТ
import OurProcessSection from './_components/OurProcessSection';
import SuccessStorySlider from './_components/SuccessStorySlider';
import ClinicImpactMetrics from './_components/ClinicImpactMetrics';

export default function ImpactHealthProjectPage() {
  return (
    <main className="bg-white font-sans">
      <PatientJourneyHero />
      <PhilosophySection />
      
      {/* ✨ НОВЫЙ, ПОДРОБНЫЙ БЛОК О НАШЕМ ПРОЦЕССЕ */}
      <OurProcessSection />

      <SuccessStorySlider />
      <ClinicImpactMetrics />
    </main>
  );
}