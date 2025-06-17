"use client";

import { useState, useEffect } from "react";
import Footer from "@/components/hero/Footer";
import ArtikelHeader from "@/components/Artikel/ArtikelHeader";
import ArtikelContent from "@/components/Artikel/ArtikelContent";
import ArtikelTerkait from "@/components/Artikel/ArtikelTerkait";
import LoadingOrError from "@/components/Artikel/LoadingOrError";
import { getPublishedArticles } from "../../lib/api";

export default function ArtikelDetail({ params }) {
  const { id } = params;

  const [article, setArticle] = useState(null);
  const [relatedArticles, setRelatedArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const formatTanggal = (dateString) => {
    if (!dateString) return "Tanggal tidak tersedia";
    const date = new Date(dateString);
    if (isNaN(date.getTime())) return "Tanggal Tidak Valid";
    return date.toLocaleDateString("id-ID", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          `https://tpapi.siunjaya.id/api/content-generate/article/${id}`
        );
        if (!res.ok) throw new Error("Gagal mengambil artikel");
        const data = await res.json();
        setArticle(data.data);

        const allArticles = await getPublishedArticles();
        const related = allArticles
          .filter((art) => art.id !== data.data.id)
          .sort(
            (a, b) =>
              new Date(b.created_at).getTime() -
              new Date(a.created_at).getTime()
          )
          .slice(0, 2);

        setRelatedArticles(related);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  return (
    <div className="bg-white text-gray-900 min-h-screen flex flex-col">
      <div className="mx-auto w-full max-w-screen-xl px-6 md:px-12 py-6">
        <div className="mb-2">
          <img src="/images/image.png" alt="Logo" className="w-16 h-auto" />
        </div>
        <div className="border-b border-gray-300 w-full mb-6"></div>

        <LoadingOrError loading={loading} error={error} article={article} />

        {article && (
          <>
            <ArtikelHeader title={article.judul} />
            <ArtikelContent article={article} />
            <ArtikelTerkait
              relatedArticles={relatedArticles}
              formatTanggal={formatTanggal}
            />
          </>
        )}
      </div>
      <Footer />
    </div>
  );
}
