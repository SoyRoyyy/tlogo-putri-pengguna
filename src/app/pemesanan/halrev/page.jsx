"use client";


import { useEffect, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import ReviewItem from '../../../../components/harlev/ReviewItem';
import StepIndicator from '../../../../components/harlev/StepIndicator';
import BackToFormLink from '../../../../components/harlev/BackToFormLink';
import PaymentModal from '../../../../components/harlev/PaymentModal';
import { createBooking, cancelBooking } from '../../lib/api';


export default function ReviewPage() {
  const [data, setData] = useState(null);
  const [token, setToken] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [paymentType, setPaymentType] = useState(null);
  const [isSnapLoading, setIsSnapLoading] = useState(false);

  const router = useRouter();

  useEffect(() => {
    const urlToken = new URLSearchParams(window.location.search).get("token");
    setToken(urlToken || localStorage.getItem("token"));

    const stored = localStorage.getItem("formPemesanan");
    if (stored) setData(JSON.parse(stored));
  }, []);

  useEffect(() => {
    if (isModalOpen) {
      setPaymentType(localStorage.getItem("payment_type"));
    }
  }, [isModalOpen]);


  const handleBayar = async (mode) => {
    localStorage.setItem('payment_type', mode);
    setIsModalOpen(false);

    const stored = localStorage.getItem('formPemesanan');
    if (!stored) return alert('Data pembayaran tidak ditemukan');

    const parsed = JSON.parse(stored);
    delete parsed.paket;
    parsed.payment_type = mode;
    parsed.qty = Number(parsed.qty);

    const existingOrderId = localStorage.getItem('order_id');
    const existingSnapToken = localStorage.getItem('snap_token');

    if (existingSnapToken && existingOrderId) {
      setIsSnapLoading(true);

      return window.snap.pay(existingSnapToken, {
        onSuccess(result) {
          console.log('Pembayaran berhasil:', result);
          localStorage.clear();
          setTimeout(() => window.location.href = `/`, 1000);
        },
        onPending(result) {
          console.log('Menunggu pembayaran:', result);
          setTimeout(() => window.location.href = `/`, 1000);
        },
        onError(result) {
          console.log('Terjadi kesalahan:', result);
          setTimeout(() => window.location.href = `/`, 1000);
        },
        onClose() {
          console.log('User menutup popup pembayaran Midtrans');
          const savedType = localStorage.getItem('payment_type');
          if (savedType) setPaymentType(savedType);
          setIsSnapLoading(false);
        },
      });
    }

    try {
      const result = await createBooking(parsed);
      localStorage.setItem('payment_type', result.order.payment_type);
      localStorage.setItem('snap_token', result.snap_token);
      localStorage.setItem('order_id', result.order.order_id);

      if (!window.snap || !window.snap.pay) throw new Error('Midtrans belum dimuat');
      setIsSnapLoading(true);

      window.snap.pay(result.snap_token, {
  onSuccess(result) {
    console.log('Pembayaran berhasil:', result);
    localStorage.clear(); 
    setTimeout(() => window.location.href = `/`, 1000);
  },
  onPending(result) {
    console.log('Menunggu pembayaran:', result);
    // setTimeout(() => window.location.href = `/`, 1000);
  },
  onError(result) {
    console.log('Terjadi kesalahan:', result);
    // setTimeout(() => window.location.href = `/`, 1000);
  },
  onClose() {
    console.log('User menutup popup pembayaran Midtrans');
    const savedType = localStorage.getItem('payment_type');
    if (savedType) setPaymentType(savedType);
    setIsSnapLoading(false);
  },
});


    } catch (err) {
      console.error(err);
      alert('Terjadi kesalahan saat membuat pesanan.');
    }
  };


 const handleCancel = async () => {
  const orderId = localStorage.getItem('order_id');
  try {
    if (orderId) {
      await cancelBooking(orderId); 
    }

    localStorage.removeItem('payment_type');
    localStorage.removeItem('snap_token');
    localStorage.removeItem('order_id');
    localStorage.removeItem('token');


    setPaymentType(null);
    setIsModalOpen(false);

    router.push('/pemesanan/halrev');
  } catch (error) {
    console.error('Gagal membatalkan pesanan:', error);
    alert('Gagal membatalkan pesanan. Silakan coba lagi.');
  }
};




  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <p className="text-gray-500 text-lg">Memuat data pemesanan...</p>
      </div>
    );
  }

  const total = data.gross_amount * data.qty;

  return (
    <main className="bg-white text-gray-900 font-sans min-h-screen">
      {/* Header */}
      <header className="flex justify-between items-center px-6 py-4 shadow-md sticky top-0 bg-white z-50">
        <div className="flex items-center space-x-3">
          <Image
            src="/images/image.png"
            alt="Logo Tlogo Putri"
            width={40}
            height={40}
          />
          <span className="font-bold text-2xl text-gray-800">Tlogo Putri</span>
        </div>
        <StepIndicator />
      </header>

      {/* Main Section */}
      <section className="px-4 sm:px-8 py-10 max-w-5xl mx-auto">
        <BackToFormLink token={token} />

        <h2 className="text-3xl font-semibold text-center text-blue-800 mb-10">
          Review Pemesanan Anda
        </h2>

        <div className="bg-white border border-gray-200 rounded-2xl shadow-lg p-6 sm:p-8 space-y-6">
          <div className="space-y-4">
            <ReviewItem label="Paket Wisata" value={data.paket} />
            <ReviewItem
              label="Harga Total"
              value={`Rp${new Intl.NumberFormat("id-ID").format(total)}`}
            />
            <ReviewItem label="Nama Lengkap" value={data.customer_name} />
            <ReviewItem label="Email" value={data.customer_email} />
            <ReviewItem label="No. Telepon" value={data.customer_phone} />
            <ReviewItem label="Waktu Tour" value={data.start_time} />
            <ReviewItem label="Tanggal Pemesanan" value={data.tour_date} />
            <ReviewItem label="Jumlah Armada" value={data.qty} />
            <ReviewItem label="Kode Refferal" value={data.refferal || "-"} />
            <ReviewItem label="Kode Voucher" value={data.voucher || "-"} />
          </div>

          <div className="pt-4 flex justify-end">
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-blue-700 hover:bg-blue-800 text-white text-sm sm:text-base font-medium px-6 py-3 rounded-lg transition duration-200 ease-in-out shadow-sm"
            >
              Lanjut ke Pembayaran
            </button>
          </div>
        </div>
      </section>

      {/* Payment Modal */}
      <PaymentModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onConfirmDP={() => handleBayar("dp")}
        onConfirmFull={() => handleBayar("full")}
        onCancel={handleCancel}
        amount={total}
        paymentType={paymentType}
      />

      {isSnapLoading && (
        <div className="flex items-center justify-center mt-10">
          <span className="text-sm text-gray-600 animate-pulse">Memuat pembayaran...</span>
        </div>
      )}

    </main>
  );
}
