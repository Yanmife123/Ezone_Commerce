const SkeletonCard = () => {
  return (
    <div className="sm:w-[270px] sm:min-w-[270px] w-full h-full flex justify-center items-center gap-4 product">
      <div className="sm:w-full w-[70%] max-w-[260px] h-[250px] bg-smoke rounded-[8px] relative animate-pulse flex flex-col items-center justify-center px-4 py-6">
        <div className="w-[80%] h-[140px] bg-gray-300 rounded mb-4"></div>
        <div className="w-[60%] h-4 bg-gray-300 rounded mb-2"></div>
        <div className="w-[40%] h-4 bg-gray-300 rounded"></div>
      </div>
    </div>
  );
};

export default SkeletonCard;
