import React from "react";
import TocAzure from "./TocAzure";

const Azure = () => {
  return (
    <section id="hero-section" className="px-7 pb-10 md:pb-40 pt-24">
      <div className="container mx-auto flex flex-col md:flex-row justify-between">
        {/* Sidebar Table of Contents */}
        <TocAzure />

        {/* Nội dung chính */}
        <div className="flex-1 ml-80 p-5">
          <h1 className="text-3xl font-bold text-lightColor">Azure Blog</h1>
          <p className="text-lg text-gray-300 mt-4">
            Nội dung bài viết về Azure sẽ xuất hiện ở đây...
          </p>
        </div>
      </div>
    </section>
  );
};

export default Azure;
