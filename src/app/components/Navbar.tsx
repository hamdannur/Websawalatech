import { ChevronDown } from "lucide-react";

export function Navbar() {
  return (
    <header className="w-full bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-[1440px] mx-auto px-[61px] h-[90px] flex items-center justify-between">
        {/* Left: Logo + Nav */}
        <div className="flex items-center gap-10">
          {/* Logo */}
          <div className="shrink-0">
            <span
              className="text-black text-[22px] tracking-[-0.5px]"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700 }}
            >
              sawala
            </span>
          </div>
          {/* Nav links */}
          <nav className="hidden lg:flex items-center gap-7">
            <a href="#" className="text-black text-[16px] hover:text-blue-600 transition-colors" style={{ fontFamily: "'Figtree', sans-serif" }}>
              Home
            </a>
            <button className="flex items-center gap-1 text-black text-[16px] hover:text-blue-600 transition-colors" style={{ fontFamily: "'Figtree', sans-serif" }}>
              Service <ChevronDown size={16} />
            </button>
            <button className="flex items-center gap-1 text-black text-[16px] hover:text-blue-600 transition-colors" style={{ fontFamily: "'Figtree', sans-serif" }}>
              Product <ChevronDown size={16} />
            </button>
            <button className="flex items-center gap-1 text-black text-[16px] hover:text-blue-600 transition-colors" style={{ fontFamily: "'Figtree', sans-serif" }}>
              About <ChevronDown size={16} />
            </button>
            <a href="#" className="text-black text-[16px] hover:text-blue-600 transition-colors" style={{ fontFamily: "'Figtree', sans-serif" }}>
              Insight
            </a>
          </nav>
        </div>

        {/* Right: Language + CTA */}
        <div className="flex items-center gap-3">
          {/* Language toggle */}
          <div className="flex items-center gap-0.5 bg-gray-100 rounded-full p-0.5">
            <button className="bg-white rounded-full w-[28px] h-[28px] flex items-center justify-center text-[12px] text-black" style={{ fontFamily: "'Figtree', sans-serif" }}>
              ID
            </button>
            <button className="bg-black rounded-full w-[28px] h-[28px] flex items-center justify-center text-[12px] text-white" style={{ fontFamily: "'Figtree', sans-serif" }}>
              EN
            </button>
          </div>
          {/* CTA */}
          <button
            className="bg-blue-600 text-white px-6 h-[40px] rounded-[16px] text-[14px] hover:bg-blue-700 transition-colors whitespace-nowrap"
            style={{ fontFamily: "'Figtree', sans-serif", fontWeight: 600 }}
          >
            Contact Us
          </button>
        </div>
      </div>
    </header>
  );
}
