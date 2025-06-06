"use client";

import Image from "next/image";
import ArticleCard from "./ArtikelCard";
import { getPublishedArticles } from "../../src/app/lib/api";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";



export default function ArtikelBerita () {
  const router = useRouter();
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getPublishedArticles();
        setArticles(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
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
  <section className="px-6 py-16 bg-gray-50" id="artikel">
    <div className="max-w-7xl mx-auto">
      {/* Container judul + tombol lihat semua */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold text-gray-800">
          Artikel
        </h2>
        <button
          onClick={() => router.push("/artikel")}
          className="
              px-6 py-2 rounded-lg
              border-2 border-[#3D6CB9]  /* Border biru */
              text-gray-800             /* Warna teks */
              font-medium             /* Teks lebih tebal */
              hover:bg-[#3D6CB9]        /* Background biru saat hover */
              hover:text-white          /* Teks putih saat hover */
              transition duration-200   /* Transisi halus */
              focus:outline-none focus:ring-2 focus:ring-[#3D6CB9] focus:ring-opacity-50 cursor-pointer
            "
        >
          Lihat Semua
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {articles.slice(0, 3).map((article) => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </div>

    </div>
  </section>
);

};

