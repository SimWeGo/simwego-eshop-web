import { useParams, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Clock, Calendar, ArrowLeft } from "lucide-react";
import Container from "../../components/Container";
import { useArticles } from "./articles.jsx";
import RelatedArticles from "./components/RelatedArticles";

const BlogArticle = () => {
  const { articleId } = useParams();
  const navigate = useNavigate();
  const { t, i18n } = useTranslation("blog");
  const isArabic = i18n.language === "ar";
  const articles = useArticles();
  const article = articles.find((a) => a.id === articleId);

  if (!article) {
    navigate("/blog");
    return null;
  }

  return (
    <div className="min-h-screen overflow-x-hidden">
      <div className="pt-4 sm:pt-6 md:pt-8 pb-6 sm:pb-8 px-2 sm:px-4 space-y-6">
        {/* Bouton retour */}
        <Container>
          <button
            onClick={() => navigate("/blog")}
            className={`flex items-center gap-2 text-primary hover:text-primary-dark font-semibold transition-colors ${
              isArabic ? "flex-row-reverse" : ""
            }`}
          >
            <ArrowLeft className={`w-5 h-5 ${isArabic ? "rotate-180" : ""}`} />
            {t("backToBlog")}
          </button>
        </Container>

        {/* Hero avec titre et metadata */}
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center space-y-4"
          >
            <div className={`flex flex-wrap items-center justify-center gap-3 mb-4 ${isArabic ? "flex-row-reverse" : ""}`}>
              <span className="px-3 py-1 rounded-full text-xs font-semibold text-white bg-primary">
                {t(`categories.${article.category}`)}
              </span>
              <div className={`flex items-center gap-2 text-gray-600 text-sm ${isArabic ? "flex-row-reverse" : ""}`}>
                <Clock className="w-4 h-4" />
                <span>
                  {article.readTime} {t("minRead")}
                </span>
              </div>
              <div className={`flex items-center gap-2 text-gray-600 text-sm ${isArabic ? "flex-row-reverse" : ""}`}>
                <Calendar className="w-4 h-4" />
                <span>
                  {new Date(article.date).toLocaleDateString(i18n.language, {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </span>
              </div>
            </div>

            <h1 className={`text-4xl sm:text-5xl md:text-6xl font-bold text-primary mb-4 leading-tight max-w-6xl mx-auto ${
              isArabic ? "text-right" : ""
            }`}>
              {article.title}
            </h1>

            <p className={`text-lg sm:text-xl text-gray-600 leading-relaxed max-w-5xl mx-auto ${isArabic ? "text-right" : ""}`}>
              {article.excerpt}
            </p>
          </motion.div>
        </Container>

        {/* Article */}
        <Container>
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-3xl shadow-xl overflow-hidden"
          >
            <img src={article.image} alt={article.title} className="w-full h-auto aspect-video object-cover rounded-t-3xl" />

            <div className="p-6 sm:p-8 lg:p-12">
              <div className={`prose prose-lg max-w-none text-gray-700 ${isArabic ? "text-right" : ""}`}>
                {typeof article.content === "function" ? article.content() : article.content}
              </div>
            </div>
          </motion.article>

          {/* Articles similaires */}
          <RelatedArticles currentArticleId={articleId} allArticles={articles} />

          {/* Footer avec bouton retour */}
          <div className="pt-6">
            <button
              onClick={() => navigate("/blog")}
              className={`flex items-center gap-2 text-primary hover:text-primary-dark font-semibold transition-colors ${
                isArabic ? "flex-row-reverse" : ""
              }`}
            >
              <ArrowLeft className={`w-5 h-5 ${isArabic ? "rotate-180" : ""}`} />
              {t("backToBlog")}
            </button>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default BlogArticle;
