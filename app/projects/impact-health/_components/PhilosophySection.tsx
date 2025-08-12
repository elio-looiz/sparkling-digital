// app/projects/impact-health/_components/PhilosophySection.tsx
export default function PhilosophySection() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-sm font-bold text-teal-600 uppercase tracking-widest">The Challenge</h2>
          <p className="mt-3 text-3xl md:text-4xl font-bold text-gray-800">
            Expert Care Trapped in an Outdated Digital Shell
          </p>
          <p className="mt-4 text-lg text-gray-600 leading-relaxed">
            Impact Health was a leader in patient care, but their digital footprint told a different story. They approached us with several critical business challenges:
          </p>
          <ul className="mt-6 space-y-4">
            <li className="flex items-start">
              <span className="text-teal-500 font-bold mr-3 mt-1">✓</span>
              <span className="text-gray-700">An outdated website that lacked online booking and failed to convert visitors.</span>
            </li>
            <li className="flex items-start">
              <span className="text-teal-500 font-bold mr-3 mt-1">✓</span>
              <span className="text-gray-700">Inconsistent branding that didn't communicate the high quality of their services.</span>
            </li>
            <li className="flex items-start">
              <span className="text-teal-500 font-bold mr-3 mt-1">✓</span>
              <span className="text-gray-700">No measurable ROI from their sporadic digital marketing efforts.</span>
            </li>
          </ul>
        </div>
        <div className="bg-gray-50 p-8 rounded-xl border border-gray-200">
          <h3 className="text-sm font-bold text-teal-600 uppercase tracking-widest">Our Strategic Solution</h3>
          <p className="mt-3 text-2xl font-semibold text-gray-800">
            Engineer Trust at Every Digital Touchpoint.
          </p>
          <p className="mt-3 text-gray-600">
            Our insight was simple: in healthcare, the ultimate currency is trust. We proposed a holistic project to re-engineer their entire digital presence, focusing on demonstrating expertise, simplifying the patient journey, and building a brand that felt as caring and professional as their actual therapists.
          </p>
        </div>
      </div>
    </section>
  );
}