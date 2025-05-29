"use client";

export default function FaqSection() {
  const questions = [
    "Apa saja jenis paket jeep yang tersedia?",
    "Apakah bisa pesan online?",
    "Di mana lokasi titik kumpul?",
    "Apakah tersedia fasilitas keluarga?",
    "Bagaimana jika cuaca buruk saat booking?",
  ];

  return (
    <section className="px-6 py-16 bg-gray-50">
      <h2 className="text-center text-3xl font-extrabold mb-12 text-gray-900 tracking-wide">
        FAQ
      </h2>
      <div className="max-w-3xl mx-auto space-y-6">
        {questions.map((q, idx) => (
          <details
            key={idx}
            className="group bg-white rounded-xl shadow-md p-6 cursor-pointer transition-shadow duration-300 hover:shadow-xl"
          >
            <summary className="flex justify-between items-center font-semibold text-gray-800 text-lg list-none">
              {q}
              <svg
                className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </summary>
            <p className="mt-4 text-gray-600 text-sm">
              Jawaban dari pertanyaan ini akan muncul di sini.
            </p>
          </details>
        ))}
      </div>
    </section>
  );
}
