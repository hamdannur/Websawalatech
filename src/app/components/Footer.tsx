import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";
import Vector from "../../imports/Vector";

const SocialIcons = () => (
  <div className="flex items-center gap-4">
    <button className="w-7 h-7 flex items-center justify-center hover:text-blue-600 transition-colors"><Facebook size={22} /></button>
    <button className="w-7 h-7 flex items-center justify-center hover:text-pink-600 transition-colors"><Instagram size={22} /></button>
    <button className="w-7 h-7 flex items-center justify-center hover:text-blue-700 transition-colors"><Linkedin size={22} /></button>
    <button className="w-7 h-7 flex items-center justify-center hover:text-gray-700 transition-colors"><Twitter size={22} /></button>
    <button className="w-7 h-7 flex items-center justify-center hover:text-red-600 transition-colors"><Youtube size={22} /></button>
  </div>
);

const ContactButton = () => (
  <button className="bg-blue-600 text-white h-[50px] rounded-full w-[157px] text-[16px] hover:bg-blue-700 transition-colors" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600 }}>
    Contact Us
  </button>
);

export function Footer() {
  return (
    <>
      {/* ── Mobile footer ── */}
      <footer className="md:hidden w-full bg-[#eff6ff] shadow-inner flex flex-col items-center justify-center gap-8 px-[16px] py-[60px]" style={{ minHeight: 433 }}>
        <div className="w-[132px] h-[34px]">
          <Vector />
        </div>
        <p className="text-[#4b5563] text-[14px] leading-[24px] text-center max-w-[316px]" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400 }}>
          From local innovators to established enterprises, we partner with teams who believe technology should create real progress.
        </p>
        <SocialIcons />
        <ContactButton />
      </footer>
      <div className="md:hidden w-full bg-blue-600 h-[50px] flex items-center justify-center shadow-inner">
        <p className="text-white text-[12px] leading-[16px] text-center px-4" style={{ fontFamily: "'Figtree', sans-serif", fontWeight: 400 }}>
          Copyright © 2026 SAWALA TECHNOLOGY All Rights Reserved.
        </p>
      </div>

      {/* ── Tablet footer ── */}
      <footer className="hidden md:flex lg:hidden w-full bg-[#eff6ff] shadow-inner items-center justify-center relative" style={{ height: 373 }}>
        <div className="flex flex-col gap-8 items-center w-[704px]">
          <div className="flex flex-col gap-5 items-center">
            <div className="w-[132px] h-[34px]">
              <Vector />
            </div>
            <p className="text-[#4b5563] text-[14px] leading-[24px] text-center" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400 }}>
              From local innovators to established enterprises, we partner with teams who believe technology should create real progress.
            </p>
          </div>
          <div className="flex flex-col gap-[22px] items-center">
            <SocialIcons />
            <ContactButton />
          </div>
        </div>
      </footer>
      <div className="hidden md:flex lg:hidden w-full bg-blue-600 h-[50px] items-center justify-center shadow-inner">
        <p className="text-white text-[12px] leading-[16px] text-center px-4" style={{ fontFamily: "'Figtree', sans-serif", fontWeight: 400 }}>
          Copyright © 2026 SAWALA TECHNOLOGY All Rights Reserved.
        </p>
      </div>

      {/* ── Desktop footer ── */}
      <footer className="hidden lg:block w-full bg-[#eff6ff] shadow-inner">
        <div className="max-w-[1440px] mx-auto px-[61px] h-[293px] flex items-center justify-between">
          <div className="flex flex-col items-start gap-8 max-w-[469px]">
            <div className="w-[132px] h-[34px]">
              <Vector />
            </div>
            <p className="text-[#4b5563] text-[14px] leading-[24px]" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400 }}>
              From local innovators to established enterprises, we partner with teams who believe technology should create real progress.
            </p>
          </div>
          <div className="flex flex-col gap-[46px] items-end">
            <SocialIcons />
            <ContactButton />
          </div>
        </div>
      </footer>
      <div className="hidden lg:flex w-full bg-blue-600 h-[50px] items-center justify-center shadow-inner">
        <p className="text-white text-[16px] leading-[24px] text-center" style={{ fontFamily: "'Figtree', sans-serif", fontWeight: 400 }}>
          Copyright © 2026 SAWALA TECHNOLOGY All Rights Reserved.
        </p>
      </div>
    </>
  );
}
