import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import Tilt from "react-parallax-tilt";
import {
  FaWhatsapp,
  FaCheck,
  FaClock,
  FaArrowRight,
  FaRegStar,
  FaStar,
} from "react-icons/fa";

const PromoPage = () => {
  const [countdown, setCountdown] = useState(15 * 60); // 15 minutes countdown
  const [formData, setFormData] = useState({ nama: "", email: "", nohp: "" });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [stars, setStars] = useState(Array(5).fill(false)); // For star rating animation

  // Enhanced package details
  const packages = [
    {
      name: "Paket Hemat",
      price: "Rp750.000",
      originalPrice: "Rp1.200.000",
      features: [
        "Gratis Domain .com/.net 1 tahun",
        "Hosting Premium 1GB RAM",
        "Free SSL Certificate",
        "Desain Responsif & Modern",
        "2 Artikel SEO Optimized",
        "Backup Harian Otomatis",
        "Garansi 100% Kepuasan",
      ],
      popular: false,
    },
    {
      name: "Paket Pro",
      price: "Rp1.250.000",
      originalPrice: "Rp1.800.000",
      features: [
        "Semua fitur Paket Hemat",
        "Hosting SSD 3GB RAM",
        "5 Halaman Custom",
        "4 Artikel SEO Optimized",
        "Integrasi Media Sosial",
        "Analytics Dashboard",
        "Prioritas Support",
      ],
      popular: true,
    },
  ];

  // Animate stars for social proof
  useEffect(() => {
    const interval = setInterval(() => {
      setStars((prev) => {
        const newStars = [...prev];
        const randomIndex = Math.floor(Math.random() * 5);
        newStars[randomIndex] = !newStars[randomIndex];
        return newStars;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  // Countdown timer
  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds) => {
    const m = String(Math.floor(seconds / 60)).padStart(2, "0");
    const s = String(seconds % 60).padStart(2, "0");
    return `${m}:${s}`;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      setFormData({ nama: "", email: "", nohp: "" });
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 text-white">
      {/* Floating particles background */}
      <div className="fixed inset-0 overflow-hidden z-0">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white/10"
            style={{
              width: Math.random() * 10 + 2,
              height: Math.random() * 10 + 2,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, (Math.random() - 0.5) * 100],
              x: [0, (Math.random() - 0.5) * 100],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: Math.random() * 15 + 10,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        ))}
      </div>

      <Helmet>
        <title>Promo Spesial Website Profesional | WebHemat</title>
        <meta
          name="description"
          content="Dapatkan website profesional dengan diskon hingga 40%! Promo terbatas untuk 10 pendaftar pertama setiap hari."
        />
      </Helmet>

      <div className="container mx-auto px-4 py-12 relative z-10">
        {/* Header Section */}
        <motion.header
          className="text-center mb-12"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-block px-6 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-4"
            whileHover={{ scale: 1.05 }}
          >
            <p className="text-sm font-medium text-purple-300">
              🔥 PROMO TERBATAS
            </p>
          </motion.div>

          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400"
            whileHover={{ scale: 1.02 }}
          >
            Website Profesional Harga Hemat
          </motion.h1>

          <motion.p
            className="text-xl text-purple-100 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Solusi lengkap untuk bisnis Anda dengan diskon spesial 40%
          </motion.p>
        </motion.header>

        {/* Countdown & CTA */}
        <motion.div
          className="flex flex-col items-center mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <div className="flex items-center mb-6">
            <FaClock className="text-yellow-400 mr-2 text-xl" />
            <span className="text-lg mr-2">Promo berakhir dalam:</span>
            <div className="text-3xl font-mono bg-white/10 backdrop-blur-sm text-yellow-400 rounded-lg px-6 py-2 shadow-lg border border-yellow-400/30">
              ⏳ {formatTime(countdown)}
            </div>
          </div>

          <motion.a
            href="#paket"
            className="flex items-center bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-black font-bold px-8 py-4 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300"
            whileHover={{ y: -3 }}
          >
            <span>KLIM PROMO SEKARANG</span>
            <FaArrowRight className="ml-2" />
          </motion.a>
        </motion.div>

        {/* Social Proof */}
        <motion.div
          className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-16 max-w-4xl mx-auto border border-white/10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center mb-4 md:mb-0">
              <div className="flex mr-4">
                {stars.map((filled, i) => (
                  <span key={i} className="text-yellow-400 text-xl">
                    {filled ? <FaStar /> : <FaRegStar />}
                  </span>
                ))}
              </div>
              <span className="font-semibold">4.9/5 (128 Review)</span>
            </div>
            <div className="text-center md:text-right">
              <p className="text-sm text-purple-200">🔥 10+ pesanan hari ini</p>
              <p className="text-sm text-purple-200">
                🚀 500+ website telah dibuat
              </p>
            </div>
          </div>
        </motion.div>

        {/* Package Section */}
        <section id="paket" className="mb-16">
          <motion.h2
            className="text-3xl font-bold text-center mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            Pilihan Paket{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              Spesial
            </span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {packages.map((pkg, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Tilt glareEnable={true} glareMaxOpacity={0.1} scale={1.02}>
                  <div
                    className={`relative h-full rounded-2xl overflow-hidden shadow-2xl ${
                      pkg.popular
                        ? "border-2 border-yellow-400"
                        : "border border-white/10"
                    }`}
                  >
                    {pkg.popular && (
                      <div className="absolute top-0 right-0 bg-yellow-400 text-black font-bold px-4 py-1 rounded-bl-lg">
                        POPULAR
                      </div>
                    )}
                    <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 h-full">
                      <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                      <div className="flex items-end mb-6">
                        <span className="text-4xl font-bold">{pkg.price}</span>
                        <span className="text-lg line-through text-gray-400 ml-2">
                          {pkg.originalPrice}
                        </span>
                      </div>

                      <ul className="space-y-3 mb-8">
                        {pkg.features.map((feature, i) => (
                          <li key={i} className="flex items-start">
                            <FaCheck className="text-green-400 mt-1 mr-3 flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>

                      <motion.button
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.98 }}
                        className={`w-full py-3 rounded-lg font-bold transition-all ${
                          pkg.popular
                            ? "bg-gradient-to-r from-yellow-400 to-yellow-500 text-black"
                            : "bg-gradient-to-r from-blue-500 to-purple-500 text-white"
                        }`}
                      >
                        Pilih Paket Ini
                      </motion.button>
                    </div>
                  </div>
                </Tilt>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Registration Form */}
        <motion.section
          className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 max-w-3xl mx-auto border border-white/10 shadow-2xl"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-center mb-2">
            Daftar Sekarang
          </h3>
          <p className="text-center text-purple-200 mb-8">
            Isi formulir berikut untuk mendapatkan promo spesial
          </p>

          <AnimatePresence mode="wait">
            {success ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="text-center p-8"
              >
                <div className="text-green-400 text-5xl mb-4">🎉</div>
                <h4 className="text-2xl font-bold mb-2">
                  Pendaftaran Berhasil!
                </h4>
                <p className="mb-6">
                  Tim kami akan segera menghubungi Anda untuk konfirmasi.
                </p>
                <motion.a
                  href="https://wa.me/6281234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-3 rounded-lg"
                  whileHover={{ scale: 1.05 }}
                >
                  <FaWhatsapp className="mr-2" />
                  Chat via WhatsApp
                </motion.a>
              </motion.div>
            ) : (
              <motion.form
                onSubmit={handleSubmit}
                initial={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="space-y-6"
              >
                {[
                  { name: "nama", label: "Nama Lengkap", type: "text" },
                  { name: "email", label: "Email", type: "email" },
                  { name: "nohp", label: "Nomor WhatsApp", type: "tel" },
                ].map((field, i) => (
                  <div key={i}>
                    <label className="block text-sm font-medium mb-2">
                      {field.label}
                    </label>
                    <input
                      type={field.type}
                      name={field.name}
                      value={formData[field.name]}
                      onChange={handleChange}
                      required
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
                    />
                  </div>
                ))}

                <motion.button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-bold py-4 rounded-lg transition-all relative overflow-hidden"
                  whileHover={{ scale: 1.01 }}
                >
                  {loading ? (
                    <span className="flex items-center justify-center">
                      <motion.span
                        animate={{ rotate: 360 }}
                        transition={{
                          duration: 1,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                        className="inline-block mr-2"
                      >
                        ⏳
                      </motion.span>
                      Memproses...
                    </span>
                  ) : (
                    <span>DAFTAR SEKARANG & DAPATKAN DISKON</span>
                  )}
                </motion.button>
              </motion.form>
            )}
          </AnimatePresence>
        </motion.section>

        {/* FAQ Section */}
        <motion.section
          className="mt-20 max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-center mb-8">
            Pertanyaan yang Sering Diajukan
          </h3>

          <div className="space-y-4">
            {[
              {
                question: "Berapa lama proses pembuatan website?",
                answer:
                  "Proses pengerjaan memakan waktu 3-7 hari kerja tergantung kompleksitas. Kami akan memberikan update progress secara berkala.",
              },
              {
                question: "Apakah bisa request revisi desain?",
                answer:
                  "Ya, kami memberikan 3 kali revisi gratis untuk memastikan Anda mendapatkan desain yang sesuai.",
              },
              {
                question: "Apakah hosting dan domain termasuk?",
                answer:
                  "Ya, semua paket sudah termasuk domain .com/.net gratis 1 tahun dan hosting premium.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10"
                whileHover={{ y: -3 }}
              >
                <h4 className="font-bold text-lg mb-2">{item.question}</h4>
                <p className="text-purple-100">{item.answer}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Final CTA */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold mb-4">Masih ragu?</h3>
          <p className="text-xl text-purple-200 mb-8">
            Konsultasi gratis dengan tim kami sekarang juga!
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <motion.a
              href="https://wa.me/6281234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center bg-green-500 hover:bg-green-600 text-white font-bold px-8 py-4 rounded-lg"
              whileHover={{ scale: 1.05 }}
            >
              <FaWhatsapp className="mr-2 text-xl" />
              WhatsApp Kami
            </motion.a>

            <Link
              to="/portfolio"
              className="flex items-center justify-center bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold px-8 py-4 rounded-lg"
            >
              Lihat Portfolio
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PromoPage;
