const ArtikelContent = ({ article }) => (
  <>
    {/* Info penerbit */}
    <div className="mb-3">
      <p className="text-base font-semibold text-[#3D6CB9]">
        Diterbitkan oleh {article.pemilik}, {article.tanggal}
      </p>
      <p
        className="text-base font-semibold drop-shadow-sm"
        style={{ color: "rgba(103, 113, 118, 0.7)" }}
      >
        Editor
      </p>
    </div>

    {/* Gambar artikel */}
    {article.gambar && (
      <div className="mb-3">
        <img
          src={`https://tpapi.siunjaya.id/gambar/${article.gambar}`}
          alt={article.caption_gambar || "Gambar artikel"}
          className="w-full max-h-[400px] object-cover rounded-lg shadow-md mx-auto"
        />
      </div>
    )}

    {/* Caption gambar */}
    {article.caption_gambar && (
      <p className="text-center font-semibold mb-5 text-[#3D6CB9] text-3xl">
        {article.caption_gambar}
      </p>
    )}

    {/* Isi artikel */}
    <div
      className="text-gray-800 text-justify"
      dangerouslySetInnerHTML={{ __html: article.isi_konten }}
    />
  </>
);

export default ArtikelContent;
