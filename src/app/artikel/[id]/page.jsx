'use client';

import { use } from "react";
import { useState, useEffect } from "react";
import { FiArrowLeftCircle } from "react-icons/fi";
import { useRouter } from "next/navigation";
import Footer from "../../../../components/hero/Footer";

export default function ArtikelDetail({ params }) {
  const { id } = use (params);
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const response = await fetch(`http://127.0.0.1:8000/api/content-generate/article/${id}`);
        if (!response.ok) throw new Error("Gagal mengambil artikel");
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
    <>
      <div className="mx-auto max-w-screen-xl px-[200px] py-6">
        {/* Ikon di atas, judul di bawah */}
        <div className="flex flex-col items-center mb-4">
          <button className="self-start" onClick={() => router.back()}>
            <FiArrowLeftCircle className="text-4xl text-black-500 hover:text-blue-700 transition cursor-pointer" />
          </button>

          <h1 className="text-2xl font-bold mt-2 w-full text-center">
            {article.judul.replace(/"/g, '')}
          </h1>
        </div>

        <div className="mb-3">
          <p className="text-base font-semibold text-[#3D6CB9]">
            Diterbitkan oleh {article.pemilik}, {article.tanggal}
          </p>
          <p
            className="text-base font-semibold drop-shadow-sm"
            style={{ color: 'rgba(103, 113, 118, 0.7)' }}
          >
            Editor
          </p>
        </div>

        {article.gambar && (
          <img
            src={`http://127.0.0.1:8000/storage/gambar/${article.gambar}`}
            alt={article.judul}
            className="w-[900px] max-w-full max-h-[400px] h-auto mb-6 rounded-lg mx-auto"
          />
        )}
        {article.caption_gambar && (
          <p className="text-center font-semibold mb-5 text-[#3D6CB9]">{article.caption_gambar}</p>
        )}

        <div
          className="text-gray-800 text-justify"
          dangerouslySetInnerHTML={{ __html: article.isi_konten }} // ngerender isi konten dr kode HTML ke string
        />
      </div>

        <Footer/>
    </>
  );
}
