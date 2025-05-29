import Image from "next/image";

const PaketForms = ({ currentStep }) => {
  const steps = [
    { step: 1, label: "Pesan" },
    { step: 2, label: "Review" },
    { step: 3, label: "Bayar" },
    { step: 4, label: "E-Tiket" },
  ];

  return (
    <header className="flex justify-between items-center px-6 py-4 shadow-md sticky top-0 bg-white z-50">
      <div className="flex items-center space-x-3 pl-1 md:pl-0">
        <Image
          src="/images/image.png"
          alt="Logo"
          width={70}
          height={70}
          className="block"
        />
        <span className="font-semibold text-xl text-black tracking-wide whitespace-nowrap">
          Tlogo Putri Kaliurang
        </span>
      </div>
      <div className="flex space-x-3 px-4 font-semibold gap-3 pt-2 text-sm sm:text-base">
        {steps.map((item, idx) => (
          <div key={item.step} className="flex items-center whitespace-nowrap">
            <div
              className={`w-6 h-6 rounded-full flex items-center justify-center font-bold text-sm ${
                item.step === currentStep
                  ? "bg-[#3D6CB9] text-white"
                  : "bg-gray-300 text-gray-700"
              }`}
            >
              {item.step}
            </div>
            <span className="ml-2 mr-4 font-medium text-gray-800">
              {item.label}
            </span>
            {idx !== steps.length - 1 && (
              <span className="text-gray-400">—</span>
            )}
          </div>
        ))}
      </div>
    </header>
  );
};

export default PaketForms;
