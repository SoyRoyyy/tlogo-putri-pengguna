import { FiArrowLeftCircle } from "react-icons/fi";
import { useRouter } from "next/navigation";

const ArtikelHeader = ({ title }) => {
  const router = useRouter();
  return (
    <div className="flex items-center justify-between mb-4">
      <button onClick={() => router.back()}>
        <FiArrowLeftCircle className="text-4xl text-black-500 hover:text-blue-700 transition cursor-pointer" />
      </button>
      <h1 className="text-2xl font-bold mt-2 flex-grow text-center">
        {title.replace(/"/g, "")}
      </h1>
      <div className="w-[40px] h-1"></div>
    </div>
  );
};

export default ArtikelHeader;
