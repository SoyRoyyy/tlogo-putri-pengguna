'use client'
import { useRouter } from 'next/navigation'
import { ArrowLeft } from 'lucide-react'
import Image from 'next/image'

export default function PembayaranPage() {
  const router = useRouter()

  const sections = [
    {
      title: 'Credit/Debit Card',
      logos: ['visa', 'mastercard', 'amex', 'jcb'],
    },
    {
      title: 'Bank Transfer',
      logos: ['bca', 'mandiri', 'bni', 'bri', 'bjb', 'cimb', 'mega'],
    },
    {
      title: 'E-Wallet',
      logos: ['paypal', 'ovo', 'dana', 'linkaja', 'shopeepay', 'applepay', 'flip'],
    },
    {
      title: 'QRIS',
      logos: ['qris'],
    },
  ]

  return (
    <div className="p-6">
      <div className="flex items-center mb-6">
        <button onClick={() => router.back()}>
          <ArrowLeft className="w-6 h-6 mr-4" />
        </button>
        <div className="text-xl font-semibold flex items-center">
          <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3">3</span>
          Pilih Metode Pembayaran
        </div>
        <div className="ml-auto font-semibold">Total : Rp. 2.000.000</div>
      </div>

      {sections.map((section, index) => (
        <div key={index} className="mb-6">
          <h3 className="font-semibold text-lg mb-3">{section.title}</h3>
          <div className="flex flex-wrap gap-4 items-center">
            {section.logos.map((logo, i) => (
              <Image
                key={i}
                src={`/assets/logo-pembayaran/${logo}.png`}
                alt={logo}
                width={60}
                height={40}
                className="object-contain h-10"
              />
            ))}
          </div>
          <hr className="my-4" />
        </div>
      ))}
    </div>
  )
}
