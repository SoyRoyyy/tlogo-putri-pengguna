// import Image from "next/image";

// export default function Home() {
//   return (
//     <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
//       <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
//         <Image
//           className="dark:invert"
//           src="/next.svg"
//           alt="Next.js logo"
//           width={180}
//           height={38}
//           priority
//         />
//         <ol className="list-inside list-decimal text-sm/6 text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
//           <li className="mb-2 tracking-[-.01em]">
//             Get started by editing{" "}
//             <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-[family-name:var(--font-geist-mono)] font-semibold">
//               src/app/page.js
//             </code>
//             .
//           </li>
//           <li className="tracking-[-.01em]">
//             Save and see your changes instantly.
//           </li>
//         </ol>

//         <div className="flex gap-4 items-center flex-col sm:flex-row">
//           <a
//             className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
//             href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <Image
//               className="dark:invert"
//               src="/vercel.svg"
//               alt="Vercel logomark"
//               width={20}
//               height={20}
//             />
//             Deploy now
//           </a>
//           <a
//             className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
//             href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Read our docs
//           </a>
//         </div>
//       </main>
//       <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
//         <a
//           className="flex items-center gap-2 hover:underline hover:underline-offset-4"
//           href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image
//             aria-hidden
//             src="/file.svg"
//             alt="File icon"
//             width={16}
//             height={16}
//           />
//           Learn
//         </a>
//         <a
//           className="flex items-center gap-2 hover:underline hover:underline-offset-4"
//           href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image
//             aria-hidden
//             src="/window.svg"
//             alt="Window icon"
//             width={16}
//             height={16}
//           />
//           Examples
//         </a>
//         <a
//           className="flex items-center gap-2 hover:underline hover:underline-offset-4"
//           href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image
//             aria-hidden
//             src="/globe.svg"
//             alt="Globe icon"
//             width={16}
//             height={16}
//           />
//           Go to nextjs.org →
//         </a>
//       </footer>
//     </div>
//   );
// }

import Image from 'next/image'

export default function HomePage() {
  return (
    <main className="bg-white text-gray-800">
      {/* Hero Section */}
      <section className="text-center">
        <div className="w-full">
          <Image
            src="/images/TrackAir.jpeg"
            alt="Hero Jeep"
            width={1920}
            height={400}
            className="w-full h-[400px] object-cover"
            priority
          />
        </div>
        <div className="p-4 max-w-2xl mx-auto">
          <h1 className="text-2xl md:text-3xl font-bold mt-6">
            Nikmati Keindahan Alam Tlogo Putri — Liburan yang Tak Terlupakan!
          </h1>
          <p className="mt-4 text-gray-600">
            Rasakan petualangan seru menjelajahi kawasan pegunungan Tlogo Putri...
          </p>
          <div className="mt-6 flex justify-center">
            <button className="bg-blue-600 text-white py-2 px-6 rounded-full flex items-center justify-center gap-2 hover:bg-blue-700">
              🚙 Pesan Sekarang !!
              </button>
          </div>
        </div>
      </section>

      {/* Fasilitas */}
      <section className="px-4 py-10 bg-gray-100">
        <h2 className="text-center text-2xl font-semibold mb-8">FASILITAS KAMI</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {[
            { label: "Tempat Parkir Luas", src: "/images/BatuAlien.jpeg" },
            { label: "Taman", src: "/images/MuseumMini.jpeg" },
            { label: "Toilet", src: "/images/toilet.jpg" },
            { label: "Mushola", src: "/images/mushola.jpg" },
            { label: "Kantin", src: "/images/kantin.jpg" },
            { label: "Sewa Skuter", src: "/images/TrackAir.jpeg" },
          ].map((item, idx) => (
            <div key={idx} className="bg-white rounded shadow p-2 text-center">
              <Image
                src={item.src}
                alt={item.label}
                width={300}
                height={200}
                className="w-full h-32 object-cover rounded"
              />
              <p className="mt-2 text-sm font-medium">{item.label}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
