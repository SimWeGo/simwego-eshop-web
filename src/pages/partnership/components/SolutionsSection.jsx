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

const solutions = [
  {
    title: "Intégration API",
    description: "Intégrer la vente de forfaits eSIM directement dans votre application mobile existante",
    icon: <Code className="w-8 h-8 text-primary" />,
    popular: false,
    features: [
      "API REST complète",
      "SDK iOS/Android",
      "Documentation technique",
      "Support développeur",
      "Webhooks en temps réel"
    ],
    buttonText: "Documentation",
    highlight: null
  },
  {
    title: "Solution en marque blanche",
    description: "Webstore et/ou app iOS/Android fournis par SimWeGo, à vos couleurs, intégrables à votre site",
    icon: <Palette className="w-8 h-8 text-primary" />,
    popular: true,
    features: [
      "Webstore complet à vos couleurs",
      "Applications iOS/Android personnalisées",
      "Intégration sur votre site existant",
      "Support technique inclus",
      "Mise à jour automatique"
    ],
    buttonText: "Découvrir",
    highlight: "Populaire"
  },
  {
    title: "Affiliation",
    description: "Gagnez des commissions en recommandant SimWeGo à vos clients via notre programme partenaire",
    icon: <Users className="w-8 h-8 text-primary" />,
    popular: false,
    features: [
      "Commissions attractives",
      "Liens de parrainage personnalisés",
      "Dashboard de suivi",
      "Support marketing",
      "Paiement mensuel"
    ],
    buttonText: "Rejoindre",
    highlight: null
  }
];

const SolutionsSection = () => {
  return (
    <div id="solutions" className="w-full py-16 md:py-20">
      <Container>
        <div className="text-center mb-12 md:mb-16 px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-title mb-4 md:mb-6">
            Nos solutions <span className="text-primary">partenaires</span>
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
            Choisissez la solution qui correspond le mieux à vos besoins et commencez à offrir à vos clients une expérience de connectivité inégalée.
          </Typography>
        </div>
      </Container>
    </div>
  );
};

export default SolutionsSection;