import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { FaReact, FaWordpress, FaNodeJs } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss } from "react-icons/si";

/**
 * Fresh Hero Section (accessible, lighter motion, cleaner visuals)
 * - Better color contrast & spacing
 * - ReducedMotion support
 * - Leaner SVG grid + soft blobs
 * - Fixed broken avatar URLs
 * - Semantic & a11y improvements
 */

const GRID_BASE64 =
  "data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPSc2MCcgaGVpZ2h0PSc2MCcgdmlld0JveD0nMCAwIDYwIDYwJz48cGF0aCBkPSdNMCAzNEg2ME0zMCAwVjYwJyBzdHJva2U9J3JnYmEoMjU1LDI1NSwyNTUsMC4wNSknIHN0cm9rZS13aWR0aD0nMScvPjwvc3ZnPg==";

const techStack = [
  { name: "React", icon: <FaReact className="text-[#61DAFB]" size={20} /> },
  { name: "Next.js", icon: <SiNextdotjs className="text-white" size={20} /> },
  {
    name: "WordPress",
    icon: <FaWordpress className="text-[#21759B]" size={20} />,
  },
  {
    name: "Tailwind",
    icon: <SiTailwindcss className="text-[#38BDF8]" size={20} />,
  },
  { name: "Node.js", icon: <FaNodeJs className="text-[#8CC84B]" size={20} /> },
];

const Avatar = ({ seed }) => (
  <img
    src={`https://api.dicebear.com/7.x/thumbs/svg?seed=${seed}`}
    alt="Avatar klien"
    className="w-10 h-10 rounded-full border border-white/20 bg-white/20"
    loading="lazy"
    decoding="async"
  />
);

const TechPill = ({ icon, name }) => (
  <motion.div
    whileHover={{ y: -3, scale: 1.05 }}
    className="flex items-center gap-2 bg-white/5 px-3 py-2 rounded-xl backdrop-blur-sm border border-white/10"
    aria-label={name}
    role="img"
  >
    <span className="grid place-items-center">{icon}</span>
    <span className="text-xs font-medium text-white/90">{name}</span>
  </motion.div>
);

const FloatingBlob = ({ className, delay = 0, size = 160 }) => (
  <motion.div
    aria-hidden
    className={`absolute rounded-full blur-3xl ${className}`}
    style={{ width: size, height: size }}
    animate={{ y: [0, 24, 0], x: [0, 16, 0] }}
    transition={{ duration: 14, repeat: Infinity, ease: "easeInOut", delay }}
  />
);

