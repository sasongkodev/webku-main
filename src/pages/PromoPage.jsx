import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";

const PromoPage = () => {
  const [countdown, setCountdown] = useState(15 * 60); // 15 menit dalam detik

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => (prev > 0 ? prev - 1 : 15 * 60));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds) => {
    const m = String(Math.floor(seconds / 60)).padStart(2, "0");
    const s = String(seconds % 60).padStart(2, "0");
    return `${m}:${s}`;
  };

  const paketItems = [
    "Gratis Domain .com atau .net selama 1 tahun",
    "Hosting RAM 1 GB & Storage 2 GB",
    "Free SSL untuk keamanan",
    "Backup Harian",
    "Desain Premium & Responsif",
    "2 Artikel SEO-ready",
    "Setup Protection",
    "2 Halaman (utama + tambahan)",
    "Perpanjangan: Rp600.000",
    "Catatan: Tidak termasuk cPanel",
  ];

  const testimonials = [
    {
      name: "Andi Wijaya",
      location: "Jakarta",
      message:
        "Website saya jadi terlihat profesional dan responsif! Sangat puas dengan hasilnya.",
    },
    {
      name: "Siti Aminah",
      location: "Bandung",
      message:
        "Paket ini sangat hemat, cocok untuk usaha kecil seperti toko online saya.",
    },
    {
      name: "Rudi Pradita",
      location: "Surabaya",
      message:
        "Pelayanan cepat dan ramah. Website sudah live dalam 3 hari saja!",
    },
  ];

  const [activeTestimonial, setActiveTestimonial] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) =>
        prev === testimonials.length - 1 ? 0 : prev + 1
      );
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 to-blue-500 text-white flex flex-col items-center justify-between relative overflow-hidden px-4 md:px-0">
      {/* SEO Meta Tags */}
      <Helmet>
        <title>Promo Website Murah - Web Hemat</title>
        <meta
          name="description"
          content="Dapatkan website profesional hanya Rp 750.000 selama promo hari ini!"
        />
        <meta
          property="og:title"
          content="Promo Spesial Hari Ini – Web Hemat"
        />
        <meta
          property="og:description"
          content="Website profesional harga hemat hanya Rp 750.000."
        />
        <meta
          property="og:image"
          content="https://example.com/promo-image.jpg "
        />
      </Helmet>

      {/* Wave Effect */}
      <svg
        className="absolute top-0 left-0 w-full h-32 text-white"
        viewBox="0 0 1440 320"
      >
        <path
          fill="white"
          fillOpacity="0.1"
          d="M0,64L40,96C80,128,160,192,240,213.3C320,235,400,213,480,181.3C560,149,640,107,720,101.3C800,96,880,128,960,138.7C1040,149,1120,139,1200,138.7C1280,139,1360,149,1400,154.7L1440,160L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"
        ></path>
      </svg>

      {/* Hero Section */}
      <motion.h2 className="sr-only">Halaman Promo Spesial</motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="pt-20 px-6 text-center space-y-6 max-w-2xl"
      >
        <h1 className="text-4xl md:text-5xl font-bold drop-shadow-xl">
          Promo Spesial Hari Ini 🎉
        </h1>
        <p className="text-lg text-white/80">
          Dapatkan website profesional dengan harga hemat. Promo terbatas hanya
          selama:
        </p>
        <div className="text-5xl font-mono font-bold bg-white text-purple-700 rounded-xl shadow-xl px-6 py-2 inline-block">
          ⏳ {formatTime(countdown)}
        </div>
        {countdown <= 180 && (
          <div className="animate-pulse text-red-400 font-bold text-xl mt-2">
            ⚠️ Hanya {Math.floor(countdown / 60)} menit tersisa!
          </div>
        )}
        <Link
          to="#form-section"
          className="mt-6 inline-block bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-3 px-6 rounded-xl shadow-lg transition"
        >
          Pesan Sekarang
        </Link>
        <Link to="/" className="mt-4 text-white hover:underline">
          Kembali ke Beranda
        </Link>
      </motion.div>

      {/* Paket Promo Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mt-12 max-w-4xl mx-auto bg-white bg-opacity-10 rounded-xl p-8 shadow-lg text-white"
      >
        <h3 className="text-3xl font-semibold mb-6 text-center">
          Paket Starter - Promo Rp 750.000
        </h3>
        <ul className="space-y-3 max-w-xl mx-auto">
          {paketItems.map((item, idx) => (
            <li key={idx} className="flex items-center space-x-3 text-lg">
              <span className="text-green-400 font-bold text-xl">✓</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p className="mt-6 text-center text-sm text-yellow-300 font-semibold">
          * Harga normal Rp 900.000
        </p>
      </motion.section>

      {/* Benefit Icons */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="mt-10 grid grid-cols-2 md:grid-cols-3 gap-4 max-w-md mx-auto"
      >
        <div className="flex items-center space-x-2 text-white">
          <span className="text-2xl">✅</span>
          <span>Gratis Domain</span>
        </div>
        <div className="flex items-center space-x-2 text-white">
          <span className="text-2xl">⚡</span>
          <span>Hosting Cepat</span>
        </div>
        <div className="flex items-center space-x-2 text-white">
          <span className="text-2xl">💡</span>
          <span>Desain Premium</span>
        </div>
      </motion.div>

      {/* Testimoni Slider */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="mt-12 max-w-md mx-auto bg-white bg-opacity-10 rounded-lg p-4 shadow-lg"
      >
        <h3 className="font-bold text-xl mb-2">Testimoni Pelanggan</h3>
        <div className="text-left">
          <p className="italic">{testimonials[activeTestimonial].message}</p>
          <p className="mt-2 text-sm text-white/80">
            — {testimonials[activeTestimonial].name},{" "}
            {testimonials[activeTestimonial].location}
          </p>
        </div>
      </motion.section>

      {/* FAQ Section */}
      <motion.section
        id="faq"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="mt-12 max-w-2xl mx-auto"
      >
        <h3 className="text-2xl font-semibold mb-4">FAQ</h3>
        <div className="space-y-3">
          <details className="bg-white/10 p-4 rounded-lg cursor-pointer">
            <summary>Apakah domain gratis bisa dipilih?</summary>
            <p className="mt-2 text-sm">
              Ya, kamu bisa memilih domain .com atau .net selama promo
              berlangsung.
            </p>
          </details>
          <details className="bg-white/10 p-4 rounded-lg cursor-pointer">
            <summary>Apakah desain bisa disesuaikan?</summary>
            <p className="mt-2 text-sm">
              Desain sudah premium dan responsif, tapi bisa dikustomisasi
              sedikit sesuai kebutuhan.
            </p>
          </details>
        </div>
      </motion.section>

      {/* Form Pemesanan */}
      <motion.section
        id="form-section"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1 }}
        className="mt-12 max-w-md mx-auto"
      >
        <h3 className="text-2xl font-semibold mb-4 text-center">
          Klaim Promo Sekarang
        </h3>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Nama Lengkap"
            className="w-full p-3 mb-3 rounded bg-white/20"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 mb-3 rounded bg-white/20"
          />
          <input
            type="tel"
            placeholder="Nomor WhatsApp"
            className="w-full p-3 mb-3 rounded bg-white/20"
          />
          <button
            type="submit"
            className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-2 px-6 rounded-lg transition w-full"
          >
            Kirim Pesanan
          </button>
        </form>
      </motion.section>

      {/* Footer */}
      <footer className="text-sm py-6 text-white/60 text-center w-full">
        &copy; {new Date().getFullYear()} Web Hemat. Promo ini hanya berlaku
        sekali dalam sehari.
      </footer>

      {/* Tombol Fixed untuk Mobile */}
      <div className="fixed bottom-0 left-0 right-0 bg-yellow-400 py-4 px-6 flex justify-center z-50 md:hidden">
        <Link
          to="#form-section"
          className="bg-purple-700 text-white font-bold py-2 px-6 rounded-lg shadow-lg"
        >
          Klaim Sekarang
        </Link>
      </div>
    </div>
  );
};

export default PromoPage;
