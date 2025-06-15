"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";


const PaketSection = ({ tourPackages = [] }) => {
  const router = useRouter();

  const handlePesan = (token) => {
    localStorage.setItem("selectedToken", token);
    router.push(`/pemesanan/form?token=${encodeURIComponent(token)}`);
  };

  return (
    <section className="px-4 sm:px-6 lg:px-8 py-10 bg-gray-50 min-h-screen">
      <div className="px-6 pt-4">
        <Link href="/">
          <div className="flex items-center text-black hover:underline hover:text-blue-800 transition duration-200 cursor-pointer">
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

      <div className="max-w-7xl mx-auto mt-6">
        <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-10 text-center">
          Paket Wisata Jeep Tlogo Putri
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {tourPackages.length === 0
            ? Array.from({ length: 6 }).map((_, idx) => (
                <div
                  key={idx}
                  className="bg-gray-200 animate-pulse rounded-xl shadow-md overflow-hidden flex flex-col"
                >
                  <div className="w-full h-48 bg-gray-300" />
                  <div className="p-6 space-y-4 flex flex-col flex-grow">
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
                  className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100
                  transform transition duration-300 hover:scale-[1.03] hover:shadow-2xl cursor-pointer flex flex-col"
                >
                  <div className="relative w-full h-48 sm:h-56 overflow-hidden rounded-t-xl group">
                    <Image
                      src={`/images/paket/${paket.image}`}
                      alt={paket.package_name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    {/* Overlay saat hover */}
                    <div className="absolute inset-0 bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-t-xl" />
                  </div>
                  <div className="p-6 flex flex-col flex-grow space-y-4">
                    <h3 className="text-xl font-bold text-gray-800 truncate">
                      {paket.package_name}
                    </h3>
                    <p className="capitalize text-gray-600 text-sm truncate">
                      {paket.destination}
                    </p>
                    <div className="flex items-center justify-between mt-auto pt-4">
                      <span className="text-[#3d6cb9] font-semibold text-lg">
                        Rp. {paket.price}
                      </span>
                      <button
                      onClick={() => handlePesan(paket.token)}
                      className="bg-[#3D6CB9] text-white px-5 py-2 rounded-lg
                      hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500
                      transition-colors duration-200 font-medium shadow-md"
                      >
                        Pesan Sekarang
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

export default PaketSection;
