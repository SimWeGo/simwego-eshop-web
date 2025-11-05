import { Typography } from "@mui/material";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import Container from "../../../components/Container";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { FloatingIcons } from "@/components/ui/floating-icons";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import proImage from "../../../assets/images/landing/pro/simwe.png";

const ProfessionalSection = () => {
  return (
    <div className="w-full bg-gradient-to-br from-secondary to-primary relative overflow-hidden rounded-3xl shadow-2xl">
      {/* Background Beams */}
      <BackgroundBeams />
      
      {/* Icônes flottantes */}
      <FloatingIcons />
      
      <Container>
        <div className="py-12 sm:py-16 md:py-20 lg:py-24 px-4">
          <div className="grid grid-cols-1 lg:grid-cols-7 gap-8 lg:gap-12 xl:gap-16 items-center">
            {/* Image côté gauche */}
            <div className="hidden lg:flex justify-start lg:col-span-2 order-2 lg:order-1">
              <div className="relative w-full max-w-md xl:max-w-lg">
                <img
                  src={proImage}
                  alt="SimWeGo Pro - Solution professionnelle"
                  className="w-full object-contain h-80 lg:h-96 xl:h-[400px]"
                />
              </div>
            </div>
            
            {/* Contenu côté droit */}
            <div className="lg:col-span-5 space-y-6 text-center lg:text-left order-1 lg:order-2">
              <TextGenerateEffect
                words="Une solution pour les professionnels du voyage"
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-6xl font-black text-white leading-tight"
                duration={0.5}
                filter={false}
                triggerOnScroll={true}
              />
              
              <div className="text-xl sm:text-2xl lg:text-3xl text-white/90 leading-relaxed mb-4 font-semibold">
                Vous êtes une agence, un transporteur ou un acteur du tourisme ?
              </div>
              
              <div className="text-lg sm:text-xl lg:text-2xl text-white/80 leading-relaxed mb-8">
                Proposez des eSIM à vos clients avec notre solution clé en main, personnalisable à vos couleurs, 
                et sans logistique complexe.
              </div>
              
              <div className="pt-4">
                <Button
                  component={Link}
                  to="/partnership"
                  variant="contained"
                  className="action-button"
                  sx={{ 
                    width: "fit-content", 
                    padding: { xs: "14px 28px", sm: "16px 32px", lg: "18px 36px" },
                    fontSize: { xs: "16px", sm: "18px", lg: "20px" },
                    textTransform: "none"
                  }}
                >
                  Découvrez SimWeGo Pro
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ProfessionalSection;