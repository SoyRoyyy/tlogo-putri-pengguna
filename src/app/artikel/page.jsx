import Image from "next/image";

const articles = [
  {
    title:
      "Weekend Seru di Tlogo Putri Kaliurang, Wisata Alam Plus Hiburan Lengk...",
    image: "/images/(1).jpeg",
  },
  {
    title: "Nyalimu Seberapa? Uji di Medan Ekstrem Jeep Tlogo Putri Kaliurang!",
    image: "/images/(2).jpeg",
  },
  {
    title:
      "Tlogo Putri Kaliurang : Daya Tarik, Harga Tiket, Jam Buka, dan Rute",
    image: "/images/BatuAlien.jpeg.jpg",
  },
  {
    title: "Wajib Dikunjungi, Tlogo Putri di Kaliurang Ini Sangat Indah",
    image: "/images/TrackAir.jpeg.jpg",
  },
  {
    title:
      "Tlogo Putri Kaliurang Yogyakarta: Keajaiban Alam Tersembunyi Di Kaki...",
    image: "/images/DSC04238.jpg",
  },
  {
    title: "Tlogo Putri Kaliurang - Tiket Masuk, Lokasi, dan Rutenya",
    image: "/images/DSC04658.jpg",
  },
  {
    title:
      "Tlogo Putri Kaliurang: Hidden Gem Favorit Buat Healing Murah Meriah",
    image: "/images/DSC04211.jpg",
  },
  {
    title: "Weekend Santai? Ke Tlogo Putri Aja, Udara Segar dan Alam Terbuka",
    image: "/images/(4).jpeg",
  },
  {
    title:
      "Tlogo Putri Kaliurang: 2 Alasan Untuk Berkunjung, Info Tiket, dan Jam Buka",
    image: "/images/(5).jpeg",
  },
];

export default function ArtikelTlogoPutri() {
  return (
    <div className="w-full min-h-screen px-6 py-12 bg-white text-gray-800 relative">
      {/* Kembali ke Beranda */}
      <div className="absolute top-6 left-6">
        <a
          href="/"
          className="text-gray-500 hover:text-blue-600 transition-colors duration-200 font-medium"
        >
          &lt; Kembali ke Beranda
        </a>
      </div>

      <h1 className="text-3xl md:text-4xl font-bold text-center mb-10 text-gray-900">
        Artikel Wisata Tlogo Putri
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {articles.map((article, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-transform duration-300 hover:-translate-y-1 p-4"
          >
            <div className="w-full h-48 relative rounded-md overflow-hidden">
              <Image
                src={article.image}
                alt={article.title}
                layout="fill"
                objectFit="cover"
              />
            </div>
            <p className="mt-4 text-base font-semibold text-gray-700">
              {article.title}
            </p>
          </div>
        ))}
      </div>

      {/* Lihat Semua */}
      <div className="flex justify-end mt-10">
        <a
          href="#"
          className="text-gray-500 hover:text-blue-600 transition-colors duration-200 font-medium"
        >
          Lihat Semua &gt;
        </a>
      </div>
    </div>
  );
}
