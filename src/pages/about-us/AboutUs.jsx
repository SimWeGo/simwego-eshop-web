import React from "react";
import HeroSection from "./components/HeroSection";
import FoundersSection from "./components/FoundersSection";
import ADNSection from "./components/ADNSection";
import MissionSection from "./components/MissionSection";

const AboutUs = () => {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <div className="pt-4 sm:pt-6 md:pt-8 pb-6 sm:pb-8 px-2 sm:px-4 space-y-6 sm:space-y-8">
        <HeroSection />
        <FoundersSection />
        <ADNSection />
        <MissionSection />
      </div>
    </div>
  );
};

export default AboutUs;