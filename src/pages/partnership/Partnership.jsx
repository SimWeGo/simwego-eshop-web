import React from "react";
import HeroSection from "./components/HeroSection";
import ProblemsSection from "./components/ProblemsSection";
import RoamingSection from "./components/RoamingSection";
import SolutionsSection from "./components/SolutionsSection";
import BenefitsSection from "./components/BenefitsSection";

const Partnership = () => {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <div className="py-24 px-4 space-y-8">
        <HeroSection />
        <ProblemsSection />
        <RoamingSection />
        <SolutionsSection />
        <BenefitsSection />
      </div>
    </div>
  );
};

export default Partnership;