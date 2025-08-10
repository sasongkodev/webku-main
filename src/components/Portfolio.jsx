import React, { useState } from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import ModalImage from "./ModalImage";

const projects = [
  {
    title: "Globe Trekker",
    image:
      "https://www.dropbox.com/scl/fi/c43ijfvg80xr4vcxw12qn/Screenshot-from-2025-07-07-12-56-44.png?rlkey=434fhj7qd722hml230997rirj&st=fecrhk7w&dl=0&raw=1",
    category: "Travel & Tourism",
    description:
      "Website booking perjalanan dengan integrasi pembayaran dan sistem manajemen destinasi",
    tags: ["React", "Node.js", "MongoDB"],
    year: "2023",
    demoUrl: "https://globe-trekker-nu.vercel.app/",
    codeUrl: "https://github.com/example/travel-website",
  },
  {
    title: "AttaFood",
    image:
      "https://www.dropbox.com/scl/fi/mg910ifrpjq1hagrus59p/Screenshot-from-2025-07-08-11-05-19.png?rlkey=dwmemtdrzm50y1vi6lccknny1&st=8ynop78k&raw=1",
    category: "Food",
    description:
      " Website  produsen makanan yang Inovatif dan konsisten membuat produk berkualitas",
    tags: ["Wordpress"],
    year: "2024",
    demoUrl: "https://altaffood.id/",
    codeUrl: "https://github.com/example/sushi-bar",
  },
  {
    title: "Dagang Kuota",
    image:
      "https://www.dropbox.com/scl/fi/7nx9k2cw863stax7fgcvm/dagangkuota.jpg?rlkey=m9app89dbwcw5zojkvai4ovt1&st=65o3ptia&raw=1",
    category: "Industri",
    description: "Website Riseller Kuota Jogja",
    tags: ["Node Js", "React js", "Telwincss"],
    year: "2025",
    demoUrl: "https://dagangkuota.com",
  },
  {
    title: "Phising Kit",
    image:
      "https://www.dropbox.com/scl/fi/aqan10u8hps723hpa33sd/phising-kit.png?rlkey=jxg2ws1zz4uzw5cnopm6kw6km&st=bzd98xx0&raw=1",
    category: "Layanan",
    description:
      "Aplikasi Phising Store",
    tags: ["Wordpress", "MySQL"],
    year: "2024",
    demoUrl: "https://webhemat.freshcraftkit.my.id/contoh2/home/",
  },
  {
    title: "Website Kesehatan",
    image:
      "https://www.dropbox.com/scl/fi/kzpoaq0c4c9g5z2ajt027/web4.png?rlkey=qk2kgxeqbn4t8q1clv5lct64b&st=usw49l6u&dl=0&raw=1",
    category: "Kesehatan",
    description:
      "Platform informasi kesehatan dengan sistem booking dokter online",
    tags: ["React", "Node.js", "MongoDB"],
    year: "2023",
    demoUrl: "https://health-example.com",
    codeUrl: "https://github.com/example/health-website",
  },
  {
    title: "E-commerce Fashion",
    image:
      "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    category: "Retail",
    description:
      "Toko online fashion dengan sistem inventory dan pembayaran terintegrasi",
    tags: ["Shopify", "Liquid", "JavaScript"],
    year: "2023",
    demoUrl: "https://fashion-store-example.com",
  },
];

const categories = [
  "Semua",
  "Travel & Tourism",
  "Restoran",
  "Industri",
  "Layanan",
  "Kesehatan",
  "Retail",
];

