'use client';

import { useSearchParams } from 'next/navigation';
import { useState } from 'react';

export default function FormPemesanan() {
  const searchParams = useSearchParams();
  const paket = searchParams.get('paket') || '';

  const [formData, setFormData] = useState({
    nama: '',
    email: '',
    phone: '',
    waktutour: '',
    tanggaltour: '',
    jumlahpesanan: '',
    paket: paket,
    bookingCode: "",
    kodeReffeal: "",
    kodeVoucher: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Kirim ke API atau localStorage, dll.
    console.log('Data terkirim:', formData);
    alert('Pemesanan berhasil dikirim!');
  };

  return (
    <section className="px-4 sm:px-6 lg:px-8 py-10 bg-white min-h-screen">
      <div className="max-w-xl mx-auto bg-gray-50 p-6 rounded-xl shadow-md">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Form Pemesanan</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Nama Lengkap</label>
            <input
              type="text"
              name="nama"
              value={formData.nama}
              onChange={handleChange}
              required
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">No. Telepon</label>
            <input
              type="tel"
              name="telepon"
              value={formData.telepon}
              onChange={handleChange}
              required
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Jumlah Orang</label>
            <input
              type="number"
              name="jumlahOrang"
              value={formData.jumlahOrang}
              onChange={handleChange}
              min="1"
              required
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Tanggal Pemesanan</label>
            <input
              type="date"
              name="tanggal"
              value={formData.tanggal}
              onChange={handleChange}
              required
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Paket Wisata</label>
            <input
              type="text"
              name="paket"
              value={formData.paket}
              onChange={handleChange}
              readOnly
              className="w-full mt-1 px-4 py-2 border border-gray-300 bg-gray-100 rounded-md"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
          >
            Kirim Pemesanan
          </button>
        </form>
      </div>
    </section>
  );
}
