import React from "react";
import { CheckCircle, XCircle } from "lucide-react";

interface ExampleItem {
  good: string;
  bad: string;
}

interface GuidelineItem {
  title: string;
  description: string;
  examples: ExampleItem[];
  additionalExamples: {
    good: string[];
    bad: string[];
  };
}

const FittsLaw: React.FC = () => {
  const guidelines: GuidelineItem[] = [
    {
      title: "1. Kích thước nút bấm phải đủ lớn",
      description:
        "Những yếu tố quan trọng (nút CTA, menu, icon) cần đủ lớn để người dùng dễ bấm, đặc biệt trên thiết bị di động.",
      examples: [
        {
          good: 'Nút "Mua ngay" có kích thước tối thiểu 44x44px theo Apple Guidelines.',
          bad: "Nút bấm quá nhỏ, người dùng dễ bấm nhầm.",
        },
      ],
      additionalExamples: {
        good: [
          "Các nút điều khiển trên ứng dụng ngân hàng có kích thước lớn, dễ dàng nhấn chính xác khi giao dịch.",
          'Nút "Đăng ký" trên form đăng ký có chiều rộng 100% của form, dễ nhấn trên mọi thiết bị.',
          "Các checkbox trong danh sách được thiết kế lớn hơn tiêu chuẩn để người dùng dễ chọn.",
        ],
        bad: [
          "Nút đóng (X) trên cửa sổ pop-up chỉ có kích thước 16x16px, người dùng phải nhắm chính xác để đóng.",
          "Các liên kết trong footer website được đặt quá gần nhau và nhỏ, khó chọn trên thiết bị di động.",
          "Icon chia sẻ trong ứng dụng đọc tin tức quá nhỏ, dễ nhấn nhầm vào nút lưu bên cạnh.",
        ],
      },
    },
    {
      title: "2. Đặt nút quan trọng ở vị trí dễ tiếp cận",
      description:
        "Các nút quan trọng nên được đặt gần khu vực tương tác chính để giảm khoảng cách di chuyển chuột hoặc ngón tay.",
      examples: [
        {
          good: "Trên mobile, menu điều hướng nằm ở cạnh dưới (dễ chạm bằng ngón cái).",
          bad: "Menu đặt trên cùng màn hình, khó với tới khi dùng điện thoại một tay.",
        },
      ],
      additionalExamples: {
        good: [
          'Nút "Thêm vào giỏ hàng" đặt ngay dưới thông tin sản phẩm, không cần cuộn trang.',
          "Thanh công cụ soạn thảo trong ứng dụng ghi chú hiển thị ngay trên bàn phím.",
          'Nút "Gọi ngay" trên website dịch vụ khẩn cấp được cố định ở góc màn hình, luôn trong tầm với.',
        ],
        bad: [
          'Nút "Xác nhận thanh toán" đặt ở cuối trang, buộc người dùng phải cuộn qua nhiều thông tin không liên quan.',
          "Tính năng tìm kiếm ẩn trong menu phụ, cần nhiều thao tác để truy cập.",
          'Nút "Đăng nhập" trên ứng dụng mobile đặt ở góc trên bên phải, xa khỏi vùng dễ với tới của ngón tay.',
        ],
      },
    },
    {
      title: "3. Tăng kích thước vùng bấm (Clickable Area)",
      description:
        "Không chỉ làm lớn nút bấm, mà còn tăng vùng tương tác xung quanh để người dùng dễ bấm hơn.",
      examples: [
        {
          good: "Một icon nhỏ nhưng có vùng bấm lớn hơn icon thật sự.",
          bad: "Chỉ có thể bấm đúng vào icon, không có vùng chạm mở rộng.",
        },
      ],
      additionalExamples: {
        good: [
          "Toàn bộ card sản phẩm có thể nhấp vào được, không chỉ riêng tiêu đề hoặc nút.",
          "Vùng bấm của checkbox trong danh sách nhiệm vụ mở rộng ra toàn bộ dòng văn bản.",
          "Trong lịch ứng dụng, mỗi ngày có vùng tương tác lớn hơn số hiển thị.",
        ],
        bad: [
          "Trong gallery hình ảnh, chỉ có thể nhấp vào mũi tên nhỏ để chuyển ảnh, không phải toàn bộ vùng điều hướng.",
          "Các liên kết trong menu chỉ hoạt động khi nhấp chính xác vào chữ, không hoạt động khi nhấp vào khoảng trống xung quanh.",
          "Trong bảng dữ liệu, chỉ có thể nhấp vào biểu tượng chỉnh sửa rất nhỏ thay vì toàn bộ ô.",
        ],
      },
    },
    {
      title: "4. Tránh đặt các mục tiêu nhấp quá gần nhau",
      description:
        "Nếu các nút hoặc liên kết quá gần, người dùng có thể bấm nhầm.",
      examples: [
        {
          good: 'Các nút "Chấp nhận" và "Hủy" có khoảng cách đủ xa để tránh bấm nhầm.',
          bad: "Hai nút quan trọng đặt sát nhau, dễ gây lỗi thao tác.",
        },
      ],
      additionalExamples: {
        good: [
          "Các nút điều khiển video (play, pause, forward) có khoảng cách rõ ràng giữa chúng.",
          'Liên kết "Xóa tài khoản" và "Cập nhật thông tin" được đặt ở các khu vực khác nhau trên trang.',
          'Nút "Lưu" và "Hủy bỏ" trong form chỉnh sửa có màu sắc khác biệt và khoảng cách phù hợp.',
        ],
        bad: [
          'Các nút "Xóa" và "Chỉnh sửa" trong danh sách email đặt sát nhau, dễ dẫn đến xóa nhầm email quan trọng.',
          "Trên thanh công cụ soạn thảo, các biểu tượng format đặt quá gần nhau khiến người dùng khó chọn đúng.",
          'Nút "Đăng ký" và "Đăng nhập" đặt cạnh nhau với thiết kế gần giống nhau, người dùng dễ nhấn nhầm.',
        ],
      },
    },
    {
      title: "5. Giảm khoảng cách giữa hành động liên tiếp",
      description:
        "Các bước liên tiếp nhau nên gần nhau để người dùng thao tác nhanh hơn.",
      examples: [
        {
          good: 'Sau khi nhập email, nút "Tiếp tục" nằm ngay bên dưới.',
          bad: "Người dùng phải di chuyển xa để nhấp vào nút tiếp theo.",
        },
      ],
      additionalExamples: {
        good: [
          'Trong quy trình đặt hàng, nút "Tiếp tục thanh toán" xuất hiện ngay dưới thông tin giỏ hàng.',
          "Sau khi nhập thông tin thẻ, phần xác nhận mã OTP hiển thị tại cùng vị trí người dùng đang tập trung.",
          "Khi hoàn thành một bước trong wizard, nút điều hướng tiếp theo nằm ở vị trí người dùng đang nhìn.",
        ],
        bad: [
          'Sau khi điền form đăng ký ở giữa trang, nút "Đăng ký" lại nằm ở phía dưới cùng của trang.',
          "Trong ứng dụng chỉnh sửa ảnh, sau khi chọn hiệu ứng, người dùng phải di chuyển lên đầu màn hình để áp dụng.",
          "Sau khi xem video, các đề xuất nội dung liên quan hiển thị ở một tab khác, yêu cầu nhiều thao tác di chuyển.",
        ],
      },
    },
  ];

  return (
    <div className="mx-auto p-6 bg-white">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-blue-800 flex items-center">
          Fitts&apos; Law – Khoảng cách và kích thước ảnh hưởng đến khả năng
          nhấp
          <span className="ml-2 text-4xl">🎯</span>
        </h1>

        <div className="mt-6 bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
          <h2 className="text-xl font-semibold mb-3">
            1. Fitts&apos; Law là gì?
          </h2>
          <p className="mb-4">
            Fitts&apos; Law (Định luật Fitts) là nguyên tắc trong UX/UI nói
            rằng:
          </p>

          <div className="p-4 bg-white rounded-md border border-blue-200 mb-4">
            <p className="font-medium text-blue-800 flex">
              <span className="mr-2">📌</span>
              &quot;Thời gian để nhấp vào một mục tiêu (nút, link, icon) phụ
              thuộc vào khoảng cách và kích thước của mục tiêu đó.&quot;
            </p>
          </div>

          <div className="space-y-2 mb-4">
            <p className="flex items-start">
              <span className="mr-2">➡</span>
              <span>Càng gần & càng lớn → Dễ nhấp hơn.</span>
            </p>
            <p className="flex items-start">
              <span className="mr-2">➡</span>
              <span>Càng xa & càng nhỏ → Khó nhấp hơn.</span>
            </p>
          </div>

          <div className="mt-4">
            <p className="font-medium flex items-center">
              <span className="mr-2">🚀</span>
              Ví dụ thực tế:
            </p>
            <div className="mt-2 pl-6 space-y-2">
              <div className="flex items-start">
                <CheckCircle className="text-green-500 mr-2 h-5 w-5 mt-0.5 flex-shrink-0" />
                <p className="text-green-700">
                  <span className="font-medium">Good UX:</span> Nút
                  &quot;Gửi&quot; trên form có kích thước lớn và đặt gần ô nhập
                  liệu.
                </p>
              </div>
              <div className="flex items-start">
                <XCircle className="text-red-500 mr-2 h-5 w-5 mt-0.5 flex-shrink-0" />
                <p className="text-red-700">
                  <span className="font-medium">Bad UX:</span> Nút &quot;Đăng
                  ký&quot; nhỏ xíu và nằm xa góc màn hình, khiến người dùng khó
                  nhấn.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          2. Ứng dụng Fitts&apos; Law vào thiết kế UI/UX
        </h2>

        <div className="space-y-8">
          {guidelines.map((item, index) => (
            <div
              key={index}
              className="bg-gray-50 p-6 rounded-lg border border-gray-200"
            >
              <h3 className="text-lg font-semibold mb-3 flex items-start">
                <span className="bg-blue-100 text-blue-800 rounded-full h-6 w-6 flex items-center justify-center mr-2 flex-shrink-0">
                  📌
                </span>
                {item.title}
              </h3>
              <p className="mb-4 pl-8">{item.description}</p>

              <div className="pl-8 mt-4">
                <p className="font-medium flex items-center mb-3">
                  <span className="mr-2">🚀</span>
                  Ví dụ:
                </p>

                <div className="space-y-3 pl-6">
                  {item.examples.map((example, idx) => (
                    <div key={idx}>
                      <div className="flex items-start">
                        <CheckCircle className="text-green-500 mr-2 h-5 w-5 mt-0.5 flex-shrink-0" />
                        <p className="text-green-700">
                          <span className="font-medium">Good UX:</span>{" "}
                          {example.good}
                        </p>
                      </div>
                      <div className="flex items-start mt-2">
                        <XCircle className="text-red-500 mr-2 h-5 w-5 mt-0.5 flex-shrink-0" />
                        <p className="text-red-700">
                          <span className="font-medium">Bad UX:</span>{" "}
                          {example.bad}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Additional Examples Section */}
              <div className="mt-6 pl-8 pt-4 border-t border-gray-200">
                <p className="font-medium mb-4">Thêm các ví dụ:</p>

                <div className="bg-green-50 p-4 rounded-md mb-4">
                  <p className="font-medium text-green-800 mb-3">
                    Ví dụ thiết kế tốt:
                  </p>
                  <ul className="list-disc pl-5 space-y-2">
                    {item.additionalExamples.good.map((example, idx) => (
                      <li key={idx} className="text-green-700">
                        {example}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-red-50 p-4 rounded-md">
                  <p className="font-medium text-red-800 mb-3">
                    Ví dụ thiết kế cần cải thiện:
                  </p>
                  <ul className="list-disc pl-5 space-y-2">
                    {item.additionalExamples.bad.map((example, idx) => (
                      <li key={idx} className="text-red-700">
                        {example}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FittsLaw;
