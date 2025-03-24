import React, { useState } from "react";
import { Menu } from "lucide-react";
import PersonaPart2 from "./PersonaPart2";
import PersonaPart3 from "./PersonaPart3";
import PersonaPart4 from "./PersonaPart4";
import PersonaPart5 from "./PersonaPart5";

const blogContent = [
  {
    title: "UX và UI là gì?",
    sections: [
      {
        heading: "1. UX (User Experience - Trải nghiệm người dùng)",
        content: (
          <>
            <p>
              Là cách người dùng cảm nhận và tương tác với sản phẩm. UX tốt giúp
              người dùng dễ dàng sử dụng, tìm kiếm thông tin nhanh chóng và hài
              lòng với trải nghiệm tổng thể.
            </p>
          </>
        ),
      },
      {
        heading: "2. UI (User Interface - Giao diện người dùng)",
        content: (
          <>
            <p>
              Là phần hiển thị mà người dùng nhìn thấy và tương tác, bao gồm màu
              sắc, typography, nút bấm, hình ảnh, bố cục, v.v.
            </p>
          </>
        ),
      },
    ],
  },
  {
    title: "Persona",
    sections: [
      {
        heading: "Định nghĩa Persona",
        content: (
          <>
            <p>
              Persona là một hình mẫu đại diện của người dùng thật dựa trên
              nghiên cứu và dữ liệu thực tế. Nó không chỉ là một nhân vật hư cấu
              mà còn chứa đựng thông tin về nhu cầu, hành vi, động cơ, và những
              khó khăn mà người dùng gặp phải khi tương tác với sản phẩm.
            </p>
          </>
        ),
      },
      {
        heading: "Các thành phần chính của một Persona",
        content: (
          <>
            <PersonaPart2 />
          </>
        ),
      },
      {
        heading: "Lợi ích khi sử dụng Persona trong thiết kế UX",
        content: (
          <>
            <PersonaPart3 />
          </>
        ),
      },
      {
        heading: "Cách xây dựng Persona",
        content: (
          <>
            <PersonaPart4 />
          </>
        ),
      },
      {
        heading: "Ví dụ",
        content: (
          <>
            <PersonaPart5 />
          </>
        ),
      },
    ],
  },
];

const UXUI = () => {
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
            🚀 AI Agent & AI Agentic
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

export default UXUI;