const HeroRedesign = () => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden text-white">
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#0B1220] via-[#0f1f4a] to-[#1D4ED8]" />

      {/* Grid overlay */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 opacity-20"
        style={{ backgroundImage: `url(${GRID_BASE64})` }}
      />

      {/* Soft blobs (auto-paused for reduced motion) */}
      {!prefersReducedMotion && (
        <>
          <FloatingBlob className="top-16 left-12 bg-blue-400/25" size={180} />
          <FloatingBlob
            className="bottom-32 right-20 bg-indigo-400/25"
            size={240}
            delay={2}
          />
          <FloatingBlob
            className="-bottom-10 -left-10 bg-sky-300/10"
            size={220}
            delay={1}
          />
        </>
      )}

      <div className="relative z-10 max-w-7xl w-full px-6 md:px-10 py-16 md:py-24 grid md:grid-cols-2 gap-12 items-center">
        {/* Copy */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="space-y-6"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur border border-white/15">
            <span className="text-xs md:text-sm text-blue-100">
              🚀 Transformasi Digital
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight">
            <span className="block">Tingkatkan Bisnis Anda dengan</span>
            <span className="relative inline-block mt-2">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-200 via-cyan-200 to-indigo-300">
                Website Profesional
              </span>
              <motion.span
                aria-hidden
                className="absolute -bottom-1 left-0 h-2 w-full bg-blue-400/30 rounded"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
              />
            </span>
          </h1>

          <p className="text-base md:text-lg text-blue-100/90 max-w-xl leading-relaxed">
            Solusi lengkap untuk kebutuhan digital Anda. Website cepat, aman,
            dan SEO‑friendly untuk menjangkau lebih banyak pelanggan &
            meningkatkan konversi.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              href="https://wa.me/628985884161?text=Halo%20saya%20tertarik%20untuk%20konsultasi%20gratis."
              target="_blank"
              rel="noreferrer noopener"
              className="group relative inline-flex items-center justify-center px-7 py-3 rounded-full font-semibold text-blue-950 bg-white shadow-lg shadow-blue-900/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
            >
              <span className="relative z-10">Konsultasi Gratis</span>
              <span className="ml-2 relative z-10 group-hover:translate-x-0.5 transition-transform">
                →
              </span>
              <span
                aria-hidden
                className="absolute inset-0 rounded-full bg-gradient-to-r from-white to-blue-50 opacity-0 group-hover:opacity-100 transition-opacity"
              />
            </motion.a>

            <a
              href="#portfolio"
              className="inline-flex items-center justify-center px-6 py-3 rounded-full border border-white/25 bg-white/10 hover:bg-white/15 backdrop-blur font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
            >
              <span>Lihat Portfolio</span>
              <span className="ml-2 translate-x-0 group-hover:translate-x-0.5 transition">
                →
              </span>
            </a>
          </div>

          {/* Social proof */}
          <div className="pt-6">
            <div className="flex items-center gap-4">
              <div className="flex -space-x-2">
                {["Alya", "Bima", "Citra", "Dimas"].map((seed) => (
                  <Avatar key={seed} seed={seed} />
                ))}
              </div>
              <div>
                <p className="text-sm text-blue-100/90">
                  Dipercaya 500+ bisnis
                </p>
                <div className="flex items-center gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg
                      key={i}
                      className="w-4 h-4 text-yellow-300"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden
                    >
                      <path d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.786 1.402 8.172L12 18.896l-7.336 3.872 1.402-8.172L.132 9.21l8.2-1.192L12 .587z" />
                    </svg>
                  ))}
                  <span className="ml-1 text-xs text-blue-100/90">
                    5.0 (200+ ulasan)
                  </span>
                </div>
              </div>
            </div>

            <p className="text-sm text-blue-100/80 mt-4 mb-3">
              Dibangun dengan teknologi terbaik:
            </p>
            <div className="flex flex-wrap gap-3 items-center">
              {techStack.map((t) => (
                <TechPill key={t.name} icon={t.icon} name={t.name} />
              ))}
            </div>
          </div>
        </motion.div>

        {/* Visual */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
          className="relative"
        >
          <div className="relative max-w-md mx-auto">
            <motion.img
              src="https://www.dropbox.com/scl/fi/adcd8mr5quejbdbwxnc36/2.png?rlkey=xstonejc9aeknivrl43j71pqg&st=5ali7ojx&dl=0&raw=1"
              alt="Ilustrasi antarmuka website modern responsive"
              className="w-full rounded-2xl shadow-2xl object-cover border border-white/10"
              loading="lazy"
              decoding="async"
              whileHover={{ scale: 1.02, rotate: 0.2 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
            />

            {/* Decorative cards */}
            <motion.div
              className="absolute -top-6 -left-6 w-32 h-32 rounded-2xl bg-blue-500/15 border border-blue-300/20"
              initial={{ opacity: 0, x: -20, y: -20 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            />
            <motion.div
              className="absolute -bottom-6 -right-6 w-40 h-40 rounded-2xl bg-indigo-500/15 border border-indigo-300/20"
              initial={{ opacity: 0, x: 20, y: 20 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            />

            <motion.div
              className="absolute -bottom-10 -right-10 w-28 h-24 rounded-xl bg-white/90 shadow-xl border border-slate-200 overflow-hidden"
              initial={{ opacity: 0, scale: 0.9, y: 16 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <div className="h-4 bg-slate-200" />
              <div className="h-px bg-slate-200/70" />
              <div className="h-px bg-slate-200/50" />
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={!prefersReducedMotion ? { y: [0, 8, 0] } : {}}
        transition={{ duration: 1.8, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center items-start">
          <motion.div
            className="w-1 h-2 bg-white rounded-full mt-2"
            animate={
              !prefersReducedMotion
                ? { y: [0, 6, 0], opacity: [1, 0.4, 1] }
                : {}
            }
            transition={{ duration: 1.4, repeat: Infinity }}
          />
          <span className="sr-only">Gulir ke bawah</span>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroRedesign;
