const ReviewItem = ({ label, value }) => (
  <div className="flex flex-col sm:flex-row justify-between items-start text-sm sm:text-base py-2 border-b last:border-b-0 border-gray-100">
    <span className="text-gray-600 sm:w-1/2 font-medium">{label}</span>
    <span className="text-gray-900 sm:text-right sm:w-1/2 mt-1 sm:mt-0 break-words">
      {value}
    </span>
  </div>
);

export default ReviewItem;
