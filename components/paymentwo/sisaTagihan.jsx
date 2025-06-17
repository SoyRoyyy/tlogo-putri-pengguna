"use client";
import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { fetchRemainingPayment, remainingPayment, getBookingByOrderId } from "../../src/app/lib/api";


const encryptText = (text) => btoa(text);
const decryptText = (encryptedText) => atob(encryptedText);

const PembayaranSisaTagihan = ({
  adminPhone = "085174232247",
}) => {
const searchParams = useSearchParams();
const order_id = searchParams.get("order_id");

const router = useRouter();
const [nominalBayar, setNominalBayar] = useState(0);
const [error, setError] = useState("");
const [loading, setLoading] = useState(false);
const [data, setData] = useState(null);
const [isSnapLoading, setIsSnapLoading] = useState(false);

const encryptedText = encryptText("Bayar Sekarang");

useEffect(() => {
  if (!order_id) {
    alert("Order ID tidak ditemukan di URL.");
    return;
  }

  const fetchData = async () => {
  try {
    const responseData = await fetchRemainingPayment(order_id);
    setData(responseData);
    setNominalBayar(responseData.remaining_amount);
  } catch (err) {
    setError(err.message || "Gagal mengambil data sisa tagihan. Silakan coba lagi.");
  }
};


  fetchData();
}, [order_id]);

 const normalizeOrderId = (orderId) => {
          const parts = orderId.split("-");
          if (parts.length >= 3) {
            return parts.slice(0, 3).join("-");
          }
          return orderId;
    }
const handleSnapSuccess = async (result) => {
      // localStorage.clear();
      localStorage.removeItem('snap_token'); 
      const normalizedOrderId = normalizeOrderId(result.order_id);

      try {
        const booking = await getBookingByOrderId(normalizedOrderId);
        localStorage.setItem("pending_booking", JSON.stringify(booking));
        
        if ((booking.booking_status === 'pending' && booking.payment_status === 'unpaid') || booking.booking_status === 'settlement' && booking.payment_status === 'unpaid'){
          setTimeout(() => {
            window.location.href = '/pemesanan/pending';
          }, 1000);
        } else {
          setTimeout(() => {
            window.location.href = '/pemesanan/success';
          }, 1000);
        }
      } catch (error) {
           setTimeout(() => {
          window.location.href = '/pemesanan/pending';
        }, 1000);
      }
    };

const handleBayar = async () => {
  setIsSnapLoading(true);

  try {
    const result = await remainingPayment(order_id);
    console.log(result);
    
    localStorage.setItem("snap_token", result.snap_token);
    localStorage.setItem("order_id", result.order.order_id);

    window.snap.pay(result.snap_token, {
      onSuccess(result) {
         handleSnapSuccess(result);
        // localStorage.clear();
        // console.log("Pembayaran berhasil:", result);
        // setTimeout(() => (window.location.href = "/pemesanan/success"), 1000);
      },
      onPending(result) {
        console.log("Menunggu pembayaran:", result);
      },
      onError(result) {
        console.log("Terjadi kesalahan:", result);
        setIsSnapLoading(false); 
      },
      onClose() {
        console.log("User menutup popup pembayaran Midtrans");
        setIsSnapLoading(false); 
        router.back();
      },
    });
  } catch (error) {
    console.error("Gagal inisialisasi pembayaran:", error);
    setIsSnapLoading(false);
    alert("Terjadi kesalahan saat memproses pembayaran.");
  }
};

if (!data || error) {
  return (
    <div className="max-w-xl mx-auto p-6 text-center text-sm text-gray-600">
      <DotLottieReact
        src="https://lottie.host/c2a23e35-9328-40dc-9c58-890a52446831/tYLTXztUKn.lottie"
        loop
        autoplay
      />
      <p className="mt-5">
        {error ? (
          <span className="text-slate-900 font-semibold text-lg">{error}</span>
        ) : (
          "Memuat data sisa tagihan..."
        )}
      </p>
    </div>
  );
}

  return (

    
    <div className="max-w-xl w-full mx-auto bg-white p-4 sm:p-8 mt-6 shadow-md rounded-md ">
        <h2 className="text-xl font-bold mb-4 text-center">
          Pembayaran Sisa Tagihan
        </h2>
    
        <div className="text-sm mb-4 flex justify-between items-center gap-2">
          <span>
             #<strong>{data.order_id}</strong>
          </span>
          <span
              className={`px-4 py-1 rounded-lg font-semibold text-sm
                ${data.message === 'Pembayaran DP Lunas'
                  ? 'bg-green-100 text-green-600'
                  : 'bg-red-100 text-red-600'
                }`}
            >
              {data.message === 'Pembayaran DP Lunas' ? 'Lunas' : 'Belum Lunas'}
            </span>
        </div>
    
        <div className="text-sm mb-4 space-y-1">
          <div className="flex">
            <span className="w-32">Nama</span>
            <span>: <strong>{data.customer_name}</strong></span>
          </div>
          <div className="flex">
            <span className="w-32">Telepon</span>
            <span>: <strong>{data.customer_phone}</strong></span>
          </div>
          <div className="flex">
            <span className="w-32">Paket</span>
            <span>: <strong>{data.package?.package_name || "-"}</strong></span>
          </div>
          <div className="flex">
            <span className="w-32">Tanggal Tour</span>
            <span>: <strong>{data.tour_date}</strong></span>
          </div>
          <div className="flex">
            <span className="w-32">Jumlah</span>
            <span>: <strong>{data.qty} orang</strong></span>
          </div>
        </div>
              
        <div className="bg-gray-50 border p-4 rounded mb-4 space-y-2">
          <div className="flex">
            <span className="w-32">Total</span>
            <span>
              : <strong>Rp. {Number(data.gross_amount).toLocaleString("id-ID")}</strong>
            </span>
          </div>
          <div className="flex">
            <span className="w-32">Deposit</span>
            <span>
              : <strong>Rp. {Number(data.deposit).toLocaleString("id-ID")}</strong>
            </span>
          </div>
          <div className="flex">
            <span className="w-32">Sisa Tagihan</span>
            <span>
              : <strong>Rp. {Number(data.remaining_amount).toLocaleString("id-ID")}</strong>
            </span>
          </div>
        </div>
              
        <div className="mt-6 p-6 border rounded-lg bg-gray-50 text-center">
          <div className="flex justify-center mb-3">
            <img src="/images/CSIcon.png" alt="Admin" className="w-16 h-16" />
          </div>
          <p className="text-sm text-gray-700 mb-2">
            Jika ada kendala pembayaran silakan menghubungi nomor berikut:
          </p>
          <p className="text-xs text-gray-500 mb-3">
            Jam Operasional: 08:00 - 22:00 WIB
          </p>
              
          <a
            href={`https://wa.me/${adminPhone.replace(/\D/g, "")}?text=Halo%20admin%20Jeep%20Tlogo%20Putri%20Kaliurang,%20saya%20butuh%20bantuan`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-green-600 text-white px-4 py-2 rounded-md text-sm w-fit mx-auto hover:bg-green-700 transition"
          >
            <img src="/images/WALog.png" alt="WA" className="w-6 h-6" />
            <span>Hubungi Admin</span>
          </a>
        </div>
              
        <div
          className={`grid gap-3 mt-6 ${
            data.message === "Pembayaran DP Lunas"
              ? "grid-cols-1 justify-items-center"
              : "grid-cols-2"
          }`}
        >
          <button
            onClick={() => router.push("/")}
            className="text-white border px-4 py-2 rounded-md bg-[#3D6CB9] hover:bg-[#4f7ec8] w-full max-w-xs cursor-pointer transition"
          >
            Home
          </button>
        
          {data.message !== "Pembayaran DP Lunas" && (
            <button
              onClick={handleBayar}
              disabled={loading}
              className={`px-4 py-2 rounded-md w-full text-white transition max-w-xs ${
                loading
                  ? "bg-blue-300 cursor-not-allowed"
                  : "bg-[#3D6CB9] hover:bg-blue-700"
              }`}
            >
              {loading ? "Memproses..." : decryptText(encryptedText)}
            </button>
          )}
        </div>
        
        {isSnapLoading && (
          <div className="flex items-center justify-center mt-10">
            <span className="text-sm text-gray-600 animate-pulse">Memuat pembayaran...</span>
          </div>
        )}
    </div>
  );
};

export default PembayaranSisaTagihan;
