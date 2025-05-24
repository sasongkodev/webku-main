import React from "react";
import { FaRocket } from "react-icons/fa";

const CTASection = () => {
  return (
    <section className="bg-gradient-to-br from-blue-600 to-purple-600 py-16 text-white text-center px-6">
      <div className="max-w-3xl mx-auto">
        <FaRocket className="text-5xl mx-auto mb-4 animate-bounce" />
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Siap Wujudkan Website Impianmu?
        </h2>
        <p className="mb-6 text-lg">
          Konsultasikan kebutuhan website bisnismu secara gratis bersama tim Web
          Hemat.
        </p>
        <a
          href="https://wa.me/6281574741954"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-white text-blue-700 font-semibold px-8 py-3 rounded-full shadow-lg hover:bg-blue-100 transition duration-300"
        >
          Konsultasi Sekarang
        </a>
      </div>
    </section>
  );
};

export default CTASection;
