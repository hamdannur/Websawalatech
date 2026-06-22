import { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// ── Logo ──────────────────────────────────────────────────────────────────────

const SawalaMark = () => (
  <svg width="31" height="19.58" viewBox="0 0 31 19.5789" fill="none">
    <path
      clipRule="evenodd"
      d="M12.2293 7.40951H12.3431C12.4271 7.06742 12.9399 5.96359 13.1149 5.54748L14.2936 2.77369C14.502 2.29291 14.4651 2.44825 14.212 1.84646L13.4239 0H9.10074L10.677 3.69337C10.9477 4.33563 11.1938 4.89356 11.4655 5.53974C11.6084 5.87942 11.722 6.12151 11.8635 6.45923C11.9596 6.68762 12.211 7.19954 12.2293 7.40951ZM19.8514 15.36C19.7742 15.0446 18.7254 12.7186 18.657 12.4395C18.4578 12.5785 17.6807 14.607 17.5687 14.8664C16.3535 17.6851 16.3745 16.964 16.9992 18.4509L17.4626 19.5788H22.6385C22.7343 19.1883 22.9753 18.754 23.1345 18.3736C25.3456 13.0817 27.7184 7.74857 29.9438 2.45697L31 0H26.3927L23.1342 7.66441C22.5833 8.9735 22.0454 10.2276 21.5009 11.5201L20.2737 14.4098C20.1981 14.5895 20.1463 14.713 20.0791 14.8734L19.8514 15.36ZM8.30467 19.5788H13.4806L13.9731 18.3705C14.0763 18.1523 14.1427 17.9787 14.2366 17.7552C16.3505 12.696 18.641 7.5604 20.7613 2.48793L21.549 0.640754C21.6438 0.417531 21.762 0.265572 21.7854 8.90449e-05H17.4627C17.3915 0.289594 17.22 0.65846 17.0967 0.950278L15.9022 3.81659C15.7614 4.14933 15.6553 4.43101 15.5203 4.75165L14.2936 7.64154C13.7528 8.92572 13.2531 10.1418 12.7089 11.4352C12.5684 11.7685 12.4678 12.0379 12.3273 12.3702C12.1623 12.7609 11.1673 15.0943 11.1488 15.3063H11.0348C10.9607 15.0029 10.7884 14.6666 10.6612 14.3634C10.5147 14.0154 10.3998 13.7419 10.2552 13.3974L4.66424 0.00017809H0C0.0212398 0.241907 0.374272 0.955348 0.488331 1.21282L4.15252 9.78961C4.84024 11.4235 5.54639 13.0231 6.24085 14.6727C6.50097 15.2907 8.28249 19.3246 8.30486 19.5789L8.30467 19.5788Z"
      fill="white"
      fillRule="evenodd"
    />
  </svg>
);

// ── Data ─────────────────────────────────────────────────────────────────────

const EASE: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];

const projects = [
  {
    id: 0,
    label: "Product Design · 2024",
    name: "Enterprise Design System",
    description:
      "Built a comprehensive design system for a fast-growing B2B platform serving enterprise customers. Coordinated 40+ product teams through a unified component library, design tokens, and operational governance. Reduced implementation time by 60%.",
    image:
      "https://images.unsplash.com/photo-1720962158813-29b66b8e23e1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1920",
  },
  {
    id: 1,
    label: "Engineering · 2024",
    name: "Digital Commerce Platform",
    description:
      "Redesigned the end-to-end commerce experience for a global retail brand. Delivered a scalable front-end architecture and headless CMS integration that increased conversion rate by 38% and halved time-to-market for new campaigns.",
    image:
      "https://images.unsplash.com/photo-1625838144804-300f3907c110?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1920",
  },
  {
    id: 2,
    label: "Data & AI · 2023",
    name: "AI Operations Dashboard",
    description:
      "Built a real-time operations intelligence dashboard for a logistics company managing thousands of daily deliveries. Integrated ML models for predictive routing and anomaly detection, reducing operational overhead by 45%.",
    image:
      "https://images.unsplash.com/photo-1515703944563-dbcfbf121b3d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1920",
  },
];

// ── Dot navigation ────────────────────────────────────────────────────────────

