import { Typography } from "@mui/material";
import Container from "../../../components/Container";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import { useTranslation } from "react-i18next";
import clockImage from "../../../assets/images/about-us/adn/clock.png";
import phoneImage from "../../../assets/images/about-us/adn/phone.png";
import teamImage from "../../../assets/images/about-us/adn/team.png";

const ADNSection = () => {
  const { t } = useTranslation();
  
  const adnValues = [
    {
      title: t("aboutUs.adn.performance.title"),
      description: t("aboutUs.adn.performance.description"),
      image: clockImage
    },
    {
      title: t("aboutUs.adn.simplicity.title"),
      description: t("aboutUs.adn.simplicity.description"),
      image: phoneImage
    },
    {
      title: t("aboutUs.adn.teamSpirit.title"),
      description: t("aboutUs.adn.teamSpirit.description"),
      image: teamImage
    }
  ];
  
  return (
    <div id="adn" className="w-full py-12 md:py-16 bg-gray-50">
      <Container>
        <div className="text-center mb-8 md:mb-12">
          <Typography 
            variant="h2" 
            component="h2" 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-title mb-4"
            sx={{ fontWeight: 900 }}
          >
            {t("aboutUs.adn.title")}
          </Typography>
        </div>

        <div className="max-w-6xl mx-auto">
          <HoverEffect items={adnValues} className="grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 py-6" />
        </div>
      </Container>
    </div>
  );
};

export default ADNSection;