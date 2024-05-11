const LoadingNews = () => {
  return (
    <div className="m-3 animate-pulse">
      <h1 className="mb-3 bg-green-200 rounded-md w-32 h-8"></h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {Array.from({ length: 8 }).map((_, index) => (
          <div
            key={index}
            className="bg-white rounded-md shadow-md flex flex-col animate-pulse"
          >
            <div className="flex-1 border-green-100">
              <div className="w-full h-48 bg-green-200 rounded-t-md"></div>
            </div>
            <div className="px-2 py-4">
              <div className="bg-green-200 rounde -md h-6 mb-2 w-3/4"></div>
              <div className="bg-green-200 rounded-md h-4 mb-2 w-1/2"></div>
            </div>
          </div>
        ))}{" "}
      </div>
    </div>
  );
};
export default LoadingNews;
