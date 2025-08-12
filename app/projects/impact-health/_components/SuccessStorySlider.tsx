// app/projects/impact-health/_components/SuccessStorySlider.tsx
'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

const stories = [
  {
    name: "A Marathon Runner",
    problem: "Struggled with recurring knee pain.",
    solution: "Thanks to the team, I completed the marathon pain-free. The booking process on the new website was incredibly easy.",
    image: "/images/projects/impact-health/patient-anna.jpg"
  },
  {
    name: "An Office Worker",
    problem: "Had chronic back pain from sitting all day.",
    solution: "I found Impact Health through a Google search. Their new site was so professional, and my therapist was amazing. My back has never felt better.",
    image: "/images/projects/impact-health/patient-mikhail.jpg"
  }
];

export default function SuccessStorySlider() {
  return (
    <section className="bg-teal-700 py-20 md:py-28 text-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold">The Human Impact of Our Strategy</h2>
        <p className="mt-3 text-lg text-teal-200">Positive reviews and patient testimonials surged after our campaigns went live.</p>
        <Swiper navigation={true} modules={[Navigation]} loop={true} className="mt-12">
          {stories.map((story) => (
            <SwiperSlide key={story.name}>
              <div className="flex flex-col md:flex-row items-center gap-8 p-4">
                <img src={story.image} alt={story.name} className="w-40 h-40 rounded-full object-cover border-4 border-white" />
                <div className="text-left">
                  <p className="text-2xl font-bold">"{story.solution}"</p>
                  <p className="mt-4 font-semibold">{story.name}</p>
                  <p className="text-teal-200">The Challenge: {story.problem}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}