"use client";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-[#3D6CB9] text-gray-100 py-10 mt-10">
      <div className="mx-auto px-4 md:px-20 lg:px-48 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-10">
        {/* Logo & Deskripsi */}
        <div>
          <div className="flex items-center mb-3">
            <Image
              src="/images/image.png"
              alt="Logo"
              width={50}
              height={50}
              className="block md:w-[70px] md:h-[70px]"
            />
            <h1 className="text-xl font-bold text-white ml-2">Tlogo Putri</h1>
          </div>
          <p className="text-sm text-white">
            Wisata alam terbaik dengan pelayanan profesional dan pengalaman yang
            berkesan.
          </p>
        </div>

        {/* Kontak & Sosial Media */}
        <div>
          <h3 className="text-white font-semibold mb-4">
            Mari terhubung dengan kami
          </h3>
          <ul className="text-sm space-y-2">
            <li>
              <span className="font-medium">Email:</span>{" "}
              <a
                href="mailto:tlogoputri@gmail.com"
                className="hover:text-white transition"
              >
                tlogoputri@gmail.com
              </a>
            </li>
            <li>
              <span className="font-medium">Instagram:</span>{" "}
              <a href="#" className="hover:text-white transition">
                @jeeptlogoputri_adv
              </a>
            </li>
            <li>
              <span className="font-medium">WhatsApp:</span>{" "}
              <a
                href="https://wa.me/6285174232247"
                className="hover:text-white transition"
              >
                0851-7423-2247
              </a>
            </li>
          </ul>
          <div className="flex space-x-4 mt-4">
            {/* Instagram */}
            <a href="#" className="hover:text-pink-400 transition">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"
                />
                <circle cx="17.5" cy="6.5" r="1.5" />
              </svg>
            </a>
            {/* WhatsApp */}
            <a href="#" className="hover:text-green-400 transition">
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.72 13.06c-.27-.13-1.6-.79-1.84-.88-.24-.09-.41-.13-.58.13s-.67.88-.82 1.06c-.15.18-.3.2-.56.07-.27-.13-1.15-.42-2.2-1.35-.81-.72-1.36-1.6-1.52-1.87-.16-.27-.02-.41.12-.54.12-.12.27-.3.4-.45.13-.15.18-.27.27-.45.09-.18.05-.34-.02-.48s-.58-1.39-.8-1.9c-.21-.5-.43-.43-.58-.44-.15-.01-.33-.01-.51-.01s-.48.07-.73.34c-.25.27-.96.94-.96 2.3s.98 2.67 1.12 2.85c.13.18 1.93 3 4.68 4.2.65.28 1.16.45 1.56.58.65.2 1.24.17 1.7.1.52-.08 1.6-.65 1.82-1.28.23-.63.23-1.17.17-1.28-.06-.11-.24-.17-.51-.3z"
                />
              </svg>
            </a>
            {/* Facebook */}
            <a href="#" className="hover:text-blue-400 transition">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M18 2h-3a4 4 0 00-4 4v3H8v4h3v8h4v-8h3l1-4h-4V6a1 1 0 011-1h3z"
                />
              </svg>
            </a>
          </div>
        </div>

        {/* Alamat */}
        <div>
          <h3 className="text-white font-semibold mb-4">Alamat</h3>
          <p className="text-sm text-white leading-relaxed">
            Kaliurang Timur, RT.06/RW15,
            <br />
            Kaliurang, Hargobinangun,
            <br />
            Kec. Pakem, Yogyakarta,
            <br />
            Daerah Istimewa Yogyakarta 55582
          </p>
        </div>
      </div>

      <div className="mt-10 border-t border-gray-700 pt-4 text-center text-sm text-black-500 px-4 md:px-20 lg:px-48">
        <p>
          © 2024 Tlogo Putri. All rights reserved. | Created by{" "}
          <span className="text-white font-medium">YourName</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
