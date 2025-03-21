import React, { useState } from "react";
import { Menu } from "lucide-react";

const blogContent = [
  {
    title: "RETRIEVAL-AUGMENTED GENERATION (RAG)",
    sections: [
      {
        heading: "1. Định nghĩa",
        content: (
          <>
            <p>
              Retrieval-Augmented Generation (RAG) là một kỹ thuật giúp mô hình
              ngôn ngữ lớn (LLM - Large Language Model) cải thiện độ chính xác
              và tính cập nhật của phản hồi bằng cách truy xuất thông tin từ các
              nguồn bên ngoài trước khi sinh văn bản. Điều này giúp LLM vượt qua
              giới hạn của bộ dữ liệu huấn luyện ban đầu và cung cấp câu trả lời
              sát với thực tế hơn.
            </p>
          </>
        ),
      },
      {
        heading: "2. Cơ chế hoạt động",
        content: (
          <div className="">
            <p className="text-lg leading-relaxed">
              RAG hoạt động qua hai giai đoạn chính:{" "}
              <b>Truy xuất (Retrieval)</b> và <b>Tạo văn bản (Generation)</b>.
            </p>

            <h2 className="text-xl font-bold mt-4">a) Truy xuất (Retrieval)</h2>
            <p className="text-lg leading-relaxed">
              Khi nhận một truy vấn từ người dùng, hệ thống sẽ tìm kiếm thông
              tin liên quan từ các nguồn dữ liệu như cơ sở dữ liệu văn bản, kho
              lưu trữ vector (vector database) hoặc tài liệu nội bộ. Các phương
              pháp phổ biến bao gồm:
            </p>
            <ul className="list-disc list-inside text-lg mt-2">
              <li>
                <b>Vector Search:</b> Sử dụng embedding để so sánh độ tương đồng
                ngữ nghĩa.
              </li>
              <li>
                <b>Keyword Search:</b> Sử dụng các thuật toán như BM25 để tìm
                kiếm theo từ khóa.
              </li>
            </ul>

            <p className="text-lg leading-relaxed mt-4">
              Những thuật toán xếp hạng tài liệu như BM25, cosine similarity,
              hay FAISS giúp chọn lọc thông tin có mức độ liên quan cao nhất.
            </p>

            <h2 className="text-xl font-bold mt-4">
              b) Tạo văn bản (Generation)
            </h2>
            <p className="text-lg leading-relaxed">
              Mô hình LLM nhận thông tin từ bước truy xuất và tổng hợp để tạo
              phản hồi. Thay vì chỉ dựa vào dữ liệu huấn luyện trước đó, mô hình
              có thể kết hợp thông tin mới truy xuất để tạo câu trả lời chính
              xác hơn. Một số phương pháp tối ưu:
            </p>
            <ul className="list-disc list-inside text-lg mt-2">
              <li>
                <b>Context Window Optimization:</b> Quản lý độ dài ngữ cảnh để
                tránh tràn bộ nhớ mô hình.
              </li>
              <li>
                <b>Knowledge Distillation:</b> Giúp mô hình học tập từ nhiều
                nguồn khác nhau.
              </li>
            </ul>
          </div>
        ),
      },
      {
        heading: "3. Mô hình hoạt động đơn giản",
        content: (
          <div className="flex items-center justify-center space-x-4 mt-6">
            {[
              { label: "User", color: "bg-blue-500" },
              { label: "Retrieval", color: "bg-green-500" },
              { label: "Generation", color: "bg-red-500" },
            ].map((step, index, steps) => (
              <React.Fragment key={index}>
                {/* Hình chữ nhật */}
                <div
                  className={`w-36 h-20 flex items-center justify-center ${step.color} text-white font-bold text-lg rounded-lg shadow-lg`}
                >
                  {step.label}
                </div>

                {/* Mũi tên (trừ phần tử cuối) */}
                {index < steps.length - 1 && (
                  <div className="text-3xl font-bold">→</div>
                )}
              </React.Fragment>
            ))}
          </div>
        ),
      },
      {
        heading: "4. Ví dụ",
        content: (
          <div className="mt-4 space-y-2">
            <p className="font-semibold">
              Người dùng hỏi: {""}
              <span className="italic">
                &quot;Tình hình nghiên cứu về AI năm 2024?&quot;
              </span>
            </p>

            <div className="border-l-4 border-blue-500 pl-4 space-y-1">
              <p>🔍 Hệ thống truy xuất thông tin từ Google Scholar.</p>
              <p>📄 Trích xuất các bài báo mới nhất.</p>
              <p>📝 Tổng hợp thông tin và trả lời người dùng.</p>
            </div>
          </div>
        ),
      },
      {
        heading: "5. Công cụ phổ biến",
        content: (
          <div className="mt-4 space-y-2">
            <ul className="list-disc list-inside space-y-1">
              <li>
                <b>LlamaIndex:</b> Kết nối LLM với dữ liệu nội bộ.
              </li>
              <li>
                <b>Pinecone:</b> Vector Database lưu trữ thông tin.
              </li>
              <li>
                <b>Elasticsearch:</b> Truy vấn dữ liệu nhanh chóng.
              </li>
            </ul>
          </div>
        ),
      },
    ],
  },
  {
    title: "AI AGENT",
    sections: [
      {
        heading: "1. Định nghĩa",
        content: (
          <>
            <p>
              AI Agent (Tác nhân trí tuệ nhân tạo) là một hệ thống có khả năng
              tự động nhận thông tin từ môi trường, phân tích, ra quyết định và
              thực hiện hành động để đạt được mục tiêu. AI Agent có thể hoạt
              động độc lập hoặc kết hợp với các hệ thống khác để tối ưu hóa quy
              trình xử lý thông tin.
            </p>
          </>
        ),
      },
      {
        heading: "2. Cơ chế hoạt động",
        content: (
          <div className="mt-4 space-y-4">
            <p>
              AI Agent hoạt động theo vòng lặp{" "}
              <b>Cảm nhận - Suy luận - Hành động</b>.
            </p>

            <div className="border-l-4 border-blue-500 pl-4 space-y-2">
              <p className="font-semibold">a) Cảm nhận (Perception)</p>
              <ul className="list-disc list-inside space-y-1">
                <li>
                  Nhận dữ liệu từ người dùng, API, cảm biến hoặc hệ thống khác.
                </li>
                <li>
                  Dữ liệu có thể ở dạng văn bản, hình ảnh, âm thanh hoặc tín
                  hiệu từ môi trường.
                </li>
              </ul>
            </div>

            <div className="border-l-4 border-green-500 pl-4 space-y-2">
              <p className="font-semibold">b) Suy luận (Reasoning)</p>
              <ul className="list-disc list-inside space-y-1">
                <li>Áp dụng AI để phân tích dữ liệu đầu vào.</li>
                <li>
                  Sử dụng LLM hoặc machine learning để hiểu và dự đoán hành động
                  phù hợp.
                </li>
                <li>
                  Có thể sử dụng logic if-then hoặc thuật toán học sâu để xử lý
                  dữ liệu.
                </li>
              </ul>
            </div>

            <div className="border-l-4 border-red-500 pl-4 space-y-2">
              <p className="font-semibold">c) Hành động (Action)</p>
              <ul className="list-disc list-inside space-y-1">
                <li>
                  AI Agent thực hiện hành động như phản hồi người dùng, cập nhật
                  hệ thống hoặc kích hoạt quy trình tự động.
                </li>
              </ul>
            </div>
          </div>
        ),
      },
      {
        heading: "3. Các thành phần nâng cao của AI Agent",
        content: (
          <div className="mt-4 space-y-4">
            <ul className="list-disc list-inside space-y-2">
              {[
                {
                  title: "Memory (Bộ nhớ)",
                  desc: "Lưu trữ thông tin tương tác trước đó để cải thiện phản hồi trong tương lai.",
                },
                {
                  title: "Planning (Lập kế hoạch)",
                  desc: "Xác định các bước thực hiện dựa trên mục tiêu và tình huống hiện tại.",
                },
                {
                  title: "Tool Use (Sử dụng công cụ)",
                  desc: "Gọi API, truy xuất dữ liệu, thực thi mã lệnh để mở rộng khả năng.",
                },
                {
                  title: "Adaptability (Khả năng thích nghi)",
                  desc: "Tự học và cải thiện dựa trên phản hồi và dữ liệu mới.",
                },
              ].map((item, index) => (
                <li key={index}>
                  <b>{item.title}:</b> {item.desc}
                </li>
              ))}
            </ul>
          </div>
        ),
      },
      {
        heading: "4. Mô hình hoạt động mở rộng",
        content: (
          <div className="flex flex-col items-center space-y-6">
            {/* Hàng trên cùng */}
            <div className="flex items-center space-x-6">
              {[
                { label: "User", color: "bg-blue-500", sub: "Memory" },
                { label: "Perceive", color: "bg-green-500", sub: "Tools" },
                { label: "Reasoning", color: "bg-yellow-500", sub: "API" },
                { label: "Action", color: "bg-red-500", sub: "Output" },
              ].map((step, index, arr) => (
                <React.Fragment key={index}>
                  <div className="flex flex-col items-center">
                    {/* Hình chữ nhật chính */}
                    <div
                      className={`w-32 h-16 flex items-center justify-center ${step.color} text-white font-bold text-lg rounded-lg shadow-lg`}
                    >
                      {step.label}
                    </div>
                    {/* Mũi tên chỉ xuống */}
                    <div className="text-2xl font-bold mt-2">↓</div>
                    {/* Hình chữ nhật phụ bên dưới */}
                    <div className="w-24 h-12 flex items-center justify-center bg-gray-300 text-black font-semibold rounded-md shadow-md mt-2">
                      {step.sub}
                    </div>
                  </div>
                  {/* Mũi tên ngang (trừ phần tử cuối) */}
                  {index < arr.length - 1 && (
                    <div className="text-3xl font-bold">→</div>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        ),
      },
      {
        heading: "5. Ví dụ",
        content: (
          <div className="flex flex-col space-y-2 text-lg">
            {[
              'Người dùng: "Bệnh viện có khám tim mạch không?"',
              "AI Agent xử lý câu hỏi",
              "AI tìm kiếm trong cơ sở dữ liệu nội bộ",
              'AI: "Có, bệnh viện cung cấp dịch vụ khám tim mạch từ 8h - 17h."',
              "Nếu người dùng muốn đặt lịch hẹn, AI sẽ gửi yêu cầu đến hệ thống.",
            ].map((step, key) => (
              <p key={key}>• {step}</p>
            ))}
          </div>
        ),
      },
      {
        heading: "6. Công cụ phổ biến",
        content: (
          <div className="space-y-4">
            {[
              {
                name: "LangChain",
                desc: "Xây dựng AI Agent kết hợp với nhiều công cụ khác nhau.",
                color: "bg-blue-500",
              },
              {
                name: "Auto-GPT",
                desc: "AI Agent có khả năng tự lên kế hoạch và thực hiện tác vụ tự động.",
                color: "bg-green-500",
              },
              {
                name: "OpenAI Function Calling",
                desc: "Gọi API bên ngoài để mở rộng chức năng của AI Agent.",
                color: "bg-yellow-500",
              },
              {
                name: "AgentGPT",
                desc: "AI Agent có khả năng lập kế hoạch dài hạn và thực thi nhiều bước tự động.",
                color: "bg-red-500",
              },
              {
                name: "LivePerson, Intercom",
                desc: "Chatbot chăm sóc khách hàng.",
                color: "bg-purple-500",
              },
              {
                name: "Google Assistant, Alexa",
                desc: "Trợ lý ảo thông minh.",
                color: "bg-indigo-500",
              },
              {
                name: "IBM Watson",
                desc: "AI hỗ trợ y tế.",
                color: "bg-gray-500",
              },
            ].map((tool, index) => (
              <div
                key={index}
                className={`p-4 text-white rounded-lg shadow-md ${tool.color}`}
              >
                <p className="font-bold">{tool.name}</p>
                <p className="text-sm">{tool.desc}</p>
              </div>
            ))}
          </div>
        ),
      },
    ],
  },
];

const AIAgent = () => {
  const [showTOC, setShowTOC] = useState(false);

  return (
    <div className="relative flex">
      {/* Toggle Button */}
      <button
        className="fixed top-5 left-5 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition z-50"
        onClick={() => setShowTOC(!showTOC)}
      >
        <Menu size={24} />
      </button>

      {/* Table of Contents */}
      <aside
        className={`fixed top-0 left-0 h-full bg-white p-6 shadow-2xl border-r border-gray-300 overflow-y-auto transition-transform duration-300 z-40 md:w-1/4 w-1/2 ${
          showTOC ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <h3 className="text-xl md:text-2xl font-bold text-gray-700 text-center mb-5 md:mt-0 mt-20">
          📌 Table of Contents
        </h3>
        <ul className="space-y-4 text-sm md:text-lg">
          {blogContent.map((post, index) => (
            <li key={index}>
              <a
                href={`#${post.title.replace(/\s+/g, "-").toLowerCase()}`}
                className="text-blue-500 hover:text-blue-700 cursor-pointer transition-colors"
              >
                {post.title}
              </a>
              <ul className="ml-4 mt-2 space-y-2 text-gray-600">
                {post.sections.map((section, secIndex) => (
                  <li key={secIndex}>
                    <a
                      href={`#${section.heading
                        .replace(/\s+/g, "-")
                        .toLowerCase()}`}
                      className="text-xs md:text-sm hover:text-gray-800"
                    >
                      {section.heading}
                    </a>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </aside>

      {/* Main Content */}
      <div className="p-6 text-white min-h-screen flex flex-col items-center w-3/4 mx-auto">
        <header className="text-center py-20">
          <h1 className="text-3xl md:text-5xl font-extrabold text-gray-100 drop-shadow-lg tracking-wide">
            🚀 AI & Technology Blog
          </h1>
        </header>
        <div className="">
          <div className="grid gap-8">
            {blogContent.map((post, index) => (
              <div
                key={index}
                id={post.title.replace(/\s+/g, "-").toLowerCase()}
                className="bg-white/5 rounded-lg p-6 shadow-lg"
              >
                <h2 className="text-xl md:text-3xl font-bold border-b-4 border-blue-400 pb-4 mb-6 text-gray-100 uppercase tracking-wide">
                  {post.title}
                </h2>
                {post.sections.map((section, secIndex) => (
                  <div
                    key={secIndex}
                    id={section.heading.replace(/\s+/g, "-").toLowerCase()}
                    className="mb-6"
                  >
                    <h3 className="text-lg md:text-2xl font-semibold text-gray-100 mb-2">
                      {section.heading}
                    </h3>
                    <p className="text-sm md:text-lg text-gray-400 leading-relaxed tracking-wide">
                      {section.content}
                    </p>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIAgent;
