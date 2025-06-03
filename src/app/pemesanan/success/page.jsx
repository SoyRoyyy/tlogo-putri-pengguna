"use client";

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import ModalSukses from '../../../../components/modalsucces';

export default function SuccessPayment() {
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setShowSuccessModal(true);
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

      <ModalSukses
        show={showSuccessModal}
        onClose={() => {
          setShowSuccessModal(false);
          router.push('/');
        }}
      />
    </main>
  );
}
