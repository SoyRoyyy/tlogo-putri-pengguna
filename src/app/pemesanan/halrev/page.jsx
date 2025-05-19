'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function ReviewPage() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const stored = localStorage.getItem('formPemesanan');
    if (stored) {
      setData(JSON.parse(stored));
    }
  }, []);

  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Memuat data...</p>
      </div>
    );
  }

  return (
    <main className="bg-white text-gray-800 font-sans min-h-screen">
      <header className="flex justify-between items-center px-6 py-4 shadow-md sticky top-0 bg-white z-50">
        <div className="flex items-center space-x-3">
          <Image src="/images/image.png" alt="Logo" width={40} height={40} />
          <span className="font-bold text-xl text-green-700">Tlogo Putri</span>
        </div>
        <div className="flex items-center justify-center flex-wrap gap-3 pt-2 text-sm sm:text-base">
          {[1, 2, 3, 4].map((step, idx) => (
            <div key={step} className="flex items-center whitespace-nowrap">
              <div
                className={`w-6 h-6 rounded-full flex items-center justify-center font-bold text-sm ${
                  step === 2 ? 'bg-blue-600 text-white' : 'bg-gray-300 text-gray-700'
                }`}
              >
                {step}
              </div>
              <span className="ml-2 mr-4 font-medium text-gray-800">
                {['Pesan', 'Review', 'Bayar', 'E-Tiket'][idx]}
              </span>
              {idx !== 3 && <span className="text-gray-400">—</span>}
            </div>
          ))}
        </div>
      </header>

      <section className="px-6 py-10 max-w-2xl mx-auto">
        <h2 className="text-2xl font-bold mb-6 text-center">Review Pemesanan Anda</h2>
        <div className="space-y-4 text-sm text-gray-700">
          <ReviewItem label="Paket Wisata" value={data.paket} />
          <ReviewItem label="Nama Lengkap" value={data.customer_name} />
          <ReviewItem label="Email" value={data.customer_email} />
          <ReviewItem label="No. Telepon" value={data.customer_phone} />
          <ReviewItem label="Waktu Tour" value={data.start_time} />
          <ReviewItem label="Tanggal Pemesanan" value={data.tour_date} />
          <ReviewItem label="Jumlah Armada" value={data.qty} />
          <ReviewItem label="Kode Refferal" value={data.refferal} />
          <ReviewItem label="Kode Voucher" value={data.voucher} />
        </div>

        <div className="mt-8 flex justify-between">
          <Link href="/pemesanan/form" className="text-blue-600 hover:underline">
            Kembali ke Form
          </Link>
          <Link href="/bayar">
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">
              Lanjut ke Pembayaran
            </button>
          </Link>
        </div>
      </section>
    </main>
  );
}

function ReviewItem({ label, value }) {
  return (
    <div className="border-b pb-2">
      <strong>{label}:</strong> <span className="ml-2">{value || '-'}</span>
    </div>
  );
}
