import Container from "../../../components/Container";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { FloatingIcons } from "@/components/ui/floating-icons";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import { useTranslation } from "react-i18next";
import userImage from "../../../assets/images/partnership/solution/lamp.png";
import integrationImage from "../../../assets/images/partnership/solution/puzzle.png";
import positioningImage from "../../../assets/images/partnership/solution/rocket.png";
import revenueImage from "../../../assets/images/partnership/solution/money.png";

const BenefitsSection = () => {
  const { t } = useTranslation();
  const benefits = [
    {
      title: t("partnership.benefits.experience.title"),
      description: t("partnership.benefits.experience.description"),
      image: userImage,
      link: "#"
    },
    {
      title: t("partnership.benefits.integration.title"),
      description: t("partnership.benefits.integration.description"),
      image: integrationImage,
      link: "#"
    },
    {
      title: t("partnership.benefits.positioning.title"),
      description: t("partnership.benefits.positioning.description"),
      image: positioningImage,
      link: "#"
    },
    {
      title: t("partnership.benefits.revenue.title"),
      description: t("partnership.benefits.revenue.description"),
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
        <div className="py-10 md:py-12 lg:py-16">
          <div className="text-center mb-8 md:mb-10 px-4">
            <TextGenerateEffect
              words={t("partnership.benefits.title")}
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight mb-4 md:mb-6"
              duration={0.5}
              filter={false}
              triggerOnScroll={true}
            />
          </div>

          <HoverEffect items={benefits} className="grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6" />
        </div>
      </Container>
    </div>
  );
};

export default BenefitsSection;