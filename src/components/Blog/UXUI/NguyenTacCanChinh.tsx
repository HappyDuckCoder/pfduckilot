import React from "react";

const alignments = [
  {
    title: "Căn chỉnh trái (Left Alignment)",
    description:
      "Nội dung được căn lề bên trái, tạo sự quen thuộc và dễ đọc. Thường dùng trong văn bản, menu, danh sách.",
    icon: "📌",
  },
  {
    title: "Căn chỉnh phải (Right Alignment)",
    description:
      "Nội dung được căn lề bên phải, tạo cảm giác độc đáo. Thường dùng cho số liệu, biểu đồ, bảng tính.",
    example:
      "📊 Số liệu trong bảng tính Excel hoặc hóa đơn thường căn phải để dễ so sánh.",
    icon: "📌",
  },
  {
    title: "Căn chỉnh giữa (Center Alignment)",
    description:
      "Nội dung được căn giữa để tạo sự cân đối, nổi bật. Thích hợp cho tiêu đề, nút bấm quan trọng, lời trích dẫn.",
    example: "🏆 Các tiêu đề trang web, banner quảng cáo thường căn giữa.",
    warning:
      "❌ Không nên căn giữa quá nhiều nội dung văn bản vì sẽ làm giảm khả năng đọc.",
    icon: "📌",
  },
  {
    title: "Căn chỉnh đều (Justified Alignment)",
    description:
      "Nội dung căn chỉnh đều hai bên trái và phải, tạo bố cục gọn gàng. Thường dùng trong sách, báo, tài liệu dài.",
    example:
      "📰 Các bài báo thường căn đều để tạo khối văn bản thẳng hàng hai bên.",
    warning: "❌ Nếu khoảng cách giữa các từ quá xa, văn bản sẽ khó đọc.",
    icon: "📌",
  },
  {
    title: "Căn chỉnh dựa trên lưới (Grid Alignment)",
    description:
      "Dùng hệ thống lưới (grid system) để sắp xếp các phần tử trên giao diện. Được sử dụng nhiều trong thiết kế web và ứng dụng.",
    example:
      "🖥️ Bootstrap sử dụng hệ thống lưới 12 cột giúp thiết kế web linh hoạt hơn.",
    icon: "📌",
  },
  {
    title: "Nhất quán (Consistency)",
    description:
      "Cùng một loại nội dung thì nên căn chỉnh giống nhau. Tránh việc một số tiêu đề căn trái, một số căn giữa gây rối mắt.",
    icon: "📌",
  },
  {
    title: "Sử dụng lưới (Grid System)",
    description:
      "Lưới giúp sắp xếp các phần tử có cấu trúc rõ ràng. Một số hệ thống lưới phổ biến: 12-column grid (trong Bootstrap, Material Design), Baseline grid (căn chỉnh theo dòng chữ).",
    icon: "📌",
  },
  {
    title: "Căn chỉnh theo điểm neo (Visual Anchors)",
    description:
      "Đảm bảo các yếu tố quan trọng như tiêu đề, hình ảnh, nút CTA được căn chỉnh hợp lý. Giúp mắt người dùng di chuyển theo đúng hướng mong muốn.",
    example:
      "📌 Ví dụ: Trên form đăng ký, các nhãn (label) và ô nhập liệu phải thẳng hàng để dễ nhìn.",
    icon: "📌",
  },
];

const NguyenTacCanChinh = () => {
  return (
    <div className="p-4">
      <ul className="space-y-4">
        {alignments.map((align, index) => (
          <li key={index} className="p-4">
            <h3 className="text-lg font-semibold flex items-center">
              <span className="mr-2">{align.icon}</span>
              {align.title}
            </h3>
            <p className="mt-1 text-gray-400">{align.description}</p>
            {align.example && (
              <p className="mt-1 text-gray-400">{align.example}</p>
            )}
            {align.warning && (
              <p className="mt-1 text-gray-400">{align.warning}</p>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NguyenTacCanChinh;
