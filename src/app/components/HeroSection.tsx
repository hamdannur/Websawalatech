
import { useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  ArrowRight,
} from "lucide-react";

import heroImg1 from "figma:asset/9afc230fac8fc0840b9c357a8ee8deaa59d8fa8e.png";
import heroImg2 from "figma:asset/f5f34492b4447adcf18efb88d39a8d76dc5d91a3.png";
import heroImg3 from "figma:asset/77976f3f8cbc2bd10a4591781b493eaa60c9c3b6.png";

const slides = [heroImg1, heroImg2, heroImg3];

const maskUrl =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 644 540'%3E%3Cpath d='M614 0H30C13.4315 0 0 13.4315 0 30V510C0 526.569 13.4315 540 30 540H453.527C470.096 540 483.527 526.569 483.527 510V491.36C483.527 474.792 496.959 461.36 513.527 461.36H614C630.569 461.36 644 447.929 644 431.36V30C644 13.4315 630.569 0 614 0Z' fill='black'/%3E%3C/svg%3E\")";

function HeroImage({
  current,
  prev,
  next,
}: {
  current: number;
  prev: () => void;
  next: () => void;
}) {
  return (
    <div className="relative shrink-0 w-full max-w-[644px] lg:w-[644px] xl:w-[700px]">
      <div
        className="relative w-full"
        style={{
          paddingBottom: "calc(540 / 644 * 100%)",
        }}
      >
        <div
          className="absolute inset-0"
          style={{
            maskImage: maskUrl,
            WebkitMaskImage: maskUrl,
            maskSize: "100% 100%",
            WebkitMaskSize: "100% 100%",
            maskRepeat: "no-repeat",
            WebkitMaskRepeat: "no-repeat",
          }}
        >
          {slides.map((img, i) => (
            <img
              key={i}
              src={img}
              alt="Hero"
              className={`absolute inset-0 size-full object-cover transition-opacity duration-500 ${
                current === i ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
        </div>

        <div className="absolute bottom-0 right-0 flex items-center rounded-full border border-[#d1d5db] bg-white overflow-hidden">
          <button
            onClick={prev}
            className="flex items-center justify-center w-[clamp(36px,10vw,53px)] h-[clamp(36px,10vw,53px)] hover:bg-gray-100 transition-colors"
          >
            <ChevronLeft className="w-[clamp(16px,5vw,20px)] h-[clamp(16px,5vw,20px)] text-gray-500" />
          </button>

          <div className="w-px h-[clamp(24px,6vw,34px)] bg-[#e5e7eb]" />

          <button
            onClick={next}
            className="flex items-center justify-center w-[clamp(36px,10vw,53px)] h-[clamp(36px,10vw,53px)] hover:bg-gray-100 transition-colors"
          >
            <ChevronRight className="w-[clamp(16px,5vw,20px)] h-[clamp(16px,5vw,20px)] text-gray-500" />
          </button>
        </div>
      </div>
    </div>
  );
}

function HeroText() {
  return (
    <div className="flex flex-col gap-8 items-start justify-center w-full lg:max-w-[574px]">
      <h1 className="font-medium text-[clamp(32px,4vw,53px)] leading-[1.2] tracking-tight text-black">
        Building, improving, and growing{" "}
        <span
          className="bg-clip-text text-transparent"
          style={{
            backgroundImage:
              "linear-gradient(90deg, rgb(0,81,231) 0%, rgb(167,8,223) 41%, rgb(248,0,4) 71%, rgb(255,135,0) 100%)",
          }}
        >
          with you.
        </span>
      </h1>

      <p className="text-[18px] leading-[1.7] text-[#374151]">
        We help organizations build reliable systems, modernize operations,
        and create long-term digital impact through software, cloud, and AI.
      </p>

      <button className="flex w-full items-center justify-center gap-[clamp(8px,2vw,12px)] rounded-[clamp(16px,4vw,30px)] bg-black py-[clamp(10px,3vw,20px)] hover:bg-gray-800 transition-colors">
        <span className="text-[clamp(18px,3.5vw,28px)] font-medium leading-5 text-white">
          Let's Talk
        </span>

        <ArrowRight className="text-white w-[clamp(24px,3vw,26px)] h-[clamp(24px,3vw,26px)]" />
      </button>
    </div>
  );
}

export function HeroSection() {
  const [current, setCurrent] = useState(0);

  const prev = () =>
    setCurrent((c) => (c - 1 + slides.length) % slides.length);

  const next = () =>
    setCurrent((c) => (c + 1) % slides.length);

  return (
  <section className="w-full bg-[#f1f5f9]">
    <div className="mx-auto max-w-[1440px] px-4 lg:px-[61px] py-16 lg:py-20">
      <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-[86px]">
        <HeroImage
          current={current}
          prev={prev}
          next={next}
        />

        <HeroText />
      </div>
    </div>
  </section>
);
}