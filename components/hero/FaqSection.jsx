"use client";

export default function FaqSection() {
  const questions = [
    {
      question: "Apa saja jenis paket jeep yang tersedia?",
      answer:
        "Di Tlogo Putri, kami punya 6 paket seru yang siap bikin petualanganmu makin gokil! Mulai dari paket santai buat keluarga, petualangan off-road yang memacu adrenalin, sampai paket foto-foto kece buat kamu yang doyan Instagramable shots!.",
    },
    {
      question: "Apakah bisa pesan online?",
      answer:
        "Ya, kamu bisa pesan online melalui website kami dengan mudah dan cepat.",
    },
    {
      question: "Di mana lokasi titik kumpul?",
      answer:
        "Titik kumpul berada di kantor kami di Jalan Raya Nomor 123, dekat pusat kota.",
    },
    {
      question: "Apakah tersedia fasilitas keluarga?",
      answer:
        "Tentu, kami menyediakan fasilitas khusus untuk keluarga agar nyaman dan aman selama perjalanan.",
    },
    {
      question: "Bagaimana jika cuaca buruk saat booking?",
      answer:
        "Jika cuaca buruk, kami akan menghubungi kamu untuk menjadwalkan ulang atau mengembalikan biaya.",
    },
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
              {q.question}
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
            <p className="mt-4 text-gray-600 text-sm">{q.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
