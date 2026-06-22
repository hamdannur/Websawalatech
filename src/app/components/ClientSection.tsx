import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import imgLogo5 from "../../imports/image-5.png";
import imgLogo6 from "../../imports/image-6.png";
import imgLogo7 from "../../imports/image-7.png";
import imgLogo8 from "../../imports/image-8.png";
import imgLogo9 from "../../imports/image-9.png";
import imgLogo10 from "../../imports/image-10.png";
import imgLogo11 from "../../imports/image-11.png";
import imgLogo12 from "../../imports/image-12.png";
import imgLogo13 from "../../imports/image-13.png";
import imgLogo14 from "../../imports/image-14.png";

gsap.registerPlugin(ScrollTrigger);

function LogoBox({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="logo-card bg-white flex flex-col items-center justify-center p-[min(2.5vw,10px)] relative rounded-[10px] shrink-0 size-[clamp(100px,20vw,150px)]" style={{ opacity: 0 }}>
      <div aria-hidden className="absolute border border-black border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="relative shrink-0 w-[clamp(75px,15vw,112px)] h-[clamp(48px,9.5vw,71.68px)]">
        <ImageWithFallback
          alt={alt}
          className="absolute inset-0 max-w-none object-contain pointer-events-none size-full"
          src={src}
        />
      </div>
    </div>
  );
}

function Column({ offset, logos }: { offset?: boolean; logos: { src: string; alt: string }[] }) {
  return (
    <div className="flex flex-col gap-[clamp(20px,4vw,30px)] items-center shrink-0">
      {offset && <div className="h-[clamp(35px,6vw,55px)] shrink-0 w-full hidden sm:block" />}
      {logos.map((logo, i) => (
        <LogoBox key={i} src={logo.src} alt={logo.alt} />
      ))}
    </div>
  );
}

export function ClientSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const cards = section.querySelectorAll<HTMLElement>(".logo-card");

    gsap.set(cards, { y: -80, opacity: 0 });

    const trigger = ScrollTrigger.create({
      trigger: section,
      start: "top 75%",
      once: true,
      onEnter: () => {
        gsap.to(cards, {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: "cubic.out",
          stagger: 0.1,
          onComplete() {
            gsap.to(cards, {
              y: -8,
              duration: 0.15,
              ease: "power1.out",
              stagger: 0.1,
              yoyo: true,
              repeat: 1,
            });
          },
        });
      },
    });

    return () => {
      trigger.kill();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full bg-white relative py-[clamp(60px,10vw,80px)] px-[clamp(20px,5vw,80px)] flex flex-col gap-[clamp(40px,8vw,60px)] items-center justify-center overflow-hidden"
    >
      <div className="flex flex-col gap-[16px] items-center text-center max-w-[626px]">
        <h2 className="text-[#1f2937] text-[clamp(28px,5vw,36px)] leading-normal tracking-[-0.72px]" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500 }}>
          Trusted by Teams Across Industries
        </h2>
        <p className="text-[#4b5563] text-[clamp(15px,3vw,16px)] leading-[24px]" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400 }}>
          We work with businesses and organizations from different sectors, supporting their digital systems and long-term operations.
        </p>
      </div>

      <div className="w-full max-w-[1440px] flex flex-wrap gap-[clamp(16px,4vw,60px)] items-start justify-center">
        <Column offset logos={[{ src: imgLogo5, alt: "Client logo 1" }, { src: imgLogo6, alt: "Client logo 2" }]} />
        <Column logos={[{ src: imgLogo7, alt: "Client logo 3" }, { src: imgLogo8, alt: "Client logo 4" }]} />
        <Column offset logos={[{ src: imgLogo9, alt: "Client logo 5" }, { src: imgLogo10, alt: "Client logo 6" }]} />
        <Column logos={[{ src: imgLogo11, alt: "Client logo 7" }, { src: imgLogo12, alt: "Client logo 8" }]} />
        <Column logos={[{ src: imgLogo13, alt: "Client logo 9" }, { src: imgLogo14, alt: "Client logo 10" }]} />
      </div>
    </section>
  );
}
