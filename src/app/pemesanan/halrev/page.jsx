'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Dialog } from '@headlessui/react';
import { useRouter } from 'next/navigation';


export default function ReviewPage() {
 const [data, setData] = useState(null);
 const [isModalOpen, setIsModalOpen] = useState(false);
 const [paymentType, setPaymentType] = useState(null);

 const router = useRouter();

useEffect(() => {
  if (isModalOpen) {
    const stored = localStorage.getItem('payment_type');
    setPaymentType(stored); // 'dp' atau 'full'
  }
}, [isModalOpen]);

 useEffect(() => {
   const stored = localStorage.getItem('formPemesanan');
   if (stored) {
     setData(JSON.parse(stored));
   }
 }, []);

// ini pakai snap midtrans pop up
const handleBayar = async (mode) => {

  // const callbacks = {
  //   onSuccess: (result) => {
  //     console.log('Pembayaran berhasil', result);
  //     // Redirect atau kasih notifikasi
  //     setTimeout(() => {
  //         // window.location.href = `/pemesanan/sukses?booking_id=${bookingId}`;
  //         window.location.href = `/`;
  //     }, 1000);
  //   },
  //   onPending: (result) => {
  //     console.log('Menunggu pembayaran', result);
  //     setTimeout(() => {
  //         // window.location.href = `/pemesanan/sukses?booking_id=${bookingId}`;
  //         window.location.href = `/`;
  //       }, 1000);
  //   },
  //   onError: (result) => {
  //     console.error('Terjadi kesalahan pembayaran', result);
  //     setTimeout(() => {
  //         // window.location.href = `/pemesanan/sukses?booking_id=${bookingId}`;
  //         window.location.href = `/`;
  //       }, 1000);
  //   },
  //   onClose: () => {
  //     console.log('Popup ditutup tanpa menyelesaikan pembayaran');
  //   },
  // };

  const stored = localStorage.getItem('formPemesanan');
  if (!stored) return alert('Data pembayaran tidak ditemukan');

  const parsed = JSON.parse(stored);
  delete parsed.paket;
  parsed.payment_type = mode; 
  parsed.qty = Number(parsed.qty);
  // delete parsed.refferal;
  // delete parsed.voucher;
  console.log('Data yang dikirim ke backend:', parsed);

  const existingOrderId = localStorage.getItem('order_id');
  const existingSnapToken = localStorage.getItem('snap_token');
  const existingPaymentType = localStorage.getItem('payment_type');

  if (existingSnapToken && existingOrderId) {
    return window.snap.pay(existingSnapToken, { 

      onSuccess: function(result) {
        console.log('Pembayaran berhasil:', result);
                  localStorage.removeItem('formPemesanan');
          localStorage.removeItem('payment_type');
          localStorage.removeItem('snap_token');
          localStorage.removeItem('order_id');
        setTimeout(() => {
          // window.location.href = `/pemesanan/sukses?booking_id=${bookingId}`;
          window.location.href = `/`;
        }, 1000);
      },
      onPending: function(result) {
        console.log('Menunggu pembayaran:', result);
        setTimeout(() => {
          // window.location.href = `/pemesanan/sukses?booking_id=${bookingId}`;
          window.location.href = `/`;
        }, 1000);
      },
      onError: function(result) {
        console.log('Terjadi kesalahan:', result);
        setTimeout(() => {
          // window.location.href = `/pemesanan/sukses?booking_id=${bookingId}`;
          window.location.href = `/`;
        }, 1000);
      },
      onClose: function () {
        console.log('User menutup popup pembayaran Midtrans');

        // Simpan payment_type yang sedang digunakan (sudah disimpan sebelumnya, ini hanya memastikan)
        const savedType = localStorage.getItem('payment_type');
        if (savedType) {
          setPaymentType(savedType); // update state di React
        }
      },
     });
  }


  try {
    const response = await fetch('http://localhost:8000/api/bookings', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(parsed),
    });

    // if (!response.ok) throw new Error('Gagal membuat booking');

    const result = await response.json();

    // Simpan booking_id dan payment_type
    localStorage.setItem('payment_type', result.order.payment_type);
    localStorage.setItem('snap_token', result.snap_token);
    localStorage.setItem('order_id', result.order.order_id);


    if (!window.snap || !window.snap.pay) {
      throw new Error('Midtrans belum dimuat');
    }

    window.snap.pay(result.snap_token, {
      onSuccess: function(result) {
        console.log('Pembayaran berhasil:', result);
          localStorage.removeItem('formPemesanan');
          localStorage.removeItem('payment_type');
          localStorage.removeItem('snap_token');
          localStorage.removeItem('order_id');
        setTimeout(() => {
          // window.location.href = `/pemesanan/sukses?booking_id=${bookingId}`;
          window.location.href = `/`;
        }, 1000);
      },
      onPending: function(result) {
        console.log('Menunggu pembayaran:', result);
        setTimeout(() => {
          // window.location.href = `/pemesanan/sukses?booking_id=${bookingId}`;
          window.location.href = `/`;
        }, 1000);
      },
      onError: function(result) {
        console.log('Terjadi kesalahan:', result);
        setTimeout(() => {
          // window.location.href = `/pemesanan/sukses?booking_id=${bookingId}`;
          window.location.href = `/`;
        }, 1000);
      },
      onClose: function () {
        console.log('User menutup popup pembayaran Midtrans');

        // Simpan payment_type yang sedang digunakan (sudah disimpan sebelumnya, ini hanya memastikan)
        const savedType = localStorage.getItem('payment_type');
        if (savedType) {
          setPaymentType(savedType); // update state di React
        }
      },
      
    });

  } catch (err) {
    console.error(err);
    alert('Terjadi kesalahan saat membuat pesanan.');
  }
};

