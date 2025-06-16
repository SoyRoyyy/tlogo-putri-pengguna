const ArtikelContent = ({ article }) => (
  <>
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
    {article.caption_gambar && (
      <p className="text-center font-semibold mb-5 text-[#3D6CB9]">
        {article.caption_gambar}
      </p>
    )}
    <div
      className="text-gray-800 text-justify"
      dangerouslySetInnerHTML={{ __html: article.isi_konten }}
    />
  </>
);

export default ArtikelContent;
