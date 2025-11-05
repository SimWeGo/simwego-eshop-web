import { useTranslation } from "react-i18next";

export const useArticles = () => {
  const { t } = useTranslation("blog");

  return [
    {
      id: "travel-agencies-esim",
      title: t("articles.travelAgencies.title"),
      excerpt: t("articles.travelAgencies.excerpt"),
      image: "/blog/simwego/simplify.jpeg",
      category: "guides",
      readTime: "8",
      date: new Date("2025-01-15"),
      content: () => {
        const { t } = useTranslation("blog");
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold mt-8 mb-4">{t("articles.travelAgencies.section1Title")}</h2>
            <p>{t("articles.travelAgencies.section1Content")}</p>

            <h2 className="text-2xl font-bold mt-8 mb-4">{t("articles.travelAgencies.section2Title")}</h2>
            <p>{t("articles.travelAgencies.section2Intro")}</p>
            <p className="mt-4">{t("articles.travelAgencies.section2Benefits")}</p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>{t("articles.travelAgencies.benefit1")}</li>
              <li>{t("articles.travelAgencies.benefit2")}</li>
              <li>{t("articles.travelAgencies.benefit3")}</li>
              <li>{t("articles.travelAgencies.benefit4")}</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4">{t("articles.travelAgencies.section3Title")}</h2>
            <p>{t("articles.travelAgencies.section3Content")}</p>
            <ul className="list-disc pl-6 space-y-3 mt-4">
              <li><strong>{t("articles.travelAgencies.integration1Title")}</strong> {t("articles.travelAgencies.integration1Desc")}</li>
              <li><strong>{t("articles.travelAgencies.integration2Title")}</strong> {t("articles.travelAgencies.integration2Desc")}</li>
              <li><strong>{t("articles.travelAgencies.integration3Title")}</strong> {t("articles.travelAgencies.integration3Desc")}</li>
              <li><strong>{t("articles.travelAgencies.integration4Title")}</strong> {t("articles.travelAgencies.integration4Desc")}</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4">{t("articles.travelAgencies.section4Title")}</h2>
            <p>{t("articles.travelAgencies.section4Content")}</p>

            <h2 className="text-2xl font-bold mt-8 mb-4">{t("articles.travelAgencies.section5Title")}</h2>
            <p>{t("articles.travelAgencies.section5Content")}</p>

            <div className="bg-primary/10 border-l-4 border-primary p-6 my-8 rounded-r-lg">
              <p className="font-semibold text-primary text-lg mb-2">{t("articles.travelAgencies.conclusionTitle")}</p>
              <p className="text-gray-700">{t("articles.travelAgencies.conclusionContent")}</p>
            </div>
          </div>
        );
      }
    },
    {
      id: "airlines-esim-passenger-experience",
      title: t("articles.airlines.title"),
      excerpt: t("articles.airlines.excerpt"),
      image: "/blog/simwego/airlines.jpeg",
      category: "guides",
      readTime: "7",
      date: new Date("2025-01-20"),
      content: () => {
        const { t } = useTranslation("blog");
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold mt-8 mb-4">{t("articles.airlines.section1Title")}</h2>
            <p>{t("articles.airlines.section1Content")}</p>

            <h2 className="text-2xl font-bold mt-8 mb-4">{t("articles.airlines.section2Title")}</h2>
            <p>{t("articles.airlines.section2Content")}</p>

            <h2 className="text-2xl font-bold mt-8 mb-4">{t("articles.airlines.section3Title")}</h2>
            <p>{t("articles.airlines.section3Content")}</p>

            <h2 className="text-2xl font-bold mt-8 mb-4">{t("articles.airlines.section4Title")}</h2>
            <p>{t("articles.airlines.section4Content")}</p>
            <ul className="list-disc pl-6 space-y-3 mt-4">
              <li><strong>{t("articles.airlines.integration1Title")}</strong> {t("articles.airlines.integration1Desc")}</li>
              <li><strong>{t("articles.airlines.integration2Title")}</strong> {t("articles.airlines.integration2Desc")}</li>
              <li><strong>{t("articles.airlines.integration3Title")}</strong> {t("articles.airlines.integration3Desc")}</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4">{t("articles.airlines.section5Title")}</h2>
            <p>{t("articles.airlines.section5Content")}</p>

            <div className="bg-primary/10 border-l-4 border-primary p-6 my-8 rounded-r-lg">
              <p className="font-semibold text-primary text-lg mb-2">{t("articles.airlines.conclusionTitle")}</p>
              <p className="text-gray-700">{t("articles.airlines.conclusionContent")}</p>
            </div>
          </div>
        );
      }
    },
    {
      id: "travel-wallets-esim-integration",
      title: t("articles.wallets.title"),
      excerpt: t("articles.wallets.excerpt"),
      image: "/blog/simwego/wallets.jpeg",
      category: "guides",
      readTime: "6",
      date: new Date("2025-01-22"),
      content: () => {
        const { t } = useTranslation("blog");
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold mt-8 mb-4">{t("articles.wallets.section1Title")}</h2>
            <p>{t("articles.wallets.section1Content")}</p>

            <h2 className="text-2xl font-bold mt-8 mb-4">{t("articles.wallets.section2Title")}</h2>
            <p>{t("articles.wallets.section2Content")}</p>

            <h2 className="text-2xl font-bold mt-8 mb-4">{t("articles.wallets.section3Title")}</h2>
            <p>{t("articles.wallets.section3Content")}</p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>{t("articles.wallets.benefit1")}</li>
              <li>{t("articles.wallets.benefit2")}</li>
              <li>{t("articles.wallets.benefit3")}</li>
              <li>{t("articles.wallets.benefit4")}</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4">{t("articles.wallets.section4Title")}</h2>
            <p>{t("articles.wallets.section4Content")}</p>

            <div className="bg-primary/10 border-l-4 border-primary p-6 my-8 rounded-r-lg">
              <p className="font-semibold text-primary text-lg mb-2">{t("articles.wallets.conclusionTitle")}</p>
              <p className="text-gray-700">{t("articles.wallets.conclusionContent")}</p>
            </div>
          </div>
        );
      }
    },
    {
      id: "monetize-travel-traffic-affiliate",
      title: t("articles.affiliate.title"),
      excerpt: t("articles.affiliate.excerpt"),
      image: "/blog/simwego/affiliate.jpeg",
      category: "tips",
      readTime: "5",
      date: new Date("2025-01-25"),
      content: () => {
        const { t } = useTranslation("blog");
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold mt-8 mb-4">{t("articles.affiliate.section1Title")}</h2>
            <p>{t("articles.affiliate.section1Content")}</p>

            <h2 className="text-2xl font-bold mt-8 mb-4">{t("articles.affiliate.section2Title")}</h2>
            <p>{t("articles.affiliate.section2Content")}</p>

            <h2 className="text-2xl font-bold mt-8 mb-4">{t("articles.affiliate.section3Title")}</h2>
            <p>{t("articles.affiliate.section3Content")}</p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>{t("articles.affiliate.reason1")}</li>
              <li>{t("articles.affiliate.reason2")}</li>
              <li>{t("articles.affiliate.reason3")}</li>
              <li>{t("articles.affiliate.reason4")}</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4">{t("articles.affiliate.section4Title")}</h2>
            <p>{t("articles.affiliate.section4Content")}</p>

            <div className="bg-primary/10 border-l-4 border-primary p-6 my-8 rounded-r-lg">
              <p className="font-semibold text-primary text-lg mb-2">{t("articles.affiliate.conclusionTitle")}</p>
              <p className="text-gray-700">{t("articles.affiliate.conclusionContent")}</p>
            </div>
          </div>
        );
      }
    },
    {
      id: "why-travel-esim-2025",
      title: t("articles.travelEsim2025.title"),
      excerpt: t("articles.travelEsim2025.excerpt"),
      image: "/blog/simwego/esim-2025.jpeg",
      category: "tips",
      readTime: "6",
      date: new Date("2025-01-28"),
      content: () => {
        const { t } = useTranslation("blog");
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold mt-8 mb-4">{t("articles.travelEsim2025.section1Title")}</h2>
            <p>{t("articles.travelEsim2025.section1Content")}</p>

            <h2 className="text-2xl font-bold mt-8 mb-4">{t("articles.travelEsim2025.section2Title")}</h2>
            <p>{t("articles.travelEsim2025.section2Content")}</p>

            <h2 className="text-2xl font-bold mt-8 mb-4">{t("articles.travelEsim2025.section3Title")}</h2>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li><strong>{t("articles.travelEsim2025.benefit1Title")}</strong> {t("articles.travelEsim2025.benefit1Desc")}</li>
              <li><strong>{t("articles.travelEsim2025.benefit2Title")}</strong> {t("articles.travelEsim2025.benefit2Desc")}</li>
              <li><strong>{t("articles.travelEsim2025.benefit3Title")}</strong> {t("articles.travelEsim2025.benefit3Desc")}</li>
              <li><strong>{t("articles.travelEsim2025.benefit4Title")}</strong> {t("articles.travelEsim2025.benefit4Desc")}</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4">{t("articles.travelEsim2025.section4Title")}</h2>
            <p>{t("articles.travelEsim2025.section4Content")}</p>

            <div className="bg-primary/10 border-l-4 border-primary p-6 my-8 rounded-r-lg">
              <p className="font-semibold text-primary text-lg mb-2">{t("articles.travelEsim2025.conclusionTitle")}</p>
              <p className="text-gray-700">{t("articles.travelEsim2025.conclusionContent")}</p>
            </div>
          </div>
        );
      }
    },
    {
      id: "stay-connected-without-roaming",
      title: t("articles.noRoaming.title"),
      excerpt: t("articles.noRoaming.excerpt"),
      image: "/blog/simwego/no-roaming.jpeg",
      category: "tips",
      readTime: "5",
      date: new Date("2025-01-30"),
      content: () => {
        const { t } = useTranslation("blog");
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold mt-8 mb-4">{t("articles.noRoaming.section1Title")}</h2>
            <p>{t("articles.noRoaming.section1Content")}</p>

            <h2 className="text-2xl font-bold mt-8 mb-4">{t("articles.noRoaming.section2Title")}</h2>
            <p>{t("articles.noRoaming.section2Content")}</p>

            <h2 className="text-2xl font-bold mt-8 mb-4">{t("articles.noRoaming.section3Title")}</h2>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>{t("articles.noRoaming.advantage1")}</li>
              <li>{t("articles.noRoaming.advantage2")}</li>
              <li>{t("articles.noRoaming.advantage3")}</li>
              <li>{t("articles.noRoaming.advantage4")}</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4">{t("articles.noRoaming.section4Title")}</h2>
            <p>{t("articles.noRoaming.section4Content")}</p>

            <div className="bg-primary/10 border-l-4 border-primary p-6 my-8 rounded-r-lg">
              <p className="font-semibold text-primary text-lg mb-2">{t("articles.noRoaming.conclusionTitle")}</p>
              <p className="text-gray-700">{t("articles.noRoaming.conclusionContent")}</p>
            </div>
          </div>
        );
      }
    }
  ];
};

// Couleurs des catégories
export const categoryColors = {
  guides: "bg-blue-500",
  tips: "bg-green-500",
  news: "bg-purple-500",
};
