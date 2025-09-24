import React from "react";
import { Button, Typography } from "@mui/material";
import Container from "../../../components/Container";
import heroImage from "../../../assets/images/partnership/hero/simwe.png";
import vectorSvg from "../../../assets/images/partnership/vector.svg";

const HeroSection = () => {
  return (
    <div className="w-full bg-[#7dd3f6]">
      <Container>
        <div className="p-12 md:p-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="relative">
                <Typography variant="h2" component="h1" className="font-bold text-primary">
                  Boostez l'expérience<br />
                  de vos clients avec{" "}
                  <span className="text-primary font-bold relative">
                    l'eSIM
                    <img 
                      src={vectorSvg} 
                      alt="underline"
                      className="absolute -bottom-2 left-0 w-full h-2"
                    />
                  </span>
                </Typography>
              </div>
              
              <Typography variant="h5" component="p" className="text-primary leading-relaxed">
                Proposez à vos voyageurs une connexion mobile{" "}
                <span className="font-bold">immédiate</span> et{" "}
                <span className="font-bold">sans contraintes</span> dans{" "}
                <span className="font-bold">+220 destinations</span>.
              </Typography>
              
              <Button
                variant="contained"
                size="large"
                className="action-button"
                sx={{ padding: "12px 32px", fontSize: "1.1rem" }}
              >
                Découvrir nos solutions
              </Button>
            </div>
            
            <div className="flex justify-center lg:justify-end">
              <img
                src={heroImage}
                alt="Illustration eSIM"
                className="max-w-full h-auto max-h-[500px] object-contain"
              />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default HeroSection;