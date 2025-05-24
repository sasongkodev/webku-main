// src/components/Portfolio.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import ModalImage from "./ModalImage";

const projects = [
  {
    title: "Travel Website",
    image:
      "https://www.dropbox.com/scl/fi/39k2ibbd7t7c8ry2v82ra/web2.png?rlkey=giox4e48tyjpb9ovrlztq4hul&st=f26dlz44&dl=0&raw=1 ",
  },
  {
    title: "Sushi Bar",
    image:
      "https://www.dropbox.com/scl/fi/f7yxtsf6g8f3l356do00r/web.png?rlkey=n1lf5epol5tqmns4veum6e5kz&st=cjkkduvd&dl=0&raw=1 ",
  },
  {
    title: "Perusahaan Tambang",
    image:
      "https://www.dropbox.com/scl/fi/i1ju8d6l9s3ptz51o7lvz/web3.png?rlkey=3ipaaxsdbrydgiu0zmdmxhtz2&st=g5qoim2c&dl=0&raw=1 ",
  },
  {
    title: "Laundry",
    image:
      "https://www.dropbox.com/scl/fi/33xp9bmjlc0frgoeowpms/web5.png?rlkey=g8xj2ii5gwscxm93z27bwx5q2&st=c3iw3kek&dl=0&raw=1 ",
  },
  {
    title: "Website Kesehatan",
    image:
      "https://www.dropbox.com/scl/fi/kzpoaq0c4c9g5z2ajt027/web4.png?rlkey=qk2kgxeqbn4t8q1clv5lct64b&st=usw49l6u&dl=0&raw=1 ",
  },
];

const Portfolio = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  const openModal = (image) => {
    setSelectedImage(image);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <Helmet>
        <title>Portfolio | WebHemat</title>
        <meta
          name="description"
          content="Lihat beberapa proyek terbaik yang telah kami kerjakan untuk klien dari berbagai industri."
        />
        <meta
          name="keywords"
          content="website, desain web, pembuatan website, portofolio, UMKM, toko online, branding digital"
        />

        {/* Open Graph */}
        <meta property="og:title" content="Portfolio Kami - WebHemat" />
        <meta
          property="og:description"
          content="Beberapa contoh website profesional yang telah kami buat untuk klien dari berbagai industri."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.webhemat.com/portfolio " />
        <meta
          property="og:image"
          content="https://www.dropbox.com/scl/fi/39k2ibbd7t7c8ry2v82ra/web2.png?rlkey=giox4e48tyjpb9ovrlztq4hul&st=f26dlz44&dl=0&raw=1 "
        />
        <meta property="og:site_name" content="WebHemat" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Portfolio Kami - WebHemat" />
        <meta
          name="twitter:description"
          content="Lihat beberapa website profesional yang telah kami buat untuk klien dari berbagai industri."
        />
        <meta
          name="twitter:image"
          content="https://www.dropbox.com/scl/fi/39k2ibbd7t7c8ry2v82ra/web2.png?rlkey=giox4e48tyjpb9ovrlztq4hul&st=f26dlz44&dl=0&raw=1 "
        />
      </Helmet>

      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="py-20 bg-white text-center"
        id="portfolio"
      >
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">
            Portfolio Kami
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto mb-10">
            Beberapa website yang telah kami buat untuk klien dari berbagai
            industri.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-md overflow-hidden transform transition-all duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer"
                onClick={() => openModal(project.image)}
              >
                <img
                  src={project.image}
                  alt={`Contoh website ${project.title} dengan desain modern dan responsif`}
                  className="w-full h-[150px] sm:h-[200px] object-cover hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="p-6">
                  <h3 className="font-semibold text-lg text-blue-800 mb-2">
                    {project.title}
                  </h3>
                  <button className="text-blue-600 font-medium hover:underline">
                    Lihat Proyek
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <button className="bg-blue-900 text-white px-6 py-2 rounded-full font-medium hover:bg-blue-700 transition-all duration-300">
              Lihat Semua Proyek
            </button>
          </div>
        </div>
      </motion.section>

      {/* Modal Image */}
      <ModalImage
        isOpen={modalOpen}
        onClose={closeModal}
        imageUrl={selectedImage}
        altText="Proyek Website"
      />
    </>
  );
};

export default Portfolio;
