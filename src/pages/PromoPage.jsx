import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

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
    <div className="min-h-screen bg-gradient-to-br from-purple-700 to-blue-600 text-white flex flex-col items-center justify-center p-6">
      <Helmet>
        <title>Promo Website Hemat</title>
      </Helmet>

      <motion.h1
        className="text-4xl md:text-5xl font-bold text-center"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Promo Spesial Website 🚀
      </motion.h1>

      <p className="mt-3 text-lg text-center text-white/80 max-w-md">
        Dapatkan website profesional dengan harga terjangkau. Promo hanya
        berlaku:
      </p>

      <div className="text-3xl font-mono bg-white text-purple-700 rounded-full px-6 py-2 my-4 shadow-md">
        ⏳ {formatTime(countdown)}
      </div>

      <Link
        to="#form"
        className="mt-3 bg-yellow-400 text-black font-semibold px-5 py-2 rounded-full hover:bg-yellow-500 transition"
      >
        Klaim Promo Sekarang
      </Link>

      {/* Paket Section */}
      <motion.section
        className="mt-10 max-w-lg w-full bg-white rounded-xl text-gray-800 p-6 shadow-md"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-2xl font-semibold text-center mb-4">
          Paket Hemat Rp750.000
        </h2>
        <ul className="list-disc list-inside space-y-2">
          {paketItems.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </motion.section>

      {/* Form Section */}
      <motion.section
        id="form"
        className="mt-10 max-w-md w-full bg-white rounded-xl text-gray-800 p-6 shadow-md"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h3 className="text-2xl font-semibold text-center mb-4">
          Klaim Sekarang
        </h3>
        {success ? (
          <p className="text-green-500 font-bold text-center">
            🎉 Pesanan Berhasil Terkirim!
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="nama"
              placeholder="Nama Lengkap"
              value={formData.nama}
              onChange={handleChange}
              required
              className="w-full rounded-lg border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full rounded-lg border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <input
              type="tel"
              name="nohp"
              placeholder="No. HP"
              value={formData.nohp}
              onChange={handleChange}
              required
              className="w-full rounded-lg border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 rounded-lg transition"
            >
              {loading ? "Mengirim..." : "Kirim Pesanan"}
            </button>
          </form>
        )}
      </motion.section>

      <Link to="/" className="mt-4 text-sm text-white/80 hover:underline">
        ← Kembali ke Beranda
      </Link>
    </div>
  );
};

export default PromoPage;
