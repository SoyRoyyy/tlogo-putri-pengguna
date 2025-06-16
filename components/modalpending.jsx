"use client";
import { data } from "autoprefixer";
import { motion, AnimatePresence } from "framer-motion";

export default function ModalPending({ show, onClose, booking  }) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 bg-amber-100 bg-opacity-50 flex items-center justify-center z-50"
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
              type: "spring",
              stiffness: 500,
              damping: 20,
            }}
          >
            {/* Header dengan ikon jam analog */}
            <div className="bg-gradient-to-r from-amber-200 to-amber-300 py-6 flex justify-center">
              <motion.div
                className="relative w-20 h-20 rounded-full bg-white flex items-center justify-center shadow-md"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              >
                {/* Jarum panjang (menit) */}
                <motion.div
                  className="absolute w-0.5 h-8 bg-slate-900 origin-bottom"
                  style={{ bottom: "50%" }}
                  animate={{ rotate: 360 }}
                  transition={{
                    repeat: Infinity,
                    duration: 60, // 1 menit rotasi penuh
                    ease: "linear",
                  }}
                />

                {/* Jarum pendek (jam) */}
                <motion.div
                  className="absolute w-0.5 h-5 bg-slate-900 origin-bottom"
                  style={{ bottom: "50%" }}
                  animate={{ rotate: 360 }}
                  transition={{
                    repeat: Infinity,
                    duration: 720, // 12 jam rotasi penuh
                    ease: "linear",
                  }}
                />
              </motion.div>
            </div>

            {/* Konten */}
            <div className="p-8">
              <p className="text-black font-mono mb-4">#{booking.order_id}</p>
              <h2 className="text-xl text-black font-semibold mb-2">
                Status: Tertunda
              </h2>
              <p className="text-black mb-3">
               Pembayaran kamu sedang diproses...
              </p>
              <p className="text-black mb-6">
               Silahkan hubungi admin
              </p>
                <button
                  onClick={onClose}
                  className="bg-amber-200 text-black px-6 py-2 rounded-full hover:bg-amber-300 transition"
                >
                  Tutup
                </button>
              </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
