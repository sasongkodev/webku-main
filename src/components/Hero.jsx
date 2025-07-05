import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative w-full min-h-screen bg-gradient-to-br from-[#1E3A8A] via-[#1E40AF] to-[#2563EB] flex items-center justify-center overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden z-0">
        {/* Floating circles for depth */}
        <motion.div
          className="absolute top-20 left-10 w-32 h-32 rounded-full bg-blue-400 opacity-10"
          animate={{
            y: [0, 30, 0],
            x: [0, 20, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-20 w-48 h-48 rounded-full bg-indigo-400 opacity-10"
          animate={{
            y: [0, -40, 0],
            x: [0, -30, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgdmlld0JveD0iMCAwIDYwIDYwIj48cGF0aCBkPSJNMCAzMEg2ME0zMCAwVjYwIiBzdHJva2U9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiIHN0cm9rZS13aWR0aD0iMSIvPjwvc3ZnPg==')] opacity-20" />
      </div>

      <div className="max-w-7xl w-full px-6 text-white flex flex-col md:flex-row items-center justify-between gap-10 z-10 py-20">
        {/* LEFT TEXT */}
        <motion.div
          className="w-full md:w-1/2 text-center md:text-left space-y-6"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-4">
            <p className="text-sm font-medium text-blue-100">
              🚀 Transformasi Digital
            </p>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            <span className="inline-block mb-3">
              Tingkatkan Bisnis Anda dengan
            </span>{" "}
            <span className="relative">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-indigo-400 relative z-10">
                Website Profesional
              </span>
              <motion.span
                className="absolute bottom-0 left-0 w-full h-2 bg-blue-400/30 z-0"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
                viewport={{ once: true }}
              />
            </span>
          </h1>

          <p className="text-lg text-blue-100 max-w-lg mx-auto md:mx-0 leading-relaxed">
            Solusi lengkap untuk bisnis digital Anda. Website cepat, aman, dan
            SEO-friendly yang siap membantu Anda menjangkau lebih banyak
            pelanggan.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 25px rgba(59, 130, 246, 0.4)",
              }}
              whileTap={{ scale: 0.98 }}
              className="relative overflow-hidden bg-white hover:bg-slate-100 text-blue-900 font-semibold px-8 py-3 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <span className="relative z-10">Konsultasi Gratis</span>
              <motion.span
                className="absolute inset-0 bg-gradient-to-r from-blue-100 to-white opacity-0 hover:opacity-100 transition-opacity duration-300 z-0"
                initial={{ x: "-100%" }}
                whileHover={{ x: "0%" }}
              />
              <span className="ml-2 relative z-10">→</span>
            </motion.button>

            <motion.button
              whileHover={{
                scale: 1.05,
                backgroundColor: "rgba(255, 255, 255, 0.1)",
              }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center gap-2 px-6 py-3 rounded-full border border-white/30 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 group"
            >
              <span>Lihat Portfolio</span>
              <span className="group-hover:translate-x-1 transition-transform duration-300">
                →
              </span>
            </motion.button>
          </div>

          <div className="flex items-center justify-center md:justify-start gap-4 pt-4">
            <div className="flex -space-x-2">
              {[1, 2, 3].map((item) => (
                <img
                  key={item}
                  src={`https://randomuser.me/api/portraits/${
                    item % 2 === 0 ? "women" : "men"
                  }/${item + 20}.jpg`}
                  alt="Client"
                  className="w-10 h-10 rounded-full border-2 border-white/50"
                />
              ))}
            </div>
            <div className="text-sm text-blue-100">
              <p>Trusted by 500+ businesses</p>
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-4 h-4 text-yellow-300"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
                <span className="ml-1">5.0 (200+ reviews)</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* RIGHT IMAGE (Ilustrasi Website) */}
        <motion.div
          className="w-full md:w-1/2 flex justify-center relative"
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div className="relative max-w-md">
            <motion.img
              src="https://www.dropbox.com/scl/fi/adcd8mr5quejbdbwxnc36/2.png?rlkey=xstonejc9aeknivrl43j71pqg&st=5ali7ojx&dl=0&raw=1"
              alt="Ilustrasi website bisnis digital yang menunjukkan desain responsif dan antarmuka modern"
              className="w-full rounded-xl shadow-2xl object-cover relative z-10 border border-white/10"
              loading="lazy"
              whileHover={{ scale: 1.02 }}
            />

            {/* Decorative elements around the image */}
            <motion.div
              className="absolute -top-6 -left-6 w-32 h-32 rounded-xl bg-blue-500/20 border border-blue-400/30 z-0"
              initial={{ opacity: 0, x: -20, y: -20 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            />

            <motion.div
              className="absolute -bottom-6 -right-6 w-40 h-40 rounded-xl bg-indigo-500/20 border border-indigo-400/30 z-0"
              initial={{ opacity: 0, x: 20, y: 20 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            />

            {/* Floating device mockups */}
            <motion.div
              className="absolute -bottom-10 -right-10 w-24 h-24 bg-white rounded-lg shadow-xl overflow-hidden border border-white/30"
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="absolute top-0 left-0 w-full h-4 bg-gray-200"></div>
              <div className="absolute top-5 left-0 w-full h-1 bg-gray-200/50"></div>
              <div className="absolute top-7 left-0 w-full h-1 bg-gray-200/30"></div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scrolling indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <motion.div
            className="w-1 h-2 bg-white rounded-full mt-2"
            animate={{ y: [0, 4, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
