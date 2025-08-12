// app/projects/topshelf-brand/_components/TheCreativeJourneySection.tsx
import { Handshake, Zap, SwatchBook } from 'lucide-react';

export default function TheCreativeJourneySection() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Our Creative Journey, Step by Step</h2>
          <p className="mt-3 text-lg text-gray-600 max-w-3xl mx-auto">
            We followed a collaborative process to ensure every element was purposeful and aligned with the client's vision.
          </p>
        </div>
        <div className="mt-12 space-y-8">
          {/* Step 1 to 3 here, unchanged */}
        </div>
      </div>
    </div>
  );
}
