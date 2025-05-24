'use client';

import { useSearchParams, useRouter } from 'next/navigation';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function FormPemesanan() {
  const searchParams = useSearchParams();
  const paket = searchParams.get('paket') || '';
  const router = useRouter();

  const [formData, setFormData] = useState({
    customer_name: '',
    customer_email: '',
    customer_phone: '',
    start_time: '',
    tour_date: '',
    qty: '',
    paket: paket,
    refferal: '',
    voucher: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simpan data ke localStorage untuk diakses di halaman review
    localStorage.setItem('formPemesanan', JSON.stringify(formData));
    // Arahkan ke halaman review
    router.push('/pemesanan/halrev');
  };

  const currentStep = 1;

  return (
    <main className="bg-white text-gray-800 font-sans">
      {/* Header */}
      <header className="flex justify-between items-center px-6 py-4 shadow-md sticky top-0 bg-white z-50">
        <div className="flex items-center space-x-3">
          <Image src="/images/image.png" alt="Logo" width={40} height={40} />
          <span className="font-bold text-xl text-black">Tlogo Putri</span>
        </div>
        <div className="flex items-center justify-center flex-wrap gap-3 pt-2 text-sm sm:text-base">
          {[
            { step: 1, label: 'Pesan' },
            { step: 2, label: 'Review' },
            { step: 3, label: 'Bayar' },
            { step: 4, label: 'E-Tiket' },
          ].map((item, idx, arr) => (
            <div key={item.step} className="flex items-center whitespace-nowrap">
              <div
                className={`w-6 h-6 rounded-full flex items-center justify-center font-bold text-sm ${
                  item.step === currentStep
                    ? 'bg-[#3D6CB9] text-white'
                    : 'bg-gray-300 text-gray-700'
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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
              <span>Kembali ke Katalog Jeep</span>
            </div>
          </Link>
        </div>

        <div className="max-w-xl mx-auto bg-gray-50 p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Form Pemesanan</h2>

          <form onSubmit={handleSubmit} className="space-y-4">
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
                className="w-full mt-1 px-2 py-2 border text-black text-sm border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-[#3D6CB9] text-white py-2 rounded-md hover:bg-blue-700 transition cursor-pointer"
            >
              Kirim Pemesanan
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
