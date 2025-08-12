// app/projects/impact-health/_components/ClinicImpactMetrics.tsx
import { ArrowUp, Users, Percent } from 'lucide-react';
import BookingGrowthChart from './BookingGrowthChart';

export default function ClinicImpactMetrics() {
  return (
    <section id="metrics" className="py-20 md:py-28 scroll-mt-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Measurable Results & ROI</h2>
          <p className="mt-3 text-lg text-gray-600">Our strategies delivered a significant, data-driven impact on the clinic's bottom line.</p>
        </div>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="bg-gray-50 p-8 rounded-lg">
            <div className="flex items-center justify-center text-green-500">
              <ArrowUp className="w-12 h-12"/>
              <p className="text-5xl font-bold">300%</p>
            </div>
            <p className="text-gray-600 mt-2">Increase in Online Bookings in 6 Months</p>
          </div>
          <div className="bg-gray-50 p-8 rounded-lg">
            <Users className="w-12 h-12 text-teal-500 mx-auto"/>
            <p className="text-5xl font-bold mt-2">1,200+</p>
            <p className="text-gray-600">New Patient Inquiries Generated via Website</p>
          </div>
          <div className="bg-gray-50 p-8 rounded-lg">
             <Percent className="w-12 h-12 text-blue-500 mx-auto"/>
            <p className="text-5xl font-bold mt-2">40%</p>
            <p className="text-gray-600">Reduction in Cost-Per-Acquisition</p>
          </div>
        </div>
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-center text-gray-800 mb-8">Online Booking Growth Post-Launch</h3>
          <BookingGrowthChart /> 
        </div>
      </div>
    </section>
  );
}