const handleCancel = async () => {
  const orderId = localStorage.getItem('order_id');
  if (orderId) {
    await fetch(`http://localhost:8000/api/bookings/${orderId}`, {
      method: 'DELETE',
    });
  }

  localStorage.removeItem('payment_type');
  localStorage.removeItem('snap_token');
  localStorage.removeItem('order_id');
  setPaymentType(null);
  setIsModalOpen(false);
};


// Jika mau langsung redirect ke midtrans
// const handleBayar = async (mode) => {
//   const stored = localStorage.getItem('formPemesanan');
//   if (!stored) return alert('Data pembayaran tidak ditemukan');

//   const parsed = JSON.parse(stored);
//   delete parsed.paket;
//   parsed.payment_type = mode;
//   parsed.qty = Number(parsed.qty);
//   // delete parsed.refferal;
//   // delete parsed.voucher;

//   console.log('Data yang dikirim ke backend:', parsed);

//   try {
//     const response = await fetch('http://localhost:8000/api/bookings', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify(parsed),
//     });

//     if (!response.ok) throw new Error('Gagal membuat booking');

//     const result = await response.json(); 

//     console.log('Redirect ke Midtrans:', result.redirect_url);

//     // Langsung redirect ke Midtrans
//     window.location.href = result.redirect_url;

