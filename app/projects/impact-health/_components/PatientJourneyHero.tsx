// app/projects/impact-health/_components/PatientJourneyHero.tsx

export default function PatientJourneyHero() {
  return (
    <section className="relative h-screen flex items-center justify-center text-white">
      <div
        className="absolute z-0 w-full h-full bg-cover bg-center"
        style={{ backgroundImage: "url('/images/projects/impact-health/physio-session.jpg')" }}
      ></div>
      <div className="absolute z-10 inset-0 bg-teal-800/70"></div>
      
      <div className="relative z-20 text-center p-6">
        <img 
          src="/images/projects/impact-health/logo-white.svg" 
          alt="Impact Health Logo" 
          className="w-48 mx-auto mb-4" 
        />
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
          Building a Brand That Heals
        </h1>
        <p className="max-w-3xl mx-auto mt-4 text-lg text-teal-100">
          A case study on how our agency transformed Impact Health's digital presence, driving patient acquisition and establishing them as a community leader.
        </p>
        <a href="#metrics" className="mt-10 inline-block px-8 py-3 border border-teal-300 text-teal-300 font-semibold rounded-full hover:bg-teal-300 hover:text-teal-900 transition-colors">
          See The Results
        </a>
      </div>
    </section>
  );
}