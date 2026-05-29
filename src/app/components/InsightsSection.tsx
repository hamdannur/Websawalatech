import articleImg from "figma:asset/769656c19828ef6caa062682f704bea4b1bc61a7.png";

const articles = [
  { category: "Articles", date: "Apr 20, 2026", title: "The automation curve in agentic commerce" },
  { category: "Articles", date: "Apr 20, 2026", title: "The automation curve in agentic commerce" },
  { category: "Articles", date: "Apr 20, 2026", title: "The automation curve in agentic commerce" },
];

export function InsightsSection() {
  return (
    <section className="w-full bg-white overflow-hidden">
      <div className="max-w-[1440px] mx-auto flex min-h-[748px]">
        {/* Left panel */}
        <div className="bg-[#eff6ff] w-[490px] shrink-0 p-8 flex flex-col justify-between rounded-[20px] m-[100px] relative">
          <div className="flex flex-col gap-6">
            <h2
              className="text-[#1f2937] text-[48px] leading-[56px]"
              style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600 }}
            >
              Featured Insights
            </h2>
            <p
              className="text-[#4b5563] text-[16px] leading-[24px]"
              style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400 }}
            >
              Selected articles based on current topics and relevant industry discussions.
            </p>
          </div>
          <button
            className="border border-blue-600 text-blue-600 h-[50px] rounded-[16px] w-[220px] text-[16px] hover:bg-blue-50 transition-colors mt-6"
            style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600 }}
          >
            Explore Featured Insight
          </button>
          {/* Decorative shape */}
          <div className="absolute bottom-0 right-0 w-[270px] h-[130px] overflow-hidden rounded-br-[20px] pointer-events-none">
            <div className="w-full h-full bg-white" style={{ clipPath: "ellipse(60% 70% at 80% 100%)" }} />
          </div>
        </div>

        {/* Right: article cards */}
        <div className="flex-1 py-[108px] pr-[61px] flex gap-7 items-start overflow-x-auto">
          {articles.map((article, i) => (
            <div
              key={i}
              className="bg-[#bcaffd] rounded-[16px] w-[341px] h-[492px] shrink-0 flex flex-col justify-between overflow-hidden"
            >
              <div className="p-6 flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <span
                    className="text-[#111827] text-[16px]"
                    style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500 }}
                  >
                    {article.category}
                  </span>
                  <span
                    className="text-[#111827] text-[14px]"
                    style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400 }}
                  >
                    {article.date}
                  </span>
                </div>
                <h3
                  className="text-[#111827] text-[24px] leading-[32px]"
                  style={{ fontFamily: "'Figtree', sans-serif", fontWeight: 700 }}
                >
                  {article.title}
                </h3>
              </div>
              <div className="h-[255px] overflow-hidden">
                <img src={articleImg} alt={article.title} className="w-full h-full object-cover" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
