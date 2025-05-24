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
    <footer className="bg-blue-950 text-white py-8">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-6">
        <div>
          <h3 className="text-xl font-semibold mb-2">Web Hemat</h3>
          <p className="text-gray-300 text-sm">
            Jasa pembuatan website profesional, cepat, dan hemat untuk UMKM dan
            bisnis Anda.
          </p>
        </div>

        <div>
          <h4 className="font-semibold mb-2">Kontak Kami</h4>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <FaEnvelope className="text-blue-300" />
              <a href="mailto:webhemat5@gmail.com" className="hover:underline">
                webhemat5@gmail.com
              </a>
            </li>
            <li className="flex items-center gap-2">
              <FaPhone className="text-blue-300" />
              <a href="tel:+6281574741954" className="hover:underline">
                0815-7474-1954
              </a>
            </li>
          </ul>

          <h4 className="font-semibold mt-6 mb-2">Ikuti Kami</h4>
          <div className="flex space-x-4">
            <a
              href="https://wa.me/6281574741954 "
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp WebHemat"
              className="text-green-400 hover:text-green-300 transition-colors"
            >
              <FaWhatsapp size={20} />
            </a>
            <a
              href="https://instagram.com/webhemat "
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram WebHemat"
              className="text-pink-400 hover:text-pink-300 transition-colors"
            >
              <FaInstagram size={20} />
            </a>
            <a
              href="https://tiktok.com/ @webhemat"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok WebHemat"
              className="text-black hover:text-gray-300 transition-colors"
            >
              <FaTiktok size={20} />
            </a>
          </div>
        </div>
      </div>

      <div className="text-center text-xs text-gray-400 mt-6">
        © {new Date().getFullYear()} Web Hemat. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
