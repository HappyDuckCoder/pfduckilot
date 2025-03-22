import React from "react";

const steps = [
  {
    title: "Thu thập và làm sạch dữ liệu",
    details: [
      "Xác định nguồn dữ liệu phù hợp: tài liệu, website, cơ sở dữ liệu, v.v.",
      "Loại bỏ dữ liệu trùng lặp, lỗi thời hoặc không liên quan.",
      "Chuẩn hóa văn bản: loại bỏ ký tự đặc biệt, chuyển đổi chữ hoa - chữ thường.",
    ],
  },
  {
    title: "Chuyển đổi dữ liệu thành embedding",
    details: [
      "Sử dụng Deepseek để mã hóa văn bản thành vector số.",
      "Các vector này giúp máy tính hiểu và tìm kiếm dữ liệu dựa trên ý nghĩa.",
      "Cấu trúc embedding giúp tăng tốc quá trình tìm kiếm so với tìm kiếm thuần văn bản.",
    ],
  },
  {
    title: "Lưu trữ embedding vào Nomic",
    details: [
      "Sử dụng Nomic để tổ chức và lưu trữ embedding một cách hiệu quả.",
      "Cấu trúc lưu trữ giúp tăng tốc độ truy xuất và giảm dung lượng lưu trữ.",
      "Hỗ trợ tìm kiếm theo vector để nâng cao khả năng tìm kiếm thông tin.",
    ],
  },
  {
    title: "Triển khai tìm kiếm và truy xuất",
    details: [
      "Sử dụng các thuật toán tìm kiếm vector để truy xuất dữ liệu nhanh chóng.",
      "Áp dụng phương pháp tìm kiếm gần đúng để giảm thời gian xử lý.",
      "Kết hợp truy vấn ngữ nghĩa giúp cải thiện chất lượng kết quả tìm kiếm.",
    ],
  },
];

const IndexingProcess: React.FC = () => {
  return (
    <div className="mx-auto max-w-screen-md lg:max-w-screen-lg p-4 sm:p-6 md:p-8 lg:p-10 bg-slate-100 shadow-lg rounded-xl">
      <p className="text-sm sm:text-base md:text-lg leading-relaxed text-gray-700">
        Lập chỉ mục là bước quan trọng trong hệ thống RAG local, giúp tối ưu hóa
        khả năng tìm kiếm và truy xuất thông tin một cách hiệu quả. Quá trình
        này bao gồm nhiều giai đoạn từ thu thập dữ liệu, tiền xử lý, mã hóa dữ
        liệu đến lưu trữ và tối ưu hóa tìm kiếm.
      </p>
      <div className="mt-4">
        <p className="text-base font-semibold text-gray-800">
          Dưới đây là các bước quan trọng khi sử dụng <strong>Nomic</strong> và{" "}
          <strong>Deepseek</strong> để lập chỉ mục dữ liệu:
        </p>
        <ol className="pl-5 list-decimal text-gray-800 leading-loose">
          {steps.map((step, index) => (
            <li key={index} className="mt-2 text-sm sm:text-base md:text-lg">
              <strong>{step.title}:</strong>
              <ul className="list-disc pl-5">
                {step.details.map((detail, subIndex) => (
                  <li
                    key={subIndex}
                    className="text-xs sm:text-sm md:text-base"
                  >
                    {detail}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default IndexingProcess;
