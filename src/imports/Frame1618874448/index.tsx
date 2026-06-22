import svgPaths from "./svg-efcde82xjd";
import imgGeminiGeneratedImageI3A3Jji3A3Jji3A34 from "./9afc230fac8fc0840b9c357a8ee8deaa59d8fa8e.png";
import imgImage59 from "./3adeef779fc65a94f4c8a60f88e9de8fb9190008.png";
import { imgGeminiGeneratedImageI3A3Jji3A3Jji3A33, imgImage58 } from "./svg-fyg4o";

function MaskGroup() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Mask group">
      <div className="col-1 h-[361.258px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[11.822px_3.629px] mask-size-[325px_325px] ml-[-11.82px] mt-[-3.63px] relative row-1 w-[538.217px]" style={{ maskImage: `url("${imgGeminiGeneratedImageI3A3Jji3A3Jji3A33}")` }} data-name="Gemini_Generated_Image_i3a3jji3a3jji3a3 3">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[99.98%] left-0 max-w-none top-[0.02%] w-[99.99%]" src={imgGeminiGeneratedImageI3A3Jji3A3Jji3A34} />
        </div>
      </div>
    </div>
  );
}

function MaskGroup1() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative" data-name="Mask group">
      <div className="col-1 flex h-[333.182px] items-center justify-center ml-[-10px] mt-[-4px] relative row-1 w-[344px]">
        <div className="-scale-y-100 flex-none rotate-180">
          <div className="h-[333.182px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[9px_4px] mask-size-[325px_325px] relative w-[344px]" style={{ maskImage: `url("${imgImage58}")` }} data-name="image 58">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage59} />
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex items-center p-[7.245px] relative shrink-0">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="-scale-y-100 flex-none rotate-180">
          <div className="relative size-[20.332px]" data-name="CaretRight">
            <div className="absolute inset-[15.62%_28.12%_15.62%_34.37%]" data-name="Vector">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.62532 13.9789">
                <path d={svgPaths.pbeefb32} fill="var(--fill-0, #9CA3AF)" id="Vector" />
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
    <div className="content-stretch flex items-center p-[7.245px] relative">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="-scale-y-100 flex-none rotate-180">
          <div className="relative size-[20.332px]" data-name="CaretRight">
            <div className="absolute inset-[15.62%_28.12%_15.62%_34.37%]" data-name="Vector">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.62532 13.9789">
                <path d={svgPaths.pbeefb32} fill="var(--fill-0, #9CA3AF)" id="Vector" />
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
    <div className="-translate-x-1/2 absolute bottom-[6px] h-[35px] left-[calc(50%+0.5px)] rounded-[6567.666px] w-[101px]">
      <div className="content-stretch flex items-center justify-between overflow-clip relative rounded-[inherit] size-full">
        <Frame />
        <div className="bg-[#e5e7eb] h-full relative shrink-0 w-[0.635px]" />
        <div className="flex items-center justify-center relative shrink-0">
          <div className="-scale-y-100 flex-none rotate-180">
            <Frame2 />
          </div>
        </div>
      </div>
      <div aria-hidden className="absolute border-[#d1d5db] border-[0.635px] border-solid inset-[-0.318px] pointer-events-none rounded-[6567.984px]" />
    </div>
  );
}

export default function Frame3() {
  return (
    <div className="content-stretch flex gap-[28px] items-center relative size-full">
      <MaskGroup />
      <div className="flex items-center justify-center leading-[0] relative shrink-0">
        <div className="-scale-y-100 flex-none rotate-180">
          <MaskGroup1 />
        </div>
      </div>
      <Frame1 />
    </div>
  );
}