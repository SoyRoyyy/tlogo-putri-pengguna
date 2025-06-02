'use client';

import { use } from "react";
import { useState, useEffect } from "react";
import { FiArrowLeftCircle } from "react-icons/fi";
import { useRouter } from "next/navigation";
import Footer from "../../../../components/hero/Footer";
import { getPublishedArticles } from "../../lib/api"; 

export default function ArtikelDetail({ params }) {
  const { id } = use (params);
  const [article, setArticle] = useState(null);
  const [relatedArticles, setRelatedArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const router = useRouter();

  const formatTanggal = (dateString) => {
    if (!dateString) {
      console.warn("formatTanggal received empty or null dateString.");
      return 'Tanggal tidak tersedia';
    }

    const date = new Date(dateString);

    if (isNaN(date.getTime())) {
      console.error("Invalid date object created for dateString:", dateString);
      // Fallback untuk parsing manual jika new Date() gagal, tetapi sebaiknya periksa format API yang sebenarnya.
      try {
        // Asumsi format 'YYYY-MM-DD HH:MM:SS' atau 'YYYY-MM-DD'
        const [datePart] = dateString.split(' ');
        if (datePart) {
          const [year, month, day] = datePart.split('-');
          if (year && month && day) {
            const manualDate = new Date(parseInt(year), parseInt(month) - 1, parseInt(day));
            if (!isNaN(manualDate.getTime())) {
              const options = { day: 'numeric', month: 'long', year: 'numeric' };
              return manualDate.toLocaleDateString('id-ID', options);
            }
          }
        }
      } catch (e) {
        console.error("Error with manual date parsing for dateString:", dateString, e);
      }
      return 'Tanggal Tidak Valid';
    }

    const options = { day: 'numeric', month: 'long', year: 'numeric' };
    return date.toLocaleDateString('id-ID', options);
  };

  useEffect(() => {
    const fetchArticleAndRelated = async () => {
      try {
        // Fetch artikel utama
        const response = await fetch(`http://127.0.0.1:8000/api/content-generate/article/${id}`);
        if (!response.ok) throw new Error("Gagal mengambil artikel");
        const data = await response.json();
        setArticle(data.data);

        // Fetch semua artikel untuk artikel terkait
        const allArticles = await getPublishedArticles();

        // Filter artikel yang sedang ditampilkan dan urutkan berdasarkan tanggal terbaru
        const filteredAndSorted = allArticles
          .filter(art => art.id !== data.data.id) // Filter artikel yang sedang ditampilkan
          .sort((a, b) => {
            const dateA = new Date(a.created_at);
            const dateB = new Date(b.created_at);
            return dateB.getTime() - dateA.getTime(); // Urutkan dari terbaru
          })
          .slice(0, 2); // Ambil 2 artikel teratas

        setRelatedArticles(filteredAndSorted);

      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchArticleAndRelated();
  }, [id]);

  if (loading) return <p className="p-4">Memuat artikel...</p>;
  if (error) return <p className="p-4 text-red-600">Error: {error}</p>;
  if (!article) return <p className="p-4 text-gray-600">Artikel tidak ditemukan</p>;

  return (
    <>
      <div className="mx-auto max-w-screen-xl px-[200px] py-6">
        <div className="mb-2">
          <img
            src="/images/image.png"
            alt="Logo"
            className="w-16 h-auto"
          />
        </div>
        <div className="border-b border-gray-300 w-full mb-6"></div>
        <div className="flex items-center justify-between mb-4"> {/* Mengubah flex-col menjadi flex dan menambahkan justify-between */}
          <button className="self-start" onClick={() => router.back()}>
            <FiArrowLeftCircle className="text-4xl text-black-500 hover:text-blue-700 transition cursor-pointer" />
          </button>

          {/* Hapus w-full dan text-center dari h1, lalu tambahkan flex-grow untuk menengahkan */}
          <h1 className="text-2xl font-bold mt-2 flex-grow text-center"> {/* flex-grow agar h1 mengambil sisa ruang dan text-center menengahkan isinya */}
            {article.judul.replace(/"/g, '')}
          </h1>
          <div className="w-[40px] h-1"></div> {/* Sesuaikan lebar agar sama dengan lebar ikon (sekitar 40px untuk text-4xl) */}
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
            src={`https://tlogo-putri-pengguna-za4a-git-main-soyroyyys-projects.vercel.app/storage/app/public/gambar/${article.gambar}`}
            alt={article.judul}
            className="w-[900px] max-w-full max-h-[400px] h-auto mb-6 rounded-lg mx-auto"
          />
        )}
        {article.caption_gambar && (
          <p className="text-center font-semibold mb-5 text-[#3D6CB9]">{article.caption_gambar}</p>
        )}

         <div
          className="text-gray-800 text-justify"
          dangerouslySetInnerHTML={{ __html: article.isi_konten }}
        />

        {/* Bagian BERITA TERBARU */}
        {relatedArticles.length > 0 && (
          <div className="mt-12 pt-8 border-t border-gray-200">
            <h2 className="text-xl font-bold mb-2" style={{ color: '#3D6CB9' }}>
              BERITA TERBARU
            </h2>
            <div className="flex flex-col gap-2">
              {relatedArticles.map((relatedArticle) => (
                <div
                  key={relatedArticle.id}
                  className="flex items-start gap-4 cursor-pointer hover:bg-gray-100 p-3 rounded-lg transition duration-200"
                  onClick={() => router.push(`/artikel/${relatedArticle.id}`)}
                >
                  {/* Gambar */}
                  <div className="relative w-28 h-20 flex-shrink-0">
                    {relatedArticle.gambar ? (
                      <img
                        src={`http://127.0.0.1:8000/storage/gambar/${relatedArticle.gambar}`}
                        alt={relatedArticle.judul}
                        className="object-cover w-full h-full absolute inset-0"
                      />
                    ) : (
                      <div className="w-full h-full bg-gray-200 rounded-md flex items-center justify-center text-gray-500 text-xs">
                        No Image
                      </div>
                    )}
                  </div>

                  {/* Konten Teks */}
                  <div className="flex flex-col flex-grow">
                    <h3 className="text-lg font-semibold text-gray-800 mb-1 line-clamp-2">
                      {relatedArticle.judul}
                    </h3>
                    <p className="text-gray-500 text-sm">
                      {formatTanggal(relatedArticle.created_at)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      <Footer/>
    </>
  );
}
