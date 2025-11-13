import { Button, Typography } from "@mui/material";
import Container from "../../../components/Container";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { FloatingIcons } from "@/components/ui/floating-icons";
import { useTranslation } from "react-i18next";
import heroImage from "../../../assets/images/partnership/hero/simwe.gif";

const HeroSection = () => {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === 'ar';
  return (
    <div className="w-full bg-gradient-to-br from-secondary to-primary relative overflow-hidden rounded-3xl shadow-2xl">
      {/* Background Beams */}
      <BackgroundBeams />
      
      {/* Icônes flottantes */}
      <FloatingIcons />
      
      <Container>
        <div className="py-8 md:py-12 lg:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="space-y-4 md:space-y-6 text-center lg:text-left">
              <div className="relative">
                {isArabic ? (
                  <Typography 
                    variant="h1" 
                    component="h1" 
                    className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mb-4"
                    sx={{ direction: 'rtl' }}
                  >
                    {t("partnership.hero.title")}
                  </Typography>
                ) : (
                  <TextGenerateEffect
                    words={t("partnership.hero.title")}
                    className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mb-4"
                    duration={1}
                  />
                )}
              </div>
              
              <Typography 
                variant="h5" 
                component="p" 
                className="text-white/90 text-base sm:text-lg md:text-xl leading-relaxed px-4 lg:px-0"
              >
                {t("partnership.hero.subtitle")}
              </Typography>
              
              <div className="pt-2 md:pt-4">
                <Button
                  variant="contained"
                  size="large"
                  className="action-button"
                  onClick={() => document.getElementById('solutions')?.scrollIntoView({ behavior: 'smooth' })}
                  sx={{ 
                    fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" },
                    px: { xs: 3, md: 4 },
                    py: { xs: 1.5, md: 2 }
                  }}
                >
                  {t("partnership.hero.cta")}
                </Button>
              </div>
            </div>
            
            <div className="hidden lg:flex justify-center lg:justify-end mt-6 lg:mt-0">
              <img
                src={heroImage}
                alt="Illustration eSIM"
                className="max-w-full h-auto max-h-[400px] object-contain"
              />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default HeroSection;