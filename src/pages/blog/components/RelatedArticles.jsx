import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

const RelatedArticles = ({ currentArticleId, allArticles }) => {
  const { t } = useTranslation("blog");
  const navigate = useNavigate();

  // Filtrer l'article actuel et prendre 3 articles similaires
  const relatedArticles = allArticles
    .filter((article) => article.id !== currentArticleId)
    .slice(0, 3);

  if (relatedArticles.length === 0) return null;

  return (
    <div className="mt-16 mb-8">
      <h2 className="text-3xl font-bold text-primary mb-8 text-center">
        {t("relatedArticles")}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {relatedArticles.map((article, index) => (
          <motion.div
            key={article.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            onClick={() => {
              navigate(`/blog/${article.id}`);
              window.scrollTo(0, 0);
            }}
            className="group cursor-pointer bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
          >
            <div className="relative h-48 overflow-hidden">
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold text-white bg-primary">
                {t(`categories.${article.category}`)}
              </span>
            </div>
            <div className="p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                {article.title}
              </h3>
              <p className="text-sm text-gray-600 line-clamp-2 mb-4">
                {article.excerpt}
              </p>
              <div className="flex items-center justify-between text-xs text-gray-500">
                <span>{article.readTime} {t("minRead")}</span>
                <span className="text-primary font-semibold group-hover:underline">
                  {t("readMore")} →
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default RelatedArticles;
