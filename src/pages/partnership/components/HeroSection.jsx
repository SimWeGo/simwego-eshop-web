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
        <div className="py-8 md:py-12 lg:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="space-y-4 md:space-y-6 text-center lg:text-left">
              <div className="relative">
                <TextGenerateEffect
                  words="Boostez l'expérience de vos clients avec l'eSIM"
                  className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight mb-4"
                  duration={1}
                />
              </div>
              
              <Typography 
                variant="h5" 
                component="p" 
                className="text-white/90 text-base sm:text-lg md:text-xl leading-relaxed px-4 lg:px-0"
              >
                Proposez à vos voyageurs une connexion mobile{" "}
                <span className="font-semibold text-white">immédiate</span> et{" "}
                <span className="font-semibold text-white">sans contraintes</span> dans{" "}
                <span className="font-semibold text-white">+220 destinations</span>.
              </Typography>
              
              <div className="pt-2 md:pt-4">
                <Button
                  variant="contained"
                  size="large"
                  className="action-button"
                  onClick={() => document.getElementById('solutions')?.scrollIntoView({ behavior: 'smooth' })}
                  sx={{ 
                    fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" },
                    textTransform: "none",
                    px: { xs: 3, md: 4 },
                    py: { xs: 1.5, md: 2 },
                    borderRadius: 3,
                    '&:hover': {
                      transform: 'translateY(-2px)',
                      boxShadow: '0 6px 20px rgba(46, 55, 134, 0.4)',
                      transition: 'all 0.3s ease'
                    },
                    transition: 'all 0.3s ease'
                  }}
                >
                  Découvrir nos solutions
                </Button>
              </div>
            </div>
            
            <div className="hidden lg:flex justify-center lg:justify-end mt-6 lg:mt-0">
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