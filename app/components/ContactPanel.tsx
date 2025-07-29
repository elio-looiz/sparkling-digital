// components/ContactPanel.tsx

'use client';

// ✅ FIX 1: Import Variants
import { motion, AnimatePresence, type Variants } from 'framer-motion';
import { X } from 'lucide-react';

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

// ✅ FIX 2: Explicitly type the constant
const panelVariants: Variants = {
  hidden: { x: '100%' },
  // ✅ FIX 3: Replace the number array with a valid string
  visible: { x: '0%', transition: { duration: 0.5, ease: 'easeOut' } },
  exit: { x: '100%', transition: { duration: 0.4, ease: 'easeInOut' } },
};

const backdropVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 },
};

export default function ContactPanel({ isOpen, onClose }: Props) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Фон-затемнение */}
          <motion.div
            key="backdrop"
            variants={backdropVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={onClose}
            className="fixed inset-0 bg-black/60 z-40 backdrop-blur-sm"
          />

          {/* Сама панель */}
          <motion.div
            key="panel"
            variants={panelVariants} // Now correctly typed
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed top-0 right-0 h-full w-full max-w-lg bg-[#181a1d] shadow-2xl z-50 p-8 flex flex-col"
          >
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold text-white">Let&apos;s Talk</h2>
              <button
                onClick={onClose}
                className="p-2 rounded-full text-gray-400 hover:bg-white/10 hover:text-white transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            <form className="flex-grow flex flex-col gap-5">
              <div className="flex flex-col sm:flex-row gap-5">
                <div className="flex-1">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Full Name</label>
                  <input type="text" id="name" className="w-full bg-[#2a2d31] border border-gray-600 rounded-md p-3 text-white focus:ring-2 focus:ring-purple-500 outline-none" />
                </div>
                <div className="flex-1">
                  <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">Company (Optional)</label>
                  <input type="text" id="company" className="w-full bg-[#2a2d31] border border-gray-600 rounded-md p-3 text-white focus:ring-2 focus:ring-purple-500 outline-none" />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Email Address</label>
                <input type="email" id="email" className="w-full bg-[#2a2d31] border border-gray-600 rounded-md p-3 text-white focus:ring-2 focus:ring-purple-500 outline-none" />
              </div>
              <div>
                <label htmlFor="service" className="block text-sm font-medium text-gray-300 mb-2">I'm interested in...</label>
                <select id="service" className="w-full bg-[#2a2d31] border border-gray-600 rounded-md p-3 text-white focus:ring-2 focus:ring-purple-500 outline-none appearance-none">
                  <option>Digital Platforms & Web Apps</option>
                  <option>Brand Strategy & Marketing</option>
                  <option>Growth-Driven Design</option>
                  <option>Product Launch</option>
                  <option>Something else</option>
                </select>
              </div>
              <div className="flex-grow flex flex-col">
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">Your Message</label>
                <textarea id="message" rows={5} className="w-full flex-grow bg-[#2a2d31] border border-gray-600 rounded-md p-3 text-white focus:ring-2 focus:ring-purple-500 outline-none resize-none"></textarea>
              </div>
              <button type="submit" className="w-full mt-4 py-3 bg-[#7927e0] text-white font-semibold rounded-lg hover:bg-[#6a22c2] transition-colors text-lg">
                Send Message
              </button>
            </form>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}