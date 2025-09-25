import { Button, Typography } from "@mui/material";
import Container from "../../../components/Container";
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
          
          <div className="flex-1 space-y-5">
            <div>
              <Typography variant="h4" component="h2" className="font-bold text-title leading-tight mb-2">
                Roaming hors de prix,<br/>
                expériences utilisateurs frustrantes...<br/>
                <span className="text-primary">Vos clients méritent mieux !</span>
              </Typography>

            </div>
            
            <Typography variant="h6" className="text-gray-600 leading-relaxed">
              Offrez à vos clients la possibilité d'acheter et d'activer des forfaits data directement via votre application ou site internet.
              <br/>
              Nous vous fournissons la technologie, le webstore, la connectivité et le support.
            </Typography>

            <div className="space-y-6">
              <Button
                variant="contained"
                size="large"
                className="action-button"
                onClick={() => document.getElementById('solutions')?.scrollIntoView({ behavior: 'smooth' })}
                sx={{
                  textTransform: 'none',
                  fontWeight: 600,
                  px: 4,
                  py: 2,
                  fontSize: '1.1rem',
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
              
              <div className="flex gap-8 justify-start">
                <div className="text-left">
                  <div className="flex items-center gap-2 mb-1">
                    <MapPin className="w-6 h-6 text-primary" />
                    <Typography variant="h5" className="font-bold text-primary">+220 destinations</Typography>
                  </div>
                  <Typography variant="body2" className="text-gray-600">Connectivité mondiale</Typography>
                </div>
                <div className="text-left">
                  <div className="flex items-center gap-2 mb-1">
                    <Zap className="w-6 h-6 text-secondary" />
                    <Typography variant="h5" className="font-bold text-secondary">10 secondes</Typography>
                  </div>
                  <Typography variant="body2" className="text-gray-600">Activation eSIM</Typography>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default RoamingSection;