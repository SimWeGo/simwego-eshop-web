import React from "react";
import Container from "../../../components/Container";

// Import logos
import BraiseLogo from "../../../assets/images/partnership/partener/braise.png";
import CelesteTelLogo from "../../../assets/images/partnership/partener/celestetel.png";
import NumeumLogo from "../../../assets/images/partnership/partener/numeum.png";
import SafeBagLogo from "../../../assets/images/partnership/partener/safebag.png";
import SmartRipsLogo from "../../../assets/images/partnership/partener/smartrips.png";
import TelecomValleyLogo from "../../../assets/images/partnership/partener/telecomvalley.png";
import YupWegoLogo from "../../../assets/images/partnership/partener/yupwego.png";

const TrustedPartnersBanner = ({ className = "" }) => {

  const partners = [
    { name: "Braise", logo: BraiseLogo },
    { name: "CelesteTel", logo: CelesteTelLogo },
    { name: "Numeum", logo: NumeumLogo },
    { name: "SafeBag", logo: SafeBagLogo },
    { name: "SmartRips", logo: SmartRipsLogo },
    { name: "Telecom Valley", logo: TelecomValleyLogo },
    { name: "YupWego", logo: YupWegoLogo },
  ];

  // Duplicate the array for seamless loop
  const duplicatedPartners = [...partners, ...partners];

  return (
    <div className={`w-full py-12 overflow-hidden ${className}`}>
      <Container>
        {/* Title */}
        <div className="text-center mb-1">
          <h2 className="text-xl md:text-2xl font-bold text-blue-900 mb-2">
            Nos Partenaires de Confiance
          </h2>
        </div>

        {/* Animated Logos Container */}
        <div className="relative">
          {/* Gradient Overlays */}
          
          {/* Scrolling Container */}
          <div className="flex animate-scroll">
            {duplicatedPartners.map((partner, index) => (
              <div
                key={index}
                className="flex-shrink-0 mx-6 flex items-center justify-center"
                style={{ minWidth: "240px", height: "120px" }}
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="max-h-36 max-w-80 object-contain transition-all duration-300 hover:scale-110 filter hover:brightness-110"
                />
              </div>
            ))}
          </div>
        </div>
      </Container>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
        
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default TrustedPartnersBanner;