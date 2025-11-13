import { Typography } from "@mui/material";
import Container from "../../../components/Container";
import { useTranslation } from "react-i18next";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { FloatingIcons } from "@/components/ui/floating-icons";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import missionImage from "../../../assets/images/about-us/mission/simwe.png";

const MissionSection = () => {
  const { t } = useTranslation();
  
  return (
    <div id="mission" className="w-full bg-gradient-to-br from-secondary to-primary relative overflow-hidden rounded-3xl shadow-2xl">
      {/* Background Beams */}
      <BackgroundBeams />
      
      {/* Icônes flottantes */}
      <FloatingIcons />
      
      <Container>
        <div className="py-8 md:py-10 lg:py-12">
          <div className="grid grid-cols-1 md:grid-cols-7 gap-8 lg:gap-12 items-center">
            <div className="hidden md:flex justify-start md:col-span-2">
              <img
                src={missionImage}
                alt="Mission SimWeGo - Connectivité universelle"
                className="w-full max-w-xs rounded-2xl object-contain max-h-[300px]"
              />
            </div>
            
            <div className="md:col-span-5 space-y-4 text-center md:text-left">
              <TextGenerateEffect
                words={t("aboutUs.mission.title")}
                className="text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-tight"
                duration={0.5}
                filter={false}
                triggerOnScroll={true}
              />
              
              <Typography variant="h6" className="text-base sm:text-lg text-white/90 leading-relaxed px-2 md:px-0">
                {t("aboutUs.mission.description")}
              </Typography>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default MissionSection;