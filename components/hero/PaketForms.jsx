import Image from "next/image";

const PaketForms = ({ currentStep }) => {
  const steps = [
    { step: 1, label: "Pesan" },
    { step: 2, label: "Review" },
    { step: 3, label: "Bayar" },
    { step: 4, label: "E-Tiket" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="flex flex-col md:flex-row justify-between items-center px-4 sm:px-6 lg:px-8 py-4 space-y-4 md:space-y-0">
        {/* Logo dan Judul */}
        <div className="flex items-center space-x-3">
          <Image
            src="/images/image.png"
            alt="Logo"
            width={60}
            height={60}
            className="block object-contain"
          />
          <h1 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 tracking-wide">
            Tlogo Putri Kaliurang
          </h1>
        </div>

        {/* Langkah Pemesanan */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-6 items-center">
          {steps.map((item, idx) => (
            <div key={item.step} className="flex items-center">
              {/* Bulatan Langkah */}
              <div
                className={`w-7 h-7 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300 ${
                  item.step === currentStep
                    ? "bg-[#3D6CB9] text-white shadow-md scale-110"
                    : "bg-gray-300 text-gray-700"
                }`}
              >
                {item.step}
              </div>

              {/* Label Langkah */}
              <span className="ml-2 mr-4 text-sm sm:text-base text-gray-800 font-medium transition-all duration-300">
                {item.label}
              </span>

              {/* Garis Pemisah */}
              {idx !== steps.length - 1 && (
                <span className="hidden sm:inline text-gray-400 text-xl">
                  —
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </header>
  );
};

export default PaketForms;
