import ctaBg from "figma:asset/84085d213493207fabeb70533138a00434aa1c6d.png";
import { ArrowRight } from "lucide-react";

export function WorkSection() {
  return (
    <section className="w-full min-h-[800px] flex">
      <div className="relative flex-1 flex flex-col justify-center overflow-hidden">
        {/* BG image with overlay */}
        <div className="absolute inset-0">
          <img src={ctaBg} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/60" />
        </div>

        {/* Content */}
        <div className="relative z-10 px-[100px] py-[60px] flex flex-col gap-6">
          {/* Badge */}
          <div className="flex items-center gap-3">
            <svg width="31" height="19.58" viewBox="0 0 31 19.5789" fill="none">
              <path
                clipRule="evenodd"
                d="M12.2293 7.40951H12.3431C12.4271 7.06742 12.9399 5.96359 13.1149 5.54748L14.2936 2.77369C14.502 2.29291 14.4651 2.44825 14.212 1.84646L13.4239 0H9.10074L10.677 3.69337C10.9477 4.33563 11.1938 4.89356 11.4655 5.53974C11.6084 5.87942 11.722 6.12151 11.8635 6.45923C11.9596 6.68762 12.211 7.19954 12.2293 7.40951ZM19.8514 15.36C19.7742 15.0446 18.7254 12.7186 18.657 12.4395C18.4578 12.5785 17.6807 14.607 17.5687 14.8664C16.3535 17.6851 16.3745 16.964 16.9992 18.4509L17.4626 19.5788H22.6385C22.7343 19.1883 22.9753 18.754 23.1345 18.3736C25.3456 13.0817 27.7184 7.74857 29.9438 2.45697L31 0H26.3927L23.1342 7.66441C22.5833 8.9735 22.0454 10.2276 21.5009 11.5201L20.2737 14.4098C20.1981 14.5895 20.1463 14.713 20.0791 14.8734L19.8514 15.36ZM8.30467 19.5788H13.4806L13.9731 18.3705C14.0763 18.1523 14.1427 17.9787 14.2366 17.7552C16.3505 12.696 18.641 7.5604 20.7613 2.48793L21.549 0.640754C21.6438 0.417531 21.762 0.265572 21.7854 8.90449e-05H17.4627C17.3915 0.289594 17.22 0.65846 17.0967 0.950278L15.9022 3.81659C15.7614 4.14933 15.6553 4.43101 15.5203 4.75165L14.2936 7.64154C13.7528 8.92572 13.2531 10.1418 12.7089 11.4352C12.5684 11.7685 12.4678 12.0379 12.3273 12.3702C12.1623 12.7609 11.1673 15.0943 11.1488 15.3063H11.0348C10.9607 15.0029 10.7884 14.6666 10.6612 14.3634C10.5147 14.0154 10.3998 13.7419 10.2552 13.3974L4.66424 0.00017809H0C0.0212398 0.241907 0.374272 0.955348 0.488331 1.21282L4.15252 9.78961C4.84024 11.4235 5.54639 13.0231 6.24085 14.6727C6.50097 15.2907 8.28249 19.3246 8.30486 19.5789L8.30467 19.5788Z"
                fill="white"
                fillRule="evenodd"
              />
            </svg>
            <div className="w-px h-6 bg-white" />
            <span
              className="text-white text-[14px] tracking-[0.7px]"
              style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300 }}
            >
              SELECTED WORK
            </span>
          </div>

          {/* Text */}
          <div className="flex flex-col gap-7">
            <h2
              className="text-white text-[36px] leading-normal tracking-[-0.72px] max-w-[540px]"
              style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700 }}
            >
              Enterprise Design System
            </h2>
            <p
              className="text-white text-[16px] leading-[24px] max-w-[540px]"
              style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400 }}
            >
              Built a comprehensive design system for a fast-growing B2B platform serving enterprise customers. Coordinated 40+ product teams through unified component library, design tokens, and operational governance. Reduced implementation time by 60% and improved design-to-code parity.
            </p>
          </div>

          {/* Button */}
          <button
            className="bg-blue-600 text-white h-[50px] rounded-full w-[200px] text-[16px] hover:bg-blue-700 transition-colors flex items-center justify-center"
            style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600 }}
          >
            Read More
          </button>
        </div>
      </div>
    </section>
  );
}
