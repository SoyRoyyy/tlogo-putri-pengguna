// src/components/layout/Header.jsx
"use client";

import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="flex justify-between items-center px-4 py-2 sticky top-0 bg-white z-50 shadow-md shadow-black/10">
      {/* Logo dan Judul yang bisa diklik menuju home */}
      <Link href="/" className="flex items-center space-x-2 sm:space-x-3 pl-0">
        <Image
          src="/images/image.png"
          alt="Logo"
          width={50}
          height={50}
          className="block sm:w-[60px] sm:h-[60px] md:w-[70px] md:h-[70px]"
        />
        <span className="font-semibold text-base sm:text-lg md:text-xl text-black tracking-wide">
          Tlogo Putri Kaliurang
        </span>
      </Link>
    </header>
  );
}
