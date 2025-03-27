import React from "react";

const consistencyIssues = [
  {
    title: "Thay đổi thiết kế giữa các màn hình",
    description:
      "Một số trang có giao diện hiện đại, một số trang lại cũ kỹ. Điều này làm giảm tính nhất quán và gây khó chịu cho người dùng.",
    icon: "❌",
  },
  {
    title: "Sử dụng nhiều kiểu nút bấm khác nhau",
    description:
      "Có nơi dùng nút tròn, có nơi dùng nút vuông, có nơi màu xanh, có nơi màu đỏ. Việc sử dụng các kiểu nút khác nhau tạo sự lộn xộn và thiếu sự đồng nhất trong giao diện.",
    icon: "❌",
  },
  {
    title: "Sai lầm phổ biến khi không có tính đồng nhất",
    description:
      "Nút 'Gửi yêu cầu' trên một trang, nhưng trên trang khác lại là 'Gửi'. Điều này tạo sự nhầm lẫn và thiếu tính nhất quán trong giao diện người dùng.",
    icon: "❌",
  },
];

const LoiDongNhat = () => {
  return (
    <div className="p-4">
      <ul className="space-y-4">
        {consistencyIssues.map((issue, index) => (
          <li key={index} className="p-4">
            <h3 className="text-lg font-semibold flex items-center">
              <span className="mr-2">{issue.icon}</span>
              {issue.title}
            </h3>
            <p className="mt-1 text-gray-400">{issue.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LoiDongNhat;