const Portfolio = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeCategory, setActiveCategory] = useState("Semua");
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const openModal = (image, project) => {
    setSelectedImage(image);
    setSelectedProject(project);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const filteredProjects =
    activeCategory === "Semua"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

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
        <meta property="og:title" content="Portfolio Kami - WebHemat" />
        <meta
          property="og:description"
          content="Beberapa contoh website profesional yang telah kami buat untuk klien dari berbagai industri."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.webhemat.com/portfolio" />
        <meta
          property="og:image"
          content="https://www.dropbox.com/scl/fi/c43ijfvg80xr4vcxw12qn/Screenshot-from-2025-07-07-12-56-44.png?rlkey=434fhj7qd722hml230997rirj&st=fecrhk7w&dl=0&raw=1"
        />
        <meta property="og:site_name" content="WebHemat" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Portfolio Kami - WebHemat" />
        <meta
          name="twitter:description"
          content="Lihat beberapa website profesional yang telah kami buat untuk klien dari berbagai industri."
        />
        <meta
          name="twitter:image"
          content="https://www.dropbox.com/scl/fi/c43ijfvg80xr4vcxw12qn/Screenshot-from-2025-07-07-12-56-44.png?rlkey=434fhj7qd722hml230997rirj&st=fecrhk7w&dl=0&raw=1"
        />
      </Helmet>

      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="py-20 bg-white relative overflow-hidden"
        id="portfolio"
      >
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="inline-block mb-4"
            >
              <span className="text-sm font-semibold tracking-wider text-blue-600 uppercase">
                Karya Terbaik Kami
              </span>
              <div className="w-16 h-1 bg-blue-500 mx-auto mt-2"></div>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
            >
              Portfolio <span className="text-blue-600">Kami</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-gray-600 max-w-2xl mx-auto text-lg"
            >
              Beberapa website profesional yang telah kami buat untuk klien dari
              berbagai industri.
            </motion.p>
          </div>

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
                    ? "bg-blue-600 text-white shadow-md"
                    : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>

          {/* Projects grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative group"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-0 group-hover:opacity-70 rounded-xl transition-opacity duration-300 z-10"></div>

                <div className="absolute inset-0 flex flex-col justify-between p-6 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex justify-end">
                    <button
                      className="text-white hover:text-blue-300 transition-colors"
                      onClick={(e) => {
                        e.stopPropagation();
                        openModal(project.image, project);
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>
                  </div>

                  <div>
                    <h3 className="text-white font-bold text-xl mb-2">
                      {project.title}
                    </h3>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {project.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="bg-white/20 text-white text-xs px-2 py-1 rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <p className="text-white/80 text-sm mb-4">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-3">
                      {project.demoUrl && (
                        <motion.a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="bg-white text-blue-600 hover:bg-blue-50 px-4 py-2 rounded-full text-sm font-medium transition-all flex items-center gap-1"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                            />
                          </svg>
                          Live Demo
                        </motion.a>
                      )}
                      {project.codeUrl && (
                        <motion.a
                          href={project.codeUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="bg-white/10 text-white hover:bg-white/20 px-4 py-2 rounded-full text-sm font-medium transition-all flex items-center gap-1 border border-white/20"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                            />
                          </svg>
                          View Code
                        </motion.a>
                      )}
                    </div>
                  </div>
                </div>

                <div className="h-full bg-white rounded-xl shadow-md overflow-hidden transform transition-all duration-500 group-hover:shadow-xl group-hover:-translate-y-2 cursor-pointer">
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={project.image}
                      alt={`Contoh website ${project.title} dengan desain modern dan responsif`}
                      className={`w-full h-full object-cover transition-transform duration-700 ${
                        hoveredIndex === index ? "scale-110" : "scale-100"
                      }`}
                      loading="lazy"
                    />
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium shadow-sm">
                      {project.year}
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-semibold text-lg text-gray-900 mb-1">
                          {project.title}
                        </h3>
                        <p className="text-gray-500 text-sm">
                          {project.category}
                        </p>
                      </div>
                      <button
                        className="text-blue-600 hover:text-blue-800 transition-colors"
                        onClick={(e) => {
                          e.stopPropagation();
                          openModal(project.image, project);
                        }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="mt-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative overflow-hidden group bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-medium transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <span className="relative z-10 flex items-center gap-2">
                Lihat Semua Proyek
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
              <span className="absolute inset-0 bg-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-0"></span>
            </motion.button>
          </motion.div>
        </div>
      </motion.section>

      {/* Modal Image */}
      <ModalImage
        isOpen={modalOpen}
        onClose={closeModal}
        imageUrl={selectedImage}
        project={selectedProject}
      />
    </>
  );
};

export default Portfolio;




