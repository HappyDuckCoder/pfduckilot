import React from "react";
import Link from "next/link";
import Image from "next/image";

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
      <div className="flex flex-col gap-3 bg-white p-6 rounded-2xl shadow-md hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 h-full">
        {/* Phần ảnh */}
        <div className="w-full overflow-hidden rounded-xl">
          <Image
            src={data.image}
            alt={data.title}
            width={300} // Điều chỉnh kích thước tối ưu hơn
            height={200}
            className="object-cover w-full h-auto aspect-[3/2] transition-transform duration-300 group-hover:scale-105"
          />
        </div>

        {/* Phần chữ */}
        <div className="flex flex-col flex-1 gap-2">
          <h3 className="text-xl font-semibold text-darkColor group-hover:text-blue-600 transition-colors duration-300">
            {data.title}
          </h3>
          <p className="text-sm text-gray-500">by {data.name}</p>
          <p className="text-slate-700 text-sm line-clamp-3">
            {data.description}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default BlogBox;
