import Link from "next/link";

export default function BackToFormLink({ token }) {
  return (
    <div className="w-full pl-2 sm:pr-120 mb-4">
      <div className="max-w-md mx-auto">
        <Link
          href={`/pemesanan/form?token=${encodeURIComponent(token)}`}
          className="flex items-center text-lg sm:text-lg text-gray-700 hover:text-blue-900 hover:underline transition"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 mr-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 19l-7-7 7-7"
            />
          </svg>
          <span>Kembali ke form</span>
        </Link>
      </div>
    </div>
  );
}
