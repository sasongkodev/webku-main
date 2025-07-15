import React from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import { FaCheck, FaCrown, FaStar, FaBolt, FaShieldAlt } from "react-icons/fa";

const packages = [
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
          content="Pilih paket pembuatan website yang sesuai dengan kebutuhan bisnismu. Mulai dari Rp 900.000 hingga Rp 3.000.000."
        />
        <meta
          name="keywords"
          content="harga website, paket pembuatan website, biaya desain web, harga domain, hosting web, website UMKM, toko online"
        />
        <meta property="og:title" content="Paket Harga Website - WebHemat" />
        <meta
          property="og:description"
          content="Pilih paket pembuatan website yang sesuai dengan kebutuhan bisnismu. Mulai dari Rp 900.000 hingga Rp 3.000.000."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://www.webhemat.com/paket-harga "
        />
        <meta
          property="og:image"
          content="https://www.dropbox.com/scl/fi/39k2ibbd7t7c8ry2v82ra/web2.png?rlkey=giox4e48tyjpb9ovrlztq4hul&st=f26dlz44&dl=0&raw=1"
        />
        <meta property="og:site_name" content="WebHemat" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Paket Harga Website - WebHemat" />
        <meta
          name="twitter:description"
          content="Pilih paket pembuatan website yang sesuai dengan kebutuhan bisnismu. Mulai dari Rp 900.000 hingga Rp 3.000.000."
        />
        <meta
          name="twitter:image"
          content=" https://www.dropbox.com/scl/fi/39k2ibbd7t7c8ry2v82ra/web2.png?rlkey=giox4e48tyjpb9ovrlztq4hul&st=f26dlz44&dl=0&raw=1"
        />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": " https://schema.org ",
            "@type": "WebPage",
            name: "Paket Harga Website - WebHemat",
            description:
              "Pilih paket pembuatan website yang sesuai dengan kebutuhan bisnismu. Mulai dari Rp 900.000 hingga Rp 3.000.000.",
            url: "https://www.webhemat.com/paket-harga ",
            image:
              "https://www.dropbox.com/scl/fi/39k2ibbd7t7c8ry2v82ra/web2.png?rlkey=giox4e48tyjpb9ovrlztq4hul&st=f26dlz44&dl=0&raw=1",
            mainEntity: {
              "@type": "ItemList",
              itemListElement: packages.map((pkg, index) => ({
                "@type": "ListItem",
                position: index + 1,
                name: pkg.name,
                description: `${pkg.price} - ${pkg.features[0]}`,
                url: ` https://www.webhemat.com/paket/ ${pkg.name
                  .toLowerCase()
                  .replace(/\s+/g, "-")}`,
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
        id="pricing"
        className="relative py-20 px-4 bg-gradient-to-b from-gray-50 to-white"
      >
        {/* Decorative Blobs */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
          <div className="absolute top-0 left-0 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Section Header */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="inline-block text-sm font-semibold tracking-wider text-blue-600 uppercase mb-3">
              Pilihan Paket
            </span>
            <motion.h2
              className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Paket Harga Website
            </motion.h2>
            <motion.p
              className="text-gray-600 max-w-2xl mx-auto text-lg"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Pilih paket terbaik untuk mendukung kebutuhan digital bisnismu
              dengan harga terjangkau
            </motion.p>
          </motion.div>

          {/* Pricing Cards Grid */}
          <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {packages.map((pkg, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative group"
              >
                {pkg.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-yellow-400 to-amber-500 text-white text-xs font-bold px-4 py-1 rounded-full shadow-md z-10">
                    POPULAR
                  </div>
                )}
                <div
                  className={`h-full bg-white rounded-xl shadow-md hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between overflow-hidden ${
                    pkg.popular ? "border-t-4 border-amber-400" : ""
                  }`}
                >
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center">
                        <div
                          className={`w-12 h-12 rounded-lg bg-gradient-to-br ${pkg.color} flex items-center justify-center text-white mr-4`}
                        >
                          {pkg.icon}
                        </div>
                        <h3 className="text-xl font-bold text-gray-900">
                          {pkg.name}
                        </h3>
                      </div>
                    </div>
                    <div className="mb-6">
                      <p className="text-3xl font-extrabold text-gray-900">
                        {pkg.price}
                        <span className="text-sm font-normal text-gray-500">
                          {" "}
                          /sekali bayar
                        </span>
                      </p>
                    </div>
                    <ul className="space-y-3 mb-8">
                      {pkg.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <FaCheck className="text-green-500 flex-shrink-0 mt-1 mr-2" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="px-6 pb-6">
                    <motion.button
                      whileHover={{
                        scale: 1.03,
                        background: `linear-gradient(to right, ${
                          pkg.buttonColor
                            .replace("from-", "")
                            .replace("to-", "")
                            .split(" ")[0]
                        }, ${
                          pkg.buttonColor
                            .replace("from-", "")
                            .replace("to-", "")
                            .split(" ")[2]
                        })`,
                        boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)",
                      }}
                      whileTap={{ scale: 0.98 }}
                      className={`group relative overflow-hidden w-full py-3 px-6 rounded-lg font-bold text-white shadow-md transition-all duration-300 ${
                        pkg.popular
                          ? `bg-gradient-to-r ${pkg.buttonColor} shadow-lg`
                          : `bg-gradient-to-r ${pkg.buttonColor}`
                      }`}
                      onClick={() =>
                        window.open(
                          `https://wa.me/628985884161?text=Halo%20saya%20tertarik%20dengan%20${encodeURIComponent(
                            pkg.name
                          )}`,
                          "_blank"
                        )
                      }
                    >
                      <span className="relative z-10 flex items-center justify-center gap-2">
                        Pesan Sekarang
                        <span className="inline-block transform translate-x-0 group-hover:translate-x-1 transition-transform duration-300">
                          💬
                        </span>
                      </span>
                      <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></span>
                      <span className="absolute inset-0 pointer-events-none">
                        <span className="absolute -left-1/2 -top-1/2 w-full h-full bg-white opacity-10 rounded-full transform scale-0 group-hover:scale-150 transition-transform duration-700 ease-out"></span>
                      </span>
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Guarantee Info */}
          <motion.div
            className="mt-12 bg-blue-50 rounded-xl p-6 md:p-8 border border-blue-100"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col md:flex-row items-center">
              <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full text-blue-600 mb-4 md:mb-0 md:mr-6">
                <FaShieldAlt size={24} />
              </div>
              <div className="text-center md:text-left">
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  Garansi 100% Kepuasan
                </h4>
                <p className="text-gray-600">
                  Kami memberikan jaminan uang kembali jika Anda tidak puas
                  dengan hasil website kami dalam 14 hari pertama.
                </p>
              </div>
            </div>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            className="mt-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.button
              whileHover={{
                scale: 1.05,
                background: "linear-gradient(to right, #4f46e5, #7c3aed)",
                boxShadow: "0 10px 25px -5px rgba(79, 70, 229, 0.4)",
              }}
              whileTap={{ scale: 0.95 }}
              className="group relative overflow-hidden bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 shadow-lg"
              onClick={() =>
                window.open(
                  ` https://wa.me/628985884161?text=Saya%20ingin%20bertanya%20tentang%20paket%20custom`,
                  "_blank"
                )
              }
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                Butuh Paket Khusus?
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 group-hover:translate-x-1 transition-transform"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-blue-700 to-indigo-700 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></span>
            </motion.button>
          </motion.div>
        </div>
      </motion.section>
    </>
  );
};

export default Pricing;
