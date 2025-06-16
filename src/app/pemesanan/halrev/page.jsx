"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import StepIndicator from "@/components/harlev/StepIndicator";
import BackToFormLink from "@/components/harlev/BackToFormLink";
import PaymentModal from "@/components/harlev/PaymentModal";
import PaketForms from "@/components/hero/PaketForms";
import ReviewSummary from "@/components/harlev/ReviewSummary";
import ReviewLoading from "@/components/harlev/ReviewLoading";
import { createBooking, cancelBooking } from "../../lib/api";

export default function ReviewPage() {
  const [data, setData] = useState(null);
  const [token, setToken] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [paymentType, setPaymentType] = useState(null);
  const [isSnapLoading, setIsSnapLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (typeof window === "undefined") return;

    const urlToken = new URLSearchParams(window.location.search).get("token");
    const savedToken = localStorage.getItem("token");
    const finalToken = urlToken || savedToken;

    if (finalToken) {
      localStorage.setItem("token", finalToken);
      setToken(finalToken);
    }

    const stored = localStorage.getItem("formPemesanan");
    if (stored) setData(JSON.parse(stored));
  }, []);

  useEffect(() => {
    if (isModalOpen && typeof window !== "undefined") {
      setPaymentType(localStorage.getItem("payment_type"));
    }
  }, [isModalOpen]);

  const handleBayar = async (mode) => {
    if (typeof window === "undefined") return;

    localStorage.setItem("payment_type", mode);
    setIsModalOpen(false);

    const stored = localStorage.getItem("formPemesanan");
    if (!stored) return alert("Data pembayaran tidak ditemukan");

    const parsed = JSON.parse(stored);
    delete parsed.paket;
    parsed.payment_type = mode;
    parsed.qty = Number(parsed.qty);

    const existingOrderId = localStorage.getItem("order_id");
    const existingSnapToken = localStorage.getItem("snap_token");

    const triggerSnap = (snapToken) => {
      if (!window.snap?.pay) return alert("Midtrans belum dimuat");

      setIsSnapLoading(true);
      window.snap.pay(snapToken, {
        onSuccess(result) {
          console.log("Pembayaran berhasil:", result);
          localStorage.clear();
          setTimeout(() => (window.location.href = "/pemesanan/success"), 1000);
        },
        onPending(result) {
          console.log("Menunggu pembayaran:", result);
        },
        onError(result) {
          console.log("Terjadi kesalahan:", result);
        },
        onClose() {
          console.log("Popup pembayaran ditutup");
          setPaymentType(localStorage.getItem("payment_type"));
          setIsSnapLoading(false);
        },
      });
    };

    if (existingSnapToken && existingOrderId) {
      return triggerSnap(existingSnapToken);
    }

    try {
      const result = await createBooking(parsed);
      localStorage.setItem("payment_type", result.order.payment_type);
      localStorage.setItem("snap_token", result.snap_token);
      localStorage.setItem("order_id", result.order.order_id);

      triggerSnap(result.snap_token);
    } catch (err) {
      console.error(err);
      alert("Terjadi kesalahan saat membuat pesanan.");
    }
  };

  const handleCancel = async () => {
    const orderId = localStorage.getItem("order_id");

    try {
      if (orderId) await cancelBooking(orderId);
      ["payment_type", "snap_token", "order_id", "token"].forEach((key) =>
        localStorage.removeItem(key)
      );

      setPaymentType(null);
      setIsModalOpen(false);
      router.push("/pemesanan/halrev");
    } catch (error) {
      console.error("Gagal membatalkan pesanan:", error);
      alert("Gagal membatalkan pesanan. Silakan coba lagi.");
    }
  };

  if (!data) return <ReviewLoading />;
  const total = data.gross_amount * data.qty;

  return (
    <main className="bg-gray-50 text-gray-900 font-sans min-h-screen w-full">
      <PaketForms currentStep={2} />
      <div className="px-4 sm:px-6 mt-6 mb-2">
        <BackToFormLink token={token} />
      </div>
      <section className="px-4 sm:px-6 py-6 w-full mx-auto">
        <h2 className="text-lg sm:text-2xl font-semibold text-center text-blue-800 mb-4">
          Review Pemesanan Anda
        </h2>
        <div className="block sm:hidden mb-4">
          <StepIndicator />
        </div>
        <ReviewSummary
          data={data}
          total={total}
          onBayarClick={() => setIsModalOpen(true)}
        />
      </section>

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
          <span className="text-sm text-gray-600 animate-pulse">
            Memuat pembayaran...
          </span>
        </div>
      )}
    </main>
  );
}
