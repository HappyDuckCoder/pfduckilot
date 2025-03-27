import React from "react";

const spacingRules = [
  {
    title: "Sử dụng hệ thống lưới (Grid System) để giữ bố cục gọn gàng",
    description: "Dùng lưới 8pt (8px) hoặc 4pt (4px) để căn chỉnh khoảng cách.",
    example:
      "Material Design của Google sử dụng lưới 8px để giữ bố cục nhất quán.",
    icon: "📌",
  },
  {
    title: "Giữ khoảng cách đồng đều giữa các phần tử",
    description: "Không để khoảng cách quá chênh lệch gây mất cân bằng.",
    example:
      "Nếu tiêu đề cách nội dung 24px, thì các tiêu đề khác cũng nên có khoảng cách tương tự.",
    icon: "📌",
  },
  {
    title: "Tạo sự phân cấp thị giác rõ ràng",
    description: "Dùng khoảng cách lớn hơn để tách các phần quan trọng.",
    example:
      "Tiêu đề cách nội dung 32px, trong khi dòng chữ nhỏ chỉ cách nhau 8px.",
    icon: "📌",
  },
  {
    title: "Tận dụng khoảng trắng để tăng khả năng tập trung",
    description:
      "Khoảng trắng xung quanh nút CTA giúp người dùng dễ nhận biết.",
    example: "Khoảng trắng giữa các đoạn nội dung giúp giảm mệt mỏi khi đọc.",
    icon: "📌",
  },
];

const SpacingRules = () => {
  return (
    <div className="p-4">
      <ul className="space-y-4">
        {spacingRules.map((item, index) => (
          <li key={index} className="p-4">
            <h3 className="text-lg font-semibold flex items-center">
              <span className="mr-2">{item.icon}</span>
              {item.title}
            </h3>
            <p className="mt-1 text-gray-400">{item.description}</p>
            {item.example && (
              <p className="mt-1 text-gray-400 italic">{item.example}</p>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SpacingRules;
