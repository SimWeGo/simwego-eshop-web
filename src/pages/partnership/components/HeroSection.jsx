import { Button, Typography } from "@mui/material";
import Container from "../../../components/Container";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { FloatingIcons } from "@/components/ui/floating-icons";
import heroImage from "../../../assets/images/partnership/hero/simwe.png";

const HeroSection = () => {
  return (
    <div className="w-full bg-gradient-to-br from-secondary to-primary relative overflow-hidden rounded-3xl shadow-2xl">
      {/* Background Beams */}
      <BackgroundBeams />
      
      {/* Icônes flottantes */}
      <FloatingIcons />
      
      <Container>
        <div className="py-16 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="relative">
                <TextGenerateEffect
                  words="Boostez l'expérience de vos clients avec l'eSIM"
                  className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4"
                  duration={1}
                />
              </div>
              
              <Typography 
                variant="h6" 
                component="p" 
                className="text-white/90 text-lg leading-relaxed"
              >
                Proposez à vos voyageurs une connexion mobile{" "}
                <span className="font-semibold text-white">immédiate</span> et{" "}
                <span className="font-semibold text-white">sans contraintes</span> dans{" "}
                <span className="font-semibold text-white">+220 destinations</span>.
              </Typography>
              
              <div className="pt-4">
                <Button
                  variant="contained"
                  size="large"
                  className="action-button"
                  sx={{ 
                    fontSize: "1.1rem",
                    textTransform: "none"
                  }}
                >
                  Découvrir nos solutions
                </Button>
              </div>
            </div>
            
            <div className="flex justify-center lg:justify-end">
              <div className="animate-fadeInRight">
                <img
                  src={heroImage}
                  alt="Illustration eSIM"
                  className="max-w-full h-auto max-h-[400px] object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default HeroSection;