import React from "react";
import CodeBlockCal from "../Calculation/CalBlog";

const DeepseekSetup = () => {
  return (
    <div className="mx-auto max-w-screen-md lg:max-w-screen-lg p-6 sm:p-8 md:p-10 bg-slate-100 shadow-lg rounded-xl">
      <h2 className="text-blue-600 text-xl font-semibold mb-2">
        Deepseek là gì?
      </h2>
      <p className="text-gray-700 mb-4">
        Deepseek là một mô hình ngôn ngữ lớn (Large Language Model - LLM) dành
        cho xử lý ngôn ngữ tự nhiên (NLP), hỗ trợ phân loại văn bản, sinh văn
        bản, trả lời câu hỏi, và nhiều ứng dụng AI khác.
      </p>

      <h2 className="text-blue-600 text-xl font-semibold mb-2">
        Cách tải Deepseek
      </h2>
      <CodeBlockCal
        codeData={{
          language: "bash",
          filename: "terminal",
          highlightLines: [],
          code: "ollama pull deepseek",
        }}
      />
      <p className="text-gray-700 mt-2">
        Sau khi tải xong, chạy lệnh sau để khởi động:
      </p>
      <CodeBlockCal
        codeData={{
          language: "bash",
          filename: "terminal",
          highlightLines: [],
          code: "ollama run deepseek",
        }}
      />

      <h2 className="text-blue-600 text-xl font-semibold mt-4">
        Tích hợp vào ứng dụng
      </h2>
      <p className="text-gray-700">
        Deepseek có thể được tích hợp vào ứng dụng qua API Ollama, giúp gửi truy
        vấn và nhận phản hồi một cách linh hoạt.
      </p>
    </div>
  );
};

export default DeepseekSetup;
