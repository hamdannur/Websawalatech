import ctaBg from "figma:asset/84085d213493207fabeb70533138a00434aa1c6d.png";

export function CTASection() {
  return (
    <section className="w-full bg-[#2563eb] min-h-[428px] flex">
      <div className="relative flex-1 flex flex-col items-center justify-center overflow-hidden">
        {/* BG */}
        <div className="absolute inset-0">
          <img src={ctaBg} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        {/* Content */}
        <div className="relative z-10 flex flex-col gap-6 items-center text-center px-[100px] py-[60px]">
          {/* Sawala logo mark */}
          <svg width="38" height="24" viewBox="0 0 38 24" fill="none">
            <path
              clipRule="evenodd"
              d="M14.9907 9.08263H15.1303C15.2332 8.66329 15.8618 7.3102 16.0763 6.80014L17.5212 3.40001C17.7767 2.81066 17.7314 3.00108 17.4212 2.2634L16.4551 0H11.1557L13.0879 4.52735C13.4197 5.31465 13.7215 5.99856 14.0544 6.79065C14.2297 7.20703 14.3689 7.50378 14.5424 7.91777C14.6601 8.19772 14.9683 8.82525 14.9907 9.08263ZM24.334 18.8284C24.2393 18.4418 22.9537 15.5906 22.8698 15.2485C22.6256 15.4188 21.6731 17.9054 21.5358 18.2234C20.0463 21.6785 20.0719 20.7945 20.8378 22.6172L21.4057 23.9998H27.7505C27.8678 23.5211 28.1633 22.9888 28.3585 22.5225C31.0688 16.0357 33.9774 9.49825 36.7053 3.01177L38 0H32.3524L28.358 9.39508C27.6828 10.9998 27.0234 12.5371 26.3559 14.1215L24.8517 17.6636C24.759 17.8839 24.6954 18.0353 24.6131 18.2319L24.334 18.8284ZM10.1799 23.9998H16.5246L17.1283 22.5187C17.2548 22.2512 17.3362 22.0384 17.4513 21.7644C20.0426 15.5629 22.8502 9.26759 25.4493 3.04972L26.4149 0.785441C26.5311 0.511813 26.676 0.32554 26.7047 0.000109152H21.4059C21.3186 0.354986 21.1084 0.807144 20.9573 1.16486L19.493 4.6784C19.3205 5.08628 19.1904 5.43156 19.0249 5.82461L17.5212 9.36705C16.8583 10.9412 16.2457 12.4319 15.5786 14.0173C15.4065 14.426 15.2831 14.7561 15.1109 15.1635C14.9086 15.6424 13.6889 18.5027 13.6663 18.7626H13.5265C13.4357 18.3907 13.2245 17.9784 13.0685 17.6068C12.889 17.1801 12.7482 16.8449 12.5709 16.4226L5.71746 0.000218304H0C0.0260359 0.296531 0.458785 1.17107 0.598599 1.48669L5.09019 12.0002C5.9332 14.003 6.7988 15.9638 7.65007 17.9858C7.96893 18.7435 10.1527 23.6882 10.1801 24L10.1799 23.9998Z"
              fill="white"
              fillRule="evenodd"
            />
          </svg>
          <div className="flex flex-col gap-2">
            <h2
              className="text-white text-[36px] leading-normal tracking-[-0.72px] max-w-[540px]"
              style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700 }}
            >
              Let's Build The Right Solution for Your Business
            </h2>
            <p
              className="text-white text-[16px] leading-[24px] max-w-[540px]"
              style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400 }}
            >
              Work with our team to develop systems and technology that support your long-term growth.
            </p>
          </div>
          <button
            className="bg-blue-600 text-white h-[50px] rounded-full w-[200px] text-[16px] hover:bg-blue-700 transition-colors"
            style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600 }}
          >
            Start a Conversation
          </button>
        </div>
      </div>
    </section>
  );
}
