"use client";

import PembayaranSisaTagihan from "../../../components/paymentwo/sisaTagihan";
import Header from "../../../components/hero/HeaderPayment2";
import Footer from "../../../components/hero/Footer";

export default function SisaTagihanPage() {
  return (
    <main className="bg-[#F3F3F7] text-gray-800 font-sans min-h-screen flex flex-col">
      <Header />

      {/* Tambahkan div wrapper untuk konten agar bisa flex-grow */}
      <div className="flex-grow">
        <PembayaranSisaTagihan />
      </div>

      <Footer />
    </main>
  );
}
