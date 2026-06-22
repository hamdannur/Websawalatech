import svgPaths from "./svg-698uwz608f";

function TitleContainer() {
  return (
    <div className="[word-break:break-word] absolute content-stretch flex flex-col gap-[16px] items-center left-[26px] not-italic top-[52px] w-[348px]" data-name="title-container">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[56px] min-w-full relative shrink-0 text-[#1f2937] text-[48px] w-[min-content]">Featured Insights</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] min-w-full relative shrink-0 text-[#4b5563] text-[16px] w-[min-content]">Selected articles based on current topics and relevant industry discussions.</p>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex items-center p-[11.031px] relative shrink-0">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="-scale-y-100 flex-none rotate-180">
          <div className="relative size-[30.954px]" data-name="CaretRight">
            <div className="absolute inset-[15.62%_28.12%_15.62%_34.37%]" data-name="Vector">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6092 21.2823">
                <path d={svgPaths.p1b1d6700} fill="var(--fill-0, #9CA3AF)" id="Vector" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex items-center p-[11.031px] relative">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="-scale-y-100 flex-none rotate-180">
          <div className="relative size-[30.954px]" data-name="CaretRight">
            <div className="absolute inset-[15.62%_28.12%_15.62%_34.37%]" data-name="Vector">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6092 21.2823">
                <path d={svgPaths.p1b1d6700} fill="var(--fill-0, #9CA3AF)" id="Vector" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute bg-white bottom-[16.98px] right-[10px] rounded-[9999px]">
      <div className="content-stretch flex items-center overflow-clip relative rounded-[inherit] size-full">
        <Frame />
        <div className="flex flex-row items-center self-stretch">
          <div className="bg-[#e5e7eb] h-full relative shrink-0 w-[0.967px]" />
        </div>
        <div className="flex items-center justify-center relative shrink-0">
          <div className="-scale-y-100 flex-none rotate-180">
            <Frame2 />
          </div>
        </div>
      </div>
      <div aria-hidden className="absolute border-[#d1d5db] border-[0.967px] border-solid inset-[-0.483px] pointer-events-none rounded-[9999.483px]" />
    </div>
  );
}

export default function Card() {
  return (
    <div className="content-stretch flex flex-col items-end relative size-full" data-name="card">
      <div className="h-[532px] relative shrink-0 w-[400px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 400 532">
          <path d={svgPaths.p281e3800} fill="var(--fill-0, #EFF6FF)" id="Rectangle 300" />
        </svg>
      </div>
      <TitleContainer />
      <Frame1 />
      <div className="absolute content-stretch flex gap-[4px] items-center justify-center left-[20px] overflow-clip px-[8px] rounded-[16px] top-[464px] w-[220px]" data-name="_Final Button">
        <div className="absolute bg-[rgba(0,0,0,0)] inset-0 rounded-[16px]" data-name="_Button Type">
          <div aria-hidden className="absolute border border-[#2563eb] border-solid inset-0 pointer-events-none rounded-[16px]" />
        </div>
        <div className="content-stretch flex items-center justify-center min-h-[50px] relative shrink-0" data-name="_Button Label and Size">
          <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#2563eb] text-[16px] whitespace-nowrap">
            <p className="leading-[24px]">Explore More</p>
          </div>
        </div>
      </div>
    </div>
  );
}