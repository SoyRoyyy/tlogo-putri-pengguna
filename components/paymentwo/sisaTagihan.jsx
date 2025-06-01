"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { fetchRemainingPayment } from "../../src/app/lib/api"; // ✅ Pastikan path ini sesuai dengan struktur folder Anda

const encryptText = (text) => btoa(text);
const decryptText = (encryptedText) => atob(encryptedText);

const PembayaranSisaTagihan = ({
  Booking_Id = "",
  order_id = "TP-20250426-5051",
  adminPhone = "085174232247",
}) => {
  const router = useRouter();
  const [nominalBayar, setNominalBayar] = useState(0);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);

  const encryptedText = encryptText("Bayar Sekarang");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseData = await fetchRemainingPayment(order_id);
        console.log("Data sisa tagihan:", responseData);
        setData(responseData);
        setNominalBayar(responseData.remaining_amount);
      } catch (err) {
        console.error("Gagal ambil data sisa tagihan:", err);
        setError("Gagal mengambil data sisa tagihan. Silakan coba lagi.");
      }
    };

    if (order_id) {
      fetchData();
    }
  }, [order_id]);

  const handleBayar = async () => {
    if (!data) return;

    if (nominalBayar !== data.remaining_amount) {
      setError(
        `Nominal harus sama dengan sisa tagihan: Rp. ${data.remaining_amount.toLocaleString("id-ID")}`
      );
      return;
    }

    setLoading(true);
    setError("");

    try {
      await new Promise((res) => setTimeout(res, 1000)); // simulasi
      router.push(`/pembayaran2/va?nominal=${nominalBayar}&kode=${Booking_Id}`);
    } catch (err) {
      console.error(err);
      setError("Terjadi kesalahan saat memproses pembayaran.");
    } finally {
      setLoading(false);
    }
  };

  if (!data) {
    return (
      <div className="max-w-xl mx-auto p-6 text-center text-sm text-gray-600">
        <DotLottieReact
          src="https://lottie.host/c2a23e35-9328-40dc-9c58-890a52446831/tYLTXztUKn.lottie"
          loop
          autoplay
        />
        Memuat data sisa tagihan...
      </div>
    );
  }

  return (
    <div className="max-w-xl w-full mx-auto bg-white p-4 sm:p-8 mt-6 shadow-md rounded-md">
      <h2 className="text-xl font-bold mb-4 text-center">
        Pembayaran Sisa Tagihan
      </h2>

      <div className="text-sm mb-4 flex flex-col sm:flex-row justify-between gap-2">
        <span>
          Kode Pemesanan: <strong>{data.order_id}</strong>
        </span>
        <span>
          Total Harga Paket: <strong>Rp. {Number(data.gross_amount).toLocaleString("id-ID")}</strong>
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
          Jika ada kendala pembayaran VA silakan menghubungi nomor berikut:
        </p>
        <p className="text-xs text-gray-500 mb-2">
          Jam Operasional: 08:00 - 22:00 WIB
        </p>

        <a
          href={`https://wa.me/${adminPhone.replace(/\D/g, "")}?text=Halo%20admin%20Jeep%20Tlogo%20Putri%20Kaliurang,%20saya%20butuh%20bantuan`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 bg-green-600 text-white px-4 py-2 rounded-md text-sm w-fit mx-auto hover:bg-green-700 transition"
        >
          <img src="/images/WALog.png" alt="WA" className="w-6 h-6" />
          <span>Hubungi Admin di WhatsApp</span>
        </a>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6">
        <button
          onClick={() => router.back()}
          className="text-white border px-4 py-2 rounded-md bg-green-600 hover:bg-green-700 w-full"
        >
          Home
        </button>

        <button
          onClick={handleBayar}
          disabled={loading}
          className={`px-4 py-2 rounded-md w-full text-white transition ${
            loading
              ? "bg-blue-300 cursor-not-allowed"
              : "bg-[#3D6CB9] hover:bg-blue-700"
          }`}
        >
          {loading ? "Memproses..." : decryptText(encryptedText)}
        </button>
      </div>

      {error && (
        <p className="mt-4 text-sm text-red-500 text-center font-medium">{error}</p>
      )}
    </div>
  );
};

export default PembayaranSisaTagihan;
