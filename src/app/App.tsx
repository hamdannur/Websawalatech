import { Navbar } from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";
import { AboutSection } from "./components/AboutSection";
import { ClientSection } from "./components/ClientSection";
import { WorkSection } from "./components/WorkSection";
import { ServicesSection } from "./components/ServicesSection";
import { IndustriesSection } from "./components/IndustriesSection";
import { InsightsSection } from "./components/InsightsSection";
import { CTASection } from "./components/CTASection";
import { Footer } from "./components/Footer";
import { CursorFollower } from "./components/CursorFollower";

const Divider = () => (
  <div
    className="w-full h-[8px]"
    style={{
      backgroundImage:
        "linear-gradient(90deg, rgb(0, 81, 231) 0%, rgb(167, 8, 223) 41.218%, rgb(248, 0, 4) 70.984%, rgb(255, 135, 0) 100%)",
    }}
  />
);

export default function App() {
  return (
    <div className="w-full overflow-x-hidden bg-[#f1f5f9]">
      {/* <CursorFollower /> */}
      <Navbar />
      <HeroSection />
      <AboutSection />
      <Divider />
      <ClientSection />
      <WorkSection />
      <ServicesSection />
      <IndustriesSection />
      <InsightsSection />
      <CTASection />
      <div
        className="w-full h-[15px]"
        style={{
          backgroundImage:
            "linear-gradient(90deg, rgb(0, 81, 231) 0%, rgb(167, 8, 223) 41.218%, rgb(248, 0, 4) 70.984%, rgb(255, 135, 0) 100%)",
        }}
      />
      <Footer />
    </div>
  );
}
