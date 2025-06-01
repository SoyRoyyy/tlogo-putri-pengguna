"use client";

import { useSearchParams } from "next/navigation";
import PembayaranSisaTagihan from '../../../components/paymentwo/sisaTagihan';
import Header from "../../../components/hero/HeaderPayment2";
import Footer from "../../../components/hero/Footer";

// export default function SisaTagihanPage() {
//   const searchParams = useSearchParams();
//   const orderId = searchParams.get("orderId");

//   if (!orderId) return <p>Order ID tidak ditemukan.</p>;

//   return (
//     <div className="min-h-screen bg-gray-100 py-10">
//       <PembayaranSisaTagihan
//         orderId={orderId}
//         totalHarga={1000000} // bisa diganti fetch dari API
//         deposit={0} // juga bisa diganti dari API
//       />
//     </div>
//   );
// }

// src/app/pembayaran2/page.jsx

export default function SisaTagihanPage() {
  return (
    <main className="bg-[#F3F3F7] text-gray-800 font-sans min-h-screen flex flex-col">
      <Header />

        <PembayaranSisaTagihan/>

      <Footer />
    </main>
  );
}
