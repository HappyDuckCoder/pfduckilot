import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { FaApple, FaLinux, FaWindows } from "react-icons/fa";
import Link from "next/link";

const steps = [
  {
    title: "Quá trình chuẩn bị",
    items: [
      {
        title: "Tải Ollama",
        description: "Hướng dẫn cài đặt Ollama trên hệ thống.",
        content: (
          <div className=" mx-auto p-4 bg-slate-100 shadow-lg rounded-xl">
            <h1 className="text-2xl font-semibold text-gray-900 mb-4">
              Ollama là gì?
            </h1>
            <p className="text-gray-700 mb-6">
              Ollama là một nền tảng cung cấp môi trường để chạy các mô hình
              ngôn ngữ lớn (LLM) trên máy cá nhân.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mb-3">
              Cách cài đặt Ollama
            </h2>
            <p className="text-gray-700 mb-2">
              Bạn có thể tải và cài đặt Ollama bằng cách truy cập trang chủ và
              làm theo hướng dẫn chính thức.
            </p>
            <p className="text-gray-700 mb-2 flex items-center gap-4 bg-gray-200 p-3 rounded-lg shadow-sm">
              <strong>Bước 1:</strong> Truy cập trang web chính thức:
              <Link
                href="https://ollama.com"
                className="text-blue-500 hover:underline ml-1"
                target="_blank"
              >
                https://ollama.com
              </Link>
            </p>
            <p className="text-gray-700 mb-2 flex items-center gap-4 bg-gray-200 p-3 rounded-lg shadow-sm">
              <strong>Bước 2:</strong> Chọn hệ điều hành phù hợp:
              <span className="flex items-center gap-3">
                <FaWindows
                  className="text-blue-500 text-3xl border-2 border-blue-500 rounded-full p-1"
                  title="Windows"
                />
                <FaLinux
                  className="text-green-500 text-3xl border-2 border-green-500 rounded-full p-1"
                  title="Linux"
                />
                <FaApple
                  className="text-gray-500 text-3xl border-2 border-gray-500 rounded-full p-1"
                  title="macOS"
                />
              </span>
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">
              Các model của Ollama
            </h2>
            <p className="text-gray-700 mb-2">
              Ollama hỗ trợ nhiều mô hình LLM và embedding khác nhau, bao gồm:
            </p>
            <ul className="list-disc pl-5 text-gray-700">
              <li>
                <strong>LLM:</strong> Deepseek, LLaMA, Mistral...
              </li>
              <li>
                <strong>Embedding:</strong> nomic-embed-text, OpenAI
                embedding...
              </li>
            </ul>
          </div>
        ),
      },
      {
        title: "Tải Deepseek",
        description:
          "Deepseek là một mô hình ngôn ngữ lớn (LLM) được thiết kế để xử lý NLP.",
        content: <></>,
      },
      {
        title: "Tải embedding nomic-embed-text",
        description:
          "Embedding là quá trình chuyển đổi dữ liệu văn bản thành vector số để mô hình có thể hiểu và xử lý.",
        content: <></>,
      },
    ],
  },
  {
    title: "Thu thập dữ liệu",
    items: [
      {
        title: "Nguồn thu thập",
        description: "Trung tâm y tế Đà Lạt.",
        content: <></>,
      },
      {
        title: "Cách thu thập",
        description: "Craw bằng tay và tự xử lý trước (preprocessing).",
        content: <></>,
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

const Ollama: React.FC = () => {
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
                    <ChevronDown
                      className={`text-white transition-transform duration-300 ${
                        expanded === itemKey ? "rotate-180" : ""
                      } hover:text-gray-300 hover:scale-110 
  border-2 border-transparent hover:border-gray-300 rounded-full p-1 cursor-pointer`}
                      onClick={() => toggleExpand(itemKey)}
                    />
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
