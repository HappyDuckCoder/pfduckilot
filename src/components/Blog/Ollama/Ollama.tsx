import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import SetupOllama from "./SetupOllama";
import DeepseekSetup from "./DeepseekSetup";
import NomicSetup from "./NomicSetup";
import Source from "./Source";
import CollectData from "./CollectData";

const steps = [
  {
    title: "Quá trình chuẩn bị",
    items: [
      {
        title: "Tải Ollama",
        description: "Hướng dẫn cài đặt Ollama trên hệ thống.",
        content: <SetupOllama />,
      },
      {
        title: "Tải Deepseek",
        description:
          "Deepseek là một mô hình ngôn ngữ lớn (LLM) được thiết kế để xử lý NLP.",
        content: <DeepseekSetup />,
      },
      {
        title: "Tải embedding nomic-embed-text",
        description:
          "Embedding là quá trình chuyển đổi văn bản thành vector số để mô hình có thể hiểu và xử lý.",
        content: <NomicSetup />,
      },
    ],
  },
  {
    title: "Thu thập dữ liệu",
    items: [
      {
        title: "Nguồn thu thập",
        description: "Trung tâm y tế Đà Lạt.",
        content: <Source />,
      },
      {
        title: "Cách thu thập",
        description: "Copy và tạo các file txt",
        content: <CollectData />,
      },
    ],
  },
  {
    title: "Indexing",
    items: [
      {
        title: "Quá trình lập chỉ mục",
        description: "Lập chỉ mục dữ liệu thu thập được.",
        content: <></>,
      },
    ],
  },
  {
    title: "Test",
    items: [
      {
        title: "Test bằng terminal",
        description: "Kiểm tra trực tiếp trên terminal.",
        content: <></>,
      },
      {
        title: "Test với Streamlit",
        description: "Sử dụng Streamlit để chạy giao diện kiểm thử.",
        content: <></>,
      },
    ],
  },
  {
    title: "Xây dựng thêm chức năng",
    items: [
      {
        title: "Bổ sung tính năng",
        description: "Bổ sung các tính năng mới theo nhu cầu.",
        content: <></>,
      },
    ],
  },
  {
    title: "Đẩy lên Hugging Face",
    items: [
      {
        title: "Upload mô hình",
        description: "Đưa mô hình lên Hugging Face để sử dụng API.",
        content: <></>,
      },
    ],
  },
  {
    title: "Test API",
    items: [
      {
        title: "Thử nghiệm API",
        description: "Kiểm tra cách lấy API từ Hugging Face.",
        content: <></>,
      },
    ],
  },
  {
    title: "Xây dựng Next.js App",
    items: [
      {
        title: "Phát triển giao diện",
        description: "Xây dựng ứng dụng sử dụng chatbot với Next.js.",
        content: <></>,
      },
    ],
  },
];

const Ollama = () => {
  const [expanded, setExpanded] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpanded(expanded === index ? null : index);
  };

  return (
    <div className="p-6 text-white min-h-screen flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-6 text-white mt-20">
        Quy Trình Xây Dựng Chatbot Cá Nhân
      </h1>
      <div className="max-w-4xl w-full grid gap-6">
        {steps.map((section, index) => (
          <div key={index} className="bg-white/5 rounded-lg p-6 shadow-lg">
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
              <span className="bg-white/10 rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm">
                {index + 1}
              </span>
              {section.title}
            </h2>
            <ul className="space-y-4">
              {section.items.map((item, idx) => {
                const itemKey = index * 100 + idx;
                return (
                  <li
                    key={idx}
                    className="bg-white/5 rounded-lg p-4 hover:bg-white/10 transition-all duration-300 cursor-pointer flex justify-between items-center"
                  >
                    <div>
                      <span className="text-lg font-semibold text-white block mb-1">
                        {item.title}
                      </span>
                      <span className="text-white/70 text-sm block mt-2">
                        {item.description}
                      </span>
                      {expanded === itemKey && (
                        <div className="mt-2">{item.content}</div>
                      )}
                    </div>
                    <div className="relative pl-2">
                      <button
                        className={`w-5 h-5 sm:w-7 sm:h-7 aspect-square rounded-full 
  flex items-center justify-center 
  border-2 border-transparent hover:border-gray-300 
  hover:text-gray-300 transition-transform duration-300 cursor-pointer`}
                        onClick={() => toggleExpand(itemKey)}
                      >
                        <ChevronDown
                          className={`w-6 h-6 sm:w-8 sm:h-8 transition-transform duration-300 ${
                            expanded === itemKey ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Ollama;
