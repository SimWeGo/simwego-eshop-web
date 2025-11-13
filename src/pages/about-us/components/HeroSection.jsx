import React, { useState, useEffect } from "react";
import { Button, Typography } from "@mui/material";
import Container from "../../../components/Container";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { WavyBackground } from "@/components/ui/wavy-background";
import { useTranslation } from "react-i18next";
import happyImage from "../../../assets/images/about-us/hero/happy.png";

const HeroSection = () => {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === 'ar';
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Force le rendu après un court délai pour que WavyBackground se charge
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <div className={`w-full relative overflow-hidden rounded-3xl shadow-2xl bg-gradient-to-br from-blue-400 via-blue-600 to-blue-800 ${isLoaded ? 'opacity-100' : 'opacity-90'} transition-opacity duration-300`}>
      <WavyBackground 
        className="w-full min-h-[500px]"
        containerClassName="rounded-3xl overflow-hidden"
        colors={["#FF6912", "#2E3786", "#7dcef0", "#FF8546", "#4467c1"]}
        waveWidth={50}
        backgroundFill="linear-gradient(135deg, #7dcef0 0%, #2E3786 100%)"
        blur={10}
        speed="fast"
        waveOpacity={0.5}
        key={isLoaded ? 'loaded' : 'loading'}
      >
      
      <Container>
        <div className="py-6 sm:py-8 md:py-12 lg:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
            <div className="space-y-4 sm:space-y-6 text-center lg:text-left">
              <div className="relative">
                {isArabic ? (
                  <Typography 
                    variant="h1" 
                    component="h1" 
                    className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight mb-3 sm:mb-4"
                    sx={{ direction: 'rtl' }}
                  >
                    {t("aboutUs.hero.title")}
                  </Typography>
                ) : (
                  <TextGenerateEffect
                    words={t("aboutUs.hero.title")}
                    className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight mb-3 sm:mb-4"
                    duration={1}
                  />
                )}
              </div>
              
              <Typography 
                variant="h5" 
                component="p" 
                className="text-white/90 text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed px-2 sm:px-4 lg:px-0"
              >
                {t("aboutUs.hero.subtitle")}
              </Typography>
              
              <div className="pt-3 sm:pt-4 md:pt-6">
                <Button
                  variant="contained"
                  size="large"
                  className="action-button"
                  onClick={() => document.getElementById('founders')?.scrollIntoView({ behavior: 'smooth' })}
                  sx={{ 
                    fontSize: { xs: "0.85rem", sm: "0.95rem", md: "1rem", lg: "1.1rem" },
                    px: { xs: 2.5, sm: 3, md: 4 },
                    py: { xs: 1.2, sm: 1.5, md: 2 }
                  }}
                >
                  {t("aboutUs.hero.cta")}
                </Button>
              </div>
            </div>
            
            <div className="hidden md:flex justify-center lg:justify-end mt-4 sm:mt-6 lg:mt-0">
              <div className="animate-fadeInRight">
                <img
                  src={happyImage}
                  alt="Happy travelers using SimWeGo"
                  className="max-w-full h-auto max-h-[300px] md:max-h-[350px] lg:max-h-[400px] object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
      </WavyBackground>
    </div>
  );
};

export default HeroSection;