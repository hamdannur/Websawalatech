import logoImg from "figma:asset/df55d1c3995758c3919c962b5c7b9ee73f2ab3df.png";

const clientLogos = Array(11).fill(null);

export function ClientSection() {
  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-[1440px] mx-auto px-[80px] flex flex-col gap-[60px] items-center">
        {/* Title */}
        <div className="flex flex-col gap-4 items-center text-center max-w-[626px]">
          <h2
            className="text-[#1f2937] text-[36px] leading-normal tracking-[-0.72px]"
            style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500 }}
          >
            Trusted by Teams Across Industries
          </h2>
          <p
            className="text-[#4b5563] text-[16px] leading-[24px]"
            style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400 }}
          >
            We work with businesses and organizations from different sectors, supporting their digital systems and long-term operations.
          </p>
        </div>

        {/* Logo grid */}
        <div className="flex flex-wrap gap-[30px] items-center justify-center">
          {clientLogos.map((_, i) => (
            <div
              key={i}
              className="bg-white border border-black rounded-[10px] w-[150px] h-[150px] flex items-center justify-center p-2.5"
            >
              <img src={logoImg} alt={`Client ${i + 1}`} className="w-full h-auto object-contain" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
