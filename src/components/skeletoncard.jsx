const SkeletonCard = () => {
  return (
    <div className="sm:w-[270px] sm:min-w-[270px] w-full h-full flex justify-center items-center">
      <div className="w-full max-w-[260px] h-[250px] bg-smoke rounded-xl shadow-md animate-pulse flex flex-col items-center justify-start p-4 gap-4">
        {/* Image Placeholder */}
        <div className="w-full h-[130px] bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300 rounded-lg" />

        {/* Title Placeholder */}
        <div className="w-[70%] h-4 bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300 rounded-md" />

        {/* Price/Label Placeholder */}
        <div className="w-[50%] h-4 bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300 rounded-md" />
      </div>
    </div>
  );
};

export default SkeletonCard;
