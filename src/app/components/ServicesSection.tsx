import imgWide from "figma:asset/593b7a75cbcc172b8ed00e88f70f350f4ed9c397.png";
import imgFace from "figma:asset/5f6bf22bc267d74bb16b9958e2d6302a037a6821.png";
import imgTeam from "figma:asset/77976f3f8cbc2bd10a4591781b493eaa60c9c3b6.png";
import imgTall from "figma:asset/f36f1ab0571be7dd3d3eeddb5cc51628a09fef57.png";
import { Code2, Cloud, Sparkles, CheckCircle2 } from "lucide-react";

const services = [
  {
    icon: <Code2 size={40} className="text-blue-600" />,
    title: "End-to-End Software Development",
    desc: "We design and build custom digital systems that grow with your business, from early planning to production-ready solutions.",
    items: ["Product Strategy & Discovery", "UI/UX Design", "Custom Software Development", "Ongoing Support & Improvement"],
  },
  {
    icon: <Cloud size={40} className="text-blue-600" />,
    title: "Cloud & Infrastructure Solutions",
    desc: "We help businesses operate faster, more securely, and more efficiently by managing reliable cloud environments.",
    items: ["Cloud Architecture Design", "Infrastructure Setup & Migration", "Security & Performance Optimization", "Monitoring & Maintenance"],
  },
  {
    icon: <Sparkles size={40} className="text-blue-600" />,
    title: "Data & Artificial\nIntelligence",
    desc: "We design data-driven systems that enable informed decisions and scalable digital operations.",
    items: ["Data Architecture & Integration", "Analytics & Insight Systems", "Intelligent Automation", "Decision-Support Systems"],
  },
];

export function ServicesSection() {
  return (
    <section className="w-full bg-white py-[70px] px-[100px] overflow-hidden">
      <div className="max-w-[1440px] mx-auto flex flex-col gap-[60px]">
        {/* Title */}
        <div className="flex justify-center">
          <h2
            className="text-black text-center text-[48px] leading-[72px] tracking-[-1.92px] max-w-[933px]"
            style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500 }}
          >
            We take care of your technology, so you can focus on growing your business
          </h2>
        </div>

        {/* Content: services list + photos */}
        <div className="flex gap-[120px] items-start justify-center">
          {/* Services */}
          <div className="flex flex-col gap-[60px] shrink-0">
            {services.map((svc, i) => (
              <div key={i} className="flex flex-col gap-4 w-[360px]">
                {svc.icon}
                <div className="flex flex-col gap-4">
                  <h3
                    className="text-[#1f2937] text-[24px] leading-normal whitespace-pre-wrap"
                    style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500 }}
                  >
                    {svc.title}
                  </h3>
                  <p
                    className="text-[#4b5563] text-[16px] leading-[24px]"
                    style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400 }}
                  >
                    {svc.desc}
                  </p>
                  <ul className="flex flex-col gap-3">
                    {svc.items.map((item, j) => (
                      <li key={j} className="flex items-center gap-3">
                        <CheckCircle2 size={24} className="text-green-600 shrink-0" />
                        <span
                          className="text-[#4b5563] text-[16px] leading-[24px]"
                          style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400 }}
                        >
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Photos grid */}
          <div className="hidden xl:flex flex-wrap gap-[26px] items-start justify-end pt-5 max-w-[608px] sticky top-10">
            <div className="w-[377px] h-[210px] rounded-full overflow-hidden shrink-0">
              <img src={imgWide} alt="" className="w-full h-full object-cover" />
            </div>
            <div className="w-[205px] h-[203px] rounded-full overflow-hidden shrink-0">
              <img src={imgFace} alt="" className="w-full h-full object-cover" />
            </div>
            <div className="w-[203px] h-[205px] rounded-full overflow-hidden shrink-0">
              <img src={imgTeam} alt="" className="w-full h-full object-cover" />
            </div>
            <div className="w-[205px] h-[363px] rounded-full overflow-hidden shrink-0">
              <img src={imgTall} alt="" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
