import Link from "next/link";
import React from "react";
import { FaApple, FaLinux, FaWindows } from "react-icons/fa";

const SetupOllama = () => {
  return (
    <div className="mx-auto max-w-screen-md lg:max-w-screen-lg p-6 sm:p-8 md:p-10 bg-slate-100 shadow-lg rounded-xl">
      <h1 className="text-2xl font-semibold text-gray-900 mb-4">
        Ollama là gì?
      </h1>
      <p className="text-gray-700 mb-6">
        Ollama là một nền tảng cung cấp môi trường để chạy các mô hình ngôn ngữ
        lớn (LLM) trên máy cá nhân.
      </p>

      <h2 className="text-xl font-semibold text-gray-800 mb-3">
        Cách cài đặt Ollama
      </h2>
      <p className="text-gray-700 mb-2">
        Bạn có thể tải và cài đặt Ollama bằng cách truy cập trang chủ và làm
        theo hướng dẫn chính thức.
      </p>

      <div className="grid sm:grid-cols-1 md:grid-rows-2 gap-4">
        <p className="text-gray-700 flex items-center gap-4 bg-gray-200 p-3 rounded-lg shadow-sm">
          <strong>Bước 1:</strong> Truy cập trang web chính thức:
          <Link
            href="https://ollama.com"
            className="text-blue-500 hover:underline"
            target="_blank"
          >
            https://ollama.com
          </Link>
        </p>
        <p className="text-gray-700 flex items-center gap-4 bg-gray-200 p-3 rounded-lg shadow-sm">
          <strong>Bước 2:</strong> Chọn hệ điều hành phù hợp:
          <span className="flex items-center gap-3">
            <FaWindows className="text-blue-500 text-3xl" title="Windows" />
            <FaLinux className="text-green-500 text-3xl" title="Linux" />
            <FaApple className="text-gray-500 text-3xl" title="macOS" />
          </span>
        </p>
      </div>

      <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
        Các model của Ollama
      </h2>
      <ul className="list-disc pl-5 text-gray-700">
        <li>
          <strong>LLM:</strong> Deepseek, LLaMA, Mistral...
        </li>
        <li>
          <strong>Embedding:</strong> nomic-embed-text, OpenAI...
        </li>
      </ul>
    </div>
  );
};

export default SetupOllama;
