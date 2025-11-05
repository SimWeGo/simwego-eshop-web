import Container from "../../../components/Container";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { FloatingIcons } from "@/components/ui/floating-icons";
import { ProcessSteps } from "@/components/ui/process-steps";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

// Import des images
import checkimage from "../../../assets/images/landing/benefits/check.png";
import lightningImage from "../../../assets/images/landing/benefits/lightning.png";
import earthImage from "../../../assets/images/landing/benefits/earth.png";
import mascotteImage from "../../../assets/images/landing/steps/simwe.png";

const HowItWorksSection = () => {
  const steps = [
    {
      number: "1",
      title: "Choisissez votre destination et forfait",
      description: "Parcourez nos forfaits adaptés à plus de 220 destinations dans le monde.",
      image: earthImage,
    },
    {
      number: "2", 
      title: "Achetez votre eSIM et installez-la en 1 clic",
      description: "Processus d'achat ultra-simple et sécurisé. QR code reçu instantanément.",
      image: lightningImage,
    },
    {
      number: "3",
      title: "Activez à l'arrivée et profitez d'Internet partout",
      description: "Votre eSIM s'active automatiquement dès votre arrivée à destination.",
      image: checkimage,
    },
  ];

  return (
    <div className="w-full bg-gradient-to-br from-secondary to-primary relative overflow-hidden rounded-3xl shadow-2xl">
      {/* Background Beams */}
      <BackgroundBeams />
      
      {/* Icônes flottantes */}
      <FloatingIcons />
      
      <Container>
        <div className="py-12 sm:py-16 md:py-20 lg:py-24 px-4">
          {/* Header Section */}
          <div className="text-center mb-12 sm:mb-16 md:mb-20">
            <TextGenerateEffect
              words="Connectez-vous en 3 étapes simples"
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black text-white leading-tight mb-4 md:mb-6"
              duration={0.5}
              filter={false}
              triggerOnScroll={true}
            />
          </div>

          {/* Content with mascotte */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 xl:gap-20 items-start">
            {/* Left side - Process Steps */}
            <div className="lg:col-span-3 w-full">
              <ProcessSteps steps={steps} className="mb-12" />
              
              {/* CTA Section */}
              <div className="text-center lg:text-left">
                <Button
                  component={Link}
                  to="/how-it-works"
                  variant="contained"
                  className="action-button"
                  sx={{ 
                    width: "fit-content", 
                    padding: { xs: "12px 24px", sm: "10px 20px" },
                    fontSize: { xs: "14px", sm: "16px" }
                  }}
                >
                  Comment ça marche ?
                </Button>
              </div>
            </div>

            {/* Right side - Mascotte */}
            <div className="hidden lg:flex lg:col-span-2 justify-center lg:justify-end order-1 lg:order-2">
              <div className="relative w-full max-w-lg xl:max-w-2xl">
                <img
                  src={mascotteImage}
                  alt="Mascotte SimWeGo - Guide eSIM"
                  className="w-full object-contain h-[600px]"
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default HowItWorksSection;