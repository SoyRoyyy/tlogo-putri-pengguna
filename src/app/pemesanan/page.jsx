'use client';

import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Header_katalog from '../../../components/hero/HeaderKatalog';
import PaketSection from '../../../components/hero/PaketSection';
import Footer from '../../../components/hero/Footer';
import { getTourPackages } from '../lib/api';

export default function KatalogPemesanan() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [tourPackages, setTourPackages] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getTourPackages();
        const withToken = data.map((item) => {
          const token = uuidv4();
          return { ...item, token };
        });
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
    fetchData();
  }, []);

  return (
    <main className="bg-white text-gray-800 font-sans">
      <Header_katalog currentStep={1} />
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
      <PaketSection tourPackages={tourPackages} />
      <Footer />
    </main>
  );
}
