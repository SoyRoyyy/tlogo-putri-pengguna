"use client";

export default function UlasanPengguna() {
  const reviews = [
    {
      text: "Perjalanan jeep di sini benar-benar luar biasa! Pemandangan alamnya sangat memukau dan pemandu sangat profesional.",
      user: "Rina S.",
      date: "Minggu, 18 Mei 2025",
      imageUrl: "https://maps.app.goo.gl/tWrTFhXvd2xg5k5g7",
      rating: 5,
    },
    {
      text: "Seru dan menantang, sangat cocok untuk yang suka petualangan off-road. Jeep nya terawat dan nyaman.",
      user: "Agus W.",
      date: "Sabtu, 10 Mei 2025",
      imageUrl: "https://maps.app.goo.gl/LfWPDvgRxuoAosoi9",
      rating: 5,
    },
    {
      text: "Layanan sangat ramah dan membantu. Jalur jeep melewati spot yang sangat instagramable. Saya sangat rekomendasikan!",
      user: "Sari M.",
      date: "Senin, 20 Mei 2025",
      imageUrl:
        "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=400&q=80",
      rating: 5,
    },
  ];

  return (
    <section className="px-6 py-16 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-4 text-center">
          Ulasan Pengguna
        </h2>
        <p className="max-w-2xl mx-auto text-center text-gray-600 mb-12 text-lg">
          Apa kata mereka yang sudah berpetualang bersama kami?
        </p>

        <div
          className="flex gap-8 overflow-x-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100 px-4"
          style={{ scrollSnapType: "x mandatory" }}
        >
          {reviews.map((review, idx) => (
            <article
              key={idx}
              className="flex-shrink-0 w-96 bg-gray-50 rounded-3xl p-8 shadow-md hover:shadow-xl transition-shadow duration-300 scroll-snap-align-start flex flex-col"
            >
              {/* Ulasan */}
              <p className="text-gray-700 italic text-base mb-6 flex-grow">{`"${review.text}"`}</p>

              {/* Rating bintang */}
              <div className="flex items-center gap-1 mb-4">
                {Array(5)
                  .fill(0)
                  .map((_, i) => (
                    <span
                      key={i}
                      className={`text-2xl ${
                        i < review.rating ? "text-yellow-400" : "text-gray-300"
                      }`}
                    >
                      ⭐
                    </span>
                  ))}
              </div>

              {/* Nama pengguna */}
              <h3 className="text-lg font-semibold text-gray-900 mb-1">
                {review.user}
              </h3>

              {/* Hari dan tanggal */}
              <time
                className="text-sm text-gray-500 mb-4"
                dateTime={review.date}
              >
                {review.date}
              </time>

              {/* Logo Google + teks */}
              <div className="flex items-center gap-3 mb-6">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                  alt="Google Logo"
                  className="w-7 h-7"
                />
                <span className="text-gray-700 font-medium tracking-wide">
                  Google
                </span>
              </div>

              {/* Gambar ulasan */}
              <img
                src={review.imageUrl}
                alt={`Gambar ulasan oleh ${review.user}`}
                className="rounded-2xl w-full object-cover shadow-md"
                loading="lazy"
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
