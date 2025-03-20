import React from "react";
import CodeBlockCal from "../Calculation/CalBlog";

const NomicSetup = () => {
  return (
    <div className="mx-auto max-w-screen-md lg:max-w-screen-lg p-6 sm:p-8 md:p-10 bg-slate-100 shadow-lg rounded-xl">
      <h2 className="text-blue-600 text-xl font-semibold mb-2">
        Vector Embedding là gì?
      </h2>
      <p className="text-gray-700 mb-4">
        Vector Embedding giúp chuyển đổi văn bản thành vector số, hỗ trợ các tác
        vụ như tìm kiếm văn bản nâng cao, phân loại dữ liệu, và hệ thống gợi ý.
      </p>

      <h2 className="text-blue-600 text-xl font-semibold mb-2">
        Cách tải nomic-embed-text
      </h2>
      <CodeBlockCal
        codeData={{
          language: "bash",
          filename: "terminal",
          highlightLines: [],
          code: "ollama pull nomic-embed-text",
        }}
      />

      <h2 className="text-blue-600 text-xl font-semibold mt-4">
        Ứng dụng của Vector Embedding
      </h2>
      <ul className="text-gray-700 list-disc pl-6 mt-2">
        <li>Tìm kiếm văn bản nâng cao (Semantic Search)</li>
        <li>Phân loại văn bản (Text Classification)</li>
        <li>Phân cụm dữ liệu (Clustering)</li>
        <li>Hệ thống gợi ý (Recommendation System)</li>
      </ul>
    </div>
  );
};

export default NomicSetup;
