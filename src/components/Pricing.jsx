import React from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";

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

        {/* Open Graph */}
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
          content="https://www.dropbox.com/scl/fi/39k2ibbd7t7c8ry2v82ra/web2.png?rlkey=giox4e48tyjpb9ovrlztq4hul&st=f26dlz44&dl=0&raw=1 "
        />
        <meta property="og:site_name" content="WebHemat" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Paket Harga Website - WebHemat" />
        <meta
          name="twitter:description"
          content="Pilih paket pembuatan website yang sesuai dengan kebutuhan bisnismu. Mulai dari Rp 900.000 hingga Rp 3.000.000."
        />
        <meta
          name="twitter:image"
          content="https://www.dropbox.com/scl/fi/39k2ibbd7t7c8ry2v82ra/web2.png?rlkey=giox4e48tyjpb9ovrlztq4hul&st=f26dlz44&dl=0&raw=1 "
        />

        {/* JSON-LD Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org ",
            "@type": "WebPage",
            name: "Paket Harga Website - WebHemat",
            description:
              "Pilih paket pembuatan website yang sesuai dengan kebutuhan bisnismu. Mulai dari Rp 900.000 hingga Rp 3.000.000.",
            url: "https://www.webhemat.com/paket-harga ",
            image:
              "https://www.dropbox.com/scl/fi/39k2ibbd7t7c8ry2v82ra/web2.png?rlkey=giox4e48tyjpb9ovrlztq4hul&st=f26dlz44&dl=0&raw=1 ",
            mainEntity: {
              "@type": "ItemList",
              itemListElement: packages.map((pkg, index) => ({
                "@type": "ListItem",
                position: index + 1,
                name: pkg.name,
                description: `${pkg.price} - ${pkg.features[0]}`,
                url: `https://www.webhemat.com/paket/ ${pkg.name
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
        className="py-20 px-4 bg-gray-50"
      >
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900">
            Paket Harga
          </h2>
          <p className="text-gray-600 mt-2 max-w-xl mx-auto">
            Pilih paket terbaik untuk mendukung kebutuhan digital bisnismu
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
          {packages.map((pkg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`bg-white rounded-2xl shadow-md hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between p-6 ${
                pkg.name === "Paket Pro"
                  ? "border-2 border-blue-600 shadow-lg"
                  : ""
              }`}
            >
              <div>
                <h3 className="text-xl font-bold text-blue-700 mb-2">
                  {pkg.name}
                </h3>
                <p className="text-3xl font-extrabold text-blue-900 mb-4">
                  {pkg.price}
                </p>
                <ul className="space-y-2 text-gray-700 text-sm mb-6">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-green-600 font-bold mr-2">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <button className="w-full mt-auto bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-xl transition duration-300">
                Konsultasi Sekarang
              </button>
            </motion.div>
          ))}
        </div>

        {/* Optional CTA Button */}
        <div className="mt-10 text-center">
          <button className="bg-blue-900 text-white px-6 py-2 rounded-full font-medium hover:bg-blue-700 transition-all duration-300">
            Lihat Semua Paket
          </button>
        </div>
      </motion.section>
    </>
  );
};

export default Pricing;
