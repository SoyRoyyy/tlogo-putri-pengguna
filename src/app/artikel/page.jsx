"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { FiArrowLeftCircle } from "react-icons/fi";
import ArticleCard from "@/components/hero/ArtikelCard";
import { getPublishedArticles } from "../lib/api";

export default function ArtikelTlogoPutri() {
  const router = useRouter();
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [fadeInCards, setFadeInCards] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getPublishedArticles();
        const sortedArticles = result.sort((a, b) => {
          const dateA = new Date(a.created_at);
          const dateB = new Date(b.created_at);
          return dateB.getTime() - dateA.getTime(); // terbaru ke lama
        });

        setArticles(sortedArticles); // ← pakai sortedArticles di sini
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
        setTimeout(() => {
          setFadeInCards(true);
        }, 100);
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
    <div className="w-full min-h-screen px-[114px] py-6 bg-white text-gray-800 relative">
      {/* Tombol kembali */}
      <div
        className="absolute top-6 left-6 flex items-center space-x-2 cursor-pointer text-black hover:text-[#3D6CB9] transition-colors duration-200 font-medium"
        onClick={() => router.push("/")}
      >
        <FiArrowLeftCircle className="text-4xl" />
      </div>

      {/* Judul dan tombol kanan atas */}
      <div className="relative mb-10">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-900">
          Artikel Wisata Tlogo Putri
        </h1>
        <a
          href="#"
          className="absolute right-0 top-1/2 -translate-y-1/2 text-gray-500 hover:text-blue-600 transition-colors duration-200 font-medium"
        >
          Lihat Semua &gt;
        </a>
      </div>

      {/* Grid artikel */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {articles.map((article, index) => (
          <div
            key={article.id}
            className="flex flex-col h-full"
            style={{
              opacity: fadeInCards ? 1 : 0,
              transform: fadeInCards ? "translateY(0)" : "translateY(20px)",
              transition: `opacity 0.6s ease ${
                index * 0.2
              }s, transform 0.6s ease ${index * 0.2}s`,
            }}
          >
            <ArticleCard article={article} />
          </div>
        ))}
      </div>
    </div>
  );
}
