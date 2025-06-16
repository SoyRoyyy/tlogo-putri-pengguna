const LoadingOrError = ({ loading, error, article }) => {
  if (loading) return <p className="p-4">Memuat artikel...</p>;
  if (error) return <p className="p-4 text-red-600">Error: {error}</p>;
  if (!article)
    return <p className="p-4 text-gray-600">Artikel tidak ditemukan</p>;
  return null;
};

export default LoadingOrError;
