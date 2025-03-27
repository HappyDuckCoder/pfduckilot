import React from "react";

const spacingGuidelines = [
  {
    title: "Khoảng cách dòng (Line Height - Leading)",
    description:
      "Là khoảng cách giữa các dòng trong đoạn văn. Nếu quá nhỏ, văn bản sẽ bị dày đặc và khó đọc; nếu quá lớn, các dòng sẽ bị rời rạc.",
    rule: "Line height = 1.4x - 1.6x kích thước chữ để dễ đọc.",
    example: "Ví dụ: Nếu font chữ là 16px, thì line height nên khoảng 22-26px.",
    icon: "📌",
  },
  {
    title: "Khoảng cách giữa các đoạn văn (Paragraph Spacing)",
    description:
      "Là khoảng cách giữa các đoạn văn để giúp tách biệt nội dung, giúp mắt dễ dàng quét thông tin hơn.",
    rule: "Paragraph Spacing ≈ 1.5x - 2x Line Height.",
    example:
      "Nếu line height là 24px, khoảng cách giữa các đoạn nên từ 36-48px.",
    icon: "📌",
  },
  {
    title: "Khoảng cách giữa các phần tử giao diện (Padding & Margin)",
    description:
      "Là khoảng cách giữa các thành phần như nút bấm, tiêu đề, hình ảnh, card, v.v.",
    rule: "Dùng khoảng cách theo bội số của 4px (4, 8, 16, 24, 32, 40px).",
    example:
      "Khoảng cách nhỏ (4-8px) cho icon & text, trung bình (16-24px) cho tiêu đề & đoạn văn, lớn (32-64px) cho các phần trên trang.",
    icon: "📌",
  },
  {
    title: "Khoảng trắng (White Space hoặc Negative Space)",
    description:
      "Là không gian trống giữa các phần nội dung trên giao diện giúp bố cục thoáng đãng hơn.",
    rule: "Có 2 loại: Chủ động (tạo khoảng trống để nhấn mạnh) và Thụ động (tự nhiên từ khoảng cách chữ, dòng).",
    example: "Apple sử dụng nhiều khoảng trắng để làm nổi bật sản phẩm.",
    warning: "❌ Trang web nhồi nhét quá nhiều thông tin sẽ gây rối mắt.",
    icon: "📌",
  },
];

const SpacingGuidelines = () => {
  return (
    <div className="p-4">
      <ul className="space-y-4">
        {spacingGuidelines.map((item, index) => (
          <li key={index} className="p-4">
            <h3 className="text-lg font-semibold flex items-center">
              <span className="mr-2">{item.icon}</span>
              {item.title}
            </h3>
            <p className="mt-1 text-gray-400">{item.description}</p>
            <p className="mt-1 text-gray-400 font-medium">{item.rule}</p>
            {item.example && (
              <p className="mt-1 text-gray-400 italic">{item.example}</p>
            )}
            {item.warning && (
              <p className="mt-1 text-grey-400 font-bold">{item.warning}</p>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SpacingGuidelines;
