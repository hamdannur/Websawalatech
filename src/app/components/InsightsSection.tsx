import { useRef, useState } from "react";

import articleImg from "figma:asset/769656c19828ef6caa062682f704bea4b1bc61a7.png";
import svgPaths from "../../imports/Frame170-2/svg-eogjctphdw";

const articles = [
  { category: "Articles", date: "Apr 20, 2026", title: "The automation curve in agentic commerce" },
  { category: "Articles", date: "Apr 20, 2026", title: "The automation curve in agentic commerce" },
  { category: "Articles", date: "Apr 20, 2026", title: "The automation curve in agentic commerce" },
];

const ArticleCard = ({ article }: { article: typeof articles[0] }) => (
  <div className="bg-[#bcaffd] rounded-[16px] w-[341px] h-[492px] shrink-0 flex flex-col justify-between overflow-hidden">
    <div className="p-6 flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <span className="text-[#111827] text-[16px]" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500 }}>{article.category}</span>
        <span className="text-[#111827] text-[14px]" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400 }}>{article.date}</span>
      </div>
      <h3 className="text-[#111827] text-[24px] leading-[32px]" style={{ fontFamily: "'Figtree', sans-serif", fontWeight: 700 }}>{article.title}</h3>
    </div>
    <div className="h-[255px] overflow-hidden">
      <img src={articleImg} alt={article.title} className="w-full h-full object-cover pointer-events-none" draggable={false} />
    </div>
  </div>
);

const LeftPanel = () => (
  <div className="bg-[#eff6ff] flex flex-col items-start justify-between p-[32px] relative rounded-[20px] shrink-0 overflow-clip" style={{ width: 312, height: 492 }}>
    <div className="flex flex-col gap-[16px] w-full">
      <p className="font-semibold leading-[1.2] text-[#1f2937]" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 36 }}>
        Featured Insights
      </p>
      <p className="font-normal leading-[24px] text-[#4b5563] text-[16px]" style={{ fontFamily: "'Inter', sans-serif" }}>
        Selected articles based on current topics and relevant industry discussions.
      </p>
    </div>
    <div className="flex gap-[4px] items-center justify-center overflow-clip px-[8px] relative rounded-[16px] shrink-0 w-[220px] mb-6 z-10">
      <div className="absolute bg-transparent inset-0 rounded-[16px]">
        <div aria-hidden className="absolute border border-[#2563eb] border-solid inset-0 pointer-events-none rounded-[16px]" />
      </div>
      <div className="flex items-center justify-center min-h-[50px] shrink-0">
        <span className="font-semibold text-[#2563eb] text-[16px] leading-[24px] whitespace-nowrap" style={{ fontFamily: "'Inter', sans-serif" }}>
          Explore Featured Insight
        </span>
      </div>
    </div>
    <div className="absolute bottom-0 right-0 w-[270.25px] h-[130px]">
      <svg className="block w-full h-full" fill="none" preserveAspectRatio="none" viewBox="0 0 270.25 130">
        <path d={svgPaths.pd31ab80} fill="white" />
      </svg>
    </div>
  </div>
);

function ScrollRow({ pl }: { pl: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  return (
    <div
      ref={ref}
      className={`absolute inset-0 flex items-center gap-[16px] ${pl} overflow-x-auto hide-scrollbar select-none ${isDragging ? "cursor-grabbing" : "cursor-grab"}`}
      style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      onMouseDown={(e) => { if (!ref.current) return; setIsDragging(true); setStartX(e.pageX - ref.current.offsetLeft); setScrollLeft(ref.current.scrollLeft); }}
      onMouseLeave={() => setIsDragging(false)}
      onMouseUp={() => setIsDragging(false)}
      onMouseMove={(e) => { if (!isDragging || !ref.current) return; e.preventDefault(); ref.current.scrollLeft = scrollLeft - (e.pageX - ref.current.offsetLeft - startX) * 1.5; }}
    >
      <LeftPanel />
      {articles.map((article, i) => <ArticleCard key={i} article={article} />)}
      <div className="shrink-0 w-[16px]" />
    </div>
  );
}

export function InsightsSection() {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!sliderRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - sliderRef.current.offsetLeft);
    setScrollLeft(sliderRef.current.scrollLeft);
  };
  const handleMouseLeave = () => setIsDragging(false);
  const handleMouseUp = () => setIsDragging(false);
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging || !sliderRef.current) return;
    e.preventDefault();
    sliderRef.current.scrollLeft = scrollLeft - (e.pageX - sliderRef.current.offsetLeft - startX) * 1.5;
  };

  return (
    <>
      {/* ── Mobile ── */}
      <section className="md:hidden w-full bg-white h-[650px] overflow-clip relative">
        <ScrollRow pl="pl-[16px]" />
      </section>

      {/* ── Tablet ── */}
      <section className="hidden md:block lg:hidden w-full bg-white h-[650px] overflow-clip relative">
        <ScrollRow pl="pl-[32px]" />
      </section>

      {/* ── Desktop ── */}
      <section className="hidden lg:block w-full bg-white overflow-hidden">
        <div className="max-w-[1440px] mx-auto flex min-h-[748px]">
          {/* Left panel */}
          <div className="bg-[#eff6ff] flex flex-col items-start justify-between p-[32px] relative rounded-[20px] w-[490px] shrink-0 h-[532px] m-[100px] overflow-clip">
            <div className="flex flex-col gap-[16px] w-full">
              <p className="font-semibold leading-[56px] text-[#1f2937] text-[48px]" style={{ fontFamily: "'Inter', sans-serif" }}>Featured Insights</p>
              <p className="font-normal leading-[24px] text-[#4b5563] text-[16px]" style={{ fontFamily: "'Inter', sans-serif" }}>Selected articles based on current topics and relevant industry discussions.</p>
            </div>
            <div className="flex gap-[4px] items-center justify-center overflow-clip px-[8px] relative rounded-[16px] shrink-0 w-[220px] mb-6 z-10">
              <div className="absolute bg-transparent inset-0 rounded-[16px]">
                <div aria-hidden className="absolute border border-[#2563eb] border-solid inset-0 pointer-events-none rounded-[16px]" />
              </div>
              <div className="flex items-center justify-center min-h-[50px] shrink-0">
                <span className="font-semibold text-[#2563eb] text-[16px] leading-[24px] whitespace-nowrap" style={{ fontFamily: "'Inter', sans-serif" }}>Explore Featured Insight</span>
              </div>
            </div>
            <div className="absolute bottom-0 right-0 w-[270.25px] h-[130px]">
              <svg className="block w-full h-full" fill="none" preserveAspectRatio="none" viewBox="0 0 270.25 130">
                <path d={svgPaths.pd31ab80} fill="white" />
              </svg>
            </div>
          </div>
          {/* Article cards */}
          <div
            ref={sliderRef}
            className={`flex-1 py-[108px] pr-[61px] flex gap-7 items-start overflow-x-auto hide-scrollbar cursor-grab select-none ${isDragging ? "cursor-grabbing" : ""}`}
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseLeave}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
          >
            {articles.map((article, i) => <ArticleCard key={i} article={article} />)}
          </div>
        </div>
        <style>{`.hide-scrollbar::-webkit-scrollbar { display: none; }`}</style>
      </section>
    </>
  );
}
