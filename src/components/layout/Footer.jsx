import React from "react";
import { Link } from "react-router-dom";
import Container from "../Container";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Footer = () => {
  const handleNavigation = () => {
    window.scrollTo(0, 0);
  };

  const navigationLinks = [
    { name: "SimWeGoPro", path: "/" },
    { name: "À propos", path: "/about-us" },
    { name: "Contact", path: "/contact-us" }
  ];

  return (
    <footer className="bg-white border-t border-gray-100">
      <Container>
        <div className="py-16">
          {/* Section principale avec colonnes */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mb-12">
            
            {/* Logo et tagline */}
            <div className="col-span-1">
              <img
                src="/logo/logocrop.png"
                alt="SimWeGo Logo"
                className="h-24 w-auto object-contain mb-4"
              />
              <p className="text-gray-600 font-semibold text-lg mb-6">
                WeGo Connected
              </p>
              
              {/* Réseaux sociaux */}
              <div className="flex space-x-4">
                <a
                  href="https://facebook.com/simwego"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-blue-900 text-white rounded-full flex items-center justify-center hover:bg-blue-800 hover:scale-110 transition-all duration-300"
                  aria-label="Facebook"
                >
                  <FacebookIcon className="w-5 h-5" />
                </a>
                <a
                  href="https://instagram.com/simwego"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-blue-900 text-white rounded-full flex items-center justify-center hover:bg-blue-800 hover:scale-110 transition-all duration-300"
                  aria-label="Instagram"
                >
                  <InstagramIcon className="w-5 h-5" />
                </a>
                <a
                  href="https://linkedin.com/company/simwego"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-blue-900 text-white rounded-full flex items-center justify-center hover:bg-blue-800 hover:scale-110 transition-all duration-300"
                  aria-label="LinkedIn"
                >
                  <LinkedInIcon className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Colonne Navigation */}
            <div>
              <h3 className="text-gray-800 font-semibold text-lg mb-6">Navigation</h3>
              <nav className="space-y-3">
                {navigationLinks.map((link, index) => (
                  <Link
                    key={index}
                    to={link.path}
                    onClick={handleNavigation}
                    className="block text-gray-600 hover:text-primary transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </Link>
                ))}
              </nav>
            </div>
          </div>

        </div>
      </Container>
    </footer>
  );
};

export default Footer;
