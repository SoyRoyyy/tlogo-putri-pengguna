// "use client";
// import { useState } from "react";
// import Image from "next/image";
// import { useRouter } from "next/navigation";
// import ModalMaintenance from "../modalpending";

// const PaketWisata = ({
//   tourPackages,
//   setIsPopupOpen,
//   setPopupImageIndex,
//   handleOpenPopup,
// }) => {
//   const router = useRouter();
//   const [showModal, setShowModal] = useState(false);

//   const handlePesan = (token) => {
//     localStorage.setItem("selectedToken", token);
//     router.push(`/pemesanan/form?token=${encodeURIComponent(token)}`);
//   };

//   return (
//     <section className="px-6 py-14 bg-gray-50" id="paket">
//       <div className="max-w-7xl mx-auto">
//         <h2 className="text-3xl font-extrabold text-gray-900 mb-10 text-center tracking-wide">
//           Paket Wisata Populer
//         </h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
//           {tourPackages.map((paket, idx) => (
//             <div
//               key={paket.id ?? idx}
//               className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 transform transition duration-300 hover:scale-[1.03] hover:shadow-2xl cursor-pointer flex flex-col"
//             >
//               <div className="relative w-full h-48 sm:h-56 overflow-hidden rounded-t-xl group">
//                 <Image
//                   src={`/images/paket/${paket.image}`}
//                   alt={paket.package_name}
//                   fill
//                   style={{ objectFit: "cover" }}
//                   className="transition-transform duration-500 group-hover:scale-105"
//                 />
//               </div>
//               <div className="p-6 flex flex-col flex-grow justify-between">
//                 <div className="flex items-center justify-between mb-6">
//                   <h3 className="text-xl font-semibold text-black tracking-tight">
//                     {paket.package_name}
//                   </h3>
//                   <button
//                     className="text-black font-semibold text-sm uppercase tracking-wide border-b-2 border-transparent hover:border-black hover:text-gray-800 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-black rounded"
//                     onClick={() =>
//                       handleOpenPopup([`/images/paket/${paket.image}`])
//                     }
//                   >
//                     Detail
//                   </button>
//                 </div>
//                 <div className="flex items-center justify-between mt-auto">
//                   <div className="font-extrabold text-lg tracking-wide">
//                     Rp {paket.price.toLocaleString("id-ID")}
//                   </div>
//                   <button
//                     onClick={() => handlePesan(paket.token)}
//                     className="bg-[#3D6CB9] text-white px-5 py-2 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-200 font-medium shadow-md"
//                   >
//                     Pesan Sekarang
//                   </button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default PaketWisata;
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const PaketWisata = ({ tourPackages, setIsPopupOpen, setPopupImageIndex, handleOpenPopup }) => {
  return (
    <section className="px-6 py-14 bg-gray-50" id="paket">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-10 text-center tracking-wide">
          Paket Wisata Populer
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {tourPackages.map((paket) => (
            <div
              key={paket.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <Image
                src={`/images/paket/${paket.image}`}
                alt={paket.package_name}
                width={400}
                height={250}
                className="w-full h-56 object-cover rounded-t-xl"
              />
              <div className="p-6 flex flex-col flex-grow justify-between">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-semibold text-black tracking-tight">
                    {paket.package_name}
                  </h3>
                  <button
                    className="text-black font-semibold text-sm uppercase tracking-wide border-b-2 border-transparent hover:border-black hover:text-gray-800 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-black rounded"
                    onClick={() =>
                      handleOpenPopup([`/images/paket/${paket.image}`]) // Gambar untuk popup
                    }
                  >
                    Detail
                  </button>
                </div>
                <div className="flex items-center justify-between mt-auto">
                  <div className="font-extrabold text-lg tracking-wide">
                    Rp {paket.price.toLocaleString("id-ID")}
                  </div>
                  <Link
                  href={`/pemesanan/form?token=${paket.token}`}Add commentMore actions
                  onClick={() => {
                    const tokenMap = JSON.parse(localStorage.getItem("tokenSlugMap") || "{}");
                    tokenMap[paket.token] = paket.slug; // simpan mapping token ke slug
                    localStorage.setItem("tokenSlugMap", JSON.stringify(tokenMap));
                    }}
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300">
                      Pesan Sekarang
                </Link>

              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);
};

export default PaketWisata;