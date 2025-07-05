import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  FaBars,
  FaTimes,
  FaWhatsapp,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

// Color palette
const colors = {
  primary: "#4361ee", // Vibrant blue
  secondary: "#3f37c9", // Deep blue
  accent: "#4cc9f0", // Light blue
  dark: "#1a1a2e", // Dark navy
  light: "#f8f9fa", // Off-white
  success: "#4ade80", // Green
  warning: "#fbbf24", // Amber
  danger: "#f87171", // Red
  gray: "#6b7280", // Gray
};

// NavItem component with realistic hover effects
const NavItem = ({ children, to, href, isMobile, closeMenu, isActive }) => {
  const baseClasses = "font-medium transition-all duration-300";
  const mobileClasses = `py-3 px-4 w-full text-left ${
    isActive ? "text-white bg-primary" : "text-gray-800 hover:bg-gray-100"
  }`;
  const desktopClasses = `px-4 py-2 rounded-lg ${
    isActive
      ? "text-primary font-semibold"
      : "text-gray-700 hover:text-primary hover:bg-gray-50/50"
  }`;

  const content = (
    <motion.div
      whileHover={{ scale: isMobile ? 1 : 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="flex items-center"
    >
      {children}
      {isActive && !isMobile && (
        <motion.span
          className="ml-2 w-1.5 h-1.5 rounded-full bg-primary"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 500 }}
        />
      )}
    </motion.div>
  );

  if (to) {
    return (
      <Link
        to={to}
        className={`${baseClasses} ${
          isMobile ? mobileClasses : desktopClasses
        }`}
        onClick={closeMenu}
      >
        {content}
      </Link>
    );
  }

  return (
    <a
      href={href}
      className={`${baseClasses} ${isMobile ? mobileClasses : desktopClasses}`}
      onClick={closeMenu}
    >
      {content}
    </a>
  );
};

// Navigation items component with active state tracking
const NavItems = ({ isMobile = false, closeMenu, currentSection }) => (
  <>
    <NavItem
      to="/"
      isMobile={isMobile}
      closeMenu={closeMenu}
      isActive={currentSection === "home"}
    >
      Home
    </NavItem>
    <NavItem
      href="#layanan"
      isMobile={isMobile}
      closeMenu={closeMenu}
      isActive={currentSection === "layanan"}
    >
      Layanan
    </NavItem>
    <NavItem
      href="#portfolio"
      isMobile={isMobile}
      closeMenu={closeMenu}
      isActive={currentSection === "portfolio"}
    >
      Portfolio
    </NavItem>
    <NavItem
      href="#harga"
      isMobile={isMobile}
      closeMenu={closeMenu}
      isActive={currentSection === "harga"}
    >
      Harga
    </NavItem>
    <NavItem
      href="#kontak"
      isMobile={isMobile}
      closeMenu={closeMenu}
      isActive={currentSection === "kontak"}
    >
      Kontak
    </NavItem>
    <NavItem
      to="/promo"
      isMobile={isMobile}
      closeMenu={closeMenu}
      isActive={currentSection === "promo"}
    >
      <span className="relative">
        Promo
        <span className="absolute -top-2 -right-4 bg-red-500 text-white text-xs px-1.5 py-0.5 rounded-full animate-pulse">
          HOT
        </span>
      </span>
    </NavItem>
  </>
);

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [currentSection, setCurrentSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Section detection logic
      const sections = ["home", "layanan", "portfolio", "harga", "kontak"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
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

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled ? "bg-white/90 backdrop-blur-lg shadow-md" : "bg-white"
      }`}
      style={{
        borderBottom: isScrolled
          ? `1px solid ${colors.primary}20`
          : "1px solid transparent",
      }}
    >
      {/* Top contact bar */}
      <div className="bg-dark text-white text-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center py-2">
          <div className="flex items-center space-x-4">
            <a
              href="tel:+6281234567890"
              className="flex items-center hover:text-accent transition-colors"
            >
              <FaPhoneAlt className="mr-2" />
              +62 812-3456-7890
            </a>
            <a
              href="mailto:info@webhemat.com"
              className="flex items-center hover:text-accent transition-colors"
            >
              <FaEnvelope className="mr-2" />
              info@webhemat.com
            </a>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <span className="text-gray-400">Jam Kerja: 08:00 - 17:00</span>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo with 3D effect */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link to="/" className="flex items-center group">
              <motion.div className="relative" whileHover={{ y: -2 }}>
                <div
                  className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent relative z-10 group-hover:drop-shadow-lg transition-all duration-300"
                  style={{ textShadow: "0 2px 4px rgba(0,0,0,0.1)" }}
                >
                  Web<span className="font-extrabold">Hemat</span>
                </div>
                <div
                  className="absolute inset-0 bg-gradient-to-r from-primary to-secondary blur-md opacity-30 group-hover:opacity-50 transition-opacity duration-300"
                  style={{ zIndex: 0 }}
                />
              </motion.div>
              <motion.span
                className="ml-2 bg-gradient-to-br from-primary to-secondary text-white text-xs px-2 py-1 rounded-full shadow-md"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2 }}
                whileHover={{ scale: 1.1 }}
              >
                PRO
              </motion.span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-2">
            <NavItems currentSection={currentSection} />
          </nav>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <motion.a
              href="https://wa.me/6281234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center bg-success hover:bg-green-600 text-white px-4 py-2.5 rounded-lg transition-all duration-300 shadow-md"
              whileHover={{
                scale: 1.05,
                boxShadow: `0 4px 20px ${colors.success}40`,
              }}
              whileTap={{ scale: 0.95 }}
            >
              <FaWhatsapp className="mr-2 text-lg" />
              <span className="font-semibold">Konsultasi Gratis</span>
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 -mr-2 focus:outline-none relative"
            aria-label={isMenuOpen ? "Tutup menu" : "Buka menu"}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {isMenuOpen ? (
              <FaTimes size={24} className="text-dark" />
            ) : (
              <>
                <FaBars size={24} className="text-dark" />
                {currentSection !== "home" && (
                  <motion.span
                    className="absolute top-0 right-0 w-2.5 h-2.5 bg-red-500 rounded-full"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring" }}
                  />
                )}
              </>
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
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden bg-white shadow-2xl overflow-hidden"
            style={{ borderTop: `1px solid ${colors.gray}20` }}
          >
            <div className="px-4 pt-2 pb-6 space-y-2">
              <NavItems
                isMobile={true}
                closeMenu={closeMenu}
                currentSection={currentSection}
              />

              <div className="pt-4 mt-4 border-t border-gray-100">
                <motion.a
                  href="https://wa.me/6281234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center bg-success hover:bg-green-600 text-white px-4 py-3 rounded-lg transition-all duration-300 shadow-md"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <FaWhatsapp className="mr-2 text-lg" />
                  <span className="font-semibold">Chat via WhatsApp</span>
                </motion.a>

                <div className="flex justify-center space-x-4 mt-4">
                  <a
                    href="tel:+6281234567890"
                    className="p-2 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors"
                  >
                    <FaPhoneAlt className="text-gray-700" />
                  </a>
                  <a
                    href="mailto:info@webhemat.com"
                    className="p-2 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors"
                  >
                    <FaEnvelope className="text-gray-700" />
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
