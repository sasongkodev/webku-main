import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import Tilt from 'react-parallax-tilt';

const PromoPage = () => {
  const [countdown, setCountdown] = useState(15 * 60);
  const [formData, setFormData] = useState({ nama: "", email: "", nohp: "" });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const paketItems = [
    "Gratis Domain .com / .net 1 tahun",
    "Hosting RAM 1GB & Storage 2GB",
    "Free SSL & Backup Harian",
    "Desain Premium & Responsif",
    "2 Artikel SEO-ready",
    "Setup Protection & 2 Halaman",
    "Perpanjangan: Rp600.000 (tanpa cPanel)",
  ];

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
    <div className="min-h-screen bg-gradient-to-br from-purple-800 via-blue-700 to-indigo-800 text-white flex flex-col items-center justify-center p-6 space-y-8">
      <Helmet>
        <title>Promo Website Hemat</title>
        <meta
          name="description"
          content="Dapatkan website profesional dengan harga terjangkau hanya dalam waktu terbatas!"
        />
      </Helmet>

      <motion.h1
        className="text-5xl font-bold text-center drop-shadow-lg"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        🚀 Promo Spesial Website
      </motion.h1>

      <p className="text-lg text-center text-white/90 max-w-xl">
        Dapatkan website profesional dengan harga terjangkau. Promo hanya berlaku:
      </p>

      <div className="text-4xl font-mono bg-white text-purple-700 rounded-full px-8 py-3 shadow-xl animate-pulse">
        ⏳ {formatTime(countdown)}
      </div>

      <Link
        to="#form"
        className="bg-yellow-400 text-black font-semibold px-6 py-3 rounded-full hover:bg-yellow-500 transition transform hover:scale-105 shadow-lg"
      >
        Klaim Promo Sekarang
      </Link>

      <motion.section
        className="max-w-lg w-full"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <Tilt glareEnable={true} glareMaxOpacity={0.2} scale={1.02}>
          <div className="bg-white rounded-xl text-gray-800 p-6 shadow-2xl">
            <h2 className="text-2xl font-semibold text-center mb-4">
              🎯 Paket Hemat Rp750.000
            </h2>
            <ul className="list-disc list-inside space-y-2 text-sm">
              {paketItems.map((item, i) => (
                <li key={i} className="flex items-start">
                  <span className="mr-2 mt-1 text-green-500">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Tilt>
      </motion.section>

      <motion.section
        id="form"
        className="max-w-md w-full"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <div className="bg-white rounded-xl text-gray-800 p-6 shadow-2xl">
          <h3 className="text-2xl font-semibold text-center mb-4">
            📩 Klaim Sekarang
          </h3>

          <AnimatePresence mode="wait">
            {success ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="text-green-500 font-bold text-center"
              >
                🎉 Pesanan Berhasil Terkirim!
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {['nama', 'email', 'nohp'].map((field, i) => (
                  <div key={i} className="relative">
                    <input
                      type={field === 'email' ? 'email' : field === 'nohp' ? 'tel' : 'text'}
                      name={field}
                      placeholder={field === 'nohp' ? 'No. HP' : field === 'nama' ? 'Nama Lengkap' : 'Email'}
                      value={formData[field]}
                      onChange={handleChange}
                      required
                      className="w-full rounded-lg border border-gray-300 p-3 pl-4 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
                    />
                  </div>
                ))}

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold py-3 rounded-lg transition-all transform hover:scale-105 shadow-md"
                >
                  {loading ? "Mengirim..." : "Kirim Pesanan"}
                </button>
              </form>
            )}
          </AnimatePresence>
        </div>
      </motion.section>

      <Link to="/" className="text-sm text-white/80 hover:underline">
        ← Kembali ke Beranda
      </Link>
    </div>
  );
};

export default PromoPage;
