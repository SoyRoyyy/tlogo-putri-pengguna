"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function HomePage() {
  const images = [
    "/images/bungkerkaliadem.jpg",
    "/images/BatuAlien.jpeg.jpg",
    "/images/MuseumMini.jpeg.jpg",
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto slide tiap 5 detik
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  // Fungsi ke slide sebelumnya
  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  // Fungsi ke slide berikutnya
  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <main className="bg-white text-gray-800">
      {/* Header */}
      <header className="flex justify-between items-center px-6 py-4 shadow-md sticky top-0 bg-white z-50">
        <div className="flex items-center space-x-2">
          <Image src="/images/image.png" alt="Logo" width={40} height={40} />
          <span className="font-bold text-lg">Tlogo Putri</span>
        </div>
        <nav className="space-x-4 hidden md:flex">
          <a href="#home" className="hover:text-green-600 font-medium">
            Home
          </a>
          <a href="#paket" className="hover:text-green-600 font-medium">
            Paket
          </a>
          <a href="#fasilitas" className="hover:text-green-600 font-medium">
            Fasilitas
          </a>
          <a href="#artikel" className="hover:text-green-600 font-medium">
            Artikel
          </a>
          <a href="#about" className="hover:text-green-600 font-medium">
            About
          </a>
        </nav>
      </header>

      {/* Hero Slider Section */}
      <section className="relative w-full h-[600px] flex items-center justify-center bg-black">
        {/* Tombol prev */}
        <button
          onClick={prevSlide}
          className="absolute left-4 z-10 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition"
          aria-label="Previous Slide"
        >
          &#60;
        </button>

        {/* Gambar */}
        <div className="w-full h-full relative">
          <Image
            src={images[currentIndex]}
            alt={`Slide ${currentIndex + 1}`}
            layout="fill"
            objectFit="cover"
            className="transition-opacity duration-1000"
            priority
          />
        </div>

        {/* Tombol next */}
        <button
          onClick={nextSlide}
          className="absolute right-4 z-10 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition"
          aria-label="Next Slide"
        >
          &#62;
        </button>
      </section>

      {/* Hero Section: Title + Description */}
      <section className="px-4 py-8 max-w-5xl mx-auto text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
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

      {/* Jeep Icon + Pesan Sekarang dalam 1 button dengan lingkaran besar dan kotak persegi */}
      <section className="px-4 py-10 flex justify-center">
        <button
          className="relative flex items-center py-3 px-8 rounded-md text-lg font-semibold hover:bg-blue-700 transition overflow-visible"
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
      </section>

      {/* Facilities Section */}
      <section className="px-4 py-10 bg-white-50">
        <h2 className="text-center text-2xl font-semibold mb-8">
          FASILITAS KAMI
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {[
            { label: "Tempat Parkir Luas", src: "/images/bungkerkaliadem.jpg" },
            { label: "Taman", src: "/images/MuseumMini.jpeg.jpg" },
            { label: "Toilet", src: "/images/MuseumMini.jpeg.jpg" },
            { label: "Mushola", src: "/images/PetilasanMbahMarijan.jpeg.jpg" },
            { label: "Kantin", src: "/images/TheLostWorldPark.jpg" },
            { label: "Sewa Skuter", src: "/images/TrackAir.jpeg.jpg" },
          ].map((item, idx) => (
            <div key={idx} className="text-center">
              <div className="bg-white rounded-lg shadow hover:shadow-xl transition-shadow overflow-hidden">
                <Image
                  src={item.src}
                  alt={item.label}
                  width={300}
                  height={240} // Tinggi gambar untuk SEO, tapi CSS mengatur tampilan
                  className="w-full h-60 object-cover" // Ubah tinggi di sini
                />
              </div>
              <p className="mt-3 font-medium text-gray-800">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Jeep Section */}
      <section className="px-4 py-10">
        <h2 className="text-center text-2xl font-semibold mb-8">JEEP KAMI</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {[
            { label: "Jeep Merapi 1", src: "/images/TrackAir.jpeg.jpg" },
            { label: "Jeep Merapi 2", src: "/images/TheLostWorldPark.jpg" },
            { label: "Jeep Merapi 3", src: "/images/MuseumMini.jpeg.jpg" },
            { label: "Jeep Merapi 4", src: "/images/bungkerkaliadem.jpg" },
            { label: "Jeep Merapi 5", src: "/images/BatuAlien.jpeg.jpg" },
            { label: "Jeep Merapi 6", src: "/images/TrackAir.jpeg.jpg" },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg shadow p-4 text-center hover:shadow-xl transition-shadow"
            >
              <Image
                src={item.src}
                alt={item.label}
                width={300}
                height={200}
                className="w-full h-32 object-cover rounded"
              />
              <p className="mt-2 font-medium text-gray-800">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* User Reviews Section */}
      <section className="px-4 py-10 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-semibold text-gray-800">
              Ulasan Pengguna
            </h2>
            <button className="text-blue-600 hover:underline">
              Lihat Semua
            </button>
          </div>
          <p className="text-sm text-gray-600 mb-4">
            Apa kata orang tentang kami?
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "Sangat seru dan menyenangkan! Saya akan kembali lagi!",
              "Pengalaman yang luar biasa, saya sangat menikmatinya!",
              "Tempat yang indah dan pemandangan yang luar biasa!",
            ].map((review, idx) => (
              <div
                key={idx}
                className="bg-gray-100 rounded-lg p-6 shadow-lg transition-transform transform hover:scale-105"
              >
                <p className="text-sm italic text-gray-700 mb-4">"{review}"</p>
                <div className="flex items-center gap-1 mb-2">
                  {Array.from({ length: 5 }).map((_, starIdx) => (
                    <span key={starIdx} className="text-yellow-500 text-xl">
                      ⭐
                    </span>
                  ))}
                </div>
                <div className="text-sm text-gray-600">
                  <div className="font-semibold">Pengguna {idx + 1}</div>
                  <div className="text-gray-500 text-xs">2 hari yang lalu</div>
                </div>
                <div className="mt-4 flex items-center gap-2">
                  <span className="text-lg">🌐</span>{" "}
                  {/* Ikon Google sebagai emoji */}
                  <p className="text-sm font-medium text-gray-600">Google</p>
                </div>
                <div className="mt-4">
                  <Image
                    src="/images/bungkerkaliadem.jpg"
                    alt="Gambar Ulasan"
                    width={300}
                    height={200}
                    className="w-full h-32 object-cover rounded-lg"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location Section with Google Maps */}
      <section className="px-4 py-10 bg-gray-100">
        <h2 className="text-center text-2xl font-semibold mb-6">Lokasi</h2>
        <div className="max-w-4xl mx-auto">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3952.648632392294!2d110.44126721432394!3d-7.829266679660496!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a5798e1b3f5a9%3A0x7c53642b0378394a!2sTlogo%20Putri!5e0!3m2!1sen!2sid!4v1715600000000"
            width="100%"
            height="450"
            allowFullScreen=""
            loading="lazy"
            className="rounded shadow"
          ></iframe>
        </div>
      </section>

      {/* Articles & News Section */}
      <section className="px-4 py-10 bg-gray-50">
        <h2 className="text-2xl font-semibold text-center mb-8 text-gray-800">
          Artikel & Berita
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {Array.from({ length: 3 }).map((_, idx) => (
            <div
              key={idx}
              className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105"
            >
              <Image
                src="/images/TrackAir.jpeg.jpg"
                alt={`Artikel ${idx + 1}`}
                width={300}
                height={200}
                className="w-full h-48 object-cover"
              />
              <h3 className="mt-4 text-xl font-semibold text-gray-800 px-4">
                Judul Artikel {idx + 1}
              </h3>
              <p className="text-sm text-gray-600 px-4 mb-4">
                Deskripsi singkat artikel yang menjelaskan konten utama dengan
                jelas dan menarik perhatian pembaca.
              </p>
              <button className="text-blue-600 hover:underline text-sm font-medium px-4 mb-4">
                Baca Selengkapnya
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="px-4 py-10 bg-gray-100">
        <h2 className="text-center text-2xl font-semibold mb-8">FAQ's</h2>
        <div className="max-w-2xl mx-auto space-y-4">
          {[
            "Apa saja jenis paket jeep yang tersedia?",
            "Apakah bisa pesan online?",
            "Di mana lokasi titik kumpul?",
            "Apakah tersedia fasilitas keluarga?",
            "Bagaimana jika cuaca buruk saat booking?",
          ].map((q, idx) => (
            <details key={idx} className="bg-white p-4 rounded shadow">
              <summary className="cursor-pointer font-medium">{q}</summary>
              <p className="mt-2 text-sm text-gray-600">
                Jawaban dari pertanyaan ini akan muncul di sini.
              </p>
            </details>
          ))}
        </div>
      </section>
    </main>
  );
}
``;
