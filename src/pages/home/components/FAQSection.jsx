import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Link } from "react-router-dom";
import Container from "../../../components/Container";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Mon smartphone est-il compatible ?",
      answer: "Oui, la plupart des modèles récents le sont. Vérifiez que votre smartphone supporte la technologie eSIM et qu'il soit déverrouillé opérateur.",
      link: "Voir la liste des appareils compatibles"
    },
    {
      question: "Quand l'eSIM s'active-t-elle ?",
      answer: "Votre eSIM s'active automatiquement dès votre arrivée à destination. Vous pouvez aussi l'activer manuellement depuis les paramètres de votre smartphone."
    },
    {
      question: "Puis-je recharger mon forfait ?",
      answer: "Oui, vous pouvez facilement recharger votre forfait depuis notre application ou votre espace client en ligne à tout moment."
    },
    {
      question: "Que se passe-t-il si je dépasse mon forfait ?",
      answer: "Une fois votre forfait épuisé, la connexion se coupe automatiquement. Vous pouvez alors recharger votre forfait pour continuer à naviguer."
    },
    {
      question: "Puis-je utiliser mon eSIM dans plusieurs pays ?",
      answer: "Cela dépend du forfait choisi. Nos forfaits régionaux couvrent plusieurs pays, tandis que nos forfaits locaux sont spécifiques à un pays."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 sm:py-20 md:py-24 lg:py-28 bg-gray-50">
      <Container>
        <div className="text-center mb-12 sm:mb-16 px-4">
          <TextGenerateEffect
            words="Questions fréquentes"
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black text-title mb-4 leading-tight"
            duration={0.5}
            filter={false}
            triggerOnScroll={true}
          />
          <p className="text-xl sm:text-2xl text-gray-600 max-w-3xl mx-auto">
            Toutes les réponses à vos questions sur nos eSIM
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-3 sm:space-y-4 px-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow duration-200"
            >
              <button
                className="w-full px-4 sm:px-6 py-4 sm:py-5 text-left flex justify-between items-center focus:outline-none focus:ring-2 focus:ring-primary focus:ring-inset"
                onClick={() => toggleFAQ(index)}
              >
                <span className="font-semibold text-lg sm:text-xl text-gray-900 pr-4">
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <ChevronUp className="h-4 w-4 sm:h-5 sm:w-5 text-primary flex-shrink-0" />
                ) : (
                  <ChevronDown className="h-4 w-4 sm:h-5 sm:w-5 text-gray-500 flex-shrink-0" />
                )}
              </button>
              
              {openIndex === index && (
                <div className="px-4 sm:px-6 pb-4 sm:pb-5">
                  <div className="border-t border-gray-100 pt-4">
                    <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
                      {faq.answer}
                    </p>
                    {faq.link && (
                      <button className="mt-3 text-primary hover:text-primary/80 font-medium text-sm sm:text-base transition-colors">
                        {faq.link} →
                      </button>
                    )}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-8 sm:mt-12 px-4">
          <p className="text-gray-600 mb-4 text-base sm:text-lg">
            Une autre question ?
          </p>
          <Link 
            to="/contact-us" 
            className="text-primary hover:text-primary/80 font-semibold transition-colors text-base sm:text-lg"
          >
            Contactez notre support →
          </Link>
        </div>
      </Container>
    </section>
  );
};

export default FAQSection;