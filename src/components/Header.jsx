import React, { useState, useEffect } from "react";
import {
  FaBars,
  FaTimes,
  FaWhatsapp,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [currentSection, setCurrentSection] = useState("home");

  // Daftar section termasuk paket-bulanan
  const sections = ["home", "layanan", "portfolio", "harga", "kontak"];
  const additionalLinks = ["promo", "paket-bulanan"]; // tambahan link

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);

      const scrollPosition = window.scrollY + 80;

      // Cek section utama
      for (const section of [...sections, ...additionalLinks]) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setCurrentSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setIsMenuOpen(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: "smooth",
      });
    }
    closeMenu();
  };

  const NavItem = ({ children, to, isMobile, isActive }) => {
    return (
      <motion.button
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        onClick={() => scrollToSection(to)}
        className={`relative text-sm font-medium transition-colors px-3 py-2 ${
          isMobile ? "w-full text-left" : ""
        } ${isActive ? "text-blue-600" : "text-gray-600 hover:text-blue-500"}`}
      >
        {children}
        {isActive && !isMobile && (
          <motion.span
            className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-500"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.3 }}
          />
        )}
      </motion.button>
    );
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-sm border-b border-gray-100" : "bg-white"
      }`}
    >
      {/* Top contact bar */}
      <div className="bg-blue-600 text-blue-50 text-xs">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center py-2">
          <div className="flex items-center space-x-5">
            <a
              href="tel:+6281574741954"
              className="flex items-center hover:text-white transition-colors"
            >
              <FaPhoneAlt className="mr-1.5 text-[0.8em]" />
              +62 815-7474-1954
            </a>
            <a
              href="mailto:webhemat5@gmail.com"
              className="flex items-center hover:text-white transition-colors"
            >
              <FaEnvelope className="mr-1.5 text-[0.8em]" />
              webhemat5@gmail.com
            </a>
          </div>
          <div className="hidden md:flex items-center">
            <span className="text-blue-100">Jam Kerja: 08:00 - 17:00</span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <button
              onClick={() => scrollToSection("home")}
              className="flex items-center focus:outline-none"
            >
              <span className="text-xl font-semibold text-blue-600 tracking-tight">
                WebHemat
              </span>
              <span className="ml-2 bg-blue-600 text-white text-[10px] px-1.5 py-0.5 rounded">
                PRO
              </span>
            </button>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {sections.map((section) => (
              <NavItem
                key={section}
                to={section}
                isMobile={false}
                isActive={currentSection === section}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </NavItem>
            ))}
            <NavItem
              to="promo"
              isMobile={false}
              isActive={currentSection === "promo"}
            >
              <span className="relative">
                Promo
                <span className="absolute -top-1 -right-4 bg-orange-500 text-white text-[10px] px-1 py-0.5 rounded-full">
                  HOT
                </span>
              </span>
            </NavItem>
            {/* Tambahkan Paket Bulanan */}
            <NavItem
              to="paket-bulanan"
              isMobile={false}
              isActive={currentSection === "paket-bulanan"}
            >
              Paket Bulanan
            </NavItem>
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden md:flex items-center">
            <motion.a
              href="https://wa.me/6281574741954"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md transition-all duration-200 text-sm shadow-md"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <FaWhatsapp className="mr-2" />
              Konsultasi Gratis
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 -mr-2 focus:outline-none"
            aria-label={isMenuOpen ? "Tutup menu" : "Buka menu"}
            whileTap={{ scale: 0.9 }}
          >
            {isMenuOpen ? (
              <FaTimes className="text-gray-600" />
            ) : (
              <FaBars className="text-gray-600" />
            )}
          </motion.button>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="md:hidden bg-white shadow-lg overflow-hidden"
          >
            <div className="px-4 pt-2 pb-5 space-y-1">
              {sections.map((section) => (
                <NavItem
                  key={section}
                  to={section}
                  isMobile={true}
                  isActive={currentSection === section}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </NavItem>
              ))}
              <NavItem
                to="promo"
                isMobile={true}
                isActive={currentSection === "promo"}
              >
                <span className="relative">
                  Promo
                  <span className="absolute -top-1 -right-4 bg-orange-500 text-white text-[10px] px-1 py-0.5 rounded-full">
                    HOT
                  </span>
                </span>
              </NavItem>
              {/* Tambahkan Paket Bulanan di mobile */}
              <NavItem
                to="paket-bulanan"
                isMobile={true}
                isActive={currentSection === "paket-bulanan"}
              >
                Paket Bulanan
              </NavItem>

              <div className="pt-3 mt-3 border-t border-gray-100">
                <motion.a
                  href="https://wa.me/6281574741954"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center bg-green-500 hover:bg-green-600 text-white px-4 py-2.5 rounded-md transition-all duration-200 text-sm shadow-md"
                  whileTap={{ scale: 0.97 }}
                >
                  <FaWhatsapp className="mr-2" />
                  Chat via WhatsApp
                </motion.a>

                <div className="flex justify-center space-x-4 mt-3">
                  <a
                    href="tel:+6281574741954"
                    className="p-2 bg-blue-100 hover:bg-blue-200 rounded-full transition-colors text-blue-600"
                  >
                    <FaPhoneAlt className="text-sm" />
                  </a>
                  <a
                    href="mailto:webhemat5@gmail.com"
                    className="p-2 bg-blue-100 hover:bg-blue-200 rounded-full transition-colors text-blue-600"
                  >
                    <FaEnvelope className="text-sm" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
