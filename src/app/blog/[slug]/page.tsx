"use client";

import { useParams } from "next/navigation";
import React from "react";
import NoiseBackground from "@/components/NoiseBackground";
import Azure from "@/components/Blog/Azure/Azure";
import Perplexity from "@/components/Blog/Perplexity/Perplexity";
// import Machine from "@/components/Blog/Machine/Machine";
// import Prisma from "@/components/Blog/Prisma/Prisma";

// Định nghĩa danh sách component tương ứng với từng slug
const blogComponents: Record<string, React.FC> = {
  "1": Azure, // Nếu slug = "1", render component Azure
  "2": Perplexity, // Nếu slug = "2", render component Machine
  // "3": Prisma, // Nếu slug = "3", render component Prisma
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
