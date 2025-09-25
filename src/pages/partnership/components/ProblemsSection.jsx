import Container from "../../../components/Container";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import { Shield, DollarSign, AlertCircle } from "lucide-react";
import { useTranslation } from "react-i18next";

const ProblemsSection = () => {
  const { t } = useTranslation();
  
  const problems = [
    {
      title: t("partnership.problems.unreliable.title"),
      description: t("partnership.problems.unreliable.description"),
      icon: <Shield className="w-12 h-12 text-[#F17901] mb-4" />,
      link: "#"
    },
    {
      title: t("partnership.problems.expensive.title"),
      description: t("partnership.problems.expensive.description"),
      icon: <DollarSign className="w-12 h-12 text-[#F17901] mb-4" />,
      link: "#"
    },
    {
      title: t("partnership.problems.complex.title"),
      description: t("partnership.problems.complex.description"),
      icon: <AlertCircle className="w-12 h-12 text-[#F17901] mb-4" />,
      link: "#"
    }
  ];

  return (
    <div className="w-full py-8 md:py-10">
      {/* Section titre pleine largeur */}
      <div className="w-full text-center mb-6 md:mb-8 px-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-title mb-4 md:mb-6 max-w-none mx-auto leading-tight">
          {t("partnership.problems.title")}
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