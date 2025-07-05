import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Helmet } from "react-helmet";
import { FaChevronDown, FaChevronUp, FaQuestionCircle } from "react-icons/fa";

const faqs = [
  {
    question: "Apa saja yang termasuk dalam paket pembuatan website?",
    answer:
      "Semua paket kami mencakup domain gratis (.com atau .net) selama 1 tahun, hosting berkualitas tinggi, sertifikat SSL untuk keamanan, desain responsif yang modern, setup dasar keamanan, dan artikel SEO yang dioptimalkan sesuai dengan paket yang Anda pilih.",
    category: "Paket Layanan",
  },
  {
    question: "Berapa lama proses pembuatan website?",
    answer:
      "Proses pengerjaan biasanya memakan waktu 3-7 hari kerja, tergantung pada kompleksitas desain dan jumlah halaman yang dibutuhkan. Kami selalu berusaha menyelesaikan proyek tepat waktu tanpa mengorbankan kualitas.",
    category: "Proses Pengerjaan",
  },
  {
    question: "Apakah saya bisa melakukan revisi desain?",
    answer:
      "Ya, tentu saja! Kami memberikan 2 kali revisi desain secara gratis untuk memastikan Anda mendapatkan tampilan yang sesuai dengan keinginan Anda. Revisi tambahan tersedia dengan biaya yang sangat terjangkau.",
    category: "Revisi & Dukungan",
  },
  {
    question: "Bagaimana proses pembayaran dan perpanjangan?",
    answer:
      "Pembayaran dilakukan di awal sebelum pekerjaan dimulai. Untuk perpanjangan tahunan, biaya hanya mencakup domain dan hosting. Kami akan mengingatkan Anda 30 hari sebelum masa berlaku berakhir.",
    category: "Pembayaran",
  },
  {
    question: "Apakah website saya akan mobile-friendly?",
    answer:
      "Tentu! Semua website yang kami buat dirancang dengan pendekatan mobile-first, sehingga tampil sempurna di semua perangkat termasuk smartphone, tablet, dan desktop.",
    category: "Teknologi",
  },
  {
    question: "Bagaimana dengan optimasi SEO?",
    answer:
      "Kami melakukan optimasi SEO dasar pada semua paket, termasuk struktur URL yang bersahabat, meta tags, kecepatan loading, dan konten yang dioptimalkan. Untuk hasil maksimal, kami menawarkan layanan SEO profesional sebagai add-on.",
    category: "SEO",
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [activeCategory, setActiveCategory] = useState("Semua");

  const toggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const toggleAll = () => {
    setActiveIndex(activeIndex === null ? faqs.length - 1 : null);
  };

  const categories = ["Semua", ...new Set(faqs.map((faq) => faq.category))];
  const filteredFaqs =
    activeCategory === "Semua"
      ? faqs
      : faqs.filter((faq) => faq.category === activeCategory);

  return (
    <>
      <Helmet>
        <title>Pertanyaan Umum - WebHemat</title>
        <meta
          name="description"
          content="Temukan jawaban lengkap tentang layanan pembuatan website profesional kami. Informasi paket, proses pengerjaan, dan dukungan teknis."
        />
        <meta
          name="keywords"
          content="FAQ website, pertanyaan pembuatan web, layanan web profesional, tanya jawab web development"
        />
        <meta property="og:title" content="FAQ Lengkap - WebHemat" />
        <meta
          property="og:description"
          content="Semua yang perlu Anda ketahui tentang layanan pembuatan website profesional kami"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.webhemat.com/faq" />
        <meta
          property="og:image"
          content="https://www.dropbox.com/scl/fi/39k2ibbd7t7c8ry2v82ra/web2.png?rlkey=giox4e48tyjpb9ovrlztq4hul&st=f26dlz44&dl=0&raw=1"
        />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((faq, index) => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer,
              },
            })),
          })}
        </script>
      </Helmet>

      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="relative py-20 bg-gradient-to-br from-blue-50 via-purple-50 to-indigo-50 overflow-hidden"
        id="faq"
      >
        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden z-0">
          <div className="absolute -top-20 -left-20 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute -top-20 -right-20 w-96 h-96 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-20 left-1/2 w-96 h-96 bg-indigo-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>

        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="inline-flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 text-white shadow-lg"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <FaQuestionCircle className="text-2xl" />
            </motion.div>
            <motion.h2
              className="text-4xl md:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              Pertanyaan Umum
            </motion.h2>
            <motion.p
              className="text-lg text-gray-600 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Temukan jawaban untuk pertanyaan yang sering diajukan tentang
              layanan kami
            </motion.p>
          </motion.div>

          {/* Category filter */}
          <motion.div
            className="flex flex-wrap justify-center gap-3 mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-gradient-to-r from-blue-500 to-indigo-500 text-white shadow-md"
                    : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>

          {/* FAQ Items */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredFaqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden"
              >
                <motion.button
                  onClick={() => toggle(index)}
                  className={`w-full text-left px-6 py-5 flex items-start justify-between transition-colors duration-300 ${
                    activeIndex === index
                      ? "bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-700"
                      : "text-gray-800 hover:bg-gray-50"
                  }`}
                  whileHover={{ scale: 1.01 }}
                >
                  <div className="flex items-start">
                    <div
                      className={`flex-shrink-0 w-10 h-10 rounded-lg mr-4 flex items-center justify-center ${
                        activeIndex === index
                          ? "bg-gradient-to-br from-blue-500 to-indigo-500 text-white"
                          : "bg-gray-100 text-gray-500"
                      }`}
                    >
                      <FaQuestionCircle className="text-lg" />
                    </div>
                    <div className="text-left">
                      <h3 className="font-semibold text-lg">{faq.question}</h3>
                      <span className="text-xs text-gray-500 mt-1">
                        {faq.category}
                      </span>
                    </div>
                  </div>
                  {activeIndex === index ? (
                    <FaChevronUp className="text-blue-500 flex-shrink-0 ml-4 mt-1" />
                  ) : (
                    <FaChevronDown className="text-gray-400 flex-shrink-0 ml-4 mt-1" />
                  )}
                </motion.button>

                <AnimatePresence>
                  {activeIndex === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 ml-14 border-l-2 border-blue-400">
                        <p className="text-gray-600">{faq.answer}</p>
                        {index % 2 === 0 && (
                          <div className="mt-4 flex flex-wrap gap-2">
                            <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                              Website
                            </span>
                            <span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded">
                              Desain
                            </span>
                            <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">
                              SEO
                            </span>
                          </div>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

          {/* CTA Section */}
          <motion.div
            className="mt-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 md:p-12 text-center text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Masih ada pertanyaan?
            </h3>
            <p className="text-blue-100 max-w-2xl mx-auto mb-6">
              Tim support kami siap membantu Anda 24/7 melalui chat, email, atau
              telepon.
            </p>
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 25px -5px rgba(255,255,255,0.3)",
              }}
              whileTap={{ scale: 0.98 }}
              className="bg-white text-blue-600 font-semibold px-8 py-3 rounded-full inline-flex items-center gap-2"
            >
              Hubungi Kami
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </motion.button>
          </motion.div>
        </div>
      </motion.section>
    </>
  );
};

export default FAQ;
