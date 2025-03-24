import React from "react";

const personaCreationSteps = [
  {
    title: "Thu thập dữ liệu",
    description:
      "Sử dụng khảo sát, phỏng vấn, phân tích hành vi sử dụng sản phẩm hiện tại.",
  },
  {
    title: "Phân tích dữ liệu",
    description:
      "Tìm ra các mẫu chung, nhóm các người dùng có đặc điểm tương tự.",
  },
  {
    title: "Tạo hồ sơ chi tiết",
    description:
      "Xác định tên, hình ảnh đại diện, cùng với các thông tin cá nhân, mục tiêu, động cơ, và pain points.",
  },
  {
    title: "Sử dụng persona trong quy trình thiết kế",
    description:
      "Đảm bảo mỗi quyết định thiết kế đều hướng tới việc cải thiện trải nghiệm cho persona đã xác định.",
  },
];

const PersonaPart4 = () => {
  return (
    <div className="text-gray-300">
      <div className="space-y-4">
        {personaCreationSteps.map((step, index) => (
          <div key={index} className="">
            <h3 className="text-lg font-semibold">{step.title}</h3>
            <p className="">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PersonaPart4;
