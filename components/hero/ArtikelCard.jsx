"use client";
import { useRouter } from "next/navigation";

export default function ArticleCard({ article }) {
  const router = useRouter();

  return (
      <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden flex flex-col cursor-pointer" 
      onClick={() => router.push(`/artikel/${article.id}`)}>
                    <img
                      src={`http://127.0.0.1:8000/storage/gambar/${article.gambar}`}
                      alt={article.gambar}
                      width={500}
                      height={300}
                      className="w-full h-52 object-cover"
                    />
                    <div className="p-6 flex-1 flex flex-col justify-between">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-800 mb-2">
                          {article.judul}
                        </h3>
                          {article.isi_konten.length > 100
                          ? article.isi_konten.slice(0, 100) + "..."
                          : article.isi_konten}
                      </div>
                      <div>
                        <button className="text-blue-600 hover:text-blue-800 text-sm font-medium transition">
                          Baca Selengkapnya →
                        </button>
                      </div>
                    </div>
                  </div>
  );
}
