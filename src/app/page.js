"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import HeroSection from "../../components/hero/HeroSection"; 
import Header from "../../components/hero/Header";
import FasilitasKami from "../../components/hero/FasilitasKami";
import PaketWisata from "../../components/hero/PaketWisata";
import { getTourPackages } from "./lib/api"; // Pastikan path ini sesuai dengan struktur folder Anda
import WhyChooseUsSection from "../../components/hero/WhyChooseUsSection";
import PopupModal from "../../components/hero/PopupModal";// import komponen baru
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
    const fetchData = async () => {
      const data = await getTourPackages();
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
      <Header />
      <HeroSection />
      <FasilitasKami />
      <PaketWisata
        tourPackages={tourPackages}
        setIsPopupOpen={setIsPopupOpen}
        setPopupImageIndex={setPopupImageIndex}
        handleOpenPopup={handleOpenPopup}
      />
      {isPopupOpen && (
        <PopupModal
          images={popupImages}
          index={popupImageIndex}
          onClose={() => setIsPopupOpen(false)}
        />
      )}
      <WhyChooseUsSection />
      <ArtikelBerita />
      <LokasiKami />
      <UlasanPengguna />
      <FaqSection />
      <Footer />
    </main>
  );
}
