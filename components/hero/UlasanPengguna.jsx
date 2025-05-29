"use client";

export default function UlasanPengguna() {
  const reviews = [
    "Sangat seru dan menyenangkan! Saya akan kembali lagi!",
    "Pengalaman yang luar biasa, saya sangat menikmatinya!",
    "Tempat yang indah dan pemandangan yang luar biasa!",
  ];

  return (
    <section className="px-6 py-16 bg-white">
      <div className="max-w-10xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Ulasan Pengguna
        </h2>
        <p className="text-base text-gray-500 mb-10">
          Apa kata mereka yang sudah berkunjung dan merasakan pengalaman kami?
        </p>

        <div
          className="flex gap-6 overflow-x-auto pb-4"
          style={{ scrollSnapType: "x mandatory" }}
        >
          {reviews.map((review, idx) => (
            <div
              key={idx}
              className="flex-shrink-0 w-[400px] bg-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition duration-300 scroll-snap-align-start"
            >
              <p className="text-gray-700 italic mb-6">{review}</p>
              <div className="flex items-center gap-1 mb-4">
                {Array(5)
                  .fill(0)
                  .map((_, i) => (
                    <span key={i} className="text-yellow-400 text-xl">⭐</span>
                  ))}
              </div>
              <div className="text-sm text-gray-500">Pengguna {idx + 1}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
