'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Footer from '../../../components/hero/Footer';
import PaketSection from '../../../components/hero/PaketSection';
import Header_katalog from '../../../components/hero/HeaderKatalog';



export default function KatalogPemesanan() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [tourPackages, setTourPackages] = useState([]);

  // Fetch tour packages from API
   useEffect(() => {
    const fetchTourPackages = async () => {
      try {
        const response = await fetch("http://localhost:8000/api/packages");
        const data = await response.json();

        // Tambahkan token random dan simpan ke localStorage untuk mapping
        const withToken = data.map((item) => {
          const token = uuidv4();
          return { ...item, token };
        });

        // Simpan mapping token ↔ slug ke localStorage
        const tokenMap = withToken.reduce((acc, item) => {
          acc[item.token] = item.slug;
          return acc;
        }, {});
        localStorage.setItem('tokenSlugMap', JSON.stringify(tokenMap));

        setTourPackages(withToken);
      } catch (error) {
        console.error("Error fetching tour packages:", error);
      }
    };
    fetchTourPackages();
  }, []);

  return (
    <main className="bg-white text-gray-800 font-sans">
      {/* Header */}
      <Header_katalog currentStep={1} />

      {/* Mobile Menu */}
      {menuOpen && (
        <nav className="md:hidden px-6 py-4 bg-white shadow-md">
          {["home", "paket", "fasilitas", "artikel", "about"].map((item) => (
            <a
              key={item}
              href={`#${item}`}
              onClick={() => setMenuOpen(false)}
              className="block py-2 text-gray-700 hover:text-[#3D6CB9] transition font-medium capitalize"
            >
              {item}
            </a>
          ))}
        </nav>
      )}

      {/* Paket Section */}
      <PaketSection tourPackages={tourPackages} />

      {/* Footer */}
      <Footer />
    </main>
  );
}
