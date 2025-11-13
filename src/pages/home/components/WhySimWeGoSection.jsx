import Container from "../../../components/Container";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { HoverEffect } from "@/components/ui/card-hover-effect";

// Import des images
import simImage from "../../../assets/images/landing/benefits/sim.png";
import lightningImage from "../../../assets/images/landing/benefits/lightning.png";
import earthImage from "../../../assets/images/landing/benefits/earth.png";
import walletImage from "../../../assets/images/landing/benefits/wallet.png";
import checkImage from "../../../assets/images/landing/benefits/check.png";

const WhySimWeGoSection = () => {
  const benefits = [
    {
      title: "100 % digitale",
      description: "Plus besoin de SIM physique.",
      image: simImage,
      link: "#"
    },
    {
      title: "Activation immédiate", 
      description: "Connecté en quelques minutes.",
      image: lightningImage,
      link: "#"
    },
    {
      title: "Couverture mondiale",
      description: "220+ destinations, réseau fiable.",
      image: earthImage,
      link: "#"
    },
    {
      title: "Prix transparents",
      description: "Pas de frais cachés, recharge facile.",
      image: walletImage,
      link: "#"
    },
    {
      title: "Compatibilité large",
      description: "Fonctionne avec la plupart des smartphones récents.",
      image: checkImage,
      link: "#"
    }
  ];

  return (
    <div className="w-full py-12 sm:py-16 md:py-20 lg:py-24 bg-gray-50">
      <Container>
        <div className="text-center mb-8 sm:mb-12 md:mb-16 px-4">
          <TextGenerateEffect
            words="Pourquoi SimWeGo ?"
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black text-title mb-4 leading-tight"
            duration={0.5}
            filter={false}
            triggerOnScroll={true}
          />
        </div>

        <div className="max-w-7xl mx-auto px-4">
          <HoverEffect items={benefits} className="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 sm:gap-8 py-6 sm:py-8 justify-items-center" />
        </div>
      </Container>
    </div>
  );
};

export default WhySimWeGoSection;