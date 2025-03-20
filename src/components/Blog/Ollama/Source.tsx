import React from "react";

const Source = () => {
  return (
    <div className="mx-auto max-w-screen-md lg:max-w-screen-lg p-6 sm:p-8 md:p-10 bg-slate-100 shadow-lg rounded-xl">
      <h2 className="text-blue-600 text-xl font-semibold mb-2">
        Nguồn thu thập dữ liệu
      </h2>
      <p className="text-gray-700 mb-4">
        Dữ liệu được thu thập từ nhiều nguồn đáng tin cậy như hồ sơ bệnh án, hệ
        thống quản lý bệnh viện, tài liệu y khoa chính thống, và trang web của
        Trung tâm y tế Đà Lạt.
      </p>

      <h2 className="text-blue-600 text-xl font-semibold mb-2">
        Lý do sử dụng các nguồn dữ liệu này
      </h2>
      <ul className="text-gray-700 list-disc pl-6 mt-2">
        {[
          "Cung cấp thông tin chính xác và đáng tin cậy.",
          "Hỗ trợ chatbot trả lời đúng ngữ cảnh.",
          "Cải thiện trải nghiệm tìm kiếm thông tin y tế.",
          "Tối ưu hóa hệ thống tư vấn sức khỏe tự động.",
        ].map((reason, index) => (
          <li key={index}>{reason}</li>
        ))}
      </ul>

      <h2 className="text-blue-600 text-xl font-semibold mt-4">
        Danh sách nguồn tài liệu chính
      </h2>
      <ul className="text-gray-700 list-disc pl-6 mt-2">
        {[
          "Hồ sơ bệnh án điện tử từ Trung tâm y tế Đà Lạt.",
          "Dữ liệu từ hệ thống quản lý bệnh viện (HIS).",
          "Nghiên cứu y khoa và tài liệu hướng dẫn điều trị.",
          "Các bài báo khoa học từ các tạp chí y tế.",
        ].map((source, index) => (
          <li key={index}>{source}</li>
        ))}
      </ul>
    </div>
  );
};

export default Source;
