import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Backend from "i18next-http-backend";

//NOTE: AS PER I18N Default language is by language detector :en so we added this to make it by env
if (!localStorage.getItem("i18nextLng")) {
  localStorage.setItem(
    "i18nextLng",
    import.meta.env.VITE_DEFAULT_LANGUAGE || "ar"
  );
}

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: import.meta.env.VITE_DEFAULT_LANGUAGE || "ar", // fallback only
    debug: false,
    ns: ["translation", "blog"], // Namespaces disponibles
    defaultNS: "translation", // Namespace par défaut
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ["localStorage", "navigator", "htmlTag", "path", "subdomain"], // common detection order
      caches: ["localStorage"], // cache detected language in localStorage automatically
      lookupLocalStorage: "i18nextLng",
    },
    supportedLngs: ["en", "ar", "fr", "es"],
    backend: {
      loadPath: "/locales/{{lng}}/{{ns}}.json", // Charge translation.json ET blog.json
    },
    react: {
      useSuspense: true,
    },
  });

export default i18n;
