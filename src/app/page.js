import Image from "next/image";

export default function HomePage() {
  return (
    <main className="bg-white text-gray-800">
      {/* Header */}
      <header className="flex justify-between items-center px-6 py-4 shadow-md sticky top-0 bg-white z-50">
        <div className="flex items-center space-x-2">
          <Image src="/images/image.png" alt="Logo" width={40} height={40} />
          <span className="font-bold text-lg">Tlogo Putri</span>
        </div>
        <nav className="space-x-4 hidden md:flex">
          <a href="#home" className="hover:text-green-600 font-medium">
            Home
          </a>
          <a href="#paket" className="hover:text-green-600 font-medium">
            Paket
          </a>
          <a href="#fasilitas" className="hover:text-green-600 font-medium">
            Fasilitas
          </a>
          <a href="#artikel" className="hover:text-green-600 font-medium">
            Artikel
          </a>
          <a href="#about" className="hover:text-green-600 font-medium">
            About
          </a>
        </nav>
      </header>

      {/* Hero Slider Section */}
      <section className="relative overflow-hidden">
        <div className="flex overflow-x-auto no-scrollbar snap-x">
          {[
            "/images/bungkerkaliadem.jpg",
            "/images/BatuAlien.jpeg.jpg",
            "/images/MuseumMini.jpeg.jpg",
          ].map((src, idx) => (
            <div key={idx} className="flex-shrink-0 w-full snap-center">
              <Image
                src={src}
                alt={`Slide ${idx + 1}`}
                width={1920}
                height={600}
                className="w-full h-[600px] object-cover"
                priority={idx === 0}
              />
            </div>
          ))}
        </div>
      </section>

      {/* Hero Section: Title + Description */}
      <section className="px-4 py-8 max-w-5xl mx-auto text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Nikmati Keindahan Alam Tlogo Putri — Liburan yang Tak Terlupakan!
        </h1>
        <p className="text-lg text-gray-700 leading-relaxed">
          Rasakan petualangan seru menjelajahi kawasan pegunungan Tlogo Putri
          dengan jeep tour yang menantang dan menyenangkan. Dengan harga paket
          terjangkau dan fasilitas lengkap, wisata ini jadi pilihan tepat untuk
          liburan penuh kesan. Nikmati keindahan alam lereng Merapi dengan rute
          yang seru dan pengalaman tak terlupakan!
        </p>
      </section>

      {/* Jeep Packages & Booking Button */}
      <section className="px-4 py-10 text-center">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">
          Paket Jeep yang Tersedia
        </h2>
        <button className="bg-green-600 text-white py-2 px-6 rounded-full hover:bg-green-700 mb-6">
          🚙 Pesan Sekarang
        </button>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {Array.from({ length: 6 }).map((_, idx) => (
            <div
              key={idx}
              className="border p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <Image
                src="/images/bungkerkaliadem.jpg"
                alt={`Paket Jeep ${idx + 1}`}
                width={300}
                height={200}
                className="w-full h-32 object-cover rounded"
              />
              <p className="mt-2 font-medium text-gray-800">
                Paket Jeep {idx + 1}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Facilities Section */}
      <section className="px-4 py-10 bg-gray-100">
        <h2 className="text-center text-2xl font-semibold mb-8">
          FASILITAS KAMI
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {[
            { label: "Tempat Parkir Luas", src: "/images/bungkerkaliadem.jpg" },
            { label: "Taman", src: "/images/MuseumMini.jpeg.jpg" },
            { label: "Toilet", src: "/images/MuseumMini.jpeg.jpg" },
            { label: "Mushola", src: "/images/PetilasanMbahMarijan.jpeg.jpg" },
            { label: "Kantin", src: "/images/TheLostWorldPark.jpg" },
            { label: "Sewa Skuter", src: "/images/TrackAir.jpeg.jpg" },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg shadow p-4 text-center hover:shadow-xl transition-shadow"
            >
              <Image
                src={item.src}
                alt={item.label}
                width={300}
                height={200}
                className="w-full h-32 object-cover rounded"
              />
              <p className="mt-2 font-medium text-gray-800">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* User Reviews Section */}
      <section className="px-4 py-10 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-semibold text-gray-800">
              Ulasan Pengguna
            </h2>
            <button className="text-blue-600 hover:underline">
              Lihat Semua
            </button>
          </div>
          <p className="text-sm text-gray-600 mb-4">
            Apa kata orang tentang kami?
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "Sangat seru dan menyenangkan! Saya akan kembali lagi!",
              "Pengalaman yang luar biasa, saya sangat menikmatinya!",
              "Tempat yang indah dan pemandangan yang luar biasa!",
            ].map((review, idx) => (
              <div
                key={idx}
                className="bg-gray-100 rounded-lg p-6 shadow-lg transition-transform transform hover:scale-105"
              >
                <p className="text-sm italic text-gray-700 mb-4">"{review}"</p>
                <div className="flex items-center gap-1 mb-2">
                  {Array.from({ length: 5 }).map((_, starIdx) => (
                    <span key={starIdx} className="text-yellow-500 text-xl">
                      ⭐
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <div className="font-semibold">Pengguna {idx + 1}</div>
                  <span className="text-gray-400">•</span>
                  <div className="text-gray-500">2 hari yang lalu</div>
                </div>
                <div className="mt-4 flex items-center gap-2">
                  <Image
                    src="/images/google-icon.png"
                    alt="Google"
                    width={20}
                    height={20}
                    className="rounded-full"
                  />
                  <p className="text-sm font-medium text-gray-600">Google</p>
                </div>
                <div className="mt-4">
                  <Image
                    src="/images/bungkerkaliadem.jpg"
                    alt="Gambar Ulasan"
                    width={300}
                    height={200}
                    className="w-full h-32 object-cover rounded-lg"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location Section with Google Maps */}
      <section className="px-4 py-10 bg-gray-100">
        <h2 className="text-center text-2xl font-semibold mb-6">Lokasi</h2>
        <div className="max-w-4xl mx-auto">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3952.648632392294!2d110.44126721432394!3d-7.829266679660496!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a5798e1b3f5a9%3A0x7c53642b0378394a!2sTlogo%20Putri!5e0!3m2!1sen!2sid!4v1715600000000"
            width="100%"
            height="450"
            allowFullScreen=""
            loading="lazy"
            className="rounded shadow"
          ></iframe>
        </div>
      </section>

      {/* Articles & News Section */}
      <section className="px-4 py-10 bg-gray-50">
        <h2 className="text-2xl font-semibold text-center mb-8 text-gray-800">
          Artikel & Berita
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {Array.from({ length: 3 }).map((_, idx) => (
            <div
              key={idx}
              className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105"
            >
              <Image
                src="/images/TrackAir.jpeg.jpg"
                alt={`Artikel ${idx + 1}`}
                width={300}
                height={200}
                className="w-full h-48 object-cover"
              />
              <h3 className="mt-4 text-xl font-semibold text-gray-800 px-4">
                Judul Artikel {idx + 1}
              </h3>
              <p className="text-sm text-gray-600 px-4 mb-4">
                Deskripsi singkat artikel yang menjelaskan konten utama dengan
                jelas dan menarik perhatian pembaca.
              </p>
              <button className="text-blue-600 hover:underline text-sm font-medium px-4 mb-4">
                Baca Selengkapnya
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="px-4 py-10 bg-gray-100">
        <h2 className="text-center text-2xl font-semibold mb-8">FAQ's</h2>
        <div className="max-w-2xl mx-auto space-y-4">
          {[
            "Apa saja jenis paket jeep yang tersedia?",
            "Apakah bisa pesan online?",
            "Di mana lokasi titik kumpul?",
            "Apakah tersedia fasilitas keluarga?",
            "Bagaimana jika cuaca buruk saat booking?",
          ].map((q, idx) => (
            <details key={idx} className="bg-white p-4 rounded shadow">
              <summary className="cursor-pointer font-medium">{q}</summary>
              <p className="mt-2 text-sm text-gray-600">
                Jawaban dari pertanyaan ini akan muncul di sini.
              </p>
            </details>
          ))}
        </div>
      </section>
    </main>
  );
}
``;
