'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircleIcon } from '@heroicons/react/24/solid';

export default function ModalSukses({ show, onClose }) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 bg-opacity-50 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-white w-[90%] max-w-md text-center shadow-lg rounded-2xl overflow-hidden"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1.1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{
              type: 'spring',
              stiffness: 500,
              damping: 20,
            }}
          >
            {/* Header dengan ikon ceklis */}
            <div className="bg-gradient-to-r from-blue-400 to-blue-600 py-4 flex justify-center">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  repeatType: 'reverse',
                }}
              >
                <CheckCircleIcon className="h-25 w-25 text-green-500 drop-shadow-[0_0_10px_rgba(34,197,94,0.8)]" />
              </motion.div>
            </div>

            {/* Konten */}
            <div className="p-8">
              <h2 className="text-xl text-black text-shadow-gray-600 font-semibold mb-2">Transaksi Berhasil!</h2>
              <p className="text-black font-regular mb-6">
                Selamat, pembayaran Anda telah terverifikasi.
              </p>
              <button
                onClick={onClose}
                className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition"
              >
                OK
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
