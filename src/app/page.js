"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import Link from "next/link";

export default function HomePage() {
  const images = [
    "/images/42.jpg",
    "/images/DSC04238.jpg",
    "/images/DSC04616.jpg",
    "/images/DSC04211.jpg",
    "/images/DSC04658.jpg"
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);


  const [isPopupOpen, setIsPopupOpen] = useState (false)
  const [popupImageIndex, setPopupImageIndex] = useState(0)


  // Popup
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [popupImageIndex, setPopupImageIndex] = useState(0);

  // Slider otomatis di hero

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) =>
        prev === images.length - 1 ? 0 : prev + 1
      );
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  // Slider otomatis di popup
  useEffect(() => {
    if (!isPopupOpen) return;
    const interval = setInterval(() => {
      setPopupImageIndex((prev) =>
        prev === images.length - 1 ? 0 : prev + 1
      );
    }, 4000);
    return () => clearInterval(interval);
  }, [isPopupOpen]);

  const prevSlide = () =>
    setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1);

  const nextSlide = () =>
    setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1);

  return (
    <main className="bg-white text-gray-800 font-sans">
      {/* Header */}
      <header className="flex justify-between items-center px-4 py-2 sticky top-0 bg-white z-50 shadow-md shadow-black/10">
        {/* Logo kiri */}
        <div className="flex items-center space-x-3 pl-1 md:pl-0">
          <Image
            src="/images/image.png"
            alt="Logo"
            width={70}
            height={70}
            className="block"
          />
          <span className="font-semibold text-xl text-black tracking-wide whitespace-nowrap">
            Tlogo Putri Kaliurang
          </span>
        </div>

        {/* Navigasi Desktop */}
        <div className="flex items-center space-x-4">
          <nav className="hidden md:block">
            <ul className="flex space-x-6 px-7 font-semibold text-black text-l">
              {["home", "paket", "fasilitas", "artikel", "about"].map((item) => (
                <li key={item} className="relative group">
                  <a
                    href={`#${item}`}
                    className="capitalize px-3 py-1 transition-colors duration-300 hover:text-blue-600 focus:text-blue-600 focus:outline-none"
                  >
                    {item}
                  </a>
                  <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-blue-600 transition-all duration-300 group-hover:w-full" />
                </li>
              ))}
            </ul>
          </nav>

          {/* Tombol Menu Mobile */}
          <button
            className="md:hidden p-2 rounded-md text-black hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle Menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      {menuOpen && (
        <nav className="md:hidden bg-white shadow-md border-t border-gray-200">
          <div className="max-w-7xl mx-auto px-4 py-4">
            {["home", "paket", "fasilitas", "artikel", "about"].map((item) => {
              const isArtikel = item === "artikel";
              return isArtikel ? (
                <Link
                  key={item}
                  href="/artikel"
                  onClick={() => setMenuOpen(false)}
                  className="block py-2 text-gray-700 hover:text-blue-600 transition font-medium capitalize"
                >
                  {item}
                </Link>
              ) : (
                <a
                  key={item}
                  href={`#${item}`}
                  onClick={() => setMenuOpen(false)}
                  className="block py-2 text-gray-700 hover:text-blue-600 transition font-medium capitalize"
                >
                  {item}
                </a>
              );
            })}
          </div>
        </nav>
      )}

      {/* Hero Slider */}
      <section className="relative w-full h-screen flex items-center justify-center bg-black overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            key={currentIndex}
            src={images[currentIndex]}
            alt={`Slide ${currentIndex + 1}`}
            fill
            className="object-cover w-full h-full transition-opacity duration-1000 opacity-90"
            priority
          />
        </div>
        <button
          onClick={prevSlide}
          className="absolute left-4 z-10 text-white text-4xl font-thin p-3 rounded-full hover:bg-white/20 transition"
          aria-label="Sebelumnya"
        >
          &#x276E; {/* karakter '<' lebih tipis: ❮ */}
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 z-10 text-white text-4xl font-thin p-3 rounded-full hover:bg-white/20 transition"
          aria-label="Berikutnya"
        >
          &#x276F; {}
        </button>
        <div className="absolute bottom-6 flex justify-center w-full space-x-2 z-10">
          {images.map((_, idx) => (
            <span
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`w-3 h-3 rounded-full cursor-pointer transition ${
                idx === currentIndex
                  ? "bg-blue-600 shadow-lg shadow-blue-500/50"
                  : "bg-white bg-opacity-50 hover:bg-opacity-80"
              }`}
            />
          ))}
        </div>
      </section>
      {/* Hero Section: Title + Description */}
      <section className="px-4 pt-10 pb-4 max-w-5xl mx-auto text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">
          Nikmati Keindahan Alam Tlogo Putri — Liburan yang Tak Terlupakan!
        </h1>
        <p className="text-lg text-gray-700 leading-relaxed">
          Rasakan petualangan seru menjelajahi kawasan pegunungan Tlogo Putri
          dengan jeep tour yang menantang dan menyenangkan. Dengan harga paket
          terjangkau dan fasilitas lengkap, wisata ini jadi pilihan tepat untuk
          liburan penuh kesan. Nikmati keindahan alam lereng Merapi dengan rute
          yang seru dan pengalaman tak terlupakan!
        </p>
      </section>

      {/* Jeep Icon + Pesan Sekarang */}
      <section className="px-4 pt-2 pb-12 flex justify-center">
        <Link href="/pemesanan" passHref>
          <button
            className="relative flex items-center py-3 px-8 rounded-md text-lg font-semibold hover:bg-blue-700 transition overflow-visible cursor-pointer"
            style={{ backgroundColor: "#3D6CB9" }}
          >
            <div
              className="flex items-center justify-center w-16 h-16 rounded-full shadow-lg absolute -left-6"
              style={{ backgroundColor: "#17294F" }}
            >
              <span className="text-white text-4xl">🚙</span>
            </div>
            <span className="ml-14 text-white">Pesan Sekarang!!!</span>
          </button>
        </Link>
      </section>

      {/* Facilities Section */}
      <section
        className="px-6 py-12 bg-gradient-to-b from-white via-gray-50 to-white"
        id="fasilitas"
      >
        <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
          FASILITAS KAMI
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            { label: "Tempat Parkir Luas", src: "/images/DSC03884.jpg" },
            { label: "Taman", src: "/images/taman.jpg" },
            { label: "Toilet", src: "/images/toilet.jpg" },
            { label: "Mushola", src: "/images/mushola.jpg" },
            { label: "Kantin", src: "/images/TheLostWorldPark.jpg" },
            { label: "Sewa Skuter", src: "/images/DSC03913.jpg" },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer transform transition-transform duration-300 ease-in-out hover:scale-[1.05] hover:shadow-2xl"
            >
              <div className="relative w-full h-56 md:h-64 overflow-hidden">
                <Image
                  src={item.src}
                  alt={item.label}
                  fill
                  className="object-cover object-center transition-transform duration-500 ease-in-out hover:scale-110"
                />
              </div>
              <p className="mt-4 mb-6 text-center font-semibold text-gray-800 text-lg select-none">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Paket Section */}
      <section className="px-6 py-14 bg-gray-50" id="paket">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-10 text-center tracking-wide">
            Paket Wisata Populer
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              {
                title: "PAKET 1",
                image: "/images/jeep-merapi.jpg",
                price: "Rp 400.000",
              },
              {
                title: "PAKET 2",
                image: "/images/goa-pindul.jpg",
                price: "Rp 450.000",
              },
              {
                title: "PAKET 3",
                image: "/images/kaliurang.jpg",
                price: "Rp 450.000",
              },
              {
                title: "PAKET 4",
                image: "/images/lava-tour.jpg",
                price: "Rp 500.000",
              },
              {
                title: "PAKET 5",
                image: "/images/city-tour.jpg",
                price: "Rp 550.000",
              },
              {
                title: "PAKET SUNRISE",
                image: "/images/parangtritis.jpg",
                price: "Rp 550.000",
              },
            ].map((paket, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
              >
                <Image
                  src={paket.image}
                  alt={paket.title}
                  width={400}
                  height={250}
                  className="w-full h-56 object-cover rounded-t-xl"
                />
                <div className="p-6 flex flex-col flex-grow justify-between">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-xl font-semibold text-black tracking-tight">
                      {paket.title}
                    </h3>
                    <button
                      className="text-black font-semibold text-sm uppercase tracking-wide border-b-2 border-transparent pb-1 hover:border-black hover:text-gray-800 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-black rounded"
                      onClick={() => setIsPopupOpen(true)}
                    >
                      Detail
                    </button>
                  </div>
                  <div className="flex items-center justify-between mt-auto">
                    <div className="font-extrabold text-blue-700 text-lg tracking-wide">
                      {paket.price}
                    </div>
                    <button
                      className="bg-blue-700 text-white px-5 py-2 rounded-lg hover:bg-blue-800 transition-colors font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
                      onClick={() => alert(`Pesan ${paket.title} sekarang!`)}

                      aria-label={"Pesan ${paket.title} Sekarang"}

                    >
                      Pesan Sekarang
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === POPUP MODAL === */}
      {isPopupOpen && (
        <div

          className="fixed inset-0 z-50 flex justify-center items-center px-4 backdrop-blur-sm"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.1)" }}
        >

        className="fixed inset-0 z-50 flex justify-center items-center px-4 backdrop-blur-sm"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.1)" }}>
          <div className="bg-white rounded-xl shadow-2xl max-w-2xl w-full relative overflow-hidden">
            {/* Gambar */}
            <div className="relative w-full h-64 group">
              <Image
                src={images[popupImageIndex]}
                alt={`Gambar ${popupImageIndex}`}
                fill
                className="object-cover transition duration-1000"
              />
              {/* Tombol X yang hanya muncul saat hover */}
              <button
                className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity bg-white bg-opacity-80 hover:bg-opacity-100 text-black rounded-full w-8 h-8 flex items-center justify-center z-10"
                onClick={() => setIsPopupOpen(false)}
                aria-label="Tutup popup"
              >
                ×
              </button>
            </div>

            {/* Konten popup */}
            <div className="p-6">
              <h2 className="text-xl font-bold mb-2">Highlight</h2>
              <ul className="list-disc pl-5 text-gray-700 text-sm space-y-1">
                <li>Lava Tour Merapi menggunakan Jeep untuk 4 penumpang.</li>

                <li>
                  Wisata ke Museum Sisa Hartaku, Batu Alien, dan banyak lagi.
                </li>

                <li>Wisata ke Museum Sisa Hartaku, Batu Alien, dan banyak lagi.</li>

                <li>Pilihan paket lengkap dengan durasi dan rute berbeda.</li>
                <li>Keberangkatan dari Sleman, Yogyakarta.</li>
                <li>Fasilitas lengkap: Jeep, pengemudi, dan biaya BBM.</li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* Why Choose Us Section */}
      <section className="relative bg-gray-100">
        <div className="absolute inset-0">
          <Image
            src="/images/background-why-choose-us.jpg"
            alt="Background Why Choose Us"
            fill
            className="object-cover opacity-30"
            priority
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 py-20 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Mengapa Memilih Kami
          </h2>
          <p className="text-gray-700 max-w-2xl mx-auto mb-16">
            Kami memberikan pelayanan terbaik dengan pengalaman lebih dari 10
            tahun dan selalu mengutamakan kepuasan pelanggan.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: "Pelayanan Profesional",
                description: "Tim kami berpengalaman dan siap membantu Anda kapan saja.",
                iconColor: "text-blue-600",
                iconPath: "M9.75 17L15 12.75m0 0L9.75 8.5M15 12.75H3",
              },
              {
                title: "Harga Kompetitif",
                description: "Kami menawarkan harga terbaik dengan kualitas terjamin.",
                iconColor: "text-green-600",
                iconPath:
                  "M12 8c-3.86 0-7 2.69-7 6s3.14 6 7 6 7-2.69 7-6-3.14-6-7-6zm0-5v2m0 14v2m-7-9h2m12 0h2m-9-9h0",
              },
              {
                title: "Tepat Waktu",
                description: "Kami memastikan semua jadwal sesuai dengan yang dijanjikan.",
                iconColor: "text-yellow-500",
                iconPath: "M12 6v6l4 2M12 2a10 10 0 100 20 10 10 0 000-20z",
              },
              {
                title: "Free Retribusi",
                description: "Semua biaya retribusi wisata ditanggung kami, tanpa biaya tambahan.",
                iconColor: "text-purple-500",
                iconPath: "M4 6h16M4 10h16M4 14h10",
              },
              {
                title: "Armada Terawat",
                description: "Seluruh armada kami dirawat secara berkala demi kenyamanan dan keselamatan.",
                iconColor: "text-indigo-600",
                iconPath: "M5 16V6a1 1 0 011-1h12a1 1 0 011 1v10M3 16h18M6 16v4h2v-2h8v2h2v-4",
              },
              {
                title: "Lisensi Guide/Driver",
                description: "Semua guide dan driver kami bersertifikat resmi dan profesional.",
                iconColor: "text-rose-600",
                iconPath:
                  "M12 12c2.21 0 4-1.79 4-4S14.21 4 12 4 8 5.79 8 8s1.79 4 4 4zm0 2c-3.33 0-8 1.67-8 5v1h16v-1c0-3.33-4.67-5-8-5z",
              },
              {
                title: "Fleksibel & Mudah",
                description: "Kemudahan dalam pemesanan dan penyesuaian rencana perjalanan Anda.",
                iconColor: "text-cyan-600",
                iconPath: "M4 4h16v4H4V4zm0 6h10v4H4v-4zm0 6h16v4H4v-4z",
              },
              {
                title: "Asuransi Perjalanan",
                description: "Setiap perjalanan dilindungi oleh asuransi untuk keamanan ekstra.",
                iconColor: "text-orange-500",
                iconPath: "M12 2l7 4v6c0 5-3.5 9.74-7 10-3.5-.26-7-5-7-10V6l7-4z",
              },
            ].map((feature, idx) => (
              <div
                key={idx}
                className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow text-center"
              >
                <svg
                  className={`w-12 h-12 mx-auto mb-4 ${feature.iconColor}`}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d={feature.iconPath}
                  />
                </svg>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Artikel & Berita */}
      <section className="px-6 py-16 bg-gray-50" id="artikel">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Artikel & Berita
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {[1, 2, 3].map((idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden flex flex-col"
              >
                <Image
                  src="/images/TrackAir.jpeg.jpg"
                  alt={`Artikel ${idx}`}
                  width={500}
                  height={300}
                  className="w-full h-52 object-cover"
                />
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">
                      Judul Artikel {idx}
                    </h3>
                    <p className="text-sm text-gray-600 mb-4">
                      Deskripsi singkat artikel yang menarik minat pembaca untuk
                      mengetahui lebih dalam.
                    </p>
                  </div>
                  <div>
                    <button className="text-blue-600 hover:text-blue-800 text-sm font-medium transition">
                      Baca Selengkapnya →
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lokasi (Google Maps) */}
      <section className="bg-gray-50 py-16" id="about">
        <div className="max-w-10xl mx-auto px-6 sm:px-8 lg:px-10">
          <h2 className="text-3xl font-bold text-start text-gray-800 mb-10">
            Lokasi Kami
          </h2>
          <div className="rounded-lg shadow-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3952.648632392294!2d110.44126721432394!3d-7.829266679660496!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a5798e1b3f5a9%3A0x7c53642b0378394a!2sTlogo%20Putri!5e0!3m2!1sen!2sid!4v1715600000000"
              width="100%"
              height="500"
              loading="lazy"
              allowFullScreen
              title="Lokasi Tlogo Putri"
              className="w-full h-[500px] border-0"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Ulasan Pengguna */}
      <section className="px-6 py-16 bg-white">
        <div className="max-w-10xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Ulasan Pengguna
          </h2>
          <p className="text-base text-gray-500 mb-10">
            Apa kata mereka yang sudah berkunjung dan merasakan pengalaman kami?
          </p>

          <div className="flex gap-6 overflow-x-auto pb-4" style={{ scrollSnapType: "x mandatory" }}>
            {[
              "Sangat seru dan menyenangkan! Saya akan kembali lagi!",
              "Pengalaman yang luar biasa, saya sangat menikmatinya!",
              "Tempat yang indah dan pemandangan yang luar biasa!",
            ].map((review, idx) => (
              <div
                key={idx}
                className="flex-shrink-0 w-[400px] bg-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition duration-300 scroll-snap-align-start"
              >
                <p className="text-gray-700 italic mb-6">"{review}"</p>
                <div className="flex items-center gap-1 mb-4">
                  {Array(5).fill(0).map((_, i) => (
                    <span key={i} className="text-yellow-400 text-xl">⭐</span>
                  ))}
                </div>
                <div className="text-sm text-gray-500">Pengguna {idx + 1}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="px-6 py-16 bg-gray-50">
        <h2 className="text-center text-3xl font-extrabold mb-12 text-gray-900 tracking-wide">
          FAQ's
        </h2>
        <div className="max-w-3xl mx-auto space-y-6">
          {[
            "Apa saja jenis paket jeep yang tersedia?",
            "Apakah bisa pesan online?",
            "Di mana lokasi titik kumpul?",
            "Apakah tersedia fasilitas keluarga?",
            "Bagaimana jika cuaca buruk saat booking?",
          ].map((q, idx) => (
            <details
              key={idx}
              className="group bg-white rounded-xl shadow-md p-6 cursor-pointer transition-shadow duration-300 hover:shadow-xl"
            >
              <summary className="flex justify-between items-center font-semibold text-gray-800 text-lg list-none">
                {q}
                <svg
                  className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <p className="mt-4 text-gray-600 text-sm">
                Jawaban dari pertanyaan ini akan muncul di sini.
              </p>
            </details>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#3D6CB9] text-gray-100 py-10 mt-10">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-sm text-white">
            © 2024 Tlogo Putri. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}