function DotNav({
  activeIdx,
  total,
  onDotClick,
  horizontal = false,
}: {
  activeIdx: number;
  total: number;
  onDotClick: (i: number) => void;
  horizontal?: boolean;
}) {
  return (
    <div
      className={`flex ${horizontal ? "flex-row gap-2 items-center" : "flex-col items-center gap-1"}`}
      style={{ pointerEvents: "auto" }}
    >
      {Array.from({ length: total }).map((_, i) => (
        <button
          key={i}
          onClick={() => onDotClick(i)}
          aria-label={`View project ${i + 1}`}
          style={{
            width: horizontal ? undefined : 28,
            height: 28,
            pointerEvents: "auto",
            padding: 8,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "none",
            border: "none",
            cursor: "pointer",
          }}
        >
          <motion.div
            className="rounded-full bg-white"
            initial={{ opacity: 0.35 }}
            animate={
              horizontal
                ? { width: i === activeIdx ? 24 : 8, height: 8, opacity: i === activeIdx ? 1 : 0.3 }
                : { width: i === activeIdx ? 10 : 5, height: i === activeIdx ? 10 : 5, opacity: i === activeIdx ? 1 : 0.35 }
            }
            transition={{ duration: 0.35, ease: "easeInOut" }}
          />
        </button>
      ))}
      {!horizontal && (
        <span
          className="text-white/40 text-[11px] tracking-widest mt-1 select-none"
          style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400 }}
        >
          {String(activeIdx + 1).padStart(2, "0")}&nbsp;/&nbsp;{String(total).padStart(2, "0")}
        </span>
      )}
    </div>
  );
}

// ── Project content ───────────────────────────────────────────────────────────

function ProjectContent({ project }: { project: typeof projects[0] }) {
  return (
    <div className="flex flex-col gap-6">
      <span
        className="text-white/45 text-[12px] tracking-[2.5px] uppercase"
        style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400 }}
      >
        {project.label}
      </span>
      <h2
        className="text-white leading-[1.08]"
        style={{
          fontFamily: "'Inter', sans-serif",
          fontWeight: 700,
          fontSize: "clamp(28px, 4.2vw, 56px)",
          letterSpacing: "-0.03em",
        }}
      >
        {project.name}
      </h2>
      <p
        className="text-white/65 leading-[1.75]"
        style={{
          fontFamily: "'Inter', sans-serif",
          fontWeight: 400,
          fontSize: "clamp(14px, 1.1vw, 16px)",
        }}
      >
        {project.description}
      </p>
      <motion.button
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.97 }}
        className="flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white h-[50px] rounded-full px-7 w-fit text-[15px] transition-colors"
        style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600 }}
      >
        View Project
        <ArrowUpRight size={17} strokeWidth={2.2} />
      </motion.button>
    </div>
  );
}

// ── Desktop: GSAP ScrollTrigger pinned section ────────────────────────────────

function DesktopWorkSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const stRef = useRef<ScrollTrigger | null>(null);
  const [activeIdx, setActiveIdx] = useState(0);
  const prevIdx = useRef(-1);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const st = ScrollTrigger.create({
      trigger: el,
      start: "top top",
      // One viewport-height of scroll per additional project
      end: () => "+=" + (projects.length - 1) * window.innerHeight,
      pin: true,
      scrub: 0.8,
      snap: {
        snapTo: 1 / (projects.length - 1),
        duration: { min: 0.25, max: 0.5 },
        ease: "power2.inOut",
      },
      onUpdate(self) {
        const newIdx = Math.round(self.progress * (projects.length - 1));
        if (newIdx !== prevIdx.current) {
          prevIdx.current = newIdx;
          setActiveIdx(newIdx);
        }
      },
    });

    stRef.current = st;
    return () => {
      st.kill();
      stRef.current = null;
    };
  }, []);

  // Dot click: scroll to the corresponding position within the pinned range
  const goTo = (i: number) => {
    const st = stRef.current;
    if (!st) {
      setActiveIdx(i);
      prevIdx.current = i;
      return;
    }
    const progress = i / Math.max(1, projects.length - 1);
    const targetY = st.start + progress * (st.end - st.start);
    window.scrollTo({ top: targetY, behavior: "smooth" });
    // Optimistically update state so UI feels instant
    prevIdx.current = i;
    setActiveIdx(i);
  };

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden"
      style={{ height: "100vh" }}
    >
      {/* All backgrounds rendered; opacity toggled by activeIdx */}
      {projects.map((p, i) => (
        <motion.div
          key={p.id}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${p.image})` }}
          animate={{
            opacity: i === activeIdx ? 1 : 0,
            scale: i === activeIdx ? 1.03 : 1.08,
          }}
          transition={{ duration: 1.0, ease: EASE }}
        />
      ))}

      {/* Overlays */}
      <div
        className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/55 to-black/20"
        style={{ pointerEvents: "none" }}
      />
      <div
        className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"
        style={{ pointerEvents: "none" }}
      />

      {/* Content */}
      <div
        className="relative h-full flex items-center px-[clamp(24px,6vw,100px)]"
        style={{ zIndex: 10 }}
      >
        {/* Left column */}
        <div className="flex flex-col gap-8 max-w-[clamp(300px,50vw,600px)] w-full">
          <div className="flex items-center gap-3">
            <SawalaMark />
            <div className="w-px h-6 bg-white/70" />
            <span
              className="text-white/80 text-[13px] tracking-[2px] uppercase"
              style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300 }}
            >
              Selected Work
            </span>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeIdx}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -28 }}
              transition={{ duration: 0.6, ease: EASE }}
            >
              <ProjectContent project={projects[activeIdx]} />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dot nav — z-50, above all overlays */}
        <div
          className="absolute bottom-[clamp(40px,6vh,72px)] right-[clamp(24px,4vw,60px)]"
          style={{ zIndex: 50, pointerEvents: "auto" }}
        >
          <DotNav activeIdx={activeIdx} total={projects.length} onDotClick={goTo} />
        </div>
      </div>

      {/* Scroll hint on first project */}
      <AnimatePresence>
        {activeIdx === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
            style={{ pointerEvents: "none", zIndex: 10 }}
          >
            <span
              className="text-white/30 text-[10px] tracking-[2.5px] uppercase"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Scroll
            </span>
            <motion.div
              animate={{ y: [0, 7, 0] }}
              transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
              className="w-px h-8 bg-gradient-to-b from-white/40 to-transparent"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

// ── Mobile: single 100vh section, dot-driven ─────────────────────────────────

function MobileWorkSection() {
  const [activeIdx, setActiveIdx] = useState(0);

  return (
    <section className="relative w-full overflow-hidden" style={{ height: "100vh" }}>
      {projects.map((p, i) => (
        <motion.div
          key={p.id}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${p.image})` }}
          animate={{ opacity: i === activeIdx ? 1 : 0, scale: i === activeIdx ? 1.02 : 1.06 }}
          transition={{ duration: 0.9, ease: EASE }}
        />
      ))}
      <div
        className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/60 to-black/85"
        style={{ pointerEvents: "none" }}
      />

      <div
        className="relative flex flex-col justify-between h-full px-6 pt-16 pb-10"
        style={{ zIndex: 10 }}
      >
        <div className="flex items-center gap-3">
          <SawalaMark />
          <div className="w-px h-5 bg-white/70" />
          <span
            className="text-white/80 text-[12px] tracking-[2px] uppercase"
            style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300 }}
          >
            Selected Work
          </span>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeIdx}
            initial={{ opacity: 0, y: 36 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -24 }}
            transition={{ duration: 0.6, ease: EASE }}
            className="flex flex-col gap-5"
          >
            <span
              className="text-white/40 text-[11px] tracking-[2.5px] uppercase"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              {projects[activeIdx].label}
            </span>
            <h2
              className="text-white leading-[1.1] text-[28px]"
              style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700, letterSpacing: "-0.02em" }}
            >
              {projects[activeIdx].name}
            </h2>
            <p
              className="text-white/60 text-[14px] leading-[1.7]"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              {projects[activeIdx].description}
            </p>
            <button
              className="flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white h-[48px] rounded-full px-6 w-fit text-[14px] transition-colors"
              style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600 }}
            >
              View Project <ArrowUpRight size={16} />
            </button>
          </motion.div>
        </AnimatePresence>

        <div className="flex items-center justify-between" style={{ zIndex: 20 }}>
          <DotNav
            activeIdx={activeIdx}
            total={projects.length}
            onDotClick={setActiveIdx}
            horizontal
          />
          <span
            className="text-white/40 text-[11px] tracking-widest"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            {String(activeIdx + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}
          </span>
        </div>
      </div>
    </section>
  );
}

// ── Export ────────────────────────────────────────────────────────────────────

export function WorkSection() {
  return (
    <>
      <div className="lg:hidden">
        <MobileWorkSection />
      </div>
      <div className="hidden lg:block">
        <DesktopWorkSection />
      </div>
    </>
  );
}
