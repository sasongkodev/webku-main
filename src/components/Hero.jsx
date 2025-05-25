import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative w-full h-screen bg-gradient-to-br from-[#1E3A8A] to-[#2563EB] flex items-center justify-center overflow-hidden">
      {/* Background Overlay for Depth */}
      <div className="absolute inset-0 bg-black opacity-10 z-0"></div>

      <div className="max-w-7xl w-full px-6 text-white flex flex-col md:flex-row items-center justify-center gap-10 z-10">
        {/* LEFT TEXT */}
        <motion.div
          className="w-full md:w-1/2 text-center md:text-left space-y-6"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Bikin Website yang{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-indigo-400">
              Bikin Bisnismu Makin Melesat
            </span>
          </h1>
          <p className="text-lg text-slate-200 max-w-md mx-auto md:mx-0 mt-4">
            Kami bantu kamu punya website profesional, cepat, dan
            mobile-friendly tanpa ribet. Cocok untuk UMKM, toko online, atau
            branding personal.
          </p>

          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 20px rgba(255,255,255,0.3)",
            }}
            whileTap={{ scale: 0.98 }}
            className="bg-white hover:bg-slate-100 text-blue-900 font-semibold px-8 py-3 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Konsultasi Gratis →
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            className="mt-4 bg-transparent border border-white text-white px-6 py-2 rounded-full hover:bg-white hover:text-blue-900 transition-all duration-300"
          >
            Pelajari Lebih Lanjut →
          </motion.button>
        </motion.div>

        {/* RIGHT IMAGE (Ilustrasi Website) */}
        <motion.div
          className="w-full md:w-1/2 flex justify-center"
          style={{ transform: "translateX(-10%)" }} // Geser ke kiri
          initial={{ opacity: 0, x: 50, scale: 0.8 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <img
            src="https://www.dropbox.com/scl/fi/adcd8mr5quejbdbwxnc36/2.png?rlkey=xstonejc9aeknivrl43j71pqg&st=5ali7ojx&dl=0&raw=1 "
            alt="Ilustrasi website bisnis digital yang menunjukkan desain responsif dan antarmuka modern"
            className="w-full max-w-md md:max-w-lg rounded-xl shadow-sm object-cover transform transition-transform duration-500 hover:scale-105"
            loading="lazy"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
