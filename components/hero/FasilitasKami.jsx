// components/FasilitasKami.jsx
"use client";

import Image from "next/image";

export default function FasilitasKami() {
  const fasilitas = [
    { label: "Tempat Parkir Luas", src: "/images/DSC03884.JPG" },
    { label: "Taman", src: "/images/taman.jpg" },
    { label: "Toilet", src: "/images/toilet.jpg" },
    { label: "Mushola", src: "/images/mushola.jpg" },
    { label: "Kantin", src: "/images/kantin.PNG" },
    { label: "Sewa Skuter", src: "/images/DSC03913.JPG" },
  ];

  return (
    <section
      className="px-6 py-12 bg-gradient-to-b from-white via-gray-50 to-white"
      id="fasilitas"
    >
      <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
        FASILITAS KAMI
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {fasilitas.map((item, idx) => (
          <div
            key={idx}
            className="bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer transform transition-transform duration-300 ease-in-out hover:scale-[1.05] hover:shadow-2xl"
          >
            <div className="relative w-full h-56 md:h-64 overflow-hidden">
              <Image
                src={item.src}
                alt={item.label}
                fill
                className="object-cover object-center transition-transform duration-500 ease-in-out hover:scale-110"
              />
            </div>
            <p className="mt-4 mb-6 text-center font-semibold text-gray-800 text-lg select-none">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
