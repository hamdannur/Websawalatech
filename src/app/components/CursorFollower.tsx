import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export function CursorFollower() {
  const ringRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const ring = ringRef.current;
    const dot = dotRef.current;
    if (!ring || !dot) return;


    gsap.set(ring, { xPercent: -50, yPercent: -50, scaleX: 1, scaleY: 1 });
    gsap.set(dot, { xPercent: -50, yPercent: -50 });

    // Ring follows with spring delay
    const xRing = gsap.quickTo(ring, "x", { duration: 0.55, ease: "power3.out" });
    const yRing = gsap.quickTo(ring, "y", { duration: 0.55, ease: "power3.out" });

    // Dot follows instantly
    const xDot = gsap.quickTo(dot, "x", { duration: 0.08, ease: "none" });
    const yDot = gsap.quickTo(dot, "y", { duration: 0.08, ease: "none" });

    const INTERACTIVE = "button, a, [role='button'], input, select, textarea, label, .logo-card";

    const onMove = (e: MouseEvent) => {
      xRing(e.clientX);
      yRing(e.clientY);
      xDot(e.clientX);
      yDot(e.clientY);
    };

    const onOver = (e: MouseEvent) => {
      if ((e.target as Element).closest(INTERACTIVE)) {
        gsap.to(ring, { scaleX: 1.75, scaleY: 1.75, borderColor: "rgba(0,0,0,0.5)", duration: 0.35, ease: "power2.out" });
      }
    };

    const onOut = (e: MouseEvent) => {
      if ((e.target as Element).closest(INTERACTIVE)) {
        gsap.to(ring, { scaleX: 1, scaleY: 1, borderColor: "rgba(0,0,0,0.22)", duration: 0.35, ease: "power2.out" });
      }
    };

    const onLeaveWindow = () => gsap.to([ring, dot], { opacity: 0, duration: 0.2 });
    const onEnterWindow = () => gsap.to([ring, dot], { opacity: 1, duration: 0.2 });

    window.addEventListener("mousemove", onMove);
    document.addEventListener("mouseover", onOver);
    document.addEventListener("mouseout", onOut);
    document.documentElement.addEventListener("mouseleave", onLeaveWindow);
    document.documentElement.addEventListener("mouseenter", onEnterWindow);

    return () => {
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onOver);
      document.removeEventListener("mouseout", onOut);
      document.documentElement.removeEventListener("mouseleave", onLeaveWindow);
      document.documentElement.removeEventListener("mouseenter", onEnterWindow);
    };
  }, []);

  return (
    <>
      {/* Trailing ring */}
      <div
        ref={ringRef}
        className="fixed top-0 left-0 pointer-events-none z-[99999] rounded-full"
        style={{
          width: 38,
          height: 38,
          border: "1.5px solid rgba(0,0,0,0.22)",
          mixBlendMode: "multiply",
          willChange: "transform",
        }}
      />
      {/* Precise dot */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 pointer-events-none z-[99999] rounded-full bg-black"
        style={{
          width: 4,
          height: 4,
          opacity: 0.5,
          willChange: "transform",
        }}
      />
    </>
  );
}
