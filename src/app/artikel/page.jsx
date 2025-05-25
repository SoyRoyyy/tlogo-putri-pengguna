// "use client";

// import Image from "next/image";
// import { useState, useEffect } from "react";

// export default function ArtikelTlogoPutri() {
//   const [articles, setArticles] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchArticles = async () => {
//       try {
//         const response = await fetch(
//           "http://127.0.0.1:8000/api/content-generate/articleterbit"
//         );

//         if (!response.ok) {
//           throw new Error("Network response was not ok");
//         }

//         const data = await response.json();

//         if (Array.isArray(data.data)) {
//           setArticles(data.data);
//         } else {
//           throw new Error("Data format tidak sesuai");
//         }
//       } catch (error) {
//         setError(error.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchArticles();
//   }, []);

//   if (loading) {
//     return (
//       <div className="flex justify-center items-center min-h-screen">
//         <p className="text-xl text-gray-500">Memuat artikel...</p>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="flex justify-center items-center min-h-screen text-red-600">
//         <p>Error: {error}</p>
//       </div>
//     );
//   }

//   return (
//     <div className="w-full min-h-screen px-6 py-12 bg-white text-gray-800 relative">
//       <div className="absolute top-6 left-6">
//         <a
//           href="/"
//           className="text-gray-500 hover:text-blue-600 transition-colors duration-200 font-medium"
//         >
//           &lt; Kembali ke Beranda
//         </a>
//       </div>

//       <h1 className="text-3xl md:text-4xl font-bold text-center mb-10 text-gray-900">
//         Artikel Wisata Tlogo Putri
//       </h1>

//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
//         {articles.map((article) => (
//           <div
//             key={article.id_artikel || article.judul}
//             className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-transform duration-300 hover:-translate-y-1 p-4"
//           >
//             <div className="w-full h-48 relative rounded-md overflow-hidden">
//               <img
//                 src={`http://127.0.0.1:8000/storage/images/${article.gambar}`}
//                 alt={article.judul}
//                 fill
//                 style={{ objectFit: "cover" }}
//                 sizes="(max-width: 768px) 100vw,
//                        (max-width: 1200px) 50vw,
//                        33vw"
//                 priority={false}
//               />
//             </div>
//             <p className="mt-4 text-base font-semibold text-gray-700">
//               {article.judul}
//             </p>
//           </div>
//         ))}
//       </div>

//       <div className="flex justify-end mt-10">
//         <a
//           href="#"
//           className="text-gray-500 hover:text-blue-600 transition-colors duration-200 font-medium"
//         >
//           Lihat Semua &gt;
//         </a>
//       </div>
//     </div>
//   );
// }


"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { FiArrowLeftCircle } from "react-icons/fi";


export default function ArtikelTlogoPutri() {
  const router = useRouter();  // <-- inisialisasi router
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await fetch(
          "http://127.0.0.1:8000/api/content-generate/articleterbit"
        );

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();

        if (Array.isArray(data.data)) {
          setArticles(data.data);
        } else {
          throw new Error("Data format tidak sesuai");
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p className="text-xl text-gray-500">Memuat artikel...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-screen text-red-600">
        <p>Error: {error}</p>
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen px-[114px] py-6 bg-white text-gray-800 relative">
      <div className="absolute top-6 left-6 flex items-center space-x-2 cursor-pointer text-black-500 hover:text-[#3D6CB9] transition-colors duration-200 font-medium"
          onClick={() => router.push("/")}>
        <FiArrowLeftCircle className="text-4xl" />
      </div>

      <h1 className="text-3xl md:text-4xl font-bold text-center mb-10 text-gray-900">
        Artikel Wisata Tlogo Putri
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {articles.map((article) => (
  <div
    key={article.id}
    className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-transform duration-300 hover:-translate-y-1 p-4 cursor-pointer"
    onClick={() => router.push(`/artikel/${article.id}`)}
  >
    <div className="w-full h-48 relative rounded-md overflow-hidden">
      <img
        src={`http://127.0.0.1:8000/storage/gambar/${article.gambar}`}
        alt={article.gambar}
        className="object-cover w-full h-full"
      />
    </div>
    <p className="mt-4 text-base font-semibold text-gray-700">
      {article.judul}
    </p>
  </div>
))}

      </div>

      <div className="flex justify-end mt-10">
        <a
          href="#"
          className="text-gray-500 hover:text-blue-600 transition-colors duration-200 font-medium"
        >
          Lihat Semua &gt;
        </a>
      </div>
    </div>
  );
}
