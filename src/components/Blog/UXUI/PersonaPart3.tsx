import React from "react";

const personaBenefits = [
  {
    title: "Hiểu rõ đối tượng người dùng",
    description:
      "Persona giúp thiết kế và phát triển sản phẩm dựa trên nhu cầu thực tế của người dùng, từ đó tạo ra giải pháp phù hợp và hiệu quả.",
  },
  {
    title: "Hướng dẫn quyết định thiết kế",
    description:
      "Khi có một persona rõ ràng, các quyết định về bố cục, tính năng, và giao diện được căn cứ vào mong muốn và thói quen của người dùng, giảm thiểu rủi ro thiết kế không phù hợp.",
  },
  {
    title: "Giao tiếp hiệu quả trong nhóm",
    description:
      "Persona giúp toàn bộ nhóm phát triển hiểu được 'ai' là người dùng mục tiêu, từ đó thống nhất cách tiếp cận và chiến lược phát triển sản phẩm.",
  },
];

const PersonaPart3 = () => {
  return (
    <div className="text-white">
      <div className="space-y-4">
        {personaBenefits.map((item, index) => (
          <div
            key={index}
            className="p-4 border-l-4 rounded-md shadow-sm border-blue-500"
          >
            <h3 className="text-lg font-semibold">{item.title}</h3>
            <p className="text-gray-300 mt-1">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PersonaPart3;
