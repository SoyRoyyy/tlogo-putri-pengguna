"use client";

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import ModalPending from '../../../../components/modalpending';

export default function SuccessPending() {
  const [showPendingModal, setShowPendingModal] = useState(false);
  const [booking, setBooking] = useState(null);


  const router = useRouter();

  useEffect(() => {
    setShowPendingModal(true);  

    const stored = localStorage.getItem('pending_booking');
    if (stored) {
      const parsed = JSON.parse(stored);
      setBooking(parsed);
    }
  }, []);


  return (
    <main className="bg-gray-50 text-gray-900 font-sans min-h-screen w-full">
      {/* Header */}
      <header className="flex flex-wrap justify-between items-center px-4 sm:px-6 py-4 shadow-md sticky top-0 bg-white z-50">
        <div className="flex items-center space-x-3">
          <Image
            src="/images/image.png"
            alt="Logo Tlogo Putri"
            width={36}
            height={36}
          />
          <span className="font-semibold text-lg sm:text-xl text-gray-800">
            Tlogo Putri
          </span>
        </div>
      </header>

      <ModalPending
        booking={booking}
        show={showPendingModal}
        onClose={() => {
          localStorage.clear(); 
          setShowPendingModal(false);
          router.push('/');
        }}
      />
    </main>
  );
}
