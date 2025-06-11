// src/components/layout/Header.jsx
"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link"; // ✅ Tambahkan import ini
import { Menu, X } from "lucide-react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="flex justify-between items-center px-4 py-2 sticky top-0 bg-white z-50 shadow-md shadow-black/10">
      {/* Logo kiri */}
      <Link href="/" className="flex items-center space-x-3 mb-2 sm:mb-0">
      {/* Gunakan tag <a> hanya jika pakai Next.js <13, tapi di App Router, cukup begini */}
        <div className="flex items-center space-x-3">
          <Image
            src="/images/image.png"
            alt="Logo"
            width={60}
            height={60}
            className="block"
          />
          <span className="font-semibold text-lg sm:text-xl text-black tracking-wide">
            Tlogo Putri Kaliurang
          </span>
        </div>
      </Link>

      {/* Navigasi Desktop */}
      <div className="flex items-center space-x-4">
        <nav className="hidden md:block">
          <ul className="flex space-x-6 px-7 font-semibold text-black text-l">
            {["home", "fasilitas", "paket", "artikel", "about"].map((item) => {
              const isArtikel = item === "artikel";
              return (
                <li key={item} className="relative group">
                  {isArtikel ? (
                    <Link
                      href="/artikel"
                      className="capitalize px-3 py-1 transition-colors duration-300 hover:text-blue-600 focus:text-blue-600 focus:outline-none"
                    >
                      {item}
                    </Link>
                  ) : (
                    <a
                      href={`#${item}`}
                      className="capitalize px-3 py-1 transition-colors duration-300 hover:text-blue-600 focus:text-blue-600 focus:outline-none"
                    >
                      {item}
                    </a>
                  )}
                  <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-blue-600 transition-all duration-300 group-hover:w-full" />
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Tombol Menu Mobile */}
        <button
          className="md:hidden p-2 rounded-md text-black hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <nav className="md:hidden bg-white shadow-md border-t border-gray-200">
          <div className="max-w-7xl mx-auto px-4 py-4">
            {["home", "fasilitas", "paket", "artikel", "about"].map((item) => {
              const isArtikel = item === "artikel";
              return isArtikel ? (
                <Link
                  key={item}
                  href="/artikel"
                  onClick={() => setMenuOpen(false)}
                  className="block py-2 text-gray-700 hover:text-blue-600 transition font-medium capitalize"
                >
                  {item}
                </Link>
              ) : (
                <a
                  key={item}
                  href={`#${item}`}
                  onClick={() => setMenuOpen(false)}
                  className="block py-2 text-gray-700 hover:text-blue-600 transition font-medium capitalize"
                >
                  {item}
                </a>
              );
            })}
          </div>
        </nav>
      )}
    </header>
  );
}
