import React from "react";
import { Helmet } from "react-helmet-async";

export default function SEOHome() {
  const business = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "WebHemat PRO",
    url: "https://www.webhemat.web.id/",
    telephone: "+6281574741954",
    email: "webhemat5@gmail.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Klaten",
      addressRegion: "Jawa Tengah",
      addressCountry: "ID",
    },
    areaServed: ["Klaten", "Solo", "Yogyakarta", "Jawa Tengah"],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "17:00",
      },
    ],
  };

  return (
    <Helmet prioritizeSeoTags>
      <title>
        WebHemat PRO – Jasa Pembuatan Website untuk UMKM &amp; Bisnis | Klaten
      </title>
      <meta
        name="description"
        content="Butuh jasa pembuatan website di Klaten? WebHemat PRO siap bantu UMKM & bisnis: landing page, toko online, cepat & mobile-friendly. Konsultasi gratis via WhatsApp."
      />
      <link rel="canonical" href="https://www.webhemat.web.id/" />
      <meta name="robots" content="index, follow" />
      <meta property="og:type" content="website" />
      <meta
        property="og:title"
        content="WebHemat PRO – Jasa Pembuatan Website Klaten"
      />
      <meta
        property="og:description"
        content="Layanan pembuatan website Klaten untuk UMKM & bisnis. Gratis konsultasi."
      />
      <meta property="og:url" content="https://www.webhemat.web.id/" />
      {/* Ganti dengan URL gambar og kamu */}
      <meta
        property="og:image"
        content="https://www.webhemat.web.id/og-webhemat.jpg"
      />
      <meta name="twitter:card" content="summary_large_image" />
      <script type="application/ld+json">{JSON.stringify(business)}</script>
    </Helmet>
  );
}
