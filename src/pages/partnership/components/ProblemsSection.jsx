import Container from "../../../components/Container";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import { Shield, DollarSign, AlertCircle } from "lucide-react";

//mettre #F17901 au lieu du rouge
const ProblemsSection = () => {
  const problems = [
    {
      title: "Peu fiable",
      description: "Wi-Fi public : pratique pour toi, parfait pour les hackers.",
      icon: <Shield className="w-12 h-12 text-[#F17901] mb-4" />,
      link: "#"
    },
    {
      title: "Trop coûteuses", 
      description: "Poster un selfie à 60 € ? C'est le prix de l'oubli de sa eSIM.",
      icon: <DollarSign className="w-12 h-12 text-[#F17901] mb-4" />,
      link: "#"
    },
    {
      title: "Trop complexe",
      description: "Perdre 1h pour une SIM ? L'eSIM prend 10 secondes.",
      icon: <AlertCircle className="w-12 h-12 text-[#F17901] mb-4" />,
      link: "#"
    }
  ];

  return (
    <div className="w-full py-8 md:py-10">
      {/* Section titre pleine largeur */}
      <div className="w-full text-center mb-6 md:mb-8 px-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-title mb-4 md:mb-6 max-w-none mx-auto leading-tight">
          Aujourd'hui, les voyageurs veulent être{" "}
          <span className="text-primary font-extrabold">connectés</span>
          <br />
          dès leur arrivée — mais les{" "}
          <span className="text-primary font-extrabold">solutions déçoivent.</span>
        </h2>
      </div>

      {/* Section cartes avec Container */}
      <Container>
        <HoverEffect items={problems} className="grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6" />
      </Container>
    </div>
  );
};

export default ProblemsSection;