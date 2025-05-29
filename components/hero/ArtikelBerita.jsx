"use client";

import Image from "next/image";

const ArtikelBerita = () => {
  return (
    <section className="px-6 py-16 bg-gray-50" id="artikel">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
          Artikel & Berita
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {[1, 2, 3].map((idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden flex flex-col"
            >
              <Image
                src="/images/TrackAir.jpeg.jpg"
                alt={`Artikel ${idx}`}
                width={500}
                height={300}
                className="w-full h-52 object-cover"
              />
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    Judul Artikel {idx}
                  </h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Deskripsi singkat artikel yang menarik minat pembaca untuk
                    mengetahui lebih dalam.
                  </p>
                </div>
                <div>
                  <button className="text-blue-600 hover:text-blue-800 text-sm font-medium transition">
                    Baca Selengkapnya →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ArtikelBerita;
