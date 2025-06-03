// "use client";

// import { useSearchParams } from "next/navigation";
// import { useState } from "react";
// import { Copy } from "lucide-react";
// import Header from "../../../../components/hero/HeaderPayment2";
// import Footer from "../../../../components/hero/Footer";

// export default function HalamanVA() {
//   const searchParams = useSearchParams();
//   const nominal = Number(searchParams.get("nominal")) || 0;
//   const kode = searchParams.get("kode") || "UNKNOWN";

//   const [copySuccess, setCopySuccess] = useState(false);
//   const virtualAccount = "9876543210";
//   const batasWaktu = "Senin, 19 Juni 2025 23:59:14";
//   const adminPhone = "0812-29342-1234";

//   const handleCopy = () => {
//     navigator.clipboard.writeText(virtualAccount);
//     setCopySuccess(true);
//     setTimeout(() => setCopySuccess(false), 2000);
//   };

//   return (
//     <main className="bg-white text-gray-800 font-sans min-h-screen flex flex-col">
//       <Header />

//       <div className="max-w-3xl mx-auto p-6 space-y-6">
//         {/* Informasi Pemesanan */}
//         <div>
//           <h1 className="text-xl font-bold">Pembayaran Sisa Tagihan</h1>
//           <p className="text-sm text-gray-700">
//             No Pemesanan: <strong>{kode}</strong>
//           </p>
//         </div>

//         <div className="text-sm font-medium">
//           Total Pembayaran:{" "}
//           <span className="font-bold">
//             Rp. {nominal.toLocaleString("id-ID")}
//           </span>
//         </div>

//         {/* Instruksi Pembayaran */}
//         <div className="bg-white border rounded-lg shadow p-6 text-center">
//           <h2 className="text-sm font-semibold mb-2">
//             Instruksi Pembayaran Sisa Tagihan
//           </h2>
//           <p className="text-xs text-gray-500 mb-1">
//             Bayar sesuai nominal di bawah ini:
//           </p>
//           <p className="text-2xl font-bold text-gray-800 mb-4">
//             Rp. {nominal.toLocaleString("id-ID")}
//           </p>

//           <p className="text-sm text-gray-700 mb-4">
//             Pembayaran ke nomor rekening (Virtual Account) Bank BCA dengan nomor
//             yang tertera di bawah. Pembayaran dapat dilakukan dari Bank BCA dan{" "}
//             <strong>juga Bank lainnya</strong>. Pembayaran dari Bank selain{" "}
//             <strong>BCA</strong> hanya bisa menggunakan metode transfer{" "}
//             <strong>Realtime Online</strong>. Silakan ikuti panduan yang
//             tertera.
//           </p>

//           <p className="text-xs text-red-600 font-semibold mb-4">
//             Batas Waktu Pembayaran: <br />
//             {batasWaktu}
//           </p>

//           {/* Nomor Virtual Account */}
//           <div className="flex items-center justify-between bg-gray-100 border rounded px-4 py-3 mb-4">
//             <div className="flex items-center gap-2">
//               <img src="/images/BCA.png" alt="BCA" className="w-15 h15" />
//               <span className="font-medium">{virtualAccount}</span>
//             </div>
//             <button
//               onClick={handleCopy}
//               className="text-sm px-3 py-1 bg-gray-200 hover:bg-gray-300 rounded-md flex items-center gap-1"
//             >
//               <Copy className="w-4 h-4" />
//               Salin
//             </button>
//           </div>

//           {copySuccess && (
//             <p className="text-green-600 text-sm mb-2">Berhasil disalin!</p>
//           )}

//           {/* Tombol Bayar */}
//           <div className="flex justify-end gap-3 mt-6">
//             <button
//               onClick={() => alert("Bayar ditekan")}
//               className="bg-[#3D6CB9]  text-white px-4 py-2 rounded hover:bg-blue-700"
//             >
//               Bayar
//             </button>
//           </div>
//         </div>

//         {/* Kontak Admin */}
//         <div className="mt-6 p-6 border rounded-lg bg-gray-50 text-center">
//           <div className="flex justify-center mb-3">
//             <img
//               src="/images/CSIcon.png"
//               alt="Admin"
//               className="w-16 h-16"
//             />
//           </div>
//           <p className="text-sm text-gray-700 mb-2">
//             Jika ada kendala pembayaran VA silakan menghubungi nomor berikut:
//           </p>
//           <p className="text-xs text-gray-500 mb-2">
//             Jam Operasional: 08:00 - 22:00 WIB
//           </p>

//           <a
//             href={`https://wa.me/${adminPhone.replace(/\D/g, "")}?text=Halo%20admin%20Jeep%20Tlogo%20Putri%20Kaliurang,%20saya%20butuh%20bantuan`}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="flex items-center justify-center gap-2 bg-green-600 text-white px-4 py-2 rounded-md text-sm w-fit mx-auto hover:bg-green-700 transition"
//           >
//             <img src="/images/WALog.png" alt="WA" className="w-6 h-6" />
//             <span>Hubungi Admin di WhatsApp</span>
//             </a>

//         </div>
//       </div>

//       <Footer />
//     </main>
//   );
// }
