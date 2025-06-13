"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md shadow-black/10 transition-all">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center px-4 py-2 w-full">
        {/* Logo kiri */}
        <Link href="/" className="flex items-center space-x-3 mb-2 sm:mb-0">
          <div className="flex items-center space-x-3">
            <Image
              src="/images/image.png"
              alt="Logo"
              width={60}
              height={60}
              className="block"
            />
            <span className="font-semibold text-lg sm:text-xl text-black tracking-wide whitespace-nowrap">
              Tlogo Putri Kaliurang
            </span>
          </div>
        </Link>

        {/* Navigasi Desktop */}
        <nav className="hidden md:block">
          <ul className="flex space-x-6 font-semibold text-black text-lg">
            {["home", "fasilitas", "paket", "artikel", "about"].map((item) => {
              const isArtikel = item === "artikel";
              return (
                <li key={item} className="relative group">
                  {isArtikel ? (
                    <Link
                      href="/artikel"
                      className="capitalize px-3 py-1 transition-colors duration-300 hover:text-blue-600 focus:text-blue-600"
                    >
                      {item}
                    </Link>
                  ) : (
                    <a
                      href={`#${item}`}
                      className="capitalize px-3 py-1 transition-colors duration-300 hover:text-blue-600 focus:text-blue-600"
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
        <nav className="md:hidden bg-white shadow-md border-t border-gray-200 animate-slide-down">
          <div className="px-4 py-4 space-y-2">
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
