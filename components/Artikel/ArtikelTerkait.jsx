import { useRouter } from "next/navigation";

const ArtikelTerkait = ({ relatedArticles, formatTanggal }) => {
  const router = useRouter();

  if (!relatedArticles.length) return null;

  return (
    <div className="mt-12 pt-8 border-t border-gray-200">
      <h2 className="text-xl font-bold mb-2" style={{ color: "#3D6CB9" }}>
        BERITA TERBARU
      </h2>
      <div className="flex flex-col gap-2">
        {relatedArticles.map((relatedArticle) => (
          <div
            key={relatedArticle.id}
            className="flex items-start gap-4 cursor-pointer hover:bg-gray-100 p-3 rounded-lg transition duration-200"
            onClick={() => router.push(`/artikel/${relatedArticle.id}`)}
          >
            <div className="relative w-28 h-20 flex-shrink-0">
              {relatedArticle.gambar ? (
                <img
                  src={`https://tpapi.siunjaya.id/gambar/${relatedArticle.gambar}`}
                  alt={relatedArticle.judul}
                  className="object-cover w-full h-full absolute inset-0"
                />
              ) : (
                <div className="w-full h-full bg-gray-200 rounded-md flex items-center justify-center text-gray-500 text-xs">
                  No Image
                </div>
              )}
            </div>
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
  );
};

export default ArtikelTerkait;
