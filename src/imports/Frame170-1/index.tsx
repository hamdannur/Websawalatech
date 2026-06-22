import svgPaths from "./svg-nprkjq2irq";

function TitleContainer() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[16px] items-center not-italic relative shrink-0 w-full" data-name="title-container">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[56px] min-w-full relative shrink-0 text-[#1f2937] text-[48px] w-[min-content]">Featured Insights</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] min-w-full relative shrink-0 text-[#4b5563] text-[16px] w-[min-content]">Selected articles based on current topics and relevant industry discussions.</p>
    </div>
  );
}

export default function Frame() {
  return (
    <div className="bg-[#eff6ff] content-stretch flex flex-col items-start justify-between p-[32px] relative rounded-[20px] size-full">
      <TitleContainer />
      <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip px-[8px] relative rounded-[16px] shrink-0 w-[220px]" data-name="_Final Button">
        <div className="absolute bg-[rgba(0,0,0,0)] inset-0 rounded-[16px]" data-name="_Button Type">
          <div aria-hidden className="absolute border border-[#2563eb] border-solid inset-0 pointer-events-none rounded-[16px]" />
        </div>
        <div className="content-stretch flex items-center justify-center min-h-[50px] relative shrink-0" data-name="_Button Label and Size">
          <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#2563eb] text-[16px] whitespace-nowrap">
            <p className="leading-[24px]">Explore Featured Insight</p>
          </div>
        </div>
      </div>
      <div className="absolute h-[130px] left-[142px] top-[402px] w-[270.25px]" data-name="Exclude">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 270.25 130">
          <path d={svgPaths.pd31ab80} fill="var(--fill-0, white)" id="Exclude" />
        </svg>
      </div>
    </div>
  );
}