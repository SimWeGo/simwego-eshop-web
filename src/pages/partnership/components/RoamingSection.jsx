import { Button, Typography } from "@mui/material";
import Container from "../../../components/Container";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import RoamingImage from "../../../assets/images/partnership/roaming/simwe.png";
import { MapPin, Zap } from "lucide-react";
import { useTranslation } from "react-i18next";

const RoamingSection = () => {
  const { t } = useTranslation();
  return (
    <div className="w-full bg-white py-12 md:py-16 rounded-3xl shadow-lg">
      <Container>
        <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-12">
          <div className="hidden lg:flex flex-shrink-0 lg:w-1/2 justify-center">
            <BackgroundGradient className="rounded-[22px] max-w-md">
              <img 
                src={RoamingImage}
                alt="SimWeGo Pro"
                className="w-full rounded-2xl object-contain"
              />
            </BackgroundGradient>
          </div>
          
          <div className="flex-1 space-y-4 md:space-y-5 text-center lg:text-left">
            <div>
              <Typography variant="h4" component="h2" className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-title leading-tight mb-2">
                {t("partnership.roaming.title")}
              </Typography>
            </div>
            
            <Typography variant="h6" className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed px-4 lg:px-0">
              {t("partnership.roaming.description")}
            </Typography>

            <div className="space-y-4 md:space-y-6">
              <Button
                variant="contained"
                size="large"
                className="action-button"
                onClick={() => document.getElementById('solutions')?.scrollIntoView({ behavior: 'smooth' })}
                sx={{
                  textTransform: 'none',
                  fontWeight: 600,
                  px: { xs: 3, md: 4 },
                  py: { xs: 1.5, md: 2 },
                  fontSize: { xs: '0.9rem', sm: '1rem', md: '1.1rem' },
                  borderRadius: 3,
                  '&:hover': {
                    transform: 'translateY(-2px)',
                    boxShadow: '0 6px 20px rgba(46, 55, 134, 0.4)',
                    transition: 'all 0.3s ease'
                  },
                  transition: 'all 0.3s ease'
                }}
              >
                {t("partnership.roaming.cta")}
              </Button>
              
              <div className="flex flex-col sm:flex-row gap-4 md:gap-8 justify-center lg:justify-start">
                <div className="text-center lg:text-left">
                  <div className="flex items-center justify-center lg:justify-start gap-2 mb-1">
                    <MapPin className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                    <Typography variant="h5" className="text-lg md:text-xl font-bold text-primary">{t("partnership.roaming.stats.destinations")}</Typography>
                  </div>
                  <Typography variant="body2" className="text-sm md:text-base text-gray-600">{t("partnership.roaming.stats.destinationsDesc")}</Typography>
                </div>
                <div className="text-center lg:text-left">
                  <div className="flex items-center justify-center lg:justify-start gap-2 mb-1">
                    <Zap className="w-5 h-5 md:w-6 md:h-6 text-secondary" />
                    <Typography variant="h5" className="text-lg md:text-xl font-bold text-secondary">{t("partnership.roaming.stats.activation")}</Typography>
                  </div>
                  <Typography variant="body2" className="text-sm md:text-base text-gray-600">{t("partnership.roaming.stats.activationDesc")}</Typography>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default RoamingSection;