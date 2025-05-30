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

  useEffect(() => {
    console.log("Token yang diterima:", token);

    if (token) {
      const tokenMap = JSON.parse(localStorage.getItem("tokenSlugMap") || "{}");
      const slug = tokenMap[token];

      if (!slug) {
        console.error("Slug tidak ditemukan untuk token:", token);
        return;
      }

      setIsLoading(true);
      getPackageBySlug(slug)
        .then((data) => {
          setFormData((prev) => ({
            ...prev,
            paket: data.package_name,
            package_id: data.id,
            gross_amount: data.price,
          }));
        })
        .catch((error) => console.error(error))
        .finally(() => setIsLoading(false));
    }
  }, [token]);

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
      <PaketForms />
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
