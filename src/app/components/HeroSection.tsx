import { useState } from "react";
import heroImg1 from "figma:asset/9afc230fac8fc0840b9c357a8ee8deaa59d8fa8e.png";
import heroImg2 from "figma:asset/f5f34492b4447adcf18efb88d39a8d76dc5d91a3.png";
import heroImg3 from "figma:asset/77976f3f8cbc2bd10a4591781b493eaa60c9c3b6.png";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";

const maskUrl =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 644 540'%3E%3Cpath d='M614 0H30C13.4315 0 0 13.4315 0 30V510C0 526.569 13.4315 540 30 540H453.527C470.096 540 483.527 526.569 483.527 510V491.36C483.527 474.792 496.959 461.36 513.527 461.36H614C630.569 461.36 644 447.929 644 431.36V30C644 13.4315 630.569 0 614 0Z' fill='black'/%3E%3C/svg%3E\")";

const maskStyle: React.CSSProperties = {
  maskImage: maskUrl,
  maskSize: "100% 100%",
  maskRepeat: "no-repeat",
  WebkitMaskImage: maskUrl,
  WebkitMaskSize: "100% 100%",
  WebkitMaskRepeat: "no-repeat",
};

const slides = [heroImg1, heroImg2, heroImg3];

export function HeroSection() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c - 1 + slides.length) % slides.length);
  const next = () => setCurrent((c) => (c + 1) % slides.length);

  return (
    <section className="w-full bg-[#f1f5f9] min-h-[710px] flex items-center overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-[61px] w-full flex items-center gap-16 py-20">

        {/* Slider */}
        <div className="hidden lg:block shrink-0 relative w-[620px] h-[520px]">
          {/* Slide images — mask applied to each */}
          {slides.map((img, i) => (
            <img
              key={i}
              src={img}
              alt="Team collaboration"
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                i === current ? "opacity-100" : "opacity-0"
              }`}
              style={maskStyle}
            />
          ))}

          {/*
            Nav sits inside the notch cut-out (bottom-right of the mask shape).
            Notch in SVG coords: x 483.527–644 (24.92% wide), y 461.36–540 (14.56% tall).
            We center the pill inside that space.
          */}
          <div
            className="absolute flex items-center justify-center"
            style={{
              left: "75.08%",
              top: "85.44%",
              width: "24.92%",
              height: "14.56%",
            }}
          >
            <div className="flex items-center bg-[#111827] rounded-full overflow-hidden shadow-lg border border-white/10 h-[40px] w-[110px]">
              <button
                onClick={prev}
                aria-label="Previous"
                className="flex-1 h-full flex items-center justify-center text-white hover:bg-white/10 active:bg-white/20 transition-colors"
              >
                <ChevronLeft size={16} strokeWidth={2.5} />
              </button>
              <div className="w-px h-[18px] bg-white/25 shrink-0" />
              <button
                onClick={next}
                aria-label="Next"
                className="flex-1 h-full flex items-center justify-center text-white hover:bg-white/10 active:bg-white/20 transition-colors"
              >
                <ChevronRight size={16} strokeWidth={2.5} />
              </button>
            </div>
          </div>
        </div>

        {/* Title */}
        <div className="flex flex-col gap-8 max-w-[574px]">
          <h1
            className="text-[53px] leading-[1.2] tracking-[-1.06px] text-black"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 500 }}
          >
            Building, improving, and growing{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  "linear-gradient(90deg, rgb(0, 81, 231) 0%, rgb(167, 8, 223) 41.218%, rgb(248, 0, 4) 70.984%, rgb(255, 135, 0) 100%)",
              }}
            >
              with you.
            </span>
          </h1>
          <p
            className="text-[#374151] text-[18px] leading-[28px]"
            style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400 }}
          >
            We help organizations build reliable systems, modernize operations, and create long-term digital impact through software, cloud, and AI.
          </p>
          <button className="bg-black text-white h-[90px] rounded-[30px] flex items-center justify-center gap-3 px-10 hover:bg-gray-900 transition-colors w-full">
            <span
              className="text-[28px] tracking-[-0.56px]"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 500 }}
            >
              Let's Talk
            </span>
            <ArrowRight size={32} className="text-white" />
          </button>
        </div>
      </div>
    </section>
  );
}
