import React from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import { FaCheck, FaCrown, FaStar, FaBolt, FaShieldAlt } from "react-icons/fa";

const packages = [
  {
    name: "Paket UMKM",
    price: "Rp 550.000",
    features: [
      "Gratis Domain .com selama 1 tahun",
      "Hosting SSD RAM 1 GB & Storage 1 GB",
      "Free SSL untuk keamanan",
      "Desain Responsif",
      "Setup Protection",
      "Catatan: Tidak termasuk cPanel",
    ],
    popular: false,
    icon: <FaStar className="text-sky-400" />,
    color: "from-sky-500 to-cyan-600",
    buttonColor: "from-sky-500 to-cyan-600",
  },
  {
    name: "Paket Starter",
    price: "Rp 900.000",
    features: [
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
    ],
    popular: false,
    icon: <FaStar className="text-amber-400" />,
    color: "from-blue-500 to-blue-600",
    buttonColor: "from-blue-500 to-blue-600",
  },
  {
    name: "Paket Pro",
    price: "Rp 1.500.000",
    features: [
      "Gratis Domain .com atau .net selama 1 tahun",
      "Hosting SSD RAM 3 GB & Storage 5 GB",
      "Free SSL untuk keamanan",
      "Backup Harian",
      "Desain Premium & Responsif",
      "4 Artikel SEO-ready",
      "Setup Protection",
      "7 Halaman fleksibel",
      "Perpanjangan: Rp800.000",
      "Catatan: Tidak termasuk cPanel",
    ],
    popular: true,
    icon: <FaBolt className="text-yellow-400" />,
    color: "from-purple-500 to-indigo-600",
    buttonColor: "from-purple-500 to-indigo-600",
  },
  {
    name: "Paket Bisnis",
    price: "Rp 3.000.000",
    features: [
      "Gratis Domain .com atau .net selama 1 tahun",
      "Hosting SSD RAM 6 GB & Unlimited Storage",
      "Termasuk H Panel",
      "Free SSL untuk keamanan",
      "Backup Harian",
      "Desain Premium & Responsif",
      "10 Halaman fleksibel",
      "6 Artikel SEO-ready",
      "Setup Protection",
      "Perpanjangan: Rp1.300.000",
    ],
    popular: false,
    icon: <FaCrown className="text-amber-500" />,
    color: "from-emerald-500 to-teal-600",
    buttonColor: "from-emerald-500 to-teal-600",
  },
];

