import React, { useEffect, useRef, useState } from "react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";

const testimonials = [
  {
    name: "Andi Pratama",
    role: "Owner LaundryKilat",
    message:
      "Layanan mereka luar biasa! Website saya sekarang tampil profesional dan customer bisa order lebih mudah. Pendapatan meningkat 2x lipat!",
    color: "bg-gradient-to-br from-purple-500 to-pink-500",
  },
  {
    name: "Dewi Sartika",
    role: "Founder Klinik SehatQ",
    message:
      "Desainnya modern dan informatif. Saya sangat puas dengan hasilnya. Semua kebutuhan kami terpenuhi!",
    color: "bg-gradient-to-br from-blue-500 to-teal-400",
  },
  {
    name: "Rudi Hartono",
    role: "CEO Tambang Jaya Abadi",
    message:
      "Website perusahaan kami kini tampil meyakinkan di mata investor. Mereka bekerja cepat, tepat, dan sangat komunikatif.",
    color: "bg-gradient-to-br from-yellow-400 to-red-500",
  },
];

const Testimonials = () => {
  const [active, setActive] = useState(0);
  const ref = useRef();

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Helmet>
        <title>Testimoni - WebHemat</title>
        <meta
          name="description"
          content="Inilah beberapa testimoni dari klien kami yang telah menggunakan layanan pembuatan website."
        />
        <meta
          name="keywords"
          content="testimoni website, ulasan klien, pembuatan website UMKM, desain web profesional, review client"
        />

        {/* Open Graph */}
        <meta property="og:title" content="Testimoni Klien - WebHemat" />
        <meta
          property="og:description"
          content="Baca testimoni dari para pelanggan kami yang sudah merasa puas dengan layanan pembuatan website."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.webhemat.com/testimoni " />
        <meta
          property="og:image"
          content="https://www.dropbox.com/scl/fi/39k2ibbd7t7c8ry2v82ra/web2.png?rlkey=giox4e48tyjpb9ovrlztq4hul&st=f26dlz44&dl=0&raw=1 "
        />
        <meta property="og:site_name" content="WebHemat" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Testimoni Klien - WebHemat" />
        <meta
          name="twitter:description"
          content="Baca testimoni dari para pelanggan kami yang sudah merasa puas dengan layanan pembuatan website."
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
            name: "Testimoni Klien - WebHemat",
            description:
              "Baca testimoni dari para pelanggan kami yang sudah merasa puas dengan layanan pembuatan website.",
            url: "https://www.webhemat.com/testimoni ",
            image:
              "https://www.dropbox.com/scl/fi/39k2ibbd7t7c8ry2v82ra/web2.png?rlkey=giox4e48tyjpb9ovrlztq4hul&st=f26dlz44&dl=0&raw=1 ",
            mainEntity: {
              "@type": "ItemList",
              itemListElement: testimonials.map((testimonial, index) => ({
                "@type": "ListItem",
                position: index + 1,
                name: testimonial.name,
                description: testimonial.message,
                url: `https://www.webhemat.com/testimoni/ ${testimonial.name
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
        className="relative py-20 px-6 bg-gray-100 overflow-hidden text-white"
        id="testimonials"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
          Apa Kata Mereka?
        </h2>

        <div
          ref={ref}
          className="max-w-4xl mx-auto text-center p-8 rounded-2xl shadow-xl transition-all duration-700 transform scale-100"
        >
          <div
            className={`p-8 rounded-2xl ${testimonials[active].color} shadow-lg transition-all duration-500 ease-in-out`}
          >
            <FaQuoteLeft className="text-3xl mb-4 opacity-70" />
            <p className="text-lg leading-relaxed italic">
              {testimonials[active].message}
            </p>
            <FaQuoteRight className="text-3xl mt-4 opacity-70" />

            <div className="mt-6">
              <h4 className="text-xl font-bold">{testimonials[active].name}</h4>
              <span className="text-sm opacity-90">
                {testimonials[active].role}
              </span>
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-6 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActive(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                active === index ? "bg-gray-800" : "bg-gray-400"
              }`}
              role="button"
              aria-label={`Pindah ke testimoni ${index + 1}`}
            ></button>
          ))}
        </div>
      </motion.section>
    </>
  );
};

export default Testimonials;
