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
    <div id="adn" className="w-full py-16 md:py-20 bg-gray-50">
      <Container>
        <div className="text-center mb-12 md:mb-16">
          <Typography 
            variant="h2" 
            component="h2" 
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-title mb-4"
          >
            {t("aboutUs.adn.title")}
          </Typography>
        </div>

        <div className="max-w-5xl mx-auto">
          <HoverEffect items={adnValues} />
        </div>
      </Container>
    </div>
  );
};

export default ADNSection;