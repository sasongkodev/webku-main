import React, { useState } from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";

const faqs = [
  {
    question: "Apa saja yang termasuk dalam paket pembuatan website?",
    answer:
      "Semua paket termasuk domain, hosting, SSL, desain responsif, dan setup dasar keamanan serta artikel SEO sesuai paket.",
  },
  {
    question: "Berapa lama proses pembuatan website?",
    answer:
      "Rata-rata 3–7 hari kerja tergantung jumlah halaman dan kompleksitas desain.",
  },
  {
    question: "Apakah saya bisa melakukan revisi desain?",
    answer: "Tentu! Kami memberikan hingga 2 kali revisi desain secara gratis.",
  },
  {
    question: "Bagaimana proses pembayaran dan perpanjangan?",
    answer:
      "Pembayaran dilakukan di awal. Perpanjangan tahunan hanya mencakup domain dan hosting.",
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
      <Helmet>
        <title>Pertanyaan Umum - WebHemat</title>
        <meta
          name="description"
          content="Temukan jawaban atas pertanyaan umum tentang layanan pembuatan website kami. Mulai dari paket harga hingga proses pengerjaan."
        />
        <meta
          name="keywords"
          content="faq website, pertanyaan umum pembuatan website, pertanyaan klien, layanan web UMKM, website profesional"
        />

        {/* Open Graph */}
        <meta property="og:title" content="FAQ - WebHemat" />
        <meta
          property="og:description"
          content="Temukan jawaban atas pertanyaan umum tentang layanan pembuatan website kami. Mulai dari paket harga hingga proses pengerjaan."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.webhemat.com/faq " />
        <meta
          property="og:image"
          content="https://www.dropbox.com/scl/fi/39k2ibbd7t7c8ry2v82ra/web2.png?rlkey=giox4e48tyjpb9ovrlztq4hul&st=f26dlz44&dl=0&raw=1 "
        />
        <meta property="og:site_name" content="WebHemat" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="FAQ - WebHemat" />
        <meta
          name="twitter:description"
          content="Temukan jawaban atas pertanyaan umum tentang layanan pembuatan website kami. Mulai dari paket harga hingga proses pengerjaan."
        />
        <meta
          name="twitter:image"
          content="https://www.dropbox.com/scl/fi/39k2ibbd7t7c8ry2v82ra/web2.png?rlkey=giox4e48tyjpb9ovrlztq4hul&st=f26dlz44&dl=0&raw=1 "
        />

        {/* JSON-LD Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org ",
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
        className="py-16 bg-gradient-to-br from-purple-50 to-blue-50"
        id="faq"
      >
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-900 mb-10">
            Pertanyaan yang Sering Diajukan
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white border border-blue-200 rounded-xl shadow-sm overflow-hidden"
              >
                <button
                  onClick={() => toggle(index)}
                  className="w-full text-left px-6 py-4 font-semibold text-blue-800 hover:bg-blue-50 focus:outline-none transition-all duration-300 flex justify-between items-center"
                  role="button"
                  aria-expanded={activeIndex === index}
                  aria-controls={`faq-answer-${index}`}
                >
                  {faq.question}
                  <span className="text-xl">
                    {activeIndex === index ? "−" : "+"}
                  </span>
                </button>
                <div
                  id={`faq-answer-${index}`}
                  className={`px-6 pb-4 text-gray-600 text-sm md:text-base transition-all duration-500 ease-in-out ${
                    activeIndex === index
                      ? "max-h-40"
                      : "max-h-0 overflow-hidden"
                  }`}
                >
                  {faq.answer}
                </div>
              </div>
            ))}
          </div>

          {/* Optional Button */}
          <div className="mt-8 text-center">
            <button
              onClick={() =>
                setActiveIndex(activeIndex === null ? faqs.length - 1 : null)
              }
              className="bg-blue-900 text-white px-6 py-2 rounded-full font-medium hover:bg-blue-700 transition-all duration-300"
            >
              {activeIndex === null
                ? "Tampilkan Semua Jawaban"
                : "Sembunyikan Semua"}
            </button>
          </div>
        </div>
      </motion.section>
    </>
  );
};

export default FAQ;
