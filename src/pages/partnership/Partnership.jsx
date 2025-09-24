import React from "react";
import HeroSection from "./components/HeroSection";
import ProblemsSection from "./components/ProblemsSection";
import RoamingSection from "./components/RoamingSection";

const Partnership = () => {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <div className="py-24 flex flex-col gap-12">
        <HeroSection />
        <ProblemsSection />
        <RoamingSection />
      </div>
    </div>
  );
};

export default Partnership;