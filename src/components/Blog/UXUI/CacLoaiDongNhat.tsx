import React from "react";

const consistencyTypes = [
  {
    title: "Đồng nhất về hình ảnh (Visual Consistency)",
    description:
      "Là việc đảm bảo màu sắc, kiểu chữ, biểu tượng, nút bấm và khoảng cách đều nhất quán trên toàn bộ thiết kế.",
    example:
      "✅ Mọi tiêu đề trên website đều dùng font Roboto Bold 24px.\n✅ Các nút CTA đều có màu xanh dương (#007BFF).\n✅ Khoảng cách giữa các phần tử luôn theo chuẩn 8px, 16px, 32px.",
    badExample:
      "❌ Một trang dùng Roboto, trang khác dùng Arial.\n❌ Nút bấm trên trang này màu xanh, nhưng trên trang khác lại màu đỏ.",
    icon: "📌",
  },
  {
    title: "Đồng nhất về hành vi (Functional Consistency)",
    description:
      "Là việc giữ cho các thành phần UI hoạt động theo cùng một cách trên toàn bộ hệ thống.",
    example:
      "✅ Bấm vào biểu tượng giỏ hàng ở mọi trang đều dẫn đến trang thanh toán.\n✅ Nút 'Lưu' luôn có cùng một chức năng trên tất cả các màn hình.",
    badExample:
      "❌ Ở trang này, bấm vào logo sẽ quay về trang chủ, nhưng ở trang khác lại không.\n❌ Một số nút 'Lưu' yêu cầu xác nhận, một số khác thì không.",
    icon: "📌",
  },
  {
    title: "Đồng nhất về giọng điệu & nội dung (Content Consistency)",
    description:
      "Là việc giữ cho phong cách viết, cách sử dụng từ ngữ và giọng điệu trên toàn bộ sản phẩm luôn thống nhất.",
    example:
      "✅ Nếu ứng dụng dùng giọng điệu thân thiện, nó nên nhất quán khắp nơi:\nTốt: 'Bạn có chắc chắn muốn xóa không?'\nKhông tốt: 'Xác nhận xóa dữ liệu?'",
    badExample:
      "❌ Một trang sử dụng từ 'Đăng ký', trang khác lại dùng 'Tạo tài khoản'.\n❌ Một số chỗ dùng cách xưng hô trang trọng, một số khác lại dùng giọng điệu thân mật.",
    icon: "📌",
  },
  {
    title: "Đồng nhất trên các nền tảng (Cross-platform Consistency)",
    description:
      "Là việc đảm bảo giao diện và trải nghiệm giống nhau trên web, mobile và desktop.",
    example:
      "✅ Giao diện và chức năng của ứng dụng trên iOS, Android và web đều tương tự nhau.\n✅ Cùng một thao tác (vuốt để xóa) hoạt động giống nhau trên mọi nền tảng.",
    badExample:
      "❌ Phiên bản mobile có tính năng 'Dark Mode', nhưng phiên bản web lại không có.\n❌ Trên iOS, vuốt sang trái để xóa, nhưng trên Android lại vuốt sang phải.",
    icon: "📌",
  },
];

const CacLoaiTinhDongNhat = () => {
  return (
    <div className="p-4">
      <ul className="space-y-4">
        {consistencyTypes.map((item, index) => (
          <li key={index} className="p-4">
            <h3 className="text-lg font-semibold flex items-center">
              <span className="mr-2">{item.icon}</span>
              {item.title}
            </h3>
            <p className="mt-1 text-gray-400">{item.description}</p>
            <p className="mt-1 text-gray-400 italic">Ví dụ tốt:</p>
            <pre className="text-gray-500">{item.example}</pre>
            <p className="mt-1 text-gray-400 italic">Ví dụ xấu:</p>
            <pre className="text-gray-500">{item.badExample}</pre>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CacLoaiTinhDongNhat;
