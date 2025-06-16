import Image from "next/image";

export default function PopupModal({ images, index, onClose }) {
  return (
    <div className="fixed inset-0 z-50 flex justify-center items-center px-4 backdrop-blur-xs">
      <div className="bg-white rounded-xl shadow-2xl max-w-2xl w-full relative overflow-hidden">
        <div className="relative w-full h-64 group">
          <Image
            src={images[index]}
            alt={`Gambar ${index}`}
            fill
            className="object-cover transition duration-1000 pointer-events-none"
          />
          <button
            className="absolute top-2 right-2 bg-white bg-opacity-80 hover:bg-opacity-100 text-black rounded-full w-8 h-8 flex items-center justify-center z-10"
            onClick={onClose}
            aria-label="Tutup popup"
          >
            ×
          </button>
        </div>

        <div className="p-6">
          <h2 className="text-xl font-bold mb-2">Highlight</h2>
          <ul className="list-disc pl-5 text-gray-700 text-sm space-y-1">
            <li>Lava Tour Merapi menggunakan Jeep untuk 4 penumpang.</li>
            <li>Wisata ke Museum Sisa Hartaku, Batu Alien, dan banyak lagi.</li>
            <li>Pilihan paket lengkap dengan durasi dan rute berbeda.</li>
            <li>Keberangkatan dari Sleman, Yogyakarta.</li>
            <li>Fasilitas lengkap: Jeep, pengemudi, dan biaya BBM.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