const Pricing = () => {
  return (
    <>
      <Helmet>
        <title>Paket Harga - WebHemat</title>
        <meta
          name="description"
          content="Pilih paket pembuatan website yang sesuai dengan kebutuhan bisnismu. Mulai dari Rp 550.000 hingga Rp 3.000.000."
        />
        <meta
          name="keywords"
          content="harga website, paket pembuatan website, biaya desain web, harga domain, hosting web, website UMKM, toko online"
        />
        <meta property="og:title" content="Paket Harga Website - WebHemat" />
        <meta
          property="og:description"
          content="Pilih paket pembuatan website yang sesuai dengan kebutuhan bisnismu. Mulai dari Rp 550.000 hingga Rp 3.000.000."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://www.webhemat.com/paket-harga"
        />
        <meta
          property="og:image"
          content="https://www.dropbox.com/scl/fi/39k2ibbd7t7c8ry2v82ra/web2.png?raw=1&dl=0"
        />
        <meta property="og:site_name" content="WebHemat" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Paket Harga Website - WebHemat" />
        <meta
          name="twitter:description"
          content="Pilih paket pembuatan website yang sesuai dengan kebutuhan bisnismu. Mulai dari Rp 550.000 hingga Rp 3.000.000."
        />
        <meta
          name="twitter:image"
          content="https://www.dropbox.com/scl/fi/39k2ibbd7t7c8ry2v82ra/web2.png?raw=1&dl=0"
        />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: "Paket Harga Website - WebHemat",
            description:
              "Pilih paket pembuatan website yang sesuai dengan kebutuhan bisnismu. Mulai dari Rp 550.000 hingga Rp 3.000.000.",
            url: "https://www.webhemat.com/paket-harga",
            image:
              "https://www.dropbox.com/scl/fi/39k2ibbd7t7c8ry2v82ra/web2.png?raw=1&dl=0",
            mainEntity: {
              "@type": "ItemList",
              name: "Daftar Paket Harga",
              itemListElement: packages.map((pkg, index) => ({
                "@type": "Offer",
                position: index + 1,
                itemOffered: {
                  "@type": "Service",
                  name: pkg.name,
                  description: pkg.features.join(" • "),
                },
                price: pkg.price.replace(/[^0-9]/g, ""),
                priceCurrency: "IDR",
                availability: "https://schema.org/InStock",
              })),
            },
          })}
        </script>
      </Helmet>

      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        id="harga"
        className="relative py-24 px-4 bg-gradient-to-b from-gray-50 via-white to-gray-50"
      >
        {/* Background Decorative Shapes */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-pulse"></div>
          <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-gradient-to-tr from-green-100 to-pink-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-pulse animation-delay-2000"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Header */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="inline-block text-sm font-semibold tracking-wider text-blue-600 uppercase mb-3 bg-blue-50 px-4 py-1 rounded-full">
              ✨ Pilihan Paket
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-gray-800 to-gray-600">
              Solusi Website Profesional
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
              Pilih paket terbaik untuk bisnis Anda — dari UMKM hingga
              perusahaan besar, semua bisa punya website keren!
            </p>
          </motion.div>

          {/* Pricing Cards */}
          <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            {packages.map((pkg, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                {pkg.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-lg z-10 flex items-center gap-1 whitespace-nowrap">
                    <FaBolt /> POPULAR
                  </div>
                )}
                <div
                  className={`bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col border-t-4 ${
                    pkg.popular ? "border-t-amber-400" : "border-transparent"
                  }`}
                >
                  <div className="p-7">
                    <div className="flex items-center mb-5">
                      <div
                        className={`w-12 h-12 rounded-xl bg-gradient-to-br ${pkg.color} flex items-center justify-center text-white mr-3 shadow-md`}
                      >
                        {pkg.icon}
                      </div>
                      <h3 className="text-xl font-bold text-gray-800">
                        {pkg.name}
                      </h3>
                    </div>

                    <div className="mb-6">
                      <span className="text-3xl font-extrabold text-gray-900">
                        {pkg.price}
                      </span>
                      <span className="text-sm text-gray-500 ml-1">
                        /sekali bayar
                      </span>
                    </div>

                    <ul className="space-y-3 mb-8">
                      {pkg.features.map((feature, i) => (
                        <li
                          key={i}
                          className="flex items-start text-sm text-gray-700 leading-relaxed"
                        >
                          <FaCheck
                            className="text-green-500 mt-1 mr-2 flex-shrink-0"
                            size={14}
                          />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="px-7 pb-7">
                    <motion.button
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.98 }}
                      className={`w-full py-3 px-6 rounded-xl font-semibold text-white bg-gradient-to-r ${pkg.buttonColor} shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2`}
                      onClick={() =>
                        window.open(
                          `https://wa.me/628985884161?text=Halo%20saya%20tertarik%20dengan%20${encodeURIComponent(
                            pkg.name
                          )}`,
                          "_blank"
                        )
                      }
                    >
                      Pesan Sekarang 💬
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Guarantee Section */}
          <motion.div
            className="mt-20 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6 md:p-8 border border-blue-100 mx-auto max-w-4xl text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col md:flex-row items-center justify-center gap-4">
              <div className="flex-shrink-0">
                <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                  <FaShieldAlt size={24} />
                </div>
              </div>
              <div>
                <h4 className="text-lg font-bold text-gray-800">
                  Garansi 100% Kepuasan
                </h4>
                <p className="text-gray-600 mt-1">
                  Uang kembali penuh jika Anda tidak puas dalam 14 hari pertama.
                </p>
              </div>
            </div>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            className="mt-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 25px rgba(59, 130, 246, 0.3)",
              }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-10 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center gap-2 mx-auto"
              onClick={() =>
                window.open(
                  "https://wa.me/628985884161?text=Saya ingin konsultasi paket custom",
                  "_blank"
                )
              }
            >
              Butuh Solusi Khusus? 📞
            </motion.button>
          </motion.div>
        </div>
      </motion.section>
    </>
  );
};

export default Pricing;
