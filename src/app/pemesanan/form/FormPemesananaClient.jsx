'use client';

import { useSearchParams, useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import PaketForms from "../../../../components/hero/PaketForms";
import BookingForm from "../../../../components/hero/BookingForm";
import { getPackageBySlug } from "../../lib/api";

export default function FormPemesananPage() {
  const searchParams = useSearchParams();
  const token = searchParams.get("token");
  const router = useRouter();

  const [isLoading, setIsLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const [formData, setFormData] = useState({
    customer_name: "",
    customer_email: "",
    customer_phone: "",
    start_time: "",
    tour_date: "",
    qty: "",
    paket: "",
    package_id: "",
    gross_amount: "",
    refferal: "",
    voucher: "",
  });

  // PREFILL dari localStorage saat component mount
  useEffect(() => {
    const savedForm = localStorage.getItem("formPemesanan");
    if (savedForm) {
      setFormData(JSON.parse(savedForm));
    }
  }, []);

  // AMBIL DATA PAKET dari token → slug
  useEffect(() => {
    if (!token) return;

    const tokenMap = JSON.parse(localStorage.getItem("tokenSlugMap") || "{}");
    const slug = tokenMap[token];

    if (!slug) {
      setErrorMsg("Paket tidak ditemukan atau token tidak valid.");
      setIsLoading(false);
      return;
    }

    setIsLoading(true);
    getPackageBySlug(slug)
      .then((data) => {
        if (!data || !data.package_name) {
          setErrorMsg("Data paket tidak tersedia atau rusak.");
          return;
        }

        setFormData((prev) => ({
          ...prev,
          paket: data.package_name,
          package_id: data.id,
          gross_amount: data.price,
        }));
      })
      .catch((error) => {
        console.error("Gagal memuat data paket:", error);
        setErrorMsg("Terjadi kesalahan saat mengambil data paket.");
      })
      .finally(() => setIsLoading(false));
  }, [token]);

  // SIMPAN ke localStorage setiap kali formData berubah
  useEffect(() => {
    localStorage.setItem("formPemesanan", JSON.stringify(formData));
  }, [formData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);

    localStorage.setItem("formPemesanan", JSON.stringify(formData));

    setTimeout(() => {
      router.push("/pemesanan/halrev");
    }, 600);
  };

  return (
    <main className="bg-white text-gray-800 font-sans">
      <PaketForms currentStep={1} />

      {errorMsg && (
        <div className="bg-red-100 text-red-700 px-4 py-2 mb-4 mx-4 rounded">
          {errorMsg}
        </div>
      )}

      <BookingForm
        formData={formData}
        isLoading={isLoading}
        submitting={submitting}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    </main>
  );
}
