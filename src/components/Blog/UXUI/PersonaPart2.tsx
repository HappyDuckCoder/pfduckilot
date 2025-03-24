import React from "react";

const personaData = [
  {
    title: "Thông tin cá nhân",
    description: "Tuổi, giới tính, nghề nghiệp, trình độ học vấn.",
    example: "Lan, 28 tuổi, chuyên viên marketing.",
  },
  {
    title: "Mục tiêu và nhu cầu",
    description:
      "Mục tiêu khi sử dụng sản phẩm/dịch vụ, những gì họ mong đợi đạt được.",
    example:
      "Lan mong muốn quản lý chiến dịch quảng cáo hiệu quả, tiết kiệm thời gian.",
  },
  {
    title: "Động cơ và hành vi",
    description:
      "Các hành động thường ngày, cách thức tiếp cận thông tin và công nghệ.",
    example:
      "Luôn tìm kiếm các công cụ hỗ trợ làm việc hiệu quả trên điện thoại.",
  },
  {
    title: "Khó khăn và pain points",
    description:
      "Những trở ngại, vấn đề mà họ gặp phải trong quá trình sử dụng sản phẩm hiện có.",
    example: "Không hài lòng với giao diện phức tạp của phần mềm hiện tại.",
  },
  {
    title: "Thông tin tâm lý",
    description: "Tâm trạng, thái độ, giá trị và sở thích cá nhân.",
    example: "Lan đề cao sự tiện lợi và giao diện trực quan trong thiết kế.",
  },
];

const PersonaPart2 = () => {
  return (
    <div className="space-y-4">
      {personaData.map((item, index) => (
        <div key={index} className="p-4 border rounded-md bg-gray-50 shadow-sm">
          <h3 className="text-lg font-semibold text-blue-600">{item.title}</h3>
          <p className="text-gray-700 mt-1">{item.description}</p>
          <p className="italic text-gray-500 mt-1">
            Ví dụ: &quot;{item.example}&quot;
          </p>
        </div>
      ))}
    </div>
  );
};

export default PersonaPart2;
