import React from "react";

const YeuToTuongPhan = () => {
  const contrastElements = [
    {
      title: "Tương phản về màu sắc (Color Contrast)",
      description:
        "Dùng các màu đối lập nhau để làm nổi bật nội dung quan trọng. Đảm bảo tỷ lệ tương phản phù hợp để văn bản dễ đọc.",
      examples: [
        "✅ Chữ đen trên nền trắng (tương phản cao, dễ đọc).",
        "❌ Chữ xám nhạt trên nền trắng (tương phản thấp, khó đọc).",
      ],
    },
    {
      title: "Tương phản về kích thước (Size Contrast)",
      description:
        "Dùng kích thước khác nhau để nhấn mạnh mức độ quan trọng của nội dung. Tiêu đề lớn hơn nội dung giúp người dùng dễ nhận biết cấu trúc trang.",
      examples: [
        "✅ Tiêu đề H1 (24px, đậm), nội dung đoạn văn (16px, thường).",
        "❌ Cả tiêu đề và nội dung đều 16px, làm giảm sự phân cấp thông tin.",
      ],
    },
    {
      title: "Tương phản về độ đậm nhạt (Weight Contrast)",
      description:
        "Dùng độ dày của font để làm nổi bật nội dung quan trọng. Tiêu đề hoặc từ khóa có thể được in đậm để thu hút sự chú ý.",
      examples: [
        "✅ Từ khóa quan trọng được in đậm trong đoạn văn.",
        "❌ Toàn bộ văn bản có cùng độ đậm, khó tập trung vào nội dung chính.",
      ],
    },
    {
      title: "Tương phản về kiểu chữ (Font Contrast)",
      description:
        "Kết hợp các loại font khác nhau để tạo sự khác biệt giữa nội dung. Nên giới hạn số lượng font (tối đa 2-3 font) để tránh rối mắt.",
      examples: [
        "✅ Kết hợp Sans-serif (nội dung) + Serif (tiêu đề).",
        "❌ Dùng quá nhiều font khác nhau làm mất tính đồng nhất.",
      ],
    },
    {
      title: "Tương phản về khoảng cách (Spacing Contrast)",
      description:
        "Dùng khoảng cách hợp lý để phân tách các nhóm nội dung. Giúp người dùng dễ đọc và nhận biết từng phần trong giao diện.",
      examples: [
        "✅ Dùng khoảng trắng (white space) để tách biệt các phần nội dung.",
        "❌ Tất cả nội dung dày đặc, không có khoảng cách, gây khó đọc.",
      ],
    },
    {
      title: "Tương phản về hình dạng (Shape Contrast)",
      description:
        "Dùng các hình dạng khác nhau để làm nổi bật các yếu tố trong giao diện. Đặc biệt hữu ích khi thiết kế nút bấm hoặc icon.",
      examples: [
        "✅ Nút bấm có góc bo tròn để dễ nhận diện.",
        "❌ Các nút và nội dung đều có hình chữ nhật giống nhau, không tạo sự khác biệt.",
      ],
    },
  ];

  return (
    <div className="p-4">
      <ul className="space-y-6">
        {contrastElements.map((item, index) => (
          <li key={index} className="p-4 border rounded-lg shadow-md">
            <h3 className="text-lg font-semibold flex items-center">
              <span className="mr-2 text-xl">📌</span> {item.title}
            </h3>
            <p className="mt-2">{item.description}</p>
            <ul className="mt-2 space-y-1">
              {item.examples.map((example, i) => (
                <li key={i} className="flex items-start">
                  {/* <span className="mr-2 text-lg">•</span> */}
                  <p>{example}</p>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default YeuToTuongPhan;
