import React from "react";
import HeroSection from "./components/HeroSection";
import FoundersSection from "./components/FoundersSection";
import ADNSection from "./components/ADNSection";
import Container from "../../components/Container";

const AboutUs = () => {
  return (
    <div className="pt-8 pb-8 px-4 space-y-8">
      <Container>
        <HeroSection />
        <FoundersSection />
      </Container>
      <ADNSection />
      <Container>
        {/* Additional sections will be added here */}
      </Container>
    </div>
  );
};

export default AboutUs;