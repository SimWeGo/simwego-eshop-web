import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Container from "../../components/Container";
import { useArticles } from "./articles.jsx";
import { FocusCards } from "@/components/ui/focus-cards";

const Blog = () => {
  const { t, i18n } = useTranslation("blog");
  const navigate = useNavigate();
  const isArabic = i18n.language === "ar";
  const [selectedCategory, setSelectedCategory] = useState("all");
  const articles = useArticles();

  const categories = [
    { id: "all", label: t("categories.all") },
    { id: "guides", label: t("categories.guides") },
    { id: "tips", label: t("categories.tips") },
    { id: "news", label: t("categories.news") },
  ];

  const filteredArticles =
    selectedCategory === "all"
      ? articles
      : articles.filter((article) => article.category === selectedCategory);

  return (
    <div className="pb-12">
      <div className="max-w-xxl mx-auto sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className={`text-center ${isArabic ? 'text-right' : ''} mb-12`}>
          <h1 className="text-4xl font-bold text-primary mb-4">
            {t("hero.title")}
          </h1>
          <p className="text-gray-600">
            {t("hero.subtitle")}
          </p>
        </div>

        {/* Blog Content */}
        <Container>
            {/* Filtres */}
            <div className="mb-8 sm:mb-12">
              <div className="flex flex-wrap gap-3 justify-center">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`px-5 sm:px-6 py-2.5 sm:py-3 rounded-full font-medium text-sm sm:text-base transition-all duration-300 ${
                      selectedCategory === category.id
                        ? "bg-primary text-white shadow-lg scale-105"
                        : "bg-white text-gray-700 border-2 border-gray-200 hover:border-primary hover:text-primary hover:shadow-md"
                    }`}
                  >
                    {category.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Articles */}
            {filteredArticles.length === 0 ? (
              <div className="text-center py-16">
                <h3 className="text-2xl font-bold text-gray-800 mb-3">{t("noArticlesYet")}</h3>
                <p className="text-lg text-gray-600">{t("comingSoon")}</p>
              </div>
            ) : (
              <FocusCards
                cards={filteredArticles.map((article) => ({
                  title: article.title,
                  src: article.image,
                  onClick: () => navigate(`/blog/${article.id}`),
                }))}
              />
            )}
        </Container>
      </div>
    </div>
  );
};

export default Blog;
