"use client";

import { useParams } from "next/navigation";
import React from "react";
import NoiseBackground from "@/components/NoiseBackground";
import Azure from "@/components/Blog/Azure/Azure";
import Perplexity from "@/components/Blog/Perplexity/Perplexity";
import Perceptron from "@/components/Blog/Perception/Perception";
import Calculation from "@/components/Blog/Calculation/Calculation";
import LlamaIndex from "@/components/Blog/LlamaIndex/LlamaIndex";
import RelationalSQL from "@/components/Blog/RelationalSQL/RelationalSQL";
import Ollama from "@/components/Blog/Ollama/Ollama";
import AIAgent from "@/components/Blog/AIAgent/AIAgent";
import UXUI from "@/components/Blog/UXUI/UXUI";
// import { metadataBlog } from "@/lib/metadata";

// Định nghĩa danh sách component tương ứng với từng slug
const blogComponents: Record<string, React.FC> = {
  "1": Azure,
  "2": Perplexity,
  "3": Perceptron,
  "4": Calculation,
  "5": LlamaIndex,
  "6": RelationalSQL,
  "7": Ollama,
  "8": AIAgent,
  "9": UXUI,
};

const SingleBlog = () => {
  const params = useParams(); // Dùng useParams() để lấy giá trị slug
  const slug = params?.slug as string; // Lấy slug từ params

  // Lấy component phù hợp hoặc hiển thị lỗi nếu không có
  const BlogComponent = blogComponents[slug];

  return (
    <main className="relative flex justify-center items-center flex-col overflow-x-hidden mx-auto">
      <div className="w-full">
        <NoiseBackground mode="dark" intensity={0.1}>
          {BlogComponent ? (
            <BlogComponent />
          ) : (
            <p className="text-white">Không tìm thấy bài viết</p>
          )}
        </NoiseBackground>
      </div>
    </main>
  );
};

export default SingleBlog;
