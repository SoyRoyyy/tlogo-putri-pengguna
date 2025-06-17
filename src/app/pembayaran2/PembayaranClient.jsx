// Nama file: app/pembayaran2/PembayaranClient.js

'use client'; // <-- Tanda ini SANGAT PENTING!

import { useSearchParams } from 'next/navigation';

export default function PembayaranClient() {
  // Ambil search params dari URL
  const searchParams = useSearchParams();

  // Contoh: Anda ingin mengambil ID pembayaran dari URL /pembayaran2?payment_id=xyz
  const paymentId = searchParams.get('payment_id');
  const metode = searchParams.get('metode');

  // Di sini Anda bisa letakkan semua logika dan tampilan
  // yang bergantung pada parameter dari URL
  return (
    <div>
      <h2>Detail Transaksi</h2>
      {paymentId ? (
        <p>ID Pembayaran Anda adalah: {paymentId}</p>
      ) : (
        <p>ID Pembayaran tidak ditemukan.</p>
      )}
      {metode && <p>Metode yang dipilih: {metode}</p>}
      
      {/* Letakkan sisa komponen atau tampilan Anda di sini */}
    </div>
  );
}