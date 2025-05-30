import { Dialog } from '@headlessui/react';

export default function PaymentModal({
  isOpen,
  onClose,
  onConfirmDP,
  onConfirmFull,
  onCancel,
  amount,
}) {
  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-50">
      <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center p-4">
        <Dialog.Panel className="bg-white rounded-xl shadow-lg w-full max-w-md">
          <div className="bg-[#3D6CB9] text-white py-3 px-6 rounded-t-xl">
            <Dialog.Title className="text-lg font-semibold text-center">RINCIAN PEMBAYARAN</Dialog.Title>
          </div>
          <div className="p-6">
            <p className="text-center text-gray-700 text-lg font-semibold">Total Pembayaran Anda:</p>
            <p className="text-center text-2xl font-bold text-[#3D6CB9] mt-2">
              Rp{new Intl.NumberFormat('id-ID').format(amount)}
            </p>
            <div className="mt-6 flex flex-col space-y-3">
              <button
                onClick={onConfirmDP}
                className="bg-yellow-400 text-black px-4 py-2 rounded-md hover:bg-yellow-500 transition"
              >
                Bayar DP 50%
              </button>
              <button
                onClick={onConfirmFull}
                className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition"
              >
                Bayar Penuh
              </button>
              <button
                onClick={onCancel}
                className="mt-2 text-sm text-red-500 underline hover:text-red-700 transition"
              >
                Batalkan
              </button>
            </div>
          </div>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
}
