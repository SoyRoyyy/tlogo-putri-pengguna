'use client';

import { useSearchParams, useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function FormPemesanan() {
  const searchParams = useSearchParams();
  const token = searchParams.get('token');
  const router = useRouter();

  const [isLoading, setIsLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    customer_name: '',
    customer_email: '',
    customer_phone: '',
    start_time: '',
    tour_date: '',
    qty: '',
    paket: '',
    package_id: '',
    gross_amount: '',
    refferal: '',
    voucher: '',
  });

useEffect(() => {
  console.log("Token yang diterima:", token);  // Cek token yang diterima

  if (token) {
    const tokenMap = JSON.parse(localStorage.getItem('tokenSlugMap') || '{}');
    const slug = tokenMap[token];

    if (!slug) {
      console.error('Slug tidak ditemukan untuk token:', token);
      return;
    }

    setIsLoading(true);
    fetch(`http://localhost:8000/api/packages/${encodeURIComponent(slug)}`)
      .then(res => res.json())
      .then(data => {
        if (!data.error) {
          setFormData(prev => ({
            ...prev,
            paket: data.package_name,
            package_id: data.id,
            gross_amount: data.price,
          }));
        }
      })
      .catch(error => {
        console.error('Gagal fetch data paket:', error);
      })
      .finally(() => setIsLoading(false));
  }
}, [token]);


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);

    localStorage.setItem('formPemesanan', JSON.stringify(formData));

    // Simulasi delay agar efek pulse terlihat
    setTimeout(() => {
      router.push('/pemesanan/halrev');
    }, 600);
  };

  const currentStep = 1;

  return (
    <main className="bg-white text-gray-800 font-sans">
      {/* Header */}
      <header className="flex justify-between items-center px-6 py-4 shadow-md sticky top-0 bg-white z-50">
        <div className="flex items-center space-x-3 pl-1 md:pl-0">
          <Image
            src="/images/image.png"
            alt="Logo"
            width={70}
            height={70}
            className="block"
          />
          <span className="font-semibold text-xl text-black tracking-wide whitespace-nowrap">
            Tlogo Putri Kaliurang
          </span>
        </div>
        <div className="flex space-x-3 px-4 font-semibold gap-3 pt-2 text-sm sm:text-base">
          {[
            { step: 1, label: "Pesan" },
            { step: 2, label: "Review" },
            { step: 3, label: "Bayar" },
            { step: 4, label: "E-Tiket" },
          ].map((item, idx, arr) => (
            <div key={item.step} className="flex items-center whitespace-nowrap">
              <div
                className={`w-6 h-6 rounded-full flex items-center justify-center font-bold text-sm ${
                  item.step === currentStep
                    ? "bg-[#3D6CB9] text-white"
                    : "bg-gray-300 text-gray-700"
                }`}
              >
                {item.step}
              </div>
              <span className="ml-2 mr-4 font-medium text-gray-800">{item.label}</span>
              {idx !== arr.length - 1 && <span className="text-gray-400">—</span>}
            </div>
          ))}
        </div>
      </header>

      {/* Form Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-10 bg-white min-h-screen">
        <div className="px-6 pt-4">
          <Link href="/pemesanan">
            <div className="flex items-center text-black hover:underline hover:text-[#3D6CB9] transition duration-200">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
              <span>Kembali ke Katalog Jeep</span>
            </div>
          </Link>
        </div>

        <div className={`max-w-xl mx-auto p-6 rounded-xl shadow-md transition ${
          isLoading ? 'animate-pulse bg-gray-100' : 'bg-gray-50'
        }`}>
          <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Form Pemesanan</h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Input fields... [tidak diubah] */}

            {/* Paket Wisata */}
            <div>
              <label className="block text-sm font-medium text-black">Paket Wisata</label>
              <input
                type="text"
                name="paket"
                value={formData.paket}
                readOnly
                className="w-full mt-1 px-2 py-2 text-sm text-black border border-gray-300 bg-gray-100 rounded-md"
              />
            </div>

            {/* Nama */}
            <div>
              <label className="block text-sm font-medium text-black">Nama Lengkap</label>
              <input
                type="text"
                name="customer_name"
                value={formData.customer_name}
                onChange={handleChange}
                required
                placeholder='Contoh: John Tor'
                className="w-full mt-1 px-2 py-2 border text-black text-sm border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-black">Email</label>
              <input
                type="email"
                name="customer_email"
                value={formData.customer_email}
                onChange={handleChange}
                required
                placeholder="Contoh: customer1@example.com"
                className="w-full mt-1 px-2 py-2 text-black text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Telepon */}
            <div>
              <label className="block text-sm font-medium text-black">No. Telepon</label>
              <input
                type="tel"
                name="customer_phone"
                value={formData.customer_phone}
                onChange={(e) => {
                  const value = e.target.value;
                  if (/^\d*$/.test(value)) {
                    handleChange(e);
                  }
                }}
                required
                maxLength={15}
                pattern="[0-9]{10,15}"
                placeholder="Contoh: 081234567890"
                className="w-full mt-1 px-2 py-2 text-black text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Waktu Tour */}
            <div>
              <label className="block text-sm font-medium text-black">Waktu Tour</label>
              <input
                type="time"
                name="start_time"
                value={formData.start_time}
                onChange={handleChange}
                required
                className="w-full mt-1 px-2 py-2 text-black text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Tanggal Tour */}
            <div>
              <label className="block text-sm font-medium text-black">Tanggal Pemesanan</label>
              <input
                type="date"
                name="tour_date"
                value={formData.tour_date}
                onChange={handleChange}
                required
                className="w-full mt-1 px-2 py-2 text-black text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Jumlah Pesanan */}
            <div>
              <label className="block text-sm font-medium text-black">Jumlah Armada</label>
              <input
                type="number"
                name="qty"
                value={formData.qty}
                onChange={handleChange}
                min="1"
                required
                className="w-full mt-1 px-2 py-2 text-black text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Kode Refferal */}
            <div>
              <label className="block text-sm font-medium text-black">Kode Refferal</label>
              <input
                type="text"
                name="refferal"
                value={formData.refferal}
                onChange={handleChange}
                placeholder='*Opsional'
                className="w-full mt-1 px-2 py-2 border text-black text-sm border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Kode Voucher */}
            <div>
              <label className="block text-sm font-medium text-black">Kode Voucher</label>
              <input
                type="text"
                name="voucher"
                value={formData.voucher}
                onChange={handleChange}
                placeholder='*Opsional'
                className="w-full mt-1 px-2 py-2 border text-black text-sm border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Tombol Submit */}
            <button
              type="submit"
              disabled={submitting}
              className={`w-full py-2 rounded-md text-white font-semibold transition ${
                submitting
                  ? 'bg-[#3D6CB9] animate-pulse cursor-not-allowed'
                  : 'bg-[#3D6CB9] hover:bg-blue-700'
              }`}
            >
              {submitting ? 'Mengirim...' : 'Kirim Pemesanan'}
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#3D6CB9] text-gray-100 py-10 mt-10">
        <div className="mx-auto px-[200px] grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Logo & Deskripsi */}
          <div>
            <div className="flex items-center mb-3">
              <Image
              src="/images/image.png"
              alt="Logo"
              width={70}
              height={70}
              className="block"
              />
              <h1 className="text-xl font-bold text-white">Tlogo Putri</h1>
            </div>
            <p className="text-sm text-white">
              Wisata alam terbaik dengan pelayanan profesional dan pengalaman
              yang berkesan.
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

        <div className="mt-10 border-t border-gray-700 pt-4 text-center text-sm text-black-500 px-[200px]">
          <p>
            © 2024 Tlogo Putri. All rights reserved. | Created by{" "}
            <span className="text-white font-medium">YourName</span>
          </p>
        </div>
      </footer>
    </main>
  );
}
