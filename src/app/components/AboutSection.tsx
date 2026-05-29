import { useState } from "react";
import heroImg from "figma:asset/9afc230fac8fc0840b9c357a8ee8deaa59d8fa8e.png";
import aboutImg from "figma:asset/f5f34492b4447adcf18efb88d39a8d76dc5d91a3.png";
import img3 from "figma:asset/77976f3f8cbc2bd10a4591781b493eaa60c9c3b6.png";
import img4 from "figma:asset/5f6bf22bc267d74bb16b9958e2d6302a037a6821.png";
import { ChevronLeft, ChevronRight, Lightbulb } from "lucide-react";

/* Original mask — notch at bottom-right */
const maskUrl =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 644 540'%3E%3Cpath d='M614 0H30C13.4315 0 0 13.4315 0 30V510C0 526.569 13.4315 540 30 540H453.527C470.096 540 483.527 526.569 483.527 510V491.36C483.527 474.792 496.959 461.36 513.527 461.36H614C630.569 461.36 644 447.929 644 431.36V30C644 13.4315 630.569 0 614 0Z' fill='black'/%3E%3C/svg%3E\")";

/* Mirrored mask — notch at bottom-left (SVG horizontal flip via transform) */
const maskUrlMirror =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 644 540'%3E%3Cg transform='translate(644,0) scale(-1,1)'%3E%3Cpath d='M614 0H30C13.4315 0 0 13.4315 0 30V510C0 526.569 13.4315 540 30 540H453.527C470.096 540 483.527 526.569 483.527 510V491.36C483.527 474.792 496.959 461.36 513.527 461.36H614C630.569 461.36 644 447.929 644 431.36V30C644 13.4315 630.569 0 614 0Z' fill='black'/%3E%3C/g%3E%3C/svg%3E\")";

const makeMask = (url: string): React.CSSProperties => ({
  maskImage: url,
  maskSize: "100% 100%",
  maskRepeat: "no-repeat",
  WebkitMaskImage: url,
  WebkitMaskSize: "100% 100%",
  WebkitMaskRepeat: "no-repeat",
});

const slides = [heroImg, aboutImg, img3, img4];

export function AboutSection() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c - 1 + slides.length) % slides.length);
  const next = () => setCurrent((c) => (c + 1) % slides.length);

  const leftIdx  = current;
  const rightIdx = (current + 1) % slides.length;

  return (
    <section className="w-full bg-[#f8fafc] rounded-tl-[60px] rounded-tr-[60px] overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-[61px] py-20 flex items-center gap-16">

        {/* Left: Text */}
        <div className="flex flex-col gap-10 flex-1 max-w-[465px]">
          <div className="flex flex-col gap-6">
            <p className="text-[#4b5563] text-[16px] leading-[24px]"
               style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400 }}>
              About Us
            </p>
            <h2 className="text-[30px] leading-normal tracking-[-0.6px]"
                style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500 }}>
              <span className="text-[#1f2937]">We create and accelerate solution with </span>
              <span className="bg-clip-text text-transparent"
                    style={{ backgroundImage: "linear-gradient(90deg, rgb(0,81,231) 0%, rgb(167,8,223) 41.218%, rgb(248,0,4) 70.984%, rgb(255,135,0) 100%)" }}>
                smart technology
              </span>
            </h2>
          </div>

          <p className="text-[#4b5563] text-[16px] leading-[24px]"
             style={{ fontFamily: "'Figtree', sans-serif", fontWeight: 400 }}>
            We help organizations solve complex challenges and build systems that deliver measurable impact. Our focus is not only on delivering technology, but on ensuring it creates long-term value.
          </p>

          <div className="flex gap-8">
            {["Integrity", "Integrity", "Integrity"].map((val, i) => (
              <div key={i} className="flex items-center gap-2">
                <Lightbulb size={24} className="text-black shrink-0" />
                <span className="text-[16px] leading-[24px] text-black"
                      style={{ fontFamily: "'Figtree', sans-serif", fontWeight: 600 }}>
                  {val}
                </span>
              </div>
            ))}
          </div>

          <button className="bg-blue-600 text-white h-[50px] rounded-[16px] w-[220px] text-[16px] hover:bg-blue-700 transition-colors"
                  style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600 }}>
            Learn About Us
          </button>
        </div>

        {/* Right: Two-up slider — equal-size images, nav centred in combined notch */}
        <div className="hidden lg:flex items-center flex-1 justify-end">
          {/*
            Container is exactly (340 + 16 + 340) = 696 px wide, 360 px tall.
            • left: 50% = 348 px = 340 + 8 (centre of the 16 px gap) ✓
            • top:  334 px = 360 × 0.9272 (vertical centre of both notches) ✓
            No extra padding needed — the nav lives inside the transparent notch area.
          */}
          <div className="relative flex items-start gap-4" style={{ width: 696, height: 360 }}>

            {/* ── Left image — original mask (notch bottom-right) ── */}
            <div className="relative w-[340px] h-[360px] shrink-0">
              {slides.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt="Team"
                  className="absolute inset-0 w-full h-full object-cover"
                  style={{
                    ...makeMask(maskUrl),
                    opacity: i === leftIdx ? 1 : 0,
                    transition: "opacity 0.7s ease-in-out",
                  }}
                />
              ))}
            </div>

            {/* ── Right image — mirrored mask (notch bottom-left), same size ── */}
            <div className="relative w-[340px] h-[360px] shrink-0">
              {slides.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt="Office"
                  className="absolute inset-0 w-full h-full object-cover"
                  style={{
                    ...makeMask(maskUrlMirror),
                    opacity: i === rightIdx ? 1 : 0,
                    transition: "opacity 0.7s ease-in-out",
                  }}
                />
              ))}
            </div>

            {/* ── Nav pill — centred in the combined notch space ── */}
            <div
              className="absolute z-10"
              style={{ left: "50%", top: 334, transform: "translate(-50%, -50%)" }}
            >
              <div className="flex items-center bg-[#111827] rounded-full overflow-hidden shadow-lg border border-white/10 h-[40px] w-[90px]">
                <button
                  onClick={prev}
                  aria-label="Previous"
                  className="flex-1 h-full flex items-center justify-center text-white hover:bg-white/10 active:bg-white/20 transition-colors"
                >
                  <ChevronLeft size={15} strokeWidth={2.5} />
                </button>
                <div className="w-px h-[16px] bg-white/25 shrink-0" />
                <button
                  onClick={next}
                  aria-label="Next"
                  className="flex-1 h-full flex items-center justify-center text-white hover:bg-white/10 active:bg-white/20 transition-colors"
                >
                  <ChevronRight size={15} strokeWidth={2.5} />
                </button>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