//   } catch (err) {
//     console.error(err);
//     alert('Terjadi kesalahan saat membuat pesanan.');
//   }
// };

 if (!data) {
   return (
     <div className="min-h-screen flex items-center justify-center">
       <p>Memuat data...</p>
     </div>
   );
 }

 return (
   <main className="bg-white text-gray-800 font-sans min-h-screen">
     {/* Header tetap sama */}
     <header className="flex justify-between items-center px-4 sm:px-6 py-4 shadow-md sticky top-0 bg-white z-50">
       <div className="flex items-center space-x-3">
         <Image src="/images/image.png" alt="Logo" width={40} height={40} />
         <span className="font-bold text-xl text-black">Tlogo Putri</span>
       </div>
       <div className="flex items-center justify-center flex-wrap gap-3 pt-2 text-sm sm:text-base overflow-x-auto">
         {[1, 2, 3, 4].map((step, idx) => (
           <div key={step} className="flex items-center whitespace-nowrap">
             <div
               className={`w-6 h-6 rounded-full flex items-center justify-center font-bold text-sm ${
                 step === 2 ? 'bg-[#3D6CB9] text-white' : 'bg-gray-300 text-gray-700'
               }`}
             >
               {step}
             </div>
             <span className="ml-2 mr-4 font-medium text-gray-800">
               {['Pesan', 'Review', 'Bayar', 'E-Tiket'][idx]}
             </span>
             {idx !== 3 && <span className="text-gray-400">—</span>}
           </div>
         ))}
       </div>
     </header>

     <section className="px-4 sm:px-6 py-10 max-w-7xl mx-auto">
       {/* Link kembali tetap sama */}
       <div className="px-4 pt-4 flex -mb-8">
         <Link href="/pemesanan/form/">
           <div className="flex items-left text-black hover:underline hover:text-[#3D6CB9] transition duration-200">
             <svg
               xmlns="http://www.w3.org/2000/svg"
               className="h-5 w-5 mr-1"
               fill="none"
               viewBox="0 0 24 24"
               stroke="currentColor"
               strokeWidth={2}
             >
               <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
             </svg>
             <span>Kembali ke form</span>
           </div>
         </Link>
       </div>
       {/* Judul review tetap sama */}
       <h2 className="text-2xl mb-10 font-bold text-center">Review Pemesanan Anda</h2>
       {/* Detail pemesanan tetap sama */}
       <div className="space-y-4 text-sm text-gray-700 max-w-2xl mx-auto bg-gray-50 p-6 rounded-xl shadow-md">
         <ReviewItem label="Paket Wisata" value={data.paket} />
         <ReviewItem label="Harga Paket" value={new Intl.NumberFormat('id-ID').format(data.gross_amount * data.qty)} />
         <ReviewItem label="Nama Lengkap" value={data.customer_name} />
         <ReviewItem label="Email" value={data.customer_email} />
         <ReviewItem label="No. Telepon" value={data.customer_phone} />
         <ReviewItem label="Waktu Tour" value={data.start_time} />
         <ReviewItem label="Tanggal Pemesanan" value={data.tour_date} />
         <ReviewItem label="Jumlah Armada" value={data.qty} />
         <ReviewItem label="Kode Refferal" value={data.refferal} />
         <ReviewItem label="Kode Voucher" value={data.voucher} />

         <div className="mt-8 flex justify-end">
           <button
             onClick={() => setIsModalOpen(true)}
             className="bg-[#3D6CB9] text-white px-4 py-2 rounded-md hover:bg-blue-700 transition cursor-pointer"
           >
             Lanjut ke Pembayaran
           </button>
         </div>
       </div>
     </section>

     {/* MODAL YANG DIUBAH */}
     <Dialog open={isModalOpen} onClose={() => setIsModalOpen(false)} className="relative z-50">
       <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center p-4">
         <Dialog.Panel className="bg-white rounded-xl shadow-lg w-full max-w-md">
           <div className="bg-[#3D6CB9] text-white py-3 px-6 rounded-t-xl">
             <Dialog.Title className="text-lg font-semibold text-center">RINCIAN PEMBAYARAN</Dialog.Title>
           </div>
           <div className="p-6">
             <p className="text-center text-gray-700 text-lg font-semibold">
               Total Pembayaran Anda:
             </p>
             <p className="text-center text-2xl font-bold text-[#3D6CB9] mt-1 mb-2">
               Rp. {new Intl.NumberFormat('id-ID').format(data.gross_amount * data.qty)}
             </p>
             <p className="text-center text-gray-500 text-sm mb-4">
               (Termasuk Pajak dan Biaya Layanan)
             </p>
             <p className="text-center text-gray-700 font-medium mb-4">
               Pilih Tahapan Pembayaran
             </p>
             <div className="flex justify-center space-x-4">
               {/* <button
                 onClick={() => handleBayar('dp')}
                 className="bg-[#3D6CB9] hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold cursor-pointer"
               >
                 DP (30%)
               </button>
               <button
                 onClick={() => handleBayar('full')}
                 className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold cursor-pointer"
               >
                 Lunas
               </button> */}
               {/* <button
                  onClick={() => handleBayar('dp')}
                  disabled={paymentType && paymentType !== 'dp'}
                  className={`px-6 py-3 rounded-lg font-semibold cursor-pointer ${
                    paymentType && paymentType !== 'dp'
                      ? 'bg-gray-300 text-gray-600 cursor-not-allowed'
                      : 'bg-[#3D6CB9] hover:bg-blue-700 text-white'
                  }`}
                >
                  DP (30%)
                </button>
                <button
                  onClick={() => handleBayar('full')}
                  disabled={paymentType && paymentType !== 'full'}
                  className={`px-6 py-3 rounded-lg font-semibold cursor-pointer ${
                    paymentType && paymentType !== 'full'
                      ? 'bg-gray-300 text-gray-600 cursor-not-allowed'
                      : 'bg-green-600 hover:bg-green-700 text-white'
                  }`}
                >
                  Lunas
                </button> */}
             </div>
             <button
              onClick={() => {
                handleCancel();
                localStorage.removeItem('payment_type');
                localStorage.removeItem('snap_token');
                localStorage.removeItem('order_id');
                setPaymentType(null); // Reset ke semula
                setIsModalOpen(false);
              }}
              //  onClick={() => setIsModalOpen(false)}
               className="mt-6 text-sm text-gray-500 hover:underline w-full text-center block"
             >
               Batal
             </button>
             {/* {paymentType && (
              <button
                onClick={() => {
                  localStorage.removeItem('payment_type');
                  localStorage.removeItem('snap_token');
                  localStorage.removeItem('order_id');
                  setPaymentType(null);
                }}
                className="mt-2 text-sm text-red-500 hover:underline w-full text-center block"
              >
                Ubah Metode Pembayaran
              </button>
            )} */}

           </div>
         </Dialog.Panel>
       </div>
     </Dialog>
   </main>
 );
}

function ReviewItem({ label, value }) {
  return (
    <div className="border-b pb-2">
      <strong>{label}:</strong>{' '}
      <span className="ml-2">
        {label === 'Harga Paket' ? `Rp. ${value}` : value || '-'}
      </span>
    </div>
  );
}


      // onSuccess: (res) => {
      //   console.log('Pembayaran sukses:', res);
      //   // Redirect ke halaman sukses
      //   // window.location.href = `/pemesanan/sukses?booking_id=${result.booking_id}`;
      //   window.location.href = '/';
      // },
      // onPending: (res) => {
      //   console.log('Menunggu pembayaran:', res);
      //   // Optional: redirect atau tampilkan notifikasi
      //   window.location.href = `/pemesanan/menunggu?booking_id=${result.booking_id}`;
      // },
      // onError: (err) => {
      //   console.error('Terjadi kesalahan pembayaran:', err);
      //   alert('Terjadi kesalahan saat proses pembayaran.');
      // },
      // onClose: () => {
      //   console.log('Popup ditutup user sebelum bayar');
      // }