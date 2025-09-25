import React from "react";
import HeroSection from "./components/HeroSection";
import FoundersSection from "./components/FoundersSection";
import ADNSection from "./components/ADNSection";

const AboutUs = () => {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <div className="pt-8 pb-8 px-4 space-y-8">
        <HeroSection />
        <FoundersSection />
        <ADNSection />
        {/* Additional sections will be added here */}
      </div>
    </div>
  );
};

export default AboutUs;