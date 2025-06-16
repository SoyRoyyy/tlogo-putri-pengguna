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
  const [tourPackages, setTourPackages] = useState([]);

  useEffect(() => {
    const fetchTourPackages = async () => {
      try {
        const response = await fetch("http://localhost:8000/api/packages");
        const data = await response.json();

        const withToken = data.map((item) => ({
          ...item,
          token: uuidv4(),
        }));

        const tokenMap = withToken.reduce((acc, item) => {
          acc[item.token] = item.slug;
          return acc;
        }, {});

        localStorage.setItem("tokenSlugMap", JSON.stringify(tokenMap));
        setTourPackages(withToken);
      } catch (error) {
        console.error("Error fetching tour packages:", error);
      }
    };

    fetchTourPackages();
  }, []);

  return (
    <main className="bg-white text-gray-800 font-sans">
      <HeaderKatalog currentStep={1} />
      {menuOpen && <MobileMenu onClose={() => setMenuOpen(false)} />}
      <PaketSection tourPackages={tourPackages} />
      <Footer />
    </main>
  );
}