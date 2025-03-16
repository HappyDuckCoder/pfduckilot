import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const images = {
  default: "/Image/default.jpeg",
  llamaCloud: "/Image/llmi1.png",
  parsing: "/Image/llmi2.webp",
  indexing: "/Image/llmi3.webp",
};

const IndexingAndSearch = () => {
  const [hoveredItem, setHoveredItem] = useState("default");
  const [displayedImage, setDisplayedImage] = useState(images.default);

  // Giữ ảnh trước đó để không bị nhấp nháy khi hover
  useEffect(() => {
    if (hoveredItem) {
      setDisplayedImage(images[hoveredItem as keyof typeof images]);
    }
  }, [hoveredItem]);

  return (
    <div className="p-8 text-black flex flex-row items-start">
      {/* Nội dung bên trái */}
      <div className="w-1/2 max-w-3xl p-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b-2 pb-2">
          Overview
        </h2>
        <ul className="space-y-4 text-gray-700 leading-relaxed">
          <li
            className="p-4 bg-gray-50 rounded-lg border-l-4 border-blue-500 shadow-sm cursor-pointer transition-all duration-300 hover:bg-blue-100"
            onMouseEnter={() => setHoveredItem("llamaCloud")}
            onMouseLeave={() => setHoveredItem("default")}
          >
            <strong>LlamaCloud</strong> giúp thiết lập một quy trình nhập dữ
            liệu có khả năng mở rộng cao.
          </li>
          <li
            className="p-4 bg-gray-50 rounded-lg border-l-4 border-green-500 shadow-sm cursor-pointer transition-all duration-300 hover:bg-green-100"
            onMouseEnter={() => setHoveredItem("parsing")}
            onMouseLeave={() => setHoveredItem("default")}
          >
            Dễ dàng mở rộng, quản lý tài liệu hoặc phân tích cú pháp tệp phức
            tạp thông qua REST API.
          </li>
          <li
            className="p-4 bg-gray-50 rounded-lg border-l-4 border-purple-500 shadow-sm cursor-pointer transition-all duration-300 hover:bg-purple-100"
            onMouseEnter={() => setHoveredItem("indexing")}
            onMouseLeave={() => setHoveredItem("default")}
          >
            Kết nối index với nguồn dữ liệu, đồng bộ hóa dữ liệu vào vector
            database.
          </li>
        </ul>
      </div>

      {/* Hiển thị ảnh bên phải với ảnh mặc định */}
      <div className="w-1/2 flex justify-center items-center">
        <motion.div
          key={displayedImage}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="w-[500px] h-[400px] rounded-lg shadow-lg bg-cover bg-center transition-all duration-500"
          style={{ backgroundImage: `url(${displayedImage})` }}
        />
      </div>
    </div>
  );
};

export default IndexingAndSearch;
