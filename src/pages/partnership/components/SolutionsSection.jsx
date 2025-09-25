import { Button, Typography } from "@mui/material";
import Container from "../../../components/Container";
import { 
  Check, 
  Code, 
  Users, 
  Palette, 
  Zap
} from "lucide-react";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import ImageModal from "../../../components/modals/ImageModal";
// Import images for different solutions and languages
import affiliationImageAr from "../../../assets/images/partnership/partnership/affiliation/affiliation-ar.png";
import affiliationImageEn from "../../../assets/images/partnership/partnership/affiliation/affiliation-en.png";
import affiliationImageEs from "../../../assets/images/partnership/partnership/affiliation/affiliation-es.png";
import affiliationImageFr from "../../../assets/images/partnership/partnership/affiliation/affiliation-fr.png";

import apiImageAr from "../../../assets/images/partnership/partnership/api/api-ar.png";
import apiImageEn from "../../../assets/images/partnership/partnership/api/api-en.png";
import apiImageEs from "../../../assets/images/partnership/partnership/api/api-es.png";
import apiImageFr from "../../../assets/images/partnership/partnership/api/api-fr.png";

import whitelabelImageAr from "../../../assets/images/partnership/partnership/whitelabel/whitelabel-ar.png";
import whitelabelImageEn from "../../../assets/images/partnership/partnership/whitelabel/whitelabel-en.png";
import whitelabelImageEs from "../../../assets/images/partnership/partnership/whitelabel/whitelabel-es.png";
import whitelabelImageFr from "../../../assets/images/partnership/partnership/whitelabel/whitelabel-fr.png";

const SolutionsSection = () => {
  const { t, i18n } = useTranslation();
  const [openModal, setOpenModal] = useState(false);
  const [selectedSolution, setSelectedSolution] = useState(null);

  // Function to get the correct image based on solution type and language
  const getImageForSolution = (solutionType) => {
    const currentLang = i18n.language;
    
    const imageMap = {
      'api': {
        'ar': apiImageAr,
        'en': apiImageEn,
        'es': apiImageEs,
        'fr': apiImageFr
      },
      'whitelabel': {
        'ar': whitelabelImageAr,
        'en': whitelabelImageEn,
        'es': whitelabelImageEs,
        'fr': whitelabelImageFr
      },
      'affiliate': {
        'ar': affiliationImageAr,
        'en': affiliationImageEn,
        'es': affiliationImageEs,
        'fr': affiliationImageFr
      }
    };
    
    return imageMap[solutionType][currentLang] || imageMap[solutionType]['en'];
  };

  const handleOpenModal = (solution) => {
    setSelectedSolution(solution);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setSelectedSolution(null);
  };

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
      buttonText: "En savoir plus",
      highlight: null,
      type: 'api'
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
      buttonText: "En savoir plus",
      highlight: t("partnership.solutions.whiteLabel.popular"),
      type: 'whitelabel'
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
      buttonText: "En savoir plus",
      highlight: null,
      type: 'affiliate'
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
                onClick={() => handleOpenModal(solution)}
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
      
      <ImageModal
        open={openModal}
        onClose={handleCloseModal}
        imageSrc={selectedSolution ? getImageForSolution(selectedSolution.type) : ''}
        title={selectedSolution?.title || ""}
      />
    </div>
  );
};

export default SolutionsSection;