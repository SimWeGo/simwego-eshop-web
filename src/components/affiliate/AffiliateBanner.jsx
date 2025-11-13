import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Gift, X } from "lucide-react";
import { useTranslation } from "react-i18next";

// Partner logos mapping
const PARTNER_LOGOS = {
  test: "/src/assets/images/partnership/partener/yupwego.png",
  yupwego: "/src/assets/images/partnership/partener/yupwego.png",
  braise: "/src/assets/images/partnership/partener/braise.png",
  celestetel: "/src/assets/images/partnership/partener/celestetel.png",
  numeum: "/src/assets/images/partnership/partener/numeum.png",
  smartrips: "/src/assets/images/partnership/partener/smartrips.png",
  telecomvalley: "/src/assets/images/partnership/partener/telecomvalley.png",
  safebag: "/src/assets/images/partnership/partener/safebag.png",
};

const AffiliateBanner = () => {
  const { t } = useTranslation();
  const [searchParams] = useSearchParams();
  const [isVisible, setIsVisible] = useState(false);
  const [affiliateName, setAffiliateName] = useState(null);
  const [partnerLogo, setPartnerLogo] = useState(null);

  useEffect(() => {
    // Check for affiliate parameters
    const via = searchParams.get("via");
    const referral = searchParams.get("referral");

    if (via || referral) {
      const name = via || referral;
      setAffiliateName(name);
      setIsVisible(true);

      // Check if partner logo exists
      const logoKey = name.toLowerCase();
      if (PARTNER_LOGOS[logoKey]) {
        setPartnerLogo(PARTNER_LOGOS[logoKey]);
      }

      // Log for debugging
      console.log("Affiliate detected:", name);
      console.log("Partner logo:", PARTNER_LOGOS[logoKey] || "No logo found");
    }
  }, [searchParams]);

  if (!isVisible) return null;

  return (
    <div className="w-full bg-secondary/10 border-b-2 border-secondary/30 shadow-sm animate-slideDown">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
        <div className="flex items-center gap-3 sm:gap-4">
          {/* Partner Logo or Gift Icon */}
          <div className="flex-shrink-0">
            {partnerLogo ? (
              <img
                src={partnerLogo}
                alt={affiliateName}
                className="w-24 h-12 sm:w-32 sm:h-16 object-contain"
              />
            ) : (
              <div className="w-24 h-12 sm:w-32 sm:h-16 rounded-lg bg-primary flex items-center justify-center shadow-sm">
                <Gift className="text-white" size={28} />
              </div>
            )}
          </div>

          {/* Content */}
          <div className="flex-1 min-w-0">
            <h3 className="font-bold text-primary text-sm sm:text-base lg:text-lg leading-tight">
              {t("affiliate.welcomeMessage", "🎉 Vous avez été parrainé")}{" "}
              {affiliateName && (
                <span className="text-secondary capitalize">
                  {t("affiliate.byCompany", "par")} {affiliateName}
                </span>
              )}
            </h3>
            <p className="text-content-600 text-xs sm:text-sm mt-0.5 sm:mt-1 leading-snug">
              {t(
                "affiliate.discountMessage",
                "Profitez d'une réduction exclusive sur votre premier achat."
              )}
            </p>
          </div>

          {/* Close button */}
          <button
            onClick={() => setIsVisible(false)}
            className="flex-shrink-0 p-1 hover:bg-primary/10 rounded-full transition-colors"
            aria-label="Close banner"
          >
            <X className="text-content-600 hover:text-primary" size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AffiliateBanner;
