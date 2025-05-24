// App.jsx
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Hero from "./components/Hero";
import Benefits from "./components/Benefits";
import Portfolio from "./components/Portfolio";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import CTASection from "./components/CTASection";
import Footer from "./components/Footer";
import PromoPage from "./pages/PromoPage"; // 👈 Import halaman promo

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
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
          }
        />
        <Route path="/promo" element={<PromoPage />} />{" "}
        {/* 👈 Route untuk halaman promo */}
      </Routes>
    </Router>
  );
}

export default App;
