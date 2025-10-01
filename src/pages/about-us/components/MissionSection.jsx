import { Typography } from "@mui/material";
import Container from "../../../components/Container";
import { useTranslation } from "react-i18next";
import missionImage from "../../../assets/images/about-us/mission/simwe.png";

const MissionSection = () => {
  const { t } = useTranslation();
  
  return (
    <div id="mission" className="w-full py-8 md:py-12">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-center">
          <div className="flex justify-center lg:justify-start">
            <img
              src={missionImage}
              alt="Mission SimWeGo - Connectivité universelle"
              className="w-full max-w-sm rounded-2xl object-contain max-h-[350px]"
            />
          </div>
          
          <div className="lg:col-span-2 space-y-6 text-center lg:text-left">
            <div>
              <Typography variant="h4" component="h2" className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-title leading-tight mb-2" sx={{ fontWeight: 900 }}>
                {t("aboutUs.mission.title")}
              </Typography>
            </div>
            
            <Typography variant="h6" className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed px-4 lg:px-0">
              {t("aboutUs.mission.description")}
            </Typography>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default MissionSection;