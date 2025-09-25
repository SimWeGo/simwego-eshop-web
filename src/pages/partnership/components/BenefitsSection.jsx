import Container from "../../../components/Container";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { FloatingIcons } from "@/components/ui/floating-icons";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import userImage from "../../../assets/images/partnership/solution/lamp.png";
import integrationImage from "../../../assets/images/partnership/solution/puzzle.png";
import positioningImage from "../../../assets/images/partnership/solution/rocket.png";
import revenueImage from "../../../assets/images/partnership/solution/money.png";

const BenefitsSection = () => {
  const benefits = [
    {
      title: "Améliorez l'expérience de vos clients",
      description: "Améliorez l'expérience de vos clients, dès leur arrivée à destination.",
      image: userImage,
      link: "#"
    },
    {
      title: "Une intégration simple et rapide",
      description: "Une intégration simple et rapide, sans contrainte technique.",
      image: integrationImage,
      link: "#"
    },
    {
      title: "Renforcez votre positionnement",
      description: "Renforcez votre positionnement avec un service digital innovant.",
      image: positioningImage,
      link: "#"
    },
    {
      title: "Un nouveau levier de revenus",
      description: "Un nouveau levier de revenus, sans gestion opérationnelle.",
      image: revenueImage,
      link: "#"
    }
  ];

  return (
    <div className="w-full bg-gradient-to-br from-secondary to-primary relative overflow-hidden rounded-3xl shadow-2xl">
      {/* Background Beams */}
      <BackgroundBeams />
      
      {/* Icônes flottantes */}
      <FloatingIcons />
      
      <Container>
        <div className="py-12 md:py-16">
          <div className="text-center mb-10">
            <TextGenerateEffect
              words="Une solution pensée pour vous... et pour vos clients"
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6"
              duration={0.5}
              filter={false}
            />
          </div>

          <HoverEffect items={benefits} className="grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" />
        </div>
      </Container>
    </div>
  );
};

export default BenefitsSection;