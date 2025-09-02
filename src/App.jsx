// App.jsx
import "./App.css";
import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

import Header from "./components/Header";
import Hero from "./components/Hero";
import Benefits from "./components/Benefits";
import Portfolio from "./components/Portfolio";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import CTASection from "./components/CTASection";
import Footer from "./components/Footer";

import PromoPage from "./pages/PromoPage";
import KlatenPage from "./pages/KlatenPage"; // 👈 Halaman layanan Klaten
import SEOHome from "./components/SEOHome"; // 👈 Meta+schema untuk homepage

// Util: auto scroll ke atas tiap ganti route
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);
  return null;
}

// (Opsional) 404 sederhana
function NotFound() {
  useEffect(() => {
    document.title = "Halaman tidak ditemukan | WebHemat PRO";
  }, []);
  return (
    <div className="font-montserrat min-h-screen pt-28 px-6 flex items-start justify-center">
      <div className="max-w-2xl text-center">
        <h1 className="text-3xl font-semibold">Halaman tidak ditemukan</h1>
        <p className="mt-3 text-gray-600">
          Maaf, tautan yang kamu cari tidak tersedia. Kembali ke{" "}
          <a className="text-blue-600 underline" href="/">
            beranda
          </a>
          .
        </p>
      </div>
    </div>
  );
}

function App() {
  return (
    <HelmetProvider>
      <Router>
        <ScrollToTop />
        <Header />

        <Routes>
          {/* Beranda */}
          <Route
            path="/"
            element={
              <>
                <SEOHome /> {/* 👈 Title, meta, dan JSON-LD untuk homepage */}
                <div className="font-montserrat pt-20">
                  <Hero />
                  <Benefits />
                  <Portfolio />
                  <Pricing />
                  <Testimonials />
                  <FAQ />
                  <CTASection />
                  <Footer />
                </div>
              </>
            }
          />

          {/* Halaman promo */}
          <Route path="/promo" element={<PromoPage />} />

          {/* Halaman layanan Klaten */}
          <Route
            path="/jasa-pembuatan-website-klaten"
            element={<KlatenPage />}
          />

          {/* 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </HelmetProvider>
  );
}

export default App;
