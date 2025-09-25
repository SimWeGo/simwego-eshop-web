import { Typography } from "@mui/material";
import Container from "../../../components/Container";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import { Wifi, CreditCard, Clock } from "lucide-react";

const ProblemsSection = () => {
  const problems = [
    {
      title: "Peu fiable",
      description: "Wi-Fi public : pratique pour toi, parfait pour les hackers.",
      icon: <Wifi className="w-12 h-12 text-secondary mb-4" />,
      link: "#"
    },
    {
      title: "Trop coûteuses", 
      description: "Poster un selfie à 60 € ? C'est le prix de l'oubli de sa eSIM.",
      icon: <CreditCard className="w-12 h-12 text-secondary mb-4" />,
      link: "#"
    },
    {
      title: "Trop complexe",
      description: "Perdre 1h pour une SIM ? L'eSIM prend 10 secondes.",
      icon: <Clock className="w-12 h-12 text-secondary mb-4" />,
      link: "#"
    }
  ];

  return (
    <div className="w-full py-20">
      {/* Section titre pleine largeur */}
      <div className="w-full text-center mb-16 px-4">
        <Typography 
          variant="h2" 
          component="h2" 
          className="font-bold text-title mb-6 animate-fadeInUp max-w-none mx-auto"
        >
          Aujourd'hui, les voyageurs veulent être{" "}
          <span className="text-primary font-bold">connectés</span>
          <br />
          dès leur arrivée — mais les{" "}
          <span className="text-primary font-bold">solutions déçoivent.</span>
        </Typography>
      </div>

      {/* Section cartes avec Container */}
      <Container>
        <HoverEffect items={problems} className="grid-cols-1 md:grid-cols-3 gap-6" />
      </Container>
    </div>
  );
};

export default ProblemsSection;