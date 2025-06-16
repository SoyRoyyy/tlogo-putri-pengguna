import ReviewItem from "./ReviewItem";

const ReviewSummary = ({ data, total, onBayarClick }) => (
  <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-4 sm:p-5 space-y-4 max-w-md mx-auto w-full">
    <div className="divide-y divide-gray-100">
      <ReviewItem label="Paket Wisata" value={data.paket} />
      <ReviewItem
        label="Harga Total"
        value={`Rp${new Intl.NumberFormat("id-ID").format(total)}`}
      />
      <ReviewItem label="Nama Lengkap" value={data.customer_name} />
      <ReviewItem label="Email" value={data.customer_email} />
      <ReviewItem label="No. Telepon" value={data.customer_phone} />
      <ReviewItem label="Waktu Tour" value={data.start_time} />
      <ReviewItem label="Tanggal Pemesanan" value={data.tour_date} />
      <ReviewItem label="Jumlah Armada" value={data.qty} />
      <ReviewItem label="Kode Refferal" value={data.refferal || "-"} />
      <ReviewItem label="Kode Voucher" value={data.voucher || "-"} />
    </div>

    <div className="pt-4 flex justify-end">
      <button
        onClick={onBayarClick}
        className="bg-blue-700 hover:bg-blue-800 text-white text-sm font-medium px-5 py-2 rounded-md transition duration-200 shadow"
      >
        Lanjut ke Pembayaran
      </button>
    </div>
  </div>
);

export default ReviewSummary;
