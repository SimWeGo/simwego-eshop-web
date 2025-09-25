import { Button, Typography } from "@mui/material";
import Container from "../../../components/Container";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import RoamingImage from "../../../assets/images/partnership/roaming/simwe.png";
import { MapPin, Zap } from "lucide-react";

const RoamingSection = () => {
  return (
    <div className="w-full bg-white py-20 rounded-3xl shadow-lg">
      <Container>
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-shrink-0 lg:w-1/2 flex justify-center">
            <BackgroundGradient className="rounded-[22px] max-w-md">
              <img 
                src={RoamingImage}
                alt="SimWeGo Pro"
                className="w-full rounded-2xl object-contain"
              />
            </BackgroundGradient>
          </div>
          
          <div className="flex-1 space-y-6">
            <div className="text-center space-y-6">
              <Typography variant="h4" component="h2" className="font-bold text-title leading-tight mb-4">
                Roaming hors de prix,<br/>
                expériences utilisateurs frustrantes...<br/>
                <span className="text-primary">Vos clients méritent mieux !</span>
              </Typography>
              
              <TextGenerateEffect
                words="Avec SimWeGo, lancez votre propre offre eSIM"
                className="text-2xl md:text-3xl font-bold text-secondary leading-tight mb-6"
                duration={0.5}
                filter={false}
              />
              
              <Typography variant="h6" className="text-gray-600 leading-relaxed text-lg max-w-2xl mx-auto">
                Offrez à vos clients la possibilité d'acheter et d'activer des forfaits data directement via votre application ou site internet.
                <br/><br/>
                Nous vous fournissons la technologie, le webstore, la connectivité et le support.
              </Typography>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 items-start">
              <Button
                variant="contained"
                size="large"
                className="action-button"
                sx={{
                  textTransform: 'none',
                  fontWeight: 600,
                  px: 6,
                  py: 2.5,
                  fontSize: '1.2rem',
                  borderRadius: 3,
                  boxShadow: '0 4px 20px rgba(46, 55, 134, 0.3)'
                }}
              >
                Démarrer maintenant
              </Button>
              

            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default RoamingSection;