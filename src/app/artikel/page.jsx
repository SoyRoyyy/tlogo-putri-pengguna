import Image from "next/image";

const articles = [
  {
    title: "Weekend Seru di Tlogo Putri Kaliurang, Wisata Alam Plus Hiburan Lengk...",
    image: "/images/BatuAlien.jpeg.jpg",
  },
  {
    title: "Nyalimu Seberapa? Uji di Medan Ekstrem Jeep Tlogo Putri Kaliurang!",
    image: "/images/BatuAlien.jpeg,jpg",
  },
  {
    title: "Tlogo Putri Kaliurang : Daya Tarik, Harga Tiket, Jam Buka, dan Rute",
    image: "/images/BatuAlien.jpeg.jpg",
  },
  {
    title: "Wajib Dikunjungi, Tlogo Putri di Kaliurang Ini Sangat Indah",
    image: "/images/TrackAir.jpeg.jpg",
  },
  {
    title: "Tlogo Putri Kaliurang Yogyakarta: Keajaiban Alam Tersembunyi Di Kaki...",
    image: "/images/tlogo5.jpg",
  },
  {
    title: "Tlogo Putri Kaliurang - Tiket Masuk, Lokasi, dan Rutenya",
    image: "/images/tlogo6.jpg",
  },
  {
    title: "Tlogo Putri Kaliurang: Hidden Gem Favorit Buat Healing Murah Meriah",
    image: "/images/tlogo7.jpg",
  },
  {
    title: "Weekend Santai? Ke Tlogo Putri Aja, Udara Segar dan Alam Terbuka",
    image: "/images/tlogo8.jpg",
  },
  {
    title: "Tlogo Putri Kaliurang: 2 Alasan Untuk Berkunjung, Info Tiket, dan Jam Buka",
    image: "/images/tlogo9.jpg",
  },
  {
    title: "Rekomendasi Wisata Alam di Tlogo Putri Kaliurang: Telaga Para Bidadari Taw...",
    image: "/images/tlogo10.jpg",
  },
];

export default function ArtikelTlogoPutri() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-2xl md:text-3xl font-bold text-center mb-8">ARTIKEL WISATA TLOGO PUTRI</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {articles.map((article, index) => (
          <div
            key={index}
            className="border rounded shadow hover:shadow-lg transition p-2 cursor-pointer"
          >
            <div className="w-full h-48 relative">
              <Image
                src={article.image}
                alt={article.title}
                layout="fill"
                objectFit="cover"
                className="rounded"
              />
            </div>
            <p className="mt-2 font-semibold text-sm text-gray-800">
              {article.title}
            </p>
          </div>
        ))}
      </div>
      <div className="text-right mt-6">
        <a href="#" className="text-blue-600 font-medium hover:underline">
          Lihat Semua &gt;
        </a>
      </div>
    </div>
  );
}