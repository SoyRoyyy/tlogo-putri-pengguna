// components/HeroSection.jsx
"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

// ✅ Pastikan semua file gambar ini ada di folder public/images/
const images = [
  "/images/42.jpg",
  "/images/DSC04238.jpg",
  "/images/DSC04616.jpg",
  "/images/DSC04211.jpg",
  "/images/DSC04658.jpg"
];

export default function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const prevSlide = () =>
    setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1);

  const nextSlide = () =>
    setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1);

  return (
    <>
      {/* Hero Slider */}
      <section
        id="home"
        className="relative w-full h-screen flex items-center justify-center bg-black overflow-hidden"
      >
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
          &#x276E;
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 z-10 text-white text-4xl font-thin p-3 rounded-full hover:bg-white/20 transition"
          aria-label="Berikutnya"
        >
          &#x276F;
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
            <span className="ml-12 text-white justify-center">Pesan Sekarang!!!</span>
          </button>
        </Link>
      </section>
    </>
  );
}
