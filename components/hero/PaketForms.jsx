import Image from "next/image";
import Link from "next/link";

const PaketForms = ({ currentStep }) => {
  const steps = [
    { step: 1, label: "Pesan" },
    { step: 2, label: "Review" },
    { step: 3, label: "Bayar" },
    { step: 4, label: "E-Tiket" },
  ];

  return (
    <header className="w-full shadow-md sticky top-0 bg-white z-50">
      <div className="max-w-screen-xl mx-auto flex flex-wrap items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center space-x-3 mb-2 sm:mb-0">
        {/* Gunakan tag <a> hanya jika pakai Next.js <13, tapi di App Router, cukup begini */}
          <div className="flex items-center space-x-3">
            <Image
              src="/images/image.png"
              alt="Logo"
              width={60}
              height={60}
              className="block"
            />
            <span className="font-semibold text-lg sm:text-xl text-black tracking-wide">
              Tlogo Putri Kaliurang
            </span>
          </div>
        </Link>

        {/* Langkah Pemesanan */}
        <div className="flex flex-wrap items-center space-x-2 gap-y-2 text-sm sm:text-base font-semibold justify-center sm:justify-end">
          {steps.map((item, idx) => (
            <div
              key={item.step}
              className="flex items-center whitespace-nowrap"
            >
              <div
                className={`w-6 h-6 sm:w-7 sm:h-7 rounded-full flex items-center justify-center font-bold text-sm ${
                  item.step === currentStep
                    ? "bg-[#3D6CB9] text-white"
                    : "bg-gray-300 text-gray-700"
                }`}
              >
                {item.step}
              </div>
              <span className="ml-2 mr-3 font-medium text-gray-800 hidden sm:inline">
                {item.label}
              </span>
              {idx !== steps.length - 1 && (
                <span className="text-gray-400">—</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </header>
  );
};

export default PaketForms;
