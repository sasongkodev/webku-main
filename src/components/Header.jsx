import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

const NavItems = () => (
  <>
    <Link to="/" className="hover:text-primary transition">
      Home
    </Link>
    <a href="#layanan" className="hover:text-primary transition">
      Layanan
    </a>
    <a href="#portfolio" className="hover:text-primary transition">
      Portfolio
    </a>
    <a href="#harga" className="hover:text-primary transition">
      Harga
    </a>
    <a href="#kontak" className="hover:text-primary transition">
      Kontak
    </a>
    <Link to="/promo" className="hover:text-primary transition">
      Promo
    </Link>
  </>
);

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`bg-white shadow-md fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "shadow-lg bg-opacity-95 backdrop-blur-sm" : ""
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/">
          <div className="text-2xl font-bold text-primary cursor-pointer hover:text-opacity-90 transition">
            Web <span className="text-secondary">Hemat</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8 text-sm font-semibold text-gray-700">
          <NavItems />
        </nav>

        {/* Desktop CTA Button */}
        <div className="hidden md:block ml-6">
          <button className="bg-primary text-white px-5 py-2 rounded hover:bg-secondary transition">
            Hubungi Kami
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 focus:outline-none"
          aria-label={isMenuOpen ? "Tutup menu" : "Buka menu"}
        >
          {isMenuOpen ? (
            <FaTimes size={24} className="text-gray-700" />
          ) : (
            <FaBars size={24} className="text-gray-700" />
          )}
        </button>
      </div>

      {/* Mobile Navigation Dropdown */}
      <div
        className={`md:hidden bg-white shadow-lg transition-all duration-300 ease-in-out ${
          isMenuOpen
            ? "max-h-64 opacity-100"
            : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <nav className="flex flex-col items-start space-y-4 px-4 py-6">
          <NavItems />
        </nav>
      </div>
    </header>
  );
};

export default Header;
