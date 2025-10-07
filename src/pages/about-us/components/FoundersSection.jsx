import { Typography } from "@mui/material";
import Container from "../../../components/Container";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import { useTranslation } from "react-i18next";
import foundersImage from "../../../assets/images/about-us/fondators/jad-julien.png";

const FoundersSection = () => {
  const { t } = useTranslation();
  
  return (
    <div id="founders" className="w-full py-16 md:py-20">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="space-y-6 text-center lg:text-left">
            <div>
              <Typography variant="h4" component="h2" className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-title leading-tight mb-2" sx={{ fontWeight: 900 }}>
                {t("aboutUs.founders.title")}
              </Typography>
            </div>
            
            <Typography variant="h6" className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed px-4 lg:px-0">
              {t("aboutUs.founders.description")}
            </Typography>
            
            <Typography variant="h6" className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed italic border-l-4 border-secondary pl-4">
              {t("aboutUs.founders.quote")}
            </Typography>
            
            <Typography variant="h6" className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed">
              C'est cette expérience du voyage et du monde connecté qui nous a inspiré à créer SimWeGo : une solution simple, pensée par des voyageurs, pour tous ceux qui veulent rester connectés partout, sans contraintes.
            </Typography>
          </div>
          
          <div className="flex justify-center lg:justify-end">
            <BackgroundGradient className="rounded-[22px] max-w-md">
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