import { Typography } from "@mui/material";
import Container from "../../../components/Container";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import { useTranslation } from "react-i18next";
import foundersImage from "../../../assets/images/about-us/fondators/jad-julien.png";

const FoundersSection = () => {
  const { t } = useTranslation();
  
  return (
    <div id="founders" className="w-full py-12 sm:py-16 md:py-20">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
          <div className="space-y-4 sm:space-y-6 text-center md:text-left order-2 md:order-1">
            <div>
              <Typography variant="h4" component="h2" className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-extrabold text-title leading-tight mb-2" sx={{ fontWeight: 900 }}>
                {t("aboutUs.founders.title")}
              </Typography>
            </div>
            
            <Typography variant="h6" className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed px-2 sm:px-4 md:px-0">
              {t("aboutUs.founders.description")}
            </Typography>
            
            <Typography variant="h6" className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed italic border-l-2 sm:border-l-4 border-secondary pl-3 sm:pl-4 mx-2 md:mx-0">
              {t("aboutUs.founders.quote")}
              <br /><br />
              {t("aboutUs.founders.inspiration")}
            </Typography>
          </div>
          
          <div className="hidden md:flex justify-center lg:justify-end order-1 md:order-2">
            <BackgroundGradient className="rounded-[22px] w-full max-w-md">
              <img
                src={foundersImage}
                alt="Jad et Julien - Fondateurs de SimWeGo"
                className="w-full rounded-2xl object-contain"
              />
            </BackgroundGradient>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default FoundersSection;