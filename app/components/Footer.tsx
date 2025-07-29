// components/Footer.tsx

export default function Footer() {
    return (
      <footer className="bg-[#2a2d33] py-10 border-t border-[#444]">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} Sparkling. All rights reserved.</p>
          <div className="mt-4 md:mt-0 flex gap-6">
            <a href="#" className="hover:text-white">LinkedIn</a>
            <a href="#" className="hover:text-white">Instagram</a>
            <a href="#" className="hover:text-white">hello@sparkling.agency</a>
          </div>
        </div>
      </footer>
    );
  }