const LoadingSingleSkeleton = () => {
  return (
    <div className="m-3 animate-pulse">
      <h1 className="mb-3 bg-gray-200 rounded-md w-full h-8"></h1>
      <div className="grid w-full">
        {Array.from({ length: 1 }).map((_, index) => (
          <div
            key={index}
            className="bg-white rounded-md shadow-md flex flex-col animate-pulse"
          >
            <div className="flex-1 border-red-100">
              <div className="w-full h-48 bg-gray-200 rounded-t-md"></div>
            </div>
            <div className="px-2 py-4">
              <div className="bg-gray-200 rounde -md h-6 mb-2 w-3/4"></div>
              <div className="bg-gray-200 rounded-md h-4 mb-2 w-1/2"></div>
            </div>
          </div>
        ))}{" "}
      </div>
    </div>
  );
};
export default LoadingSingleSkeleton;
