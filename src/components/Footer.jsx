// src/components/Footer.jsx
import React from "react";
import {
  FaEnvelope,
  FaPhone,
  FaInstagram,
  FaWhatsapp,
  FaTiktok,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-neutral-900 text-neutral-200 border-t border-neutral-700">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand Section */}
        <div className="space-y-4">
          <h3 className="text-xl font-medium text-white tracking-tight">
            Web Hemat
          </h3>
          <p className="text-neutral-400 text-sm leading-relaxed">
            Jasa pembuatan website profesional, cepat, dan hemat untuk UMKM dan
            bisnis Anda.
          </p>
        </div>

        {/* Contact Section */}
        <div className="space-y-4">
          <h4 className="text-sm font-semibold text-white uppercase tracking-wider">
            Kontak Kami
          </h4>
          <ul className="space-y-3">
            <li className="flex items-start">
              <FaEnvelope className="text-neutral-400 mt-1 mr-3 flex-shrink-0" />
              <a
                href="mailto:webhemat5@gmail.com"
                className="text-neutral-300 hover:text-white transition-colors text-sm"
              >
                webhemat5@gmail.com
              </a>
            </li>
            <li className="flex items-start">
              <FaPhone className="text-neutral-400 mt-1 mr-3 flex-shrink-0" />
              <a
                href="tel:+6281574741954"
                className="text-neutral-300 hover:text-white transition-colors text-sm"
              >
                0815-7474-1954
              </a>
            </li>
          </ul>
        </div>

        {/* Social Media Section */}
        <div className="space-y-4">
          <h4 className="text-sm font-semibold text-white uppercase tracking-wider">
            Ikuti Kami
          </h4>
          <div className="flex space-x-5">
            <a
              href="https://wa.me/6281574741954"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp WebHemat"
              className="text-neutral-400 hover:text-green-400 transition-colors"
            >
              <FaWhatsapp size={20} />
            </a>
            <a
              href="https://instagram.com/webhemat"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram WebHemat"
              className="text-neutral-400 hover:text-pink-400 transition-colors"
            >
              <FaInstagram size={20} />
            </a>
            <a
              href="https://tiktok.com/@webhemat"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok WebHemat"
              className="text-neutral-400 hover:text-neutral-200 transition-colors"
            >
              <FaTiktok size={20} />
            </a>
          </div>
        </div>

        {/* Additional Links Section */}
        <div className="space-y-4">
          <h4 className="text-sm font-semibold text-white uppercase tracking-wider">
            Layanan
          </h4>
          <ul className="space-y-2">
            <li>
              <a
                href="#"
                className="text-neutral-400 hover:text-white text-sm transition-colors"
              >
                Portfolio
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-neutral-400 hover:text-white text-sm transition-colors"
              >
                Testimoni
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-neutral-400 hover:text-white text-sm transition-colors"
              >
                Blog
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-neutral-400 hover:text-white text-sm transition-colors"
              >
                FAQ
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="border-t border-neutral-800 py-6">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-neutral-500 text-xs">
            © {new Date().getFullYear()} Web Hemat. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a
              href="#"
              className="text-neutral-500 hover:text-neutral-300 text-xs"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-neutral-500 hover:text-neutral-300 text-xs"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="text-neutral-500 hover:text-neutral-300 text-xs"
            >
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
