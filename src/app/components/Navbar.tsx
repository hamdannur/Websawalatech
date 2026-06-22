import { useState } from "react";
import { ChevronDown, X, Menu } from "lucide-react";
import Vector from "../../imports/Vector";

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-[1440px] mx-auto px-[16px] md:px-[61px] h-[80px] md:h-[90px] flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-10">
          <div className="shrink-0 w-[107px] md:w-[132px] h-[34px]">
            <Vector />
          </div>
          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-7">
            <a href="#" className="text-black text-[16px] hover:text-blue-600 transition-colors" style={{ fontFamily: "'Figtree', sans-serif" }}>Home</a>
            <button className="flex items-center gap-1 text-black text-[16px] hover:text-blue-600 transition-colors" style={{ fontFamily: "'Figtree', sans-serif" }}>Service <ChevronDown size={16} /></button>
            <button className="flex items-center gap-1 text-black text-[16px] hover:text-blue-600 transition-colors" style={{ fontFamily: "'Figtree', sans-serif" }}>Product <ChevronDown size={16} /></button>
            <button className="flex items-center gap-1 text-black text-[16px] hover:text-blue-600 transition-colors" style={{ fontFamily: "'Figtree', sans-serif" }}>About <ChevronDown size={16} /></button>
            <a href="#" className="text-black text-[16px] hover:text-blue-600 transition-colors" style={{ fontFamily: "'Figtree', sans-serif" }}>Insight</a>
          </nav>
        </div>

        {/* Desktop right */}
        <div className="hidden md:flex items-center gap-3">
          <div className="flex items-center gap-0.5 bg-gray-100 rounded-full p-0.5">
            <button className="bg-white rounded-full w-[28px] h-[28px] flex items-center justify-center text-[12px] text-black" style={{ fontFamily: "'Figtree', sans-serif" }}>ID</button>
            <button className="bg-black rounded-full w-[28px] h-[28px] flex items-center justify-center text-[12px] text-white" style={{ fontFamily: "'Figtree', sans-serif" }}>EN</button>
          </div>
          <button className="bg-blue-600 text-white px-6 h-[40px] rounded-[16px] text-[14px] hover:bg-blue-700 transition-colors whitespace-nowrap" style={{ fontFamily: "'Figtree', sans-serif", fontWeight: 600 }}>Contact Us</button>
        </div>

        {/* Mobile hamburger */}
        <button className="md:hidden flex items-center justify-center w-8 h-8" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-[16px] py-4 flex flex-col gap-4">
          {["Home", "Service", "Product", "About", "Insight"].map((item) => (
            <a key={item} href="#" className="text-black text-[16px] py-2 border-b border-gray-100 last:border-0" style={{ fontFamily: "'Figtree', sans-serif" }} onClick={() => setMenuOpen(false)}>{item}</a>
          ))}
          <button className="bg-blue-600 text-white h-[44px] rounded-[12px] text-[16px] w-full mt-2" style={{ fontFamily: "'Figtree', sans-serif", fontWeight: 600 }}>Contact Us</button>
        </div>
      )}
    </header>
  );
}
