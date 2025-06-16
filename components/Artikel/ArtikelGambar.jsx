const ArtikelGambar = ({ gambar }) => {
  if (!gambar) return null;
  const src = gambar.startsWith("http")
    ? gambar
    : `https://tpapi.siunjaya.id/storage/gambar/${gambar}`;
  return (
    <img
      src={src}
      alt="Gambar Artikel"
      className="w-[900px] max-w-full max-h-[400px] h-auto mb-6 rounded-lg mx-auto"
    />
  );
};

export default ArtikelGambar;
