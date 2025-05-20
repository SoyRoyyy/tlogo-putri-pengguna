"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import Link from "next/link";

export default function HomePage() {
  const images = [
    "/images/bungkerkaliadem.jpg",
    "/images/BatuAlien.jpeg.jpg",
    "/images/MuseumMini.jpeg.jpg",
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  const prevSlide = () =>
    setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1);

  const nextSlide = () =>
    setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1);

  return (
    <main className="bg-white text-gray-800 font-sans">
      <header className="flex justify-between items-center px-6 py-4 sticky top-0 bg-white z-50 shadow-md shadow-black/10">
        {/* Logo kiri */}
        <div className="flex items-center space-x-3 pl-1 md:pl-0">
          <Image
            src="/images/image.png"
            alt="Logo"
            width={40}
            height={40}
            className="block"
          />
          <span className="font-extrabold text-2xl text-black tracking-wide whitespace-nowrap">
            Tlogo Putri
          </span>
        </div>

        {/* Menu & toggle */}
        <div className="flex items-center space-x-4">
          {/* Desktop Menu */}
          <nav className="hidden md:block">
            <ul className="flex space-x-10 font-semibold text-black">
              {["home", "paket", "fasilitas", "artikel", "about"].map(
                (item) => (
                  <li key={item} className="relative group">
                    <a
                      href={`#${item}`}
                      className="capitalize px-3 py-1 transition-colors duration-300
                      hover:text-blue-600 focus:text-blue-600 focus:outline-none"
                    >
                      {item}
                    </a>
                    {/* Underline Effect */}
                    <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-blue-600 transition-all duration-300 group-hover:w-full" />
                  </li>
                )
              )}
            </ul>
          </nav>

          {/* Mobile Toggle */}
          <button
            className="md:hidden p-2 rounded-md text-black hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle Menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <nav className="md:hidden bg-white shadow-lg border-t border-gray-200 absolute top-full left-0 right-0 z-40">
            <ul className="flex flex-col max-w-7xl mx-auto px-6 py-5 space-y-4 font-semibold text-black">
              {["home", "paket", "fasilitas", "artikel", "about"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href={`#${item}`}
                      onClick={() => setMenuOpen(false)}
                      className="block capitalize px-3 py-2 rounded-md hover:text-blue-600 focus:text-blue-600 focus:outline-none transition-colors duration-300"
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </nav>
        )}
      </header>

      {/* Mobile Menu */}
      {menuOpen && (
        <nav className="md:hidden bg-white shadow-md">
          <div className="max-w-7xl mx-auto px-4 py-4">
            {["home", "paket", "fasilitas", "artikel", "about"].map((item) => (
              <a
                key={item}
                href={`#${item}`}
                onClick={() => setMenuOpen(false)}
                className="block py-2 text-gray-700 hover:text-blue-600 transition font-medium capitalize"
              >
                {item}
              </a>
            ))}
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

        {/* Slider Nav Buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-4 z-10 bg-black bg-opacity-40 text-white p-3 rounded-full hover:bg-opacity-60 transition"
          aria-label="Sebelumnya"
        >
          &#10094;
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 z-10 bg-black bg-opacity-40 text-white p-3 rounded-full hover:bg-opacity-60 transition"
          aria-label="Berikutnya"
        >
          &#10095;
        </button>

        {/* Indicators */}
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
            { label: "Tempat Parkir Luas", src: "/images/bungkerkaliadem.jpg" },
            { label: "Taman", src: "/images/MuseumMini.jpeg.jpg" },
            { label: "Toilet", src: "/images/MuseumMini.jpeg.jpg" },
            { label: "Mushola", src: "/images/PetilasanMbahMarijan.jpeg.jpg" },
            { label: "Kantin", src: "/images/TheLostWorldPark.jpg" },
            { label: "Sewa Skuter", src: "/images/TrackAir.jpeg.jpg" },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer transform transition-transform duration-300 ease-in-out
                   hover:scale-[1.05] hover:shadow-2xl"
              data-aos="fade-up"
              data-aos-delay={idx * 100}
            >
              <div className="relative w-full h-56 md:h-64 overflow-hidden">
                <Image
                  src={item.src}
                  alt={item.label}
                  fill
                  className="object-cover object-center transition-transform duration-500 ease-in-out hover:scale-110"
                  sizes="(max-width: 768px) 100vw,
                   (max-width: 1200px) 50vw,
                   33vw"
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
      <section className="px-6 py-14 bg-gray-50">
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
                      className="
                  text-black font-semibold text-sm uppercase tracking-wide
                  border-b-2 border-transparent
                  pb-1
                  hover:border-black
                  hover:text-gray-800
                  transition-all duration-300
                  focus:outline-none focus:ring-2 focus:ring-black rounded
                "
                      onClick={() => alert(`Detail ${paket.title}`)}
                      aria-label={`Detail ${paket.title}`}
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
                      aria-label={`Pesan ${paket.title} sekarang`}
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

      {/* Why Choose Us Section */}
      <section className="relative bg-gray-100">
        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            src="/images/background-why-choose-us.jpg"
            alt="Background Why Choose Us"
            layout="fill"
            objectFit="cover"
            className="opacity-30"
            priority
          />
        </div>

        {/* Content overlay */}
        <div className="relative max-w-7xl mx-auto px-4 py-20 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Mengapa Memilih Kami
          </h2>
          <p className="text-gray-700 max-w-2xl mx-auto mb-16">
            Kami memberikan pelayanan terbaik dengan pengalaman lebih dari 10
            tahun dan selalu mengutamakan kepuasan pelanggan.
          </p>

          {/* 8 cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: "Pelayanan Profesional",
                description:
                  "Tim kami berpengalaman dan siap membantu Anda kapan saja.",
                iconColor: "text-blue-600",
                iconPath: "M9.75 17L15 12.75m0 0L9.75 8.5M15 12.75H3", // Icon: arrow right
              },
              {
                title: "Harga Kompetitif",
                description:
                  "Kami menawarkan harga terbaik dengan kualitas terjamin.",
                iconColor: "text-green-600",
                iconPath:
                  "M12 8c-3.86 0-7 2.69-7 6s3.14 6 7 6 7-2.69 7-6-3.14-6-7-6zm0-5v2m0 14v2m-7-9h2m12 0h2m-9-9h0", // Icon: pricing tag / money
              },
              {
                title: "Tepat Waktu",
                description:
                  "Kami memastikan semua jadwal sesuai dengan yang dijanjikan.",
                iconColor: "text-yellow-500",
                iconPath: "M12 6v6l4 2M12 2a10 10 0 100 20 10 10 0 000-20z", // Icon: clock
              },
              {
                title: "Free Retribusi",
                description:
                  "Semua biaya retribusi wisata ditanggung kami, tanpa biaya tambahan.",
                iconColor: "text-purple-500",
                iconPath: "M4 6h16M4 10h16M4 14h10", // Icon: receipt / paper lines
              },
              {
                title: "Armada Terawat",
                description:
                  "Seluruh armada kami dirawat secara berkala demi kenyamanan dan keselamatan.",
                iconColor: "text-indigo-600",
                iconPath:
                  "M5 16V6a1 1 0 011-1h12a1 1 0 011 1v10M3 16h18M6 16v4h2v-2h8v2h2v-4", // Icon: vehicle / bus
              },
              {
                title: "Lisensi Guide/Driver",
                description:
                  "Semua guide dan driver kami bersertifikat resmi dan profesional.",
                iconColor: "text-rose-600",
                iconPath:
                  "M12 12c2.21 0 4-1.79 4-4S14.21 4 12 4 8 5.79 8 8s1.79 4 4 4zm0 2c-3.33 0-8 1.67-8 5v1h16v-1c0-3.33-4.67-5-8-5z", // Icon: user badge
              },
              {
                title: "Fleksibel & Mudah",
                description:
                  "Kemudahan dalam pemesanan dan penyesuaian rencana perjalanan Anda.",
                iconColor: "text-cyan-600",
                iconPath: "M4 4h16v4H4V4zm0 6h10v4H4v-4zm0 6h16v4H4v-4z", // Icon: layers / flexible layout
              },
              {
                title: "Asuransi Perjalanan",
                description:
                  "Setiap perjalanan dilindungi oleh asuransi untuk keamanan ekstra.",
                iconColor: "text-orange-500",
                iconPath:
                  "M12 2l7 4v6c0 5-3.5 9.74-7 10-3.5-.26-7-5-7-10V6l7-4z", // Icon: shield / insurance
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
                  <title>{feature.title}</title>
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

      {/* Articles & News Section */}
      <section className="px-6 py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Artikel & Berita
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {[...Array(3)].map((_, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden flex flex-col"
              >
                <Image
                  src="/images/TrackAir.jpeg.jpg"
                  alt={`Artikel ${idx + 1}`}
                  width={500}
                  height={300}
                  className="w-full h-52 object-cover"
                />
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">
                      Judul Artikel {idx + 1}
                    </h3>
                    <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                      Deskripsi singkat artikel yang menjelaskan konten utama
                      secara ringkas, padat, dan menarik minat pembaca untuk
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

      {/* Lokasi - Google Map Elegan dengan Padding */}
      <section className="bg-gray-50 py-16" id="about">
        <div className="max-w-10xl mx-auto px-6 sm:px-8 lg:px-10">
          <h2 className="text-3xl font-bold text-star text-gray-800 mb-10">
            Lokasi Kami
          </h2>
          <div className="rounded-lg shadow-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3952.648632392294!2d110.44126721432394!3d-7.829266679660496!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a5798e1b3f5a9%3A0x7c53642b0378394a!2sTlogo%20Putri!5e0!3m2!1sen!2sid!4v1715600000000"
              width="100%"
              height="500"
              allowFullScreen=""
              loading="lazy"
              className="w-full h-[500px] border-0"
              title="Lokasi Tlogo Putri"
            ></iframe>
          </div>
        </div>
      </section>

      {/* User Reviews Section */}
      <section className="px-6 py-16 bg-white">
        <div className="max-w-10xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800">
              Ulasan Pengguna
            </h2>
            <button className="text-blue-600 hover:underline text-sm font-medium">
              Lihat Semua
            </button>
          </div>
          <p className="text-base text-gray-500 mb-10">
            Apa kata mereka yang sudah berkunjung dan merasakan pengalaman kami?
          </p>

          <div
            className="flex gap-6 overflow-x-auto pb-4"
            style={{ scrollSnapType: "x mandatory", scrollbarWidth: "none" }}
          >
            {[
              "Sangat seru dan menyenangkan! Saya akan kembali lagi!",
              "Pengalaman yang luar biasa, saya sangat menikmatinya!",
              "Tempat yang indah dan pemandangan yang luar biasa!",
              "Pelayanan sangat ramah dan cepat!",
              "Tempat sangat bersih dan nyaman, rekomended!",
            ].map((review, idx) => (
              <div
                key={idx}
                className="flex-shrink-0 w-[400px] bg-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition duration-300 scroll-snap-align-start"
              >
                <p className="text-gray-700 italic mb-6 text-base leading-relaxed">
                  "{review}"
                </p>
                <div className="flex items-center gap-1 mb-4">
                  {Array.from({ length: 5 }).map((_, starIdx) => (
                    <span key={starIdx} className="text-yellow-400 text-xl">
                      ⭐
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-2 text-base text-gray-500 mb-3">
                  <span className="font-medium text-gray-700">
                    Pengguna {idx + 1}
                  </span>
                  <span className="text-gray-300">•</span>
                  <span>2 hari yang lalu</span>
                </div>
                <div className="flex items-center gap-2 mt-2">
                  <Image
                    src="/images/google-icon.png"
                    alt="Google"
                    width={24}
                    height={24}
                    className="rounded-full"
                  />
                  <span className="text-base text-gray-500 font-medium">
                    Google
                  </span>
                </div>
                <div className="mt-5">
                  <Image
                    src="/images/bungkerkaliadem.jpg"
                    alt="Gambar Ulasan"
                    width={400}
                    height={250}
                    className="w-full h-48 object-cover rounded-lg"
                  />
                </div>
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
              className="group bg-white rounded-xl shadow-md p-6 cursor-pointer select-none transition-shadow duration-300 hover:shadow-xl"
            >
              <summary className="flex justify-between items-center font-semibold text-gray-800 text-lg list-none">
                {q}
                <svg
                  className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </summary>
              <p className="mt-4 text-gray-600 leading-relaxed text-sm sm:text-base">
                Jawaban dari pertanyaan ini akan muncul di sini.
              </p>
            </details>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#3D6CB9] text-gray-100 py-10 mt-10">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Logo & Deskripsi */}
          <div>
            <div className="flex items-center mb-3">
              <svg
                className="w-8 h-8 text-green-400 mr-2"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 2L2 7l10 5 10-5-10-5zm0 13l10-5v6l-10 5-10-5v-6l10 5z"
                />
              </svg>
              <h1 className="text-xl font-bold text-white">Tlogo Putri</h1>
            </div>
            <p className="text-sm text-white-400">
              Wisata alam terbaik dengan pelayanan profesional dan pengalaman
              yang berkesan.
            </p>
          </div>

          {/* Kontak & Sosial Media */}
          <div>
            <h3 className="text-white font-semibold mb-4">
              Mari terhubung dengan kami
            </h3>
            <ul className="text-sm space-y-2">
              <li>
                <span className="font-medium">Email:</span>{" "}
                <a
                  href="mailto:tlogoputri@gmail.com"
                  className="hover:text-white transition"
                >
                  tlogoputri@gmail.com
                </a>
              </li>
              <li>
                <span className="font-medium">Instagram:</span>{" "}
                <a href="#" className="hover:text-white transition">
                  @jeeptlogoputri_adv
                </a>
              </li>
              <li>
                <span className="font-medium">WhatsApp:</span>{" "}
                <a
                  href="https://wa.me/6285174232247"
                  className="hover:text-white transition"
                >
                  0851-7423-2247
                </a>
              </li>
            </ul>
            <div className="flex space-x-4 mt-4">
              {/* Instagram */}
              <a href="#" className="hover:text-pink-400 transition">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"
                  />
                  <circle cx="17.5" cy="6.5" r="1.5" />
                </svg>
              </a>
              {/* WhatsApp */}
              <a href="#" className="hover:text-green-400 transition">
                <svg
                  className="w-9 h-9"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.72 13.06c-.27-.13-1.6-.79-1.84-.88-.24-.09-.41-.13-.58.13s-.67.88-.82 1.06c-.15.18-.3.2-.56.07-.27-.13-1.15-.42-2.2-1.35-.81-.72-1.36-1.6-1.52-1.87-.16-.27-.02-.41.12-.54.12-.12.27-.3.4-.45.13-.15.18-.27.27-.45.09-.18.05-.34-.02-.48s-.58-1.39-.8-1.9c-.21-.5-.43-.43-.58-.44-.15-.01-.33-.01-.51-.01s-.48.07-.73.34c-.25.27-.96.94-.96 2.3s.98 2.67 1.12 2.85c.13.18 1.93 3 4.68 4.2.65.28 1.16.45 1.56.58.65.2 1.24.17 1.7.1.52-.08 1.6-.65 1.82-1.28.23-.63.23-1.17.17-1.28-.06-.11-.24-.17-.51-.3z"
                  />
                </svg>
              </a>

              {/* Facebook */}
              <a href="#" className="hover:text-blue-400 transition">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M18 2h-3a4 4 0 00-4 4v3H8v4h3v8h4v-8h3l1-4h-4V6a1 1 0 011-1h3z"
                  />
                </svg>
              </a>
            </div>
          </div>

          {/* Alamat */}
          <div>
            <h3 className="text-white font-semibold mb-4">Alamat</h3>
            <p className="text-sm text-white-400 leading-relaxed">
              Kaliurang Timur, RT.06/RW15,
              <br />
              Kaliurang, Hargobinangun,
              <br />
              Kec. Pakem, Yogyakarta,
              <br />
              Daerah Istimewa Yogyakarta 55582
            </p>
          </div>
        </div>

        <div className="mt-10 border-t border-gray-700 pt-4 text-center text-sm text-black-500">
          <p>
            © 2024 Tlogo Putri. All rights reserved. | Created by{" "}
            <span className="text-white font-medium">YourName</span>
          </p>
        </div>
      </footer>
    </main>
  );
}
