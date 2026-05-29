import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";

export function Footer() {
  return (
    <>
      {/* Footer top */}
      <footer className="w-full bg-[#eff6ff] shadow-inner">
        <div className="max-w-[1440px] mx-auto px-[61px] h-[293px] flex items-center justify-between">
          {/* Left */}
          <div className="flex flex-col gap-8 max-w-[469px]">
            <span
              className="text-[#111827] text-[22px] tracking-[-0.5px]"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700 }}
            >
              sawala
            </span>
            <p
              className="text-[#4b5563] text-[14px] leading-[24px]"
              style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400 }}
            >
              From local innovators to established enterprises, we partner with teams who believe technology should create real progress.
            </p>
          </div>

          {/* Right: Social + CTA */}
          <div className="flex flex-col gap-[46px] items-end">
            {/* Social icons */}
            <div className="flex items-center gap-4">
              <button className="w-7 h-7 flex items-center justify-center hover:text-blue-600 transition-colors">
                <Facebook size={22} />
              </button>
              <button className="w-7 h-7 flex items-center justify-center hover:text-pink-600 transition-colors">
                <Instagram size={22} />
              </button>
              <button className="w-7 h-7 flex items-center justify-center hover:text-blue-700 transition-colors">
                <Linkedin size={22} />
              </button>
              <button className="w-7 h-7 flex items-center justify-center hover:text-gray-700 transition-colors">
                <Twitter size={22} />
              </button>
              <button className="w-7 h-7 flex items-center justify-center hover:text-red-600 transition-colors">
                <Youtube size={22} />
              </button>
            </div>
            {/* Contact button */}
            <button
              className="bg-blue-600 text-white h-[50px] rounded-full w-[157px] text-[16px] hover:bg-blue-700 transition-colors"
              style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600 }}
            >
              Contact Us
            </button>
          </div>
        </div>
      </footer>

      {/* Copyright bar */}
      <div className="w-full bg-blue-600 h-[50px] flex items-center justify-center shadow-inner">
        <p
          className="text-white text-[16px] leading-[24px] text-center"
          style={{ fontFamily: "'Figtree', sans-serif", fontWeight: 400 }}
        >
          Copyright © 2026 SAWALA TECHNOLOGY All Rights Reserved.
        </p>
      </div>
    </>
  );
}
