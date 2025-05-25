"use client";

// import { useEffect, useState } from "react";

// export default function ArtikelDetail({ params }) {
//   const { id } = params;
//   const [article, setArticle] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     async function fetchArticle() {
//       try {
//         const res = await fetch(`http://127.0.0.1:8000/api/content-generate/article/${id}`); // <- Ganti ke endpoint ini
//         if (!res.ok) throw new Error("Gagal mengambil data artikel");
//         const data = await res.json();
//         setArticle(data.data);
//       } catch (err) {
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     }

//     fetchArticle();
//   }, [id]);

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>Error: {error}</p>;

//   return (
//     <div className="p-8 max-w-4xl mx-auto">
//       <h1 className="text-4xl font-bold mb-6">{article.judul}</h1>
//       <img
//         src={`http://127.0.0.1:8000/storage/images/${article.gambar}`}
//         alt={article.judul}
//         className="w-full h-auto rounded-lg mb-6"
//       />
//       <p className="text-lg leading-relaxed whitespace-pre-line">{article.isi_konten || "Isi artikel belum tersedia."}</p>
//     </div>
//   );
// }


import { use } from "react";
import { useState, useEffect } from "react";

export default function ArtikelDetail({ params }) {
  const { id } = use(params); 

  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const response = await fetch(`http://127.0.0.1:8000/api/content-generate/article/${id}`);
        if (!response.ok) {
          throw new Error("Gagal mengambil artikel");
        }
        const data = await response.json();
        setArticle(data.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchArticle();
  }, [id]);

  if (loading) return <p className="p-4">Memuat artikel...</p>;
  if (error) return <p className="p-4 text-red-600">Error: {error}</p>;
  if (!article) return <p className="p-4 text-gray-600">Artikel tidak ditemukan</p>;

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">{article.judul}</h1>
      <p className="text-sm text-gray-500 mb-4">{article.tanggal}</p>
      {article.gambar && (
        <img
          src={`http://127.0.0.1:8000/storage/gambar/${article.gambar}`}
          alt={article.judul}
          className="w-full h-auto mb-6 rounded-lg"
        />
      )}
      <p className="text-gray-800 text-justify">{article.isi_konten}</p>
    </div>
  );
}
