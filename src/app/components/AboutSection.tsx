import { useState } from "react";
import heroImg from "../../imports/Tablet/9afc230fac8fc0840b9c357a8ee8deaa59d8fa8e.png";
import aboutImg from "../../imports/Tablet/769656c19828ef6caa062682f704bea4b1bc61a7.png";
import img3 from "../../imports/Tablet/3adeef779fc65a94f4c8a60f88e9de8fb9190008.png";
import img4 from "../../imports/Tablet/7e161897294a1dd768ce80aa253b4f2f2dab9d98.png";
import { imgImage58 } from "../../imports/Tablet/svg-azufr";
import { ChevronLeft, ChevronRight, Lightbulb } from "lucide-react";

const maskUrl =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 644 540'%3E%3Cpath d='M614 0H30C13.4315 0 0 13.4315 0 30V510C0 526.569 13.4315 540 30 540H453.527C470.096 540 483.527 526.569 483.527 510V491.36C483.527 474.792 496.959 461.36 513.527 461.36H614C630.569 461.36 644 447.929 644 431.36V30C644 13.4315 630.569 0 614 0Z' fill='black'/%3E%3C/svg%3E\")";

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

const smallMaskStyle = (flip?: boolean): React.CSSProperties => ({
  maskImage: `url("${imgImage58}")`,
  maskSize: "157px 157px",
  maskPosition: "5.72px 1.76px",
  maskRepeat: "no-repeat",
  WebkitMaskImage: `url("${imgImage58}")`,
  WebkitMaskSize: "157px 157px",
  WebkitMaskPosition: "5.72px 1.76px",
  WebkitMaskRepeat: "no-repeat",
  ...(flip ? { transform: "scaleX(-1)" } : {}),
});

const slides = [heroImg, aboutImg, img3, img4];

const AboutText = ({ size }: { size: "sm" | "md" }) => (
  <div className={`flex flex-col ${size === "sm" ? "gap-8" : "gap-8"}`}>
    <div className="flex flex-col gap-4">
      <p className="text-[#4b5563] text-[16px] leading-[24px]" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400 }}>About Us</p>
      <h2 className="leading-normal tracking-[-0.48px]" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500, fontSize: 24 }}>
        <span className="text-[#1f2937]">We create and accelerate solution with </span>
        <span className="bg-clip-text text-transparent" style={{ backgroundImage: "linear-gradient(90deg, rgb(0,81,231) 0%, rgb(167,8,223) 41.218%, rgb(248,0,4) 70.984%, rgb(255,135,0) 100%)" }}>smart technology</span>
      </h2>
    </div>
    <p className="text-[#4b5563] text-[16px] leading-[24px]" style={{ fontFamily: "'Figtree', sans-serif", fontWeight: 400 }}>
      We help organizations solve complex challenges and build systems that deliver measurable impact. Our focus is not only on delivering technology, but on ensuring it creates long-term value.
    </p>
    <div className="flex gap-4 flex-wrap">
      {["Integrity", "Integrity", "Integrity"].map((val, i) => (
        <div key={i} className="flex items-center gap-1">
          <Lightbulb size={20} className="text-black shrink-0" />
          <span className="text-[14px] leading-[20px] text-black" style={{ fontFamily: "'Figtree', sans-serif", fontWeight: 600 }}>{val}</span>
        </div>
      ))}
    </div>
    <button
      className="bg-blue-600 text-white h-[50px] rounded-[16px] w-[220px] text-[16px] hover:bg-blue-700 transition-colors"
      style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600 }}
    >
      Learn About Us
    </button>
  </div>
);

