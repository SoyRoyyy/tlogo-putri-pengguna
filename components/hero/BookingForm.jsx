import React, { useEffect } from "react";
import Link from "next/link";

const FormPemesanan = ({
  formData,
  handleChange,
  handleSubmit,
  isLoading,
  submitting,
}) => {
  useEffect(() => {
    const today = new Date();
    const defaultTime = today.toTimeString().slice(0, 5); // HH:MM
    const defaultDate = today.toISOString().split("T")[0]; // YYYY-MM-DD

    if (!formData.start_time) {
      handleChange({ target: { name: "start_time", value: defaultTime } });
    }

    if (!formData.tour_date) {
      handleChange({ target: { name: "tour_date", value: defaultDate } });
    }
  }, []);

  return (
    <section className="px-4 sm:px-6 lg:px-8 py-10 bg-white min-h-screen">
      {/* Tombol Kembali */}
      <div className="mb-4">
        <Link href="/pemesanan">
          <div className="flex items-center text-black hover:underline hover:text-[#3D6CB9] transition duration-200 cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
            <span>Kembali ke Katalog Jeep</span>
          </div>
        </Link>
      </div>

      {/* Form Container */}
      <div
        className={`max-w-4xl mx-auto p-6 rounded-xl shadow-md transition ${
          isLoading ? "animate-pulse bg-gray-100" : "bg-gray-50"
        }`}
      >
        <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
          Form Pemesanan
        </h2>

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          {/* Paket Wisata */}
          <div className="md:col-span-2">
            <InputField
              label="Paket Wisata"
              name="paket"
              value={formData.paket}
              readOnly
            />
          </div>

          {/* Nama */}
          <InputField
            label="Nama Lengkap"
            name="customer_name"
            value={formData.customer_name}
            onChange={handleChange}
            required
            placeholder="Contoh: John Tor"
          />

          {/* Email */}
          <InputField
            label="Email"
            name="customer_email"
            type="email"
            value={formData.customer_email}
            onChange={handleChange}
            required
            placeholder="Contoh: customer1@example.com"
          />

          {/* Telepon */}
          <InputField
            label="No. Telepon"
            name="customer_phone"
            type="tel"
            value={formData.customer_phone}
            onChange={(e) => {
              const value = e.target.value;
              if (/^\d*$/.test(value)) {
                handleChange(e);
              }
            }}
            required
            maxLength={15}
            pattern="[0-9]{10,15}"
            placeholder="Contoh: 081234567890"
          />

          {/* Waktu Tour */}
          <InputField
            label="Waktu Tour"
            name="start_time"
            type="time"
            value={formData.start_time}
            onChange={handleChange}
            required
          />

          {/* Tanggal Pemesanan */}
          <InputField
            label="Tanggal Pemesanan"
            name="tour_date"
            type="date"
            value={formData.tour_date}
            onChange={handleChange}
            required
          />

          {/* Jumlah Armada */}
          <div className="md:col-span-2">
            <InputField
              label="Jumlah Armada"
              name="qty"
              type="number"
              min="1"
              value={formData.qty}
              onChange={handleChange}
              required
            />
          </div>

          {/* Kode Refferal */}
          <InputField
            label="Kode Refferal"
            name="refferal"
            value={formData.refferal}
            onChange={handleChange}
            placeholder="*Opsional"
          />

          {/* Kode Voucher */}
          <InputField
            label="Kode Voucher"
            name="voucher"
            value={formData.voucher}
            onChange={handleChange}
            placeholder="*Opsional"
          />

          {/* Tombol Submit */}
          <div className="md:col-span-2">
            <button
              type="submit"
              disabled={submitting}
              className={`w-full py-3 rounded-lg text-white font-semibold transition
                ${
                  submitting
                    ? "bg-[#3D6CB9] animate-pulse cursor-not-allowed"
                    : "bg-[#3D6CB9] hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
                }
              `}
            >
              {submitting ? "Mengirim..." : "Kirim Pemesanan"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

const InputField = ({
  label,
  name,
  type = "text",
  value,
  onChange,
  required = false,
  placeholder = "",
  readOnly = false,
  ...rest
}) => (
  <div className="flex flex-col">
    <label htmlFor={name} className="text-sm font-medium text-black mb-1">
      {label}
    </label>
    <input
      id={name}
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      required={required}
      placeholder={placeholder}
      readOnly={readOnly}
      className={`w-full px-3 py-2 border text-black text-sm border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
        readOnly ? "bg-gray-100 cursor-not-allowed" : ""
      }`}
      {...rest}
    />
  </div>
);

export default FormPemesanan;
