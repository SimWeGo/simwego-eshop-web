import React from "react";
import { Button, Typography } from "@mui/material";
import Container from "../../../components/Container";
import RoamingImage from "../../../assets/images/partnership/roaming/simwe.png";
import vectorSvg from "../../../assets/images/partnership/vector.svg";

const RoamingSection = () => {
  return (
    <div className="w-full bg-[#7DD3F6]">
      <Container>
        <div className="p-12 md:p-20">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="flex-shrink-0">
              <img 
                src={RoamingImage}
                alt="SimWeGo Pro"
                className="w-[447px] h-[400px] rounded-2xl object-cover"
              />
            </div>
            
            <div className="flex-1 space-y-6">
              <Typography variant="h2" component="h2" className="font-semibold text-primary leading-tight">
                Roaming hors de prix,<br/>
                expériences utilisateurs frustrantes...<br/>
                <span className="font-bold">Vos clients méritent mieux !</span>
              </Typography>
              
              <div className="space-y-4">
                <div className="relative w-full h-6">
                  <img 
                    src={vectorSvg} 
                    alt="underline"
                    className="w-full h-6 object-cover transform rotate-2"
                  />
                </div>
              </div>
              
              <Button
                variant="contained"
                size="large"
                sx={{
                  backgroundColor: '#FF6912',
                  color: 'white',
                  fontSize: '1.5rem',
                  fontWeight: '600',
                  padding: '12px 24px',
                  borderRadius: '8px',
                  '&:hover': {
                    backgroundColor: '#E55A0F'
                  }
                }}
              >
                Découvrez SimWeGo Pro
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default RoamingSection;