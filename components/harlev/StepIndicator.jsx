export default function StepIndicator() {
  const steps = ['Pesan', 'Review', 'Bayar', 'E-Tiket'];
  
  return (
    <div className="flex items-center justify-center flex-wrap gap-3 pt-2 text-sm sm:text-base overflow-x-auto">
      {steps.map((label, idx) => (
        <div key={label} className="flex items-center whitespace-nowrap">
          <div
            className={`w-6 h-6 rounded-full flex items-center justify-center font-bold text-sm ${
              idx === 1 ? 'bg-[#3D6CB9] text-white' : 'bg-gray-300 text-gray-700'
            }`}
          >
            {idx + 1}
          </div>
          <span className="ml-2 mr-4 font-medium text-gray-800">{label}</span>
          {idx !== steps.length - 1 && <span className="text-gray-400">—</span>}
        </div>
      ))}
    </div>
  );
}
