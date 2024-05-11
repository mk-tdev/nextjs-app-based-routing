"use client";

const ErrorArchive = ({ error }: any) => {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <h1 className="text-2xl font-bold mb-4">
        {error.message}: News Archive Not Found
      </h1>
      <p className="text-gray-600">
        The requested news archive could not be found. Please check the URL and
        try again.
      </p>
    </div>
  );
};

export default ErrorArchive;
