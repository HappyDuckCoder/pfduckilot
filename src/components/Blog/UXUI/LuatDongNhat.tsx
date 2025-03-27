import React from "react";

const consistencyRules = [
  {
    title: "Sử dụng Design System",
    description:
      "Design System giúp duy trì sự đồng nhất bằng cách định nghĩa quy tắc về màu sắc, kiểu chữ, khoảng cách, biểu tượng, v.v.",
    example:
      "Các hệ thống phổ biến:\n- Material Design (Google)\n- Human Interface Guidelines (Apple)\n- Bootstrap Design System",
    icon: "📌",
  },
  {
    title: "Dùng Component Library (Thư viện giao diện)",
    description:
      "Khi thiết kế UI, sử dụng các thành phần lặp lại như Button, Input, Card để đảm bảo nhất quán.",
    example: "Ví dụ: Trong Figma, bạn có thể tạo Components để tái sử dụng.",
    icon: "📌",
  },
  {
    title: "Giữ nguyên mô hình tương tác quen thuộc",
    description:
      "Nếu người dùng đã quen với cách hoạt động của một tính năng, đừng thay đổi nó quá nhiều.",
    example:
      "Ví dụ: Nút 'Like' trên Facebook luôn là hình trái tim, không nên thay đổi sang hình khác.",
    icon: "📌",
  },
  {
    title: "Áp dụng chuẩn về khoảng cách, typography & màu sắc",
    description:
      "Dùng các khoảng cách chuẩn như 4px, 8px, 16px, 32px để đảm bảo giao diện gọn gàng.\nDùng tối đa 3 font chữ trong một sản phẩm để tránh rối mắt.\nGiữ bảng màu đơn giản, không nên sử dụng quá nhiều màu khác nhau.",
    icon: "📌",
  },
  {
    title: "Kiểm tra đồng nhất bằng quy trình UX Testing",
    description:
      "Kiểm tra xem người dùng có bị nhầm lẫn khi sử dụng không.\nDùng công cụ như Figma, Adobe XD, Sketch để tạo nguyên mẫu và kiểm tra consistency.",
    icon: "📌",
  },
];

const QuyTacGiupDuyTriTinhDongNhat = () => {
  return (
    <div className="p-4">
      <ul className="space-y-4">
        {consistencyRules.map((rule, index) => (
          <li key={index} className="p-4">
            <h3 className="text-lg font-semibold flex items-center">
              <span className="mr-2">{rule.icon}</span>
              {rule.title}
            </h3>
            <p className="mt-1 text-gray-400">{rule.description}</p>
            {rule.example && (
              <p className="mt-1 text-gray-400 italic">Ví dụ:</p>
            )}
            {rule.example && (
              <pre className="text-gray-500">{rule.example}</pre>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default QuyTacGiupDuyTriTinhDongNhat;
