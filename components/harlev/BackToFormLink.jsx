import Link from 'next/link';

export default function BackToFormLink({ token }) {
  return (
    <div className="px-4 pt-4 flex -mb-8">
      <Link href={`/pemesanan/form?token=${encodeURIComponent(token)}`}>
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
  );
}
