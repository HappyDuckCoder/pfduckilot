import React from "react";
import Link from "next/link";

interface BlogBoxType {
  id: string;
  name: string;
  title: string;
  description: string;
  image: string;
}

const BlogBox = ({ data }: { data: BlogBoxType }) => {
  return (
    <Link href={`/blog/${data.id}`} className="block group w-full h-full">
      <div className="flex flex-col gap-2 items-start bg-lightColor p-5 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 h-full">
        {/* Phần chữ */}
        <div className="flex-1 flex flex-col gap-3">
          <h3 className="text-2xl font-bold text-darkColor group-hover:text-slate-500 transition-colors duration-300">
            {data.title}
          </h3>
          <p className="text-sm text-gray-500">by {data.name}</p>
          <p className="text-slate-700 mt-2 line-clamp-3">{data.description}</p>
        </div>

        {/* Phần ảnh */}
        <div className="mt-4 w-full flex justify-center">
          <img
            src={data.image}
            alt={data.title}
            className="w-49 h-32 object-cover rounded-lg"
          />
        </div>
      </div>
    </Link>
  );
};

export default BlogBox;
