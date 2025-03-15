"use client";

import { useParams } from "next/navigation";
import React from "react";
import NoiseBackground from "@/components/NoiseBackground";
import Azure from "@/components/Blog/Azure/Azure";
import Perplexity from "@/components/Blog/Perplexity/Perplexity";
import Perceptron from "@/components/Blog/Perception/Perception";
import Calculation from "@/components/Blog/Calculation/Calculation";
import LlamaIndex from "@/components/Blog/LlamaIndex/LlamaIndex";
// import { metadataBlog } from "@/lib/metadata";

// Định nghĩa danh sách component tương ứng với từng slug
const blogComponents: Record<string, React.FC> = {
  "1": Azure,
  "2": Perplexity,
  "3": Perceptron,
  "4": Calculation,
  "5": LlamaIndex,
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
