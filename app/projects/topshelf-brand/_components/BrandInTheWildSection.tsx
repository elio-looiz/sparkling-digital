// app/projects/topshelf-brand/_components/BrandInTheWildSection.tsx
'use client';
import { motion, Variants } from 'framer-motion';

const galleryItems = [
  { src: "/images/projects/topshelf/topshelf-brochure.png", alt: "TopShelf brochure", caption: "Marketing Collateral" },
  { src: "/images/projects/topshelf/topshelf-store-sign.png", alt: "TopShelf store sign", caption: "Storefront Signage" },
  { src: "/images/projects/topshelf/topshelf-social-post.png", alt: "TopShelf social post", caption: "Digital Presence" }
];

export default function BrandInTheWildSection() {
  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.3 } }
  };
  const itemVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-8">
      <div className="text-center max-w-4xl">
        <h2 className="text-3xl font-bold text-gray-800">A Brand Built for the Real World</h2>
        <p className="mt-3 text-lg text-gray-600">Our design system was effective across all touchpoints, from print to physical signage.</p>
      </div>
      <motion.div 
        className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {galleryItems.map((item) => (
          <motion.div key={item.caption} className="flex flex-col justify-center items-center" variants={itemVariants}>
            <div className="bg-gray-100 p-4 rounded-lg w-full">
              <img src={item.src} alt={item.alt} className="rounded-lg shadow-xl object-contain"/>
            </div>
            <p className="mt-4 font-semibold text-gray-700">{item.caption}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}