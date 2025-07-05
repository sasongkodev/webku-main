import React from "react";
import { motion } from "framer-motion";
import {
  FaBolt,
  FaMobileAlt,
  FaPaintBrush,
  FaSearch,
  FaRocket,
  FaThumbsUp,
} from "react-icons/fa";

const benefitsData = [
  {
    icon: <FaPaintBrush size={30} />,
    title: "Desain Modern",
    desc: "Tampilan yang estetis & profesional sesuai branding bisnis kamu.",
    color: "from-purple-500 to-indigo-500",
  },
  {
    icon: <FaMobileAlt size={30} />,
    title: "Responsif",
    desc: "Nyaman diakses dari HP, tablet, maupun laptop tanpa hambatan.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: <FaBolt size={30} />,
    title: "Cepat & Efisien",
    desc: "Proses pengerjaan cepat tanpa mengorbankan kualitas.",
    color: "from-amber-500 to-yellow-500",
  },
  {
    icon: <FaSearch size={30} />,
    title: "SEO Friendly",
    desc: "Mudah ditemukan di Google agar bisnismu makin dikenal.",
    color: "from-emerald-500 to-teal-500",
  },
  {
    icon: <FaRocket size={30} />,
    title: "Optimasi Performa",
    desc: "Website ringan dan cepat diakses kapan saja, di mana saja.",
    color: "from-red-500 to-pink-500",
  },
  {
    icon: <FaThumbsUp size={30} />,
    title: "Support & Revisi",
    desc: "Gratis konsultasi & revisi selama masa pengembangan.",
    color: "from-green-500 to-lime-500",
  },
];

const Benefits = () => {
  return (
    <section className="relative bg-white py-20 px-6 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-0 left-0 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="inline-block text-sm font-semibold tracking-wider text-blue-600 uppercase mb-3">
            Keunggulan Kami
          </span>
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Kenapa Harus Pilih Kami?
          </motion.h2>
          <motion.p
            className="text-gray-600 max-w-2xl mx-auto text-lg"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Solusi lengkap untuk kebutuhan digital bisnis Anda dengan kualitas
            terbaik
          </motion.p>
        </motion.div>

        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {benefitsData.map((item, index) => (
            <motion.div
              key={index}
              className="relative group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="absolute inset-0 bg-gradient-to-br rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${item.color} blur-md"></div>

              <div className="relative h-full bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 group-hover:-translate-y-2">
                <div
                  className={`inline-flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-gradient-to-br ${item.color} text-white shadow-md`}
                >
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    {item.icon}
                  </motion.div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.desc}</p>

                <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.4)",
            }}
            whileTap={{ scale: 0.95 }}
            className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 shadow-lg"
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              Pelajari Paket Kami
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
            <span className="absolute inset-0 bg-gradient-to-r from-blue-700 to-indigo-700 opacity-0 hover:opacity-100 transition-opacity duration-300 -z-0"></span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Benefits;
