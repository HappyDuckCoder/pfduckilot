import React, { useState } from "react";
import IntroLLI from "./IntroLLI";
import IndexingAndSearch from "./IndexingAndSearch";

const sections = [
  {
    id: "introduction",
    title: "Introduction",
    content: (
      <>
        <IntroLLI />
      </>
    ),
  },
  {
    id: "indexing",
    title: "Indexing & Search",
    content: (
      <>
        <IndexingAndSearch />
      </>
    ),
  },
  {
    id: "parsing",
    title: "Parsing",
    content: (
      <>
        <p>
          Parsing là bước trích xuất thông tin từ văn bản, giúp chuyển đổi dữ
          liệu thành định dạng có thể xử lý bởi LLM.
        </p>
      </>
    ),
  },
  {
    id: "extraction",
    title: "Document Extraction",
    content: (
      <>
        <p>
          Document extraction giúp lấy nội dung từ nhiều định dạng file khác
          nhau như PDF, Word, hay HTML để phục vụ cho quá trình indexing.
        </p>
      </>
    ),
  },
];

const LlamaIndex = () => {
  const [activeSection, setActiveSection] = useState("introduction");

  return (
    <div className="p-6 text-white min-h-screen flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-6 text-white mt-20">LlamaIndex</h1>
      <nav className="mb-6 flex space-x-3">
        {sections.map((section) => (
          <button
            key={section.id}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition duration-300 ${
              activeSection === section.id
                ? "bg-white text-black shadow-lg"
                : "bg-black border border-white hover:bg-gray-800"
            }`}
            onClick={() => setActiveSection(section.id)}
          >
            {section.title}
          </button>
        ))}
      </nav>
      <div className="w-full bg-lightColor p-6 rounded-lg shadow-lg border-2 border-black">
        <h2 className="text-2xl font-semibold mb-4 text-black">
          {sections.find((s) => s.id === activeSection)?.title}
        </h2>
        <div className=" p-4 rounded-lg text-black border-2 border-black bg-lightColor">
          {sections.find((s) => s.id === activeSection)?.content}
        </div>
      </div>
    </div>
  );
};

export default LlamaIndex;
