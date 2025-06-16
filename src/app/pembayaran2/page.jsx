"use client";

import { Suspense } from "react"; // <-- 1. Tambahkan import Suspense
import PembayaranSisaTagihan from "../../../components/paymentwo/sisaTagihan";
import Header from "../../../components/hero/HeaderPayment2";
import Footer from "../../../components/hero/Footer";

export default function SisaTagihanPage() {
  return (
    <main className="bg-[#F3F3F7] text-gray-800 font-sans min-h-screen flex flex-col">
      <Header />

      <div className="flex-grow">
        {/* 2. Bungkus komponen yang bermasalah dengan Suspense */}
        <Suspense fallback={<div className="text-center p-10">Memuat data tagihan...</div>}>
          <PembayaranSisaTagihan />
        </Suspense>
      </div>

      <Footer />
    </main>
  );
}