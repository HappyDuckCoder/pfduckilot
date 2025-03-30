import React, { useState } from "react";

const LoadingContent: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className="w-full">
      <button
        className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-md mb-3"
        onClick={() => {
          setIsLoading(true);
          setTimeout(() => {
            setIsLoading(false);
          }, 2000);
        }}
        disabled={isLoading}
      >
        {isLoading ? "Đang tải..." : "Tải lại nội dung"}
      </button>

      <div className="w-full border rounded-md p-4">
        {isLoading ? (
          <>
            <div className="h-4 bg-gray-200 rounded w-3/4 mb-4 animate-pulse"></div>
            <div className="h-4 bg-gray-200 rounded w-1/2 mb-4 animate-pulse"></div>
            <div className="h-4 bg-gray-200 rounded w-5/6 mb-4 animate-pulse"></div>
            <div className="h-16 bg-gray-200 rounded w-full animate-pulse"></div>
          </>
        ) : (
          <>
            <h3 className="text-lg font-bold mb-2">Tiêu đề nội dung đã tải</h3>
            <p className="text-gray-700 mb-3">
              Đây là nội dung đã tải xong sau khi skeleton screen hiển thị.
            </p>
            <div className="bg-blue-100 p-3 rounded">
              <p className="text-blue-800">Nội dung chi tiết của box này</p>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default LoadingContent;
