"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import StepIndicator from "../../../../components/harlev/StepIndicator";
import BackToFormLink from "../../../../components/harlev/BackToFormLink";
import PaymentModal from "../../../../components/harlev/PaymentModal";

function ReviewItem({ label, value }) {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-start text-sm sm:text-base py-2 border-b last:border-b-0 border-gray-100">
      <span className="text-gray-600 sm:w-1/2 font-medium">{label}</span>
      <span className="text-gray-900 sm:text-right sm:w-1/2 mt-1 sm:mt-0 break-words">
        {value}
      </span>
    </div>
  );
}

export default function ReviewPage() {
  const [data, setData] = useState(null);
  const [token, setToken] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [paymentType, setPaymentType] = useState(null);

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

  const handleBayar = (mode) => {
    localStorage.setItem("payment_type", mode);
    setIsModalOpen(false);
  };

  const handleCancel = async () => {
    const orderId = localStorage.getItem("order_id");
    if (orderId) {
      await fetch(`http://localhost:8000/api/bookings/${orderId}`, {
        method: "DELETE",
      });
    }

    localStorage.removeItem("payment_type");
    localStorage.removeItem("snap_token");
    localStorage.removeItem("order_id");
    setPaymentType(null);
    setIsModalOpen(false);
  };

  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
        <p className="text-gray-500 text-lg text-center">
          Memuat data pemesanan...
        </p>
      </div>
    );
  }

  const total = data.gross_amount * data.qty;

  return (
    <main className="bg-gray-50 text-gray-900 font-sans min-h-screen w-full">
      {/* Header */}
      <header className="flex flex-wrap justify-between items-center px-4 sm:px-6 py-4 shadow-md sticky top-0 bg-white z-50">
        <div className="flex items-center space-x-3">
          <Image
            src="/images/image.png"
            alt="Logo Tlogo Putri"
            width={36}
            height={36}
          />
          <span className="font-semibold text-lg sm:text-xl text-gray-800">
            Tlogo Putri
          </span>
        </div>

        {/* Step Indicator tampil hanya di desktop */}
        <div className="hidden sm:block">
          <StepIndicator />
        </div>
      </header>

      {/* Tombol kembali ke form */}
      <div className="px-4 sm:px-6 mt-6 mb-2">
        <BackToFormLink token={token} />
      </div>

      {/* Main Content */}
      <section className="px-4 sm:px-6 py-6 w-full mx-auto">
        <h2 className="text-lg sm:text-2xl font-semibold text-center text-blue-800 mb-4">
          Review Pemesanan Anda
        </h2>

        {/* Step Indicator tampil hanya di mobile */}
        <div className="block sm:hidden mb-4">
          <StepIndicator />
        </div>

        {/* Card Review */}
        <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-4 sm:p-5 space-y-4 max-w-md mx-auto w-full">
          <div className="divide-y divide-gray-100">
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

          {/* Tombol Lanjut */}
          <div className="pt-4 flex justify-end">
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-blue-700 hover:bg-blue-800 text-white text-sm font-medium px-5 py-2 rounded-md transition duration-200 shadow"
            >
              Lanjut ke Pembayaran
            </button>
          </div>
        </div>
      </section>

      {/* Modal Pembayaran */}
      <PaymentModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onConfirmDP={() => handleBayar("dp")}
        onConfirmFull={() => handleBayar("full")}
        onCancel={handleCancel}
        amount={total}
      />
    </main>
  );  
}