export function AboutSection() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c - 1 + slides.length) % slides.length);
  const next = () => setCurrent((c) => (c + 1) % slides.length);

  const leftIdx  = current;
  const rightIdx = (current + 1) % slides.length;

  return (
    <>
      {/* ── Mobile ── */}
      <section className="md:hidden w-full bg-[#f8fafc] rounded-tl-[60px] rounded-tr-[60px] overflow-hidden">
        <div className="flex flex-col px-[16px] pt-[82px] pb-[48px] gap-[23px] items-center">
          <AboutText size="sm" />
          <div className="relative flex gap-[13px] items-start w-full max-w-[340px]">
            <div className="relative flex-1" style={{ height: 160 }}>
              {slides.map((img, i) => (
                <img key={i} src={img} alt="Team" className="absolute inset-0 w-full h-full object-cover"
                  style={{ ...makeMask(maskUrl), opacity: i === leftIdx ? 1 : 0, transition: "opacity 0.7s ease-in-out" }} />
              ))}
            </div>
            <div className="relative flex-1" style={{ height: 160 }}>
              {slides.map((img, i) => (
                <img key={i} src={img} alt="Office" className="absolute inset-0 w-full h-full object-cover"
                  style={{ ...makeMask(maskUrlMirror), opacity: i === rightIdx ? 1 : 0, transition: "opacity 0.7s ease-in-out" }} />
              ))}
            </div>
            <div className="absolute -translate-x-1/2 z-10" style={{ bottom: 2.9, left: "calc(50% + 0.24px)", width: 49, height: 17 }}>
              <div className="flex items-center bg-white rounded-full overflow-hidden h-full w-full border-[0.3px] border-[#d1d5db]">
                <button onClick={prev} className="flex-1 h-full flex items-center justify-center text-[#9CA3AF]">
                  <ChevronLeft size={8} strokeWidth={2.5} />
                </button>
                <div className="w-[0.3px] h-full bg-[#e5e7eb] shrink-0" />
                <button onClick={next} className="flex-1 h-full flex items-center justify-center text-[#9CA3AF]">
                  <ChevronRight size={8} strokeWidth={2.5} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Tablet ── */}
      <section className="hidden md:block lg:hidden w-full bg-[#f8fafc] rounded-tl-[60px] rounded-tr-[60px] overflow-hidden">
        <div className="relative" style={{ height: 539 }}>
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center gap-[23px] w-[704px]">
            {/* Left: Text */}
            <div className="flex flex-col gap-8 shrink-0 w-[339px]">
              <AboutText size="md" />
            </div>
            {/* Right: Two images + nav pill */}
            <div className="absolute right-0 top-0 bottom-0 flex items-start" style={{ height: 417 }}>
              <div className="relative flex items-start gap-[13.5px] sticky top-0">
                {/* Left image */}
                <div className="relative shrink-0" style={{ width: 166, height: 175 }}>
                  {slides.map((img, i) => (
                    <img key={i} src={img} alt="Team" className="absolute inset-0 w-full h-full object-cover"
                      style={{ ...makeMask(maskUrl), opacity: i === leftIdx ? 1 : 0, transition: "opacity 0.7s ease-in-out" }} />
                  ))}
                </div>
                {/* Right image (mirrored) */}
                <div className="relative shrink-0" style={{ width: 166, height: 175, transform: "scaleX(-1)" }}>
                  {slides.map((img, i) => (
                    <img key={i} src={img} alt="Office" className="absolute inset-0 w-full h-full object-cover"
                      style={{ ...makeMask(maskUrl), opacity: i === rightIdx ? 1 : 0, transition: "opacity 0.7s ease-in-out" }} />
                  ))}
                </div>
                {/* Nav pill */}
                <div className="absolute z-10" style={{ left: "50%", top: 162.5, transform: "translate(-50%, -50%)", width: 49, height: 17 }}>
                  <div className="flex items-center bg-white rounded-full overflow-hidden h-full w-full border-[0.3px] border-[#d1d5db]">
                    <button onClick={prev} className="flex-1 h-full flex items-center justify-center text-[#9CA3AF]">
                      <ChevronLeft size={8} strokeWidth={2.5} />
                    </button>
                    <div className="w-[0.3px] h-full bg-[#e5e7eb] shrink-0" />
                    <button onClick={next} className="flex-1 h-full flex items-center justify-center text-[#9CA3AF]">
                      <ChevronRight size={8} strokeWidth={2.5} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Desktop ── */}
      <section className="hidden lg:block w-full bg-[#f8fafc] rounded-tl-[60px] rounded-tr-[60px] overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-[61px] py-20 flex items-center gap-16">
          <div className="flex flex-col gap-10 flex-1 max-w-[465px]">
            <AboutText size="md" />
          </div>
          <div className="flex items-center flex-1 justify-end">
            <div className="relative flex items-start gap-4" style={{ width: 696, height: 360 }}>
              <div className="relative w-[340px] h-[360px] shrink-0">
                {slides.map((img, i) => (
                  <img key={i} src={img} alt="Team" className="absolute inset-0 w-full h-full object-cover"
                    style={{ ...makeMask(maskUrl), opacity: i === leftIdx ? 1 : 0, transition: "opacity 0.7s ease-in-out" }} />
                ))}
              </div>
              <div className="relative w-[340px] h-[360px] shrink-0" style={{ transform: "scaleX(-1)" }}>
                {slides.map((img, i) => (
                  <img key={i} src={img} alt="Office" className="absolute inset-0 w-full h-full object-cover"
                    style={{ ...makeMask(maskUrl), opacity: i === rightIdx ? 1 : 0, transition: "opacity 0.7s ease-in-out" }} />
                ))}
              </div>
              <div className="absolute z-10" style={{ left: "50%", top: 315, transform: "translate(-50%, -50%)" }}>
                <div className="flex items-center bg-white rounded-full overflow-hidden border border-[#d1d5db] h-[40px] w-[90px]">
                  <button onClick={prev} aria-label="Previous" className="flex-1 h-full flex items-center justify-center text-gray-500 hover:bg-gray-100 transition-colors">
                    <ChevronLeft size={15} strokeWidth={2.5} />
                  </button>
                  <div className="w-px h-[16px] bg-[#e5e7eb] shrink-0" />
                  <button onClick={next} aria-label="Next" className="flex-1 h-full flex items-center justify-center text-gray-500 hover:bg-gray-100 transition-colors">
                    <ChevronRight size={15} strokeWidth={2.5} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
