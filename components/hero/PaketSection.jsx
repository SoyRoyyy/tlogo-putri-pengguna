"use client"; // Jika kamu pakai Next.js App Router

import React from "react";
import Link from "next/link";
import Image from "next/image";

const PaketSection = ({ tourPackages = [] }) => {
  return (
    <section className="px-4 sm:px-6 lg:px-8 py-10 bg-gray-50 min-h-screen">
      <div className="px-6 pt-4">
        <Link href="/">
          <div className="flex items-center text-black hover:underline hover:text-blue-800 transition duration-200">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
            <span>Kembali ke Beranda</span>
          </div>
        </Link>
      </div>

      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-8 text-center">
          Paket Wisata Jeep Tlogo Putri
        </h2>

        <div className="flex flex-wrap gap-7 justify-center mx-5">
          {tourPackages.length === 0
            ? Array.from({ length: 6 }).map((_, idx) => (
                <div
                  key={idx}
                  className="bg-gray-200 h-100 md:w-sm animate-pulse rounded-xl shadow-md overflow-hidden flex flex-col"
                >
                  <div className="w-full h-48 sm:h-56 bg-gray-300" />
                  <div className="p-6 flex flex-col flex-grow space-y-4">
                    <div className="h-6 bg-gray-300 rounded w-3/4" />
                    <ul className="space-y-3">
                      <li className="h-4 bg-gray-300 rounded w-full" />
                      <li className="h-4 bg-gray-300 rounded w-5/6" />
                      <li className="h-4 bg-gray-300 rounded w-3/4" />
                    </ul>
                    <div className="flex items-center justify-between mt-auto pt-4">
                      <div className="h-5 w-1/4 bg-gray-300 rounded" />
                      <div className="h-10 w-24 bg-gray-300 rounded" />
                    </div>
                  </div>
                </div>
              ))
            : tourPackages.map((paket, idx) => (
                <div
                  key={idx}
                  className="bg-white h-110 md:w-sm rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col border border-gray-100"
                >
                  <div className="relative w-full h-48 sm:h-56">
                    <Image
                      src={`/images/paket/${paket.image}`}
                      alt={paket.package_name}
                      width={400}
                      height={250}
                      className="w-full h-56 object-cover rounded-t-xl"
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-grow space-y-4">
                    <h3 className="text-xl font-bold text-gray-800 text-left">
                      {paket.package_name}
                    </h3>
                    <p className="capitalize text-gray-600 text-sm">
                      {paket.destination}
                    </p>
                    <div className="flex items-center justify-between mt-auto pt-4">
                      <span className="text-[#3d6cb9] font-semibold text-lg">
                        Rp. {paket.price}
                      </span>
                      <Link
                        href={`/pemesanan/form?token=${encodeURIComponent(
                          paket.token
                        )}`}
                        className="bg-[#3D6CB9] text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium"
                      >
                        Pesan Sekarang
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
        </div>
      </div>
    </section>
  );
};

export default PaketSection;
