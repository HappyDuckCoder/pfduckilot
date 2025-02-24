import React from "react";
import BlogBox from "./BlogBox";
import SplitText from "../ui/SplitText";
import { BlogBoxDummyData } from "@/lib/data";

const BlogList = () => {
  return (
    <section id="about-section" className="px-7 pb-10 md:pb-40 pt-20">
      <div className="container mx-auto flex flex-col justify-between">
        <SplitText
          text="Danh sách bài viết"
          className="text-5xl md:text-6xl font-extrabold text-lightColor"
        />
        <div className="max-w-6xl mx-auto text-white mt-10">
          <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {BlogBoxDummyData.map((item) => (
              <div key={item.id} className="h-full flex">
                <BlogBox data={item} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogList;
