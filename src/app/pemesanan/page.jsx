// 'use client';

// import React, { useState, useEffect } from 'react';
// import { v4 as uuidv4 } from 'uuid';


// const HeaderKatalog = ({ onMenuToggle }) => (
//   <header className="bg-white shadow-md p-4 flex justify-between items-center sticky top-0 z-20">
//     <div className="text-xl font-bold text-[#3D6CB9]">Logo Perusahaan</div>
//     <nav className="hidden md:flex gap-6 items-center">
//       {["home", "paket", "fasilitas", "artikel", "about"].map((item) => (
//         <a key={item} href={`#${item}`} className="font-medium text-gray-700 hover:text-[#3D6CB9] capitalize">{item}</a>
//       ))}
//     </nav>
//     <button onClick={onMenuToggle} className="md:hidden p-2 rounded-md hover:bg-gray-100">
//       <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
//       </svg>
//     </button>
//   </header>
// );

// const MobileMenu = ({ isOpen, onClose }) => {
//   if (!isOpen) return null;
//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden" onClick={onClose}>
//         <div className="bg-white w-2/3 h-full p-6 shadow-xl" onClick={(e) => e.stopPropagation()}>
//             <h2 className="text-lg font-bold mb-4">Menu</h2>
//             {["home", "paket", "fasilitas", "artikel", "about"].map((item) => (
//               <a
//                 key={item}
//                 href={`#${item}`}
//                 onClick={onClose}
//                 className="block py-2 text-gray-700 hover:text-[#3D6CB9] transition font-medium capitalize"
//               >
//                 {item}
//               </a>
//             ))}
//         </div>
//     </div>
//   );
// };


// const PaketSection = ({ tourPackages }) => (
//   <section id="paket" className="p-6 md:p-12">
//     <h2 className="text-3xl font-bold text-center mb-8">Pilih Paket Wisata Anda</h2>
//     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//       {tourPackages.map((pkg) => (
//         <div key={pkg.token} className="border rounded-lg shadow-lg overflow-hidden">
//           <img src={pkg.image_url || `https://placehold.co/600x400/3D6CB9/white?text=${pkg.name}`} alt={pkg.name} className="w-full h-48 object-cover"/>
//           <div className="p-4">
//             <h3 className="text-xl font-semibold mb-2">{pkg.name}</h3>
//             <p className="text-gray-600 mb-4">{pkg.description}</p>
//             <button className="w-full bg-[#3D6CB9] text-white py-2 rounded-lg hover:bg-blue-700 transition">
//               Lihat Detail
//             </button>
//           </div>
//         </div>
//       ))}
//     </div>
//   </section>
// );

// const Footer = () => (
//   <footer className="bg-gray-800 text-white p-8 mt-12 text-center">
//     <p>&copy; 2024 Nama Perusahaan. All rights reserved.</p>
//   </footer>
// );

// // Helper component untuk menampilkan pesan loading
// const LoadingIndicator = () => (
//   <div className="flex justify-center items-center h-screen">
//     <div className="text-xl font-semibold">Memuat paket wisata...</div>
//   </div>
// );

// // Helper component untuk menampilkan pesan error
// const ErrorMessage = ({ message }) => (
//   <div className="flex justify-center items-center h-screen bg-red-50 p-4">
//     <div className="text-xl font-semibold text-red-600 text-center">
//       <p>Terjadi Kesalahan</p>
//       <p className="text-sm mt-2">{message}</p>
//     </div>
//   </div>
// );
// const fetchAndPreparePackages = async () => {
//   const response = await fetch("https://tpapi.siunjaya.id/api/packages");
//   if (!response.ok) {
//     throw new Error(`Gagal mengambil data: Status ${response.status}`);
//   }
//   const data = await response.json();
  
//   // Menambahkan token unik ke setiap paket
//   const packagesWithToken = data.map((item) => ({
//     ...item,
//     token: uuidv4(), // Token untuk identifikasi unik di sisi klien
//   }));

//   // Membuat map antara token dan slug untuk disimpan
//   const tokenSlugMap = packagesWithToken.reduce((acc, item) => {
//     acc[item.token] = item.slug;
//     return acc;
//   }, {});
  
//   localStorage.setItem("tokenSlugMap", JSON.stringify(tokenSlugMap));

//   return packagesWithToken;
// };


// export default function KatalogPemesanan() {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [tourPackages, setTourPackages] = useState([]);
  
//   // State untuk loading dan error handling
//   const [isLoading, setIsLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const loadData = async () => {
//       try {
//         setIsLoading(true); // Mulai loading
//         setError(null); // Reset error state
//         const data = await fetchAndPreparePackages();
//         setTourPackages(data);
//       } catch (err) {
//         console.error("Error fetching tour packages:", err);
//         setError(err.message); // Simpan pesan error untuk ditampilkan ke user
//       } finally {
//         setIsLoading(false); // Selesaikan loading, baik berhasil maupun gagal
//       }
//     };

//     loadData();
//   }, []); // Dependensi kosong agar hanya berjalan sekali saat komponen dimuat
  

//   if (isLoading) {
//     return <LoadingIndicator />;
//   }

//   if (error) {
//     return <ErrorMessage message={error} />;
//   }

//   return (
//     <main className="bg-white text-gray-800 font-sans">
//       {/* Memanggil Header satu kali dan meneruskan fungsi untuk toggle menu */}
//       <HeaderKatalog onMenuToggle={() => setMenuOpen(!menuOpen)} />
      
//       {/* Memanggil komponen MobileMenu yang terpisah */}
//       <MobileMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
      
//       <PaketSection tourPackages={tourPackages} />
//       <Footer />
//     </main>
//   );
// }


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
        const response = await fetch('hhttps://tpapi.siunjaya.id/api/packages');
        const data = await response.json();

        if (!Array.isArray(data)) {
          console.error("Expected array of packages but got:", data);
          return;
        }

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
        console.error('Error fetching tour packages:', error);
      }
    };

    fetchTourPackages();
  }, []);

  return (
    <main className="bg-white text-gray-800 font-sans">
      {/* Header */}
      <Header_katalog currentStep={currentStep} />

      {/* Mobile Menu */}
      {menuOpen && (
        <nav className="md:hidden px-6 py-4 bg-white shadow-md">
          {['home', 'paket', 'fasilitas', 'artikel', 'about'].map((item) => (
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
