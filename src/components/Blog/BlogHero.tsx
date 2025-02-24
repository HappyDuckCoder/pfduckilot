"use client";

import React from "react";
import SplitText from "../ui/SplitText";
import Portrait from "../Portrait";
import ScrollForMore from "../ScrollForMore";

const BlogHero = () => {
  const handleScrollToAbout = () => {
    const aboutSection = document.getElementById("about-section");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero-section" className="px-5 md:px-7 pb-10 md:pb-40 pt-24">
      <div className="container mx-auto flex flex-col md:flex-row items-center md:items-start justify-between">
        {/* Text Section */}
        <div className="flex flex-col gap-6 md:gap-16 w-full md:w-1/2 text-center md:text-left">
          <SplitText
            text="🚀 Blog của hduc02"
            className="text-4xl md:text-6xl font-extrabold text-lightColor"
          />
          <p className="text-base md:text-lg text-gray-200 leading-relaxed">
            Chào mừng bạn đến với{" "}
            <strong className="text-orange-300">blog của hduc</strong>! Đây là
            nơi tôi ghi lại hành trình{" "}
            <strong className="text-orange-300">khám phá và phát triển</strong>{" "}
            trong lĩnh vực{" "}
            <strong className="text-orange-300">lập trình, công nghệ</strong> và
            những khía cạnh thú vị của cuộc sống. 💡 Tôi tin rằng việc{" "}
            <strong className="text-orange-300">chia sẻ kiến thức</strong> không
            chỉ giúp tôi hệ thống hóa những gì đã học, mà còn có thể giúp ích
            cho nhiều người khác.
          </p>
          <p className="text-base md:text-lg text-gray-200 leading-relaxed">
            🎯{" "}
            <strong className="text-orange-300">
              Hãy cùng nhau học hỏi, trao đổi và phát triển!
            </strong>
            Nếu bạn có bất kỳ câu hỏi hoặc góp ý nào, đừng ngần ngại để lại bình
            luận hoặc{" "}
            <strong className="text-orange-300">liên hệ với tôi 📩</strong>. Cảm
            ơn bạn đã ghé thăm! 🚀
          </p>
          <div className="text-lightColor self-center md:self-start">
            <ScrollForMore onClick={handleScrollToAbout} />
          </div>
        </div>

        {/* Portrait Section */}
        <div className="w-full md:w-1/3 flex justify-center mt-10 md:mt-0">
          <Portrait width={250} height={250} />
        </div>
      </div>
    </section>
  );
};

export default BlogHero;
