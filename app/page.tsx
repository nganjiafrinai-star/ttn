import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutSection from "./components/AboutSection";
import StorySection from "./components/StorySection";
import ProgramsSection from "./components/ProgramsSection";
import MinistriesSection from "./components/MinistriesSection";
import ImpactSection from "./components/ImpactSection";
import DonationSection from "./components/DonationSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <Hero />
      <AboutSection />
      <StorySection />
      <ProgramsSection />
      <MinistriesSection />
      <ImpactSection />
      <DonationSection />
      <Footer />
    </div>
  );
}
