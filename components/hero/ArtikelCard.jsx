"use client";
import { useRouter } from "next/navigation";

export default function ArticleCard({ article }) {
  const router = useRouter();

  return (
    <div
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
  );
}
