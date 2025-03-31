import React from "react";

const HickLaw = () => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 py-6 px-8">
        <h1 className="text-2xl md:text-3xl font-bold text-white flex items-center">
          Hick&#39;s Law – Quá nhiều lựa chọn làm giảm tốc độ quyết định
          <span className="ml-2 text-3xl">⚖️</span>
        </h1>
      </div>

      {/* Content */}
      <div className="p-6 md:p-8">
        {/* Section 1 */}
        <div className="mb-8">
          <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4">
            1. Hick&#39;s Law là gì?
          </h2>
          <p className="text-gray-700 mb-4">
            Hick&#39;s Law (Định luật Hick) là một nguyên tắc trong UX/UI nói
            rằng:
          </p>
          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-4">
            <p className="font-medium text-blue-800">
              📌 &apos;Thời gian để đưa ra quyết định tăng lên khi số lượng lựa
              chọn tăng lên.&apos;
            </p>
          </div>
          <p className="text-gray-700 mb-4">
            Nói cách khác, khi người dùng có quá nhiều lựa chọn, họ sẽ mất nhiều
            thời gian hơn để đưa ra quyết định, thậm chí có thể bị quá tải và
            không chọn gì cả.
          </p>

          <div className="mt-6">
            <h3 className="font-semibold text-gray-800 mb-2">
              🚀 Ví dụ thực tế:
            </h3>
            <div className="bg-green-50 rounded-lg p-4 mb-2">
              <p className="flex items-start">
                <span className="text-green-600 mr-2">✅</span>
                <span className="text-gray-800">
                  <span className="font-medium">Giao diện tối ưu:</span> Amazon
                  hiển thị danh mục chính đơn giản, sau đó phân loại chi tiết
                  khi người dùng đi sâu vào từng danh mục.
                </span>
              </p>
            </div>
            <div className="bg-red-50 rounded-lg p-4">
              <p className="flex items-start">
                <span className="text-red-600 mr-2">❌</span>
                <span className="text-gray-800">
                  <span className="font-medium">Giao diện kém UX:</span> Một
                  trang web có quá nhiều nút kêu gọi hành động (CTA) khiến người
                  dùng không biết nên nhấn vào đâu.
                </span>
              </p>
            </div>
          </div>
        </div>

        {/* Section 2 */}
        <div>
          <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4">
            2. Ứng dụng Hick&#39;s Law vào thiết kế UI/UX
          </h2>

          {/* Principle 1 */}
          <div className="mb-6">
            <h3 className="font-semibold text-gray-800 mb-2">
              📌 1. Giảm số lượng lựa chọn (Limit Choices)
            </h3>
            <p className="text-gray-700 mb-4">
              Quá nhiều tùy chọn khiến người dùng bối rối, vì vậy hãy chỉ hiển
              thị những lựa chọn quan trọng nhất.
            </p>
            <div className="ml-4">
              <h4 className="font-medium text-gray-800 mb-2">🚀 Ví dụ:</h4>
              <div className="bg-green-50 rounded-lg p-3 mb-2">
                <p className="flex items-start">
                  <span className="text-green-600 mr-2">✅</span>
                  <span className="text-gray-800">
                    <span className="font-medium">Good UX:</span> Menu chỉ có
                    5-7 mục chính thay vì hàng chục danh mục.
                  </span>
                </p>
              </div>
              <div className="bg-red-50 rounded-lg p-3">
                <p className="flex items-start">
                  <span className="text-red-600 mr-2">❌</span>
                  <span className="text-gray-800">
                    <span className="font-medium">Bad UX:</span> Hiển thị tất cả
                    30 danh mục sản phẩm trên cùng một menu.
                  </span>
                </p>
              </div>
            </div>
          </div>

          {/* Principle 2 */}
          <div className="mb-6">
            <h3 className="font-semibold text-gray-800 mb-2">
              📌 2. Nhóm thông tin theo danh mục (Chunking Information)
            </h3>
            <p className="text-gray-700 mb-4">
              Thay vì hiển thị tất cả thông tin một lúc, hãy nhóm chúng thành
              các danh mục nhỏ dễ hiểu.
            </p>
            <div className="ml-4">
              <h4 className="font-medium text-gray-800 mb-2">🚀 Ví dụ:</h4>
              <div className="bg-green-50 rounded-lg p-3 mb-2">
                <p className="flex items-start">
                  <span className="text-green-600 mr-2">✅</span>
                  <span className="text-gray-800">
                    <span className="font-medium">Good UX:</span> Google Drive
                    hiển thị các tệp theo thư mục (Docs, Sheets, Slides) thay vì
                    hiển thị tất cả file cùng lúc.
                  </span>
                </p>
              </div>
              <div className="bg-red-50 rounded-lg p-3">
                <p className="flex items-start">
                  <span className="text-red-600 mr-2">❌</span>
                  <span className="text-gray-800">
                    <span className="font-medium">Bad UX:</span> Một trang
                    thương mại điện tử liệt kê tất cả sản phẩm trên cùng một
                    trang mà không có bộ lọc.
                  </span>
                </p>
              </div>
            </div>
          </div>

          {/* Principle 3 */}
          <div className="mb-6">
            <h3 className="font-semibold text-gray-800 mb-2">
              📌 3. Dùng Progressive Disclosure (Tiết lộ dần dần)
            </h3>
            <p className="text-gray-700 mb-4">
              Thay vì đưa ra tất cả thông tin ngay từ đầu, chỉ hiển thị những gì
              cần thiết, phần còn lại sẽ hiển thị khi người dùng cần.
            </p>
            <div className="ml-4">
              <h4 className="font-medium text-gray-800 mb-2">🚀 Ví dụ:</h4>
              <div className="bg-green-50 rounded-lg p-3 mb-2">
                <p className="flex items-start">
                  <span className="text-green-600 mr-2">✅</span>
                  <span className="text-gray-800">
                    <span className="font-medium">Good UX:</span> Facebook chỉ
                    hiển thị phần mô tả bài viết ngắn, người dùng có thể nhấn
                    &apos;Xem thêm&apos; để đọc nội dung đầy đủ.
                  </span>
                </p>
              </div>
              <div className="bg-red-50 rounded-lg p-3">
                <p className="flex items-start">
                  <span className="text-red-600 mr-2">❌</span>
                  <span className="text-gray-800">
                    <span className="font-medium">Bad UX:</span> Hiển thị toàn
                    bộ nội dung ngay từ đầu khiến giao diện trở nên quá tải.
                  </span>
                </p>
              </div>
            </div>
          </div>

          {/* Principle 4 */}
          <div className="mb-6">
            <h3 className="font-semibold text-gray-800 mb-2">
              📌 4. Làm nổi bật lựa chọn quan trọng nhất
            </h3>
            <p className="text-gray-700 mb-4">
              Sử dụng màu sắc, kích thước hoặc icon để hướng dẫn người dùng đến
              hành động quan trọng.
            </p>
            <div className="ml-4">
              <h4 className="font-medium text-gray-800 mb-2">🚀 Ví dụ:</h4>
              <div className="bg-green-50 rounded-lg p-3 mb-2">
                <p className="flex items-start">
                  <span className="text-green-600 mr-2">✅</span>
                  <span className="text-gray-800">
                    <span className="font-medium">Good UX:</span> Nút &apos;Mua
                    ngay&apos; có màu nổi bật hơn các nút khác.
                  </span>
                </p>
              </div>
              <div className="bg-red-50 rounded-lg p-3">
                <p className="flex items-start">
                  <span className="text-red-600 mr-2">❌</span>
                  <span className="text-gray-800">
                    <span className="font-medium">Bad UX:</span> Tất cả các nút
                    trên trang web đều có màu giống nhau, khiến người dùng không
                    biết nên bấm vào đâu.
                  </span>
                </p>
              </div>
            </div>
          </div>

          {/* Principle 5 */}
          <div className="mb-6">
            <h3 className="font-semibold text-gray-800 mb-2">
              📌 5. Sử dụng mặc định thông minh (Smart Defaults)
            </h3>
            <p className="text-gray-700 mb-4">
              Hãy đặt những lựa chọn phổ biến nhất làm mặc định để giảm thời
              gian ra quyết định.
            </p>
            <div className="ml-4">
              <h4 className="font-medium text-gray-800 mb-2">🚀 Ví dụ:</h4>
              <div className="bg-green-50 rounded-lg p-3 mb-2">
                <p className="flex items-start">
                  <span className="text-green-600 mr-2">✅</span>
                  <span className="text-gray-800">
                    <span className="font-medium">Good UX:</span> Khi đăng ký
                    tài khoản, quốc gia được chọn mặc định là Việt Nam nếu hệ
                    thống nhận diện vị trí của người dùng.
                  </span>
                </p>
              </div>
              <div className="bg-red-50 rounded-lg p-3">
                <p className="flex items-start">
                  <span className="text-red-600 mr-2">❌</span>
                  <span className="text-gray-800">
                    <span className="font-medium">Bad UX:</span> Người dùng phải
                    chọn từ danh sách 200 quốc gia mà không có gợi ý.
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HickLaw;
