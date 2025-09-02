import React from "react";
import { Helmet } from "react-helmet-async";

const schemaService = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Jasa Pembuatan Website Klaten",
  provider: { "@type": "LocalBusiness", name: "WebHemat PRO" },
  areaServed: "Klaten",
  serviceType: "Web Design, Landing Page, Toko Online",
  offers: { "@type": "Offer", priceCurrency: "IDR" },
};

const schemaFAQ = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Berapa harga jasa pembuatan website di Klaten?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Mulai dari paket hemat untuk landing page hingga paket toko online. Harga tergantung fitur (chat WA, katalog, pembayaran). Konsultasi gratis via WhatsApp.",
      },
    },
    {
      "@type": "Question",
      name: "Berapa lama pembuatan website?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Umumnya 5–14 hari kerja untuk landing page standar. Proyek custom bisa lebih panjang tergantung kompleksitas konten & fitur.",
      },
    },
    {
      "@type": "Question",
      name: "Apakah termasuk domain & hosting?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Tersedia paket termasuk domain .com dan hosting cepat. Kami bantu setup SSL, email, dan optimasi kecepatan.",
      },
    },
  ],
};

export default function KlatenPage() {
  return (
    <main id="klaten" className="max-w-7xl mx-auto px-6 pt-28 pb-16">
      <Helmet>
        <title>Jasa Pembuatan Website Klaten | WebHemat PRO</title>
        <meta
          name="description"
          content="Jasa pembuatan website Klaten untuk UMKM & bisnis: landing page, toko online, cepat & mobile-friendly. Tim lokal, konsultasi gratis via WhatsApp."
        />
        <link
          rel="canonical"
          href="https://www.webhemat.web.id/jasa-pembuatan-website-klaten"
        />
        <script type="application/ld+json">
          {JSON.stringify(schemaService)}
        </script>
        <script type="application/ld+json">{JSON.stringify(schemaFAQ)}</script>
      </Helmet>

      <section className="text-center">
        <h1 className="text-3xl md:text-5xl font-semibold">
          Jasa Pembuatan Website Klaten untuk UMKM &amp; Bisnis
        </h1>
        <p className="mt-3 text-gray-600">
          Website cepat, SEO-ready, dan mobile-friendly. Fokus mendatangkan
          pelanggan dari Klaten & sekitar. Gratis konsultasi & audit kebutuhan.
        </p>
        <div className="mt-5 flex justify-center gap-3">
          <a
            href="https://wa.me/6281574741954"
            className="bg-green-500 hover:bg-green-600 text-white px-5 py-3 rounded-md"
            aria-label="Konsultasi Jasa Website Klaten via WhatsApp"
          >
            Konsultasi Gratis
          </a>
          <a
            href="#paket"
            className="bg-blue-50 hover:bg-blue-100 text-blue-700 px-5 py-3 rounded-md"
          >
            Lihat Paket
          </a>
        </div>
      </section>

      <section id="manfaat" className="mt-12 grid md:grid-cols-3 gap-6">
        <div>
          <h2 className="text-xl font-semibold">Desain Profesional</h2>
          <p className="text-gray-600">
            Tampil kredibel dengan desain yang disesuaikan industri Anda.
          </p>
        </div>
        <div>
          <h2 className="text-xl font-semibold">SEO Lokal Klaten</h2>
          <p className="text-gray-600">
            Struktur konten & teknis untuk menarget kata kunci Klaten.
          </p>
        </div>
        <div>
          <h2 className="text-xl font-semibold">Dukungan & Maintenance</h2>
          <p className="text-gray-600">
            Bantuan update konten & pemeliharaan rutin.
          </p>
        </div>
      </section>

      <section id="paket" className="mt-14">
        <h2 className="text-2xl font-semibold">Paket & Harga</h2>
        <ul className="mt-4 list-disc pl-6 text-gray-700">
          <li>Paket Landing Page – cocok untuk campaign cepat.</li>
          <li>Paket Company Profile – lengkap dengan halaman layanan.</li>
          <li>Paket Toko Online – katalog, keranjang, integrasi WA.</li>
        </ul>
      </section>

      <section id="faq" className="mt-14">
        <h2 className="text-2xl font-semibold">Pertanyaan Umum</h2>
        <details className="mt-4">
          <summary>Berapa harga jasa pembuatan website di Klaten?</summary>
          <div className="mt-2 text-gray-700">
            Mulai dari paket hemat untuk landing page. Konsultasikan kebutuhan
            agar kami beri rekomendasi terbaik.
          </div>
        </details>
        <details className="mt-3">
          <summary>Berapa lama pembuatan website?</summary>
          <div className="mt-2 text-gray-700">
            5–14 hari kerja untuk landing page standar.
          </div>
        </details>
        <details className="mt-3">
          <summary>Apakah termasuk domain &amp; hosting?</summary>
          <div className="mt-2 text-gray-700">
            Ada opsi termasuk domain .com & hosting cepat + SSL.
          </div>
        </details>
      </section>
    </main>
  );
}
