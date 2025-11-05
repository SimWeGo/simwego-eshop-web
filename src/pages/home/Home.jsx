//UTILTIIES
import React, { useRef } from "react";
import { useTranslation } from "react-i18next";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Button } from "@mui/material";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Container from "../../components/Container";
import Plans from "../plans/Plans";
import WhySimWeGoSection from "./components/WhySimWeGoSection";
import HowItWorksSection from "./components/HowItWorksSection";
import TestimonialSection from "./components/TestimonialSection";
import ProfessionalSection from "./components/ProfessionalSection";
import FAQSection from "./components/FAQSection";

const Home = () => {
  const { t } = useTranslation();
  const sea_option = useSelector((state) => state.currency?.sea_option);
  const featuresRef = useRef(null);

  const scrollToFeatures = () => {
    featuresRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* Hero Section */}
      <div className="relative h-screen w-full overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center scale-110"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=2000&q=80)",
          }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#1A0B1D]/90 to-transparent" />
        </div>

        {/* Content */}
        <div className="relative h-full flex items-center">
          <div className="max-w-2xl text-white ml-[5%]">
            <h1 className="text-6xl font-bold mb-6 text-white">
              Stay Connected
              <br />
              while Traveling!
            </h1>
            <Button
              component={Link}
              to={"/plans"}
              variant="contained"
              sx={{ width: "fit-content", padding: "10px 20px" }}
              className="action-button"
            >
              {t("btn.view_all_plans")}
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <button
          onClick={scrollToFeatures}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 cursor-pointer z-10 p-2 rounded bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors"
          aria-label="Scroll to features"
        >
          <KeyboardArrowDownIcon className="w-6 h-6 text-white animate-bounce" />
        </button>
      </div>
      {/* Bestsellers Section */}
      <section className="py-24 bg-background" ref={featuresRef}>
        <Container>
          <Plans cruises={sea_option} />
        </Container>
      </section>

      {/* Why SimWeGo Section */}
      <WhySimWeGoSection />

      {/* How It Works Section */}
      <HowItWorksSection />

      {/* Testimonial Section */}
      <TestimonialSection />

      {/* Professional Section */}
      <ProfessionalSection />

      {/* FAQ Section */}
      <FAQSection />
    </div>
  );
};

export default Home;
