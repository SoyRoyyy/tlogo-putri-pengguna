import { Dialog } from '@headlessui/react';

export default function PaymentModal({
  isOpen,
  onClose,
  onConfirmDP,
  onConfirmFull,
  onCancel,
  amount,
  paymentType
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
              Rp {new Intl.NumberFormat('id-ID').format(amount)}
            </p>
            <div className="mt-8 mb-5 flex justify-evenly">
              <button
                onClick={onConfirmDP}
                disabled={paymentType && paymentType !== 'dp'}
                className={`px-4 py-2 rounded-md font-semibold transition cursor-pointer ${
                  paymentType && paymentType !== 'dp'
                    ? 'bg-gray-300 text-gray-600 cursor-not-allowed'
                    : 'bg-yellow-400 text-black hover:bg-yellow-500'
                }`}
              >
                Bayar DP 50%
              </button>
              
              <button
                onClick={onConfirmFull}
                disabled={paymentType && paymentType !== 'full'}
                className={`px-4 py-2 rounded-md font-semibold transition cursor-pointer ${
                  paymentType && paymentType !== 'full'
                    ? 'bg-gray-300 text-gray-600 cursor-not-allowed'
                    : 'bg-green-600 text-white hover:bg-green-700'
                }`}
              >
                Bayar Penuh
              </button>
            </div>
            <div className="flex justify-center">
              {paymentType ? (
                <button
                  onClick={onCancel}
                  className="bg-[#3D6CB9] mt-2 text-sm  text-white px-4 py-2 rounded-md hover:bg-blue-500 transition cursor-pointer"
                >
                  Ganti Metode
                </button>
              ) : (
                <button
                  onClick={onCancel}
                  className=" mt-2 text-sm text-slate-600 px-4 py-2 rounded-md transition cursor-pointer hover:text-slate-950"
                >
                  Kembali
                </button>
              )}
            </div>
          </div>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
}
