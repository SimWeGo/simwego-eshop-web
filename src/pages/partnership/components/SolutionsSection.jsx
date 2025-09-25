import { Button, Typography } from "@mui/material";
import Container from "../../../components/Container";
import { 
  Check, 
  Code, 
  Users, 
  Palette, 
  Zap,
  ExternalLink
} from "lucide-react";
import { useTranslation } from "react-i18next";

const SolutionsSection = () => {
  const { t } = useTranslation();

  const solutions = [
    {
      title: t("partnership.solutions.api.title"),
      description: t("partnership.solutions.api.description"),
      icon: <Code className="w-8 h-8 text-primary" />,
      popular: false,
      features: [
        t("partnership.solutions.api.features.restApi"),
        t("partnership.solutions.api.features.sdk"),
        t("partnership.solutions.api.features.documentation"),
        t("partnership.solutions.api.features.support"),
        t("partnership.solutions.api.features.webhooks")
      ],
      buttonText: t("partnership.solutions.api.cta"),
      highlight: null
    },
    {
      title: t("partnership.solutions.whiteLabel.title"),
      description: t("partnership.solutions.whiteLabel.description"),
      icon: <Palette className="w-8 h-8 text-primary" />,
      popular: true,
      features: [
        t("partnership.solutions.whiteLabel.features.webstore"),
        t("partnership.solutions.whiteLabel.features.apps"),
        t("partnership.solutions.whiteLabel.features.integration"),
        t("partnership.solutions.whiteLabel.features.support"),
        t("partnership.solutions.whiteLabel.features.updates")
      ],
      buttonText: t("partnership.solutions.whiteLabel.cta"),
      highlight: t("partnership.solutions.whiteLabel.popular")
    },
    {
      title: t("partnership.solutions.affiliate.title"),
      description: t("partnership.solutions.affiliate.description"),
      icon: <Users className="w-8 h-8 text-primary" />,
      popular: false,
      features: [
        t("partnership.solutions.affiliate.features.commissions"),
        t("partnership.solutions.affiliate.features.links"),
        t("partnership.solutions.affiliate.features.dashboard"),
        t("partnership.solutions.affiliate.features.marketing"),
        t("partnership.solutions.affiliate.features.payments")
      ],
      buttonText: t("partnership.solutions.affiliate.cta"),
      highlight: null
    }
  ];

  return (
    <div id="solutions" className="w-full py-16 md:py-20">
      <Container>
        <div className="text-center mb-12 md:mb-16 px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-title mb-4 md:mb-6">
            {t("partnership.solutions.title")}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-3xl shadow-lg p-6 md:p-8 hover:shadow-xl transition-all duration-300 ${
                solution.popular ? "border-2 border-primary md:scale-105" : "border border-gray-200"
              }`}
            >
              {solution.highlight && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-primary text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2">
                    <Zap className="w-4 h-4" />
                    {solution.highlight}
                  </div>
                </div>
              )}

              <div className="text-center mb-6">
                <div className="flex justify-center mb-4">
                  <div className="p-4 bg-gray-50 rounded-2xl">
                    {solution.icon}
                  </div>
                </div>
                <Typography variant="h5" component="h3" className="text-lg md:text-xl font-bold text-title mb-3">
                  {solution.title}
                </Typography>
                <Typography variant="body1" className="text-sm md:text-base text-gray-600 leading-relaxed">
                  {solution.description}
                </Typography>
              </div>

              <div className="space-y-4 mb-8">
                {solution.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center gap-3">
                    <div className="flex-shrink-0">
                      <Check className="w-5 h-5 text-secondary" />
                    </div>
                    <Typography variant="body2" className="text-xs md:text-sm text-gray-700">
                      {feature}
                    </Typography>
                  </div>
                ))}
              </div>

              <Button
                variant={solution.popular ? "contained" : "outlined"}
                size="large"
                fullWidth
                className="font-semibold"
                sx={{
                  textTransform: 'none',
                  py: 1.5,
                  borderRadius: 3
                }}
                endIcon={<ExternalLink className="w-4 h-4" />}
              >
                {solution.buttonText}
              </Button>
            </div>
          ))}
        </div>


        <div className="text-center mt-12 md:mt-16 px-4">
          <Typography variant="h6" className="text-gray-600 mb-2 text-sm md:text-base lg:text-lg">
            {t("partnership.solutions.conclusion")}
          </Typography>
        </div>
      </Container>
    </div>
  );
};

export default SolutionsSection;