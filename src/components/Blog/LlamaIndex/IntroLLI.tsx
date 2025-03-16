import React from "react";

const IntroLLI = () => {
  return (
    <div className="p-6 text-black bg-lightColor flex flex-col items-center">
      <h1 className="text-3xl font-bold text-black">LlamaCloud</h1>
      <div className="w-full p-6 bg-lightColor">
        <h2 className="text-2xl font-semibold mb-4 text-black">LlamaCloud</h2>
        <p className="text-black mb-4">
          LlamaCloud là một dịch vụ dựa trên đám mây cho phép:
        </p>
        <ul className="list-disc pl-6 text-black mb-6">
          <li>Tải lên, phân tích cú pháp và cài index tài liệu</li>
          <li>Tìm kiếm bằng LlamaIndex</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4 text-black">LlamaParse</h2>
        <p className="text-black mb-4">
          LlamaParse là một thành phần của LlamaCloud, cho phép phân tích cú
          pháp các tệp PDF thành dữ liệu có cấu trúc. Nó có sẵn dưới dạng:
        </p>
        <ul className="list-disc pl-6 text-black mb-6">
          <li>API REST độc lập</li>
          <li>Gói Python</li>
          <li>Giao diện web</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4 text-black">
          LlamaExtract (phiên bản beta)
        </h2>
        <p className="text-black mb-4">
          LlamaExtract (phiên bản beta) là một thành phần khác của LlamaCloud,
          cho phép bạn:
        </p>
        <ul className="list-disc pl-6 text-black mb-6">
          <li>Trích xuất dữ liệu có cấu trúc từ tài liệu không có cấu trúc</li>
        </ul>
        <p className="text-black">Nó có sẵn dưới dạng:</p>
        <ul className="list-disc pl-6 text-black">
          <li>Giao diện web</li>
          <li>Gói Python</li>
        </ul>
      </div>
    </div>
  );
};

export default IntroLLI;
