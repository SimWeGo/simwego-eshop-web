import React from "react";
import HeroSection from "./components/HeroSection";
import ProblemsSection from "./components/ProblemsSection";
import RoamingSection from "./components/RoamingSection";
import SolutionsSection from "./components/SolutionsSection";
import BenefitsSection from "./components/BenefitsSection";
import TrustedPartnersBanner from "./components/TrustedPartnersBanner";
import PartnershipContactForm from "./components/PartnershipContactForm";

const Partnership = () => {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <div className="pt-8 pb-8 px-4">
        <div className="space-y-8">
          <HeroSection />
          <ProblemsSection />
          <RoamingSection />
          <SolutionsSection />
          <TrustedPartnersBanner />
          <BenefitsSection />
        </div>
        <div className="mt-20">
          <PartnershipContactForm />
        </div>
      </div>
    </div>
  );
};

export default Partnership;