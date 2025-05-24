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
  },
  {
    icon: <FaMobileAlt size={30} />,
    title: "Responsif",
    desc: "Nyaman diakses dari HP, tablet, maupun laptop tanpa hambatan.",
  },
  {
    icon: <FaBolt size={30} />,
    title: "Cepat & Efisien",
    desc: "Proses pengerjaan cepat tanpa mengorbankan kualitas.",
  },
  {
    icon: <FaSearch size={30} />,
    title: "SEO Friendly",
    desc: "Mudah ditemukan di Google agar bisnismu makin dikenal.",
  },
  {
    icon: <FaRocket size={30} />,
    title: "Optimasi Performa",
    desc: "Website ringan dan cepat diakses kapan saja, di mana saja.",
  },
  {
    icon: <FaThumbsUp size={30} />,
    title: "Support & Revisi",
    desc: "Gratis konsultasi & revisi selama masa pengembangan.",
  },
];

const Benefits = () => {
  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-10 text-blue-900"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Kenapa Harus Pilih Kami?
        </motion.h2>

        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {benefitsData.map((item, index) => (
            <motion.div
              key={index}
              className="bg-blue-50 p-6 rounded-xl shadow hover:shadow-lg transition-all duration-300 text-left"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="text-blue-700 mb-4 transition-transform duration-300 transform hover:scale-110">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold text-blue-900 mb-2">
                {item.title}
              </h3>
              <p className="text-slate-600">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Optional CTA Button */}
        <motion.div className="mt-12 text-center" whileHover={{ scale: 1.05 }}>
          <button className="bg-blue-900 text-white px-8 py-3 rounded-full font-medium hover:bg-blue-700 transition-all duration-300">
            Pelajari Paket Kami
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Benefits;
