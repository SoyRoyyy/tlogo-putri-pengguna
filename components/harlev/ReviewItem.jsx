export default function ReviewItem({ label, value }) {
  return (
    <div className="flex justify-between">
      <span className="font-medium">{label}</span>
      <span>{value || '-'}</span>
    </div>
  );
}
