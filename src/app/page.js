"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import HeroSection from "../../components/hero/HeroSection"; 
import Header from "../../components/hero/Header";
import FasilitasKami from "../../components/hero/FasilitasKami";
import PaketWisata from "../../components/hero/PaketWisata";
import { getTourPackages } from "./lib/api"; // Pastikan path ini sesuai dengan struktur folder Anda
import WhyChooseUsSection from "../../components/hero/WhyChooseUsSection"; // import komponen baru
import ArtikelBerita from "../../components/hero/ArtikelBerita";
import LokasiKami from "../../components/hero/LokasiKami";
import UlasanPengguna from "../../components/hero/UlasanPengguna";
import FaqSection from "../../components/hero/FaqSection";
import Footer from "../../components/hero/Footer";


export default function HomePage() {
  const [tourPackages, setTourPackages] = useState([]);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [popupImageIndex, setPopupImageIndex] = useState(0);
  const [popupImages, setPopupImages] = useState([]);

  useEffect(() => {
    // Mengambil data paket wisata dari backend
    const fetchData = async () => {
      const data = await getTourPackages(); // Ambil data dari API
      setTourPackages(data);
    };
    fetchData();
  }, []);

  const handleOpenPopup = (images) => {
    setPopupImages(images);
    setPopupImageIndex(0);
    setIsPopupOpen(true);
  };

   

  return (
    <main className="bg-white text-gray-800 font-sans">
      {/* Header */}
        <Header /> 

        {/* Hero Section */}
      <HeroSection />

  
      {/* Facilities Section */}
      <FasilitasKami />

      {/* Paket Wisata Populer */}     
      <PaketWisata
        tourPackages={tourPackages}
        setIsPopupOpen={setIsPopupOpen}
        setPopupImageIndex={setPopupImageIndex}
        handleOpenPopup={handleOpenPopup}
      />

      {/* Modal Popup */}
      {isPopupOpen && (
        <div className="fixed inset-0 z-50 flex justify-center items-center px-4 backdrop-blur-xs">
          <div className="bg-white rounded-xl shadow-2xl max-w-2xl w-full relative overflow-hidden">
            <div className="relative w-full h-64 group">
              <Image
                src={popupImages[popupImageIndex]}
                alt={`Gambar ${popupImageIndex}`}
                fill
                className="object-cover transition duration-1000 pointer-events-none"
              />
              <button
                className="absolute top-2 right-2 bg-white bg-opacity-80 hover:bg-opacity-100 text-black rounded-full w-8 h-8 flex items-center justify-center z-10"
                onClick={() => setIsPopupOpen(false)}
                aria-label="Tutup popup"
              >
                ×
              </button>
            </div>

            <div className="p-6">
              <h2 className="text-xl font-bold mb-2">Highlight</h2>
              <ul className="list-disc pl-5 text-gray-700 text-sm space-y-1">
                <li>Lava Tour Merapi menggunakan Jeep untuk 4 penumpang.</li>
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
      <WhyChooseUsSection />

      {/* Artikel & Berita */}
      <ArtikelBerita />

      {/* Lokasi (Google Maps) */}
      <LokasiKami />

      {/* Ulasan Pengguna */}
      <UlasanPengguna />

      {/* FAQ Section */}
      <FaqSection />

      {/* Footer */}
      <Footer />
    </main>
  );
}
