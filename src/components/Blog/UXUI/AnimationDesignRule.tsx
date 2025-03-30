import React, { useState } from "react";
import AnimatedTabs from "./AnimatedTab";
import TimingAnimation from "./TimingAnimation";

const AnimationDesignRules = () => {
  // State để kiểm soát hiệu ứng demo cho mỗi section
  const [showDemo1, setShowDemo1] = useState(false);
  const [showDemo2, setShowDemo2] = useState(false);
  const [showDemo3, setShowDemo3] = useState(false);

  return (
    <div className="container mx-auto p-4 max-w-6xl">
      <div className="animate-fadeIn">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          Quy tắc thiết kế UI Animation
        </h2>

        {/* Section 1: Timing & Easing */}
        <section className="mb-12 transition-all duration-500 transform hover:translate-y-[-4px]">
          <h3 className="text-xl font-semibold text-blue-700 mb-4 flex items-center">
            <span className="bg-blue-700 text-white rounded-full w-8 h-8 inline-flex justify-center items-center mr-2">
              1
            </span>
            Timing & Easing
          </h3>
          <p className="text-gray-700 mb-4">
            Easing là cách định nghĩa chuyển động tự nhiên hơn thay vì chuyển
            động tuyến tính đều. Các chuyển động tự nhiên có gia tốc tăng dần
            rồi chậm lại.
          </p>

          <div className="bg-white rounded-lg shadow-md p-4 mb-6">
            <h4 className="font-medium text-gray-800 mb-3">
              <span className="text-green-600 mr-2">✅</span> Nguyên tắc thời
              gian:
            </h4>
            <ul className="space-y-2 ml-8 list-disc text-gray-700">
              <li>
                Dùng Easing (Gia tốc mượt mà) thay vì chuyển động tuyến tính
              </li>
              <li>Animation đơn giản: 200 – 400ms</li>
              <li>Animation phức tạp: 600 – 800ms</li>
              <li>Tránh animation quá chậm khiến người dùng phải chờ đợi</li>
            </ul>
          </div>

          <button
            onClick={() => setShowDemo1(!showDemo1)}
            className="mb-4 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded transition-colors duration-300"
          >
            {showDemo1 ? "Ẩn demo" : "Xem demo"}
          </button>

          {showDemo1 && <TimingAnimation />}
        </section>

        {/* Section 2: Purposeful Animation */}
        <section className="mb-12 transition-all duration-500 transform hover:translate-y-[-4px]">
          <h3 className="text-xl font-semibold text-blue-700 mb-4 flex items-center">
            <span className="bg-blue-700 text-white rounded-full w-8 h-8 inline-flex justify-center items-center mr-2">
              2
            </span>
            Purposeful Animation
          </h3>
          <p className="text-gray-700 mb-4">
            Animation phải có mục đích rõ ràng, không nên thêm chỉ để trang trí.
            Mỗi chuyển động cần truyền đạt thông tin hoặc tăng cường trải nghiệm
            người dùng.
          </p>

          <div className="bg-white rounded-lg shadow-md p-4 mb-6">
            <h4 className="font-medium text-gray-800 mb-3">
              <span className="text-green-600 mr-2">✅</span> Các mục đích hợp
              lý của animation:
            </h4>
            <ul className="space-y-2 ml-8 list-disc text-gray-700">
              <li>
                Phản hồi tương tác (Feedback): Xác nhận hành động của người dùng
              </li>
              <li>
                Hướng dẫn chú ý (Attention): Hướng người dùng đến thông tin quan
                trọng
              </li>
              <li>
                Liên tục (Continuity): Giúp người dùng hiểu mối quan hệ giữa các
                phần tử
              </li>
              <li>
                Trạng thái (State): Thể hiện quá trình chuyển đổi giữa các trạng
                thái
              </li>
            </ul>
          </div>

          <button
            onClick={() => setShowDemo2(!showDemo2)}
            className="mb-4 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded transition-colors duration-300"
          >
            {showDemo2 ? "Ẩn demo" : "Xem demo"}
          </button>

          {showDemo2 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6 animate-fadeIn">
              <div className="bg-white rounded-lg shadow-md p-4">
                <h4 className="font-medium text-gray-800 mb-3">
                  <span className="text-green-600 mr-2">✅</span> Ví dụ tốt:
                </h4>

                <div className="space-y-4">
                  {/* Button với loading state */}
                  <div>
                    <p className="text-sm text-gray-600 mb-2">
                      Nút gửi với trạng thái loading:
                    </p>
                    <button
                      className={`bg-blue-500 text-white px-4 py-2 rounded flex items-center justify-center min-w-[100px]`}
                      onClick={(e) => {
                        const btn = e.currentTarget;
                        btn.classList.add("opacity-75");
                        btn.innerHTML =
                          '<svg class="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>Đang gửi';
                        setTimeout(() => {
                          btn.classList.remove("opacity-75");
                          btn.innerHTML = "Gửi";
                        }, 1500);
                      }}
                    >
                      Gửi
                    </button>
                  </div>

                  {/* Tab transition */}
                  <AnimatedTabs />
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md p-4">
                <h4 className="font-medium text-gray-800 mb-3">
                  <span className="text-red-600 mr-2">❌</span> Ví dụ cần tránh:
                </h4>

                <div className="space-y-4">
                  {/* Decorative animation without purpose */}
                  <div>
                    <p className="text-sm text-gray-600 mb-2">
                      Animation chỉ để trang trí:
                    </p>
                    <div className="border p-4 rounded relative overflow-hidden">
                      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500 animate-pulse"></div>
                      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-pink-500 animate-pulse"></div>
                      <div className="absolute top-0 left-0 h-full w-1 bg-gradient-to-b from-blue-500 to-purple-500 animate-pulse"></div>
                      <div className="absolute top-0 right-0 h-full w-1 bg-gradient-to-b from-purple-500 to-pink-500 animate-pulse"></div>
                      <p>Nội dung với viền chuyển động không có mục đích</p>
                    </div>
                  </div>

                  {/* Inconsistent animations */}
                  <div>
                    <p className="text-sm text-gray-600 mb-2">
                      Animation không nhất quán:
                    </p>
                    <div className="flex space-x-2">
                      <button className="px-3 py-1 bg-blue-500 text-white rounded transition-transform duration-300 hover:scale-110">
                        Nút 1
                      </button>
                      <button className="px-3 py-1 bg-blue-500 text-white rounded transition-all duration-500 hover:rotate-3 hover:bg-green-500">
                        Nút 2
                      </button>
                      <button className="px-3 py-1 bg-blue-500 text-white rounded animate-bounce">
                        Nút 3
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
            <h4 className="font-medium text-blue-700 mb-2">
              <span className="mr-2">📌</span> Nguyên tắc áp dụng:
            </h4>
            <p className="text-gray-700">
              Luôn tự hỏi: &ldquo;Animation này giúp người dùng hiểu gì?&ldquo;
              và &ldquo;Nó có vai trò gì trong trải nghiệm?&ldquo;. Nếu không
              trả lời được, hãy xem xét loại bỏ animation đó.
            </p>
          </div>
        </section>

        {/* Section 3: Keep It Subtle */}
        <section className="mb-12 transition-all duration-500 transform hover:translate-y-[-4px]">
          <h3 className="text-xl font-semibold text-blue-700 mb-4 flex items-center">
            <span className="bg-blue-700 text-white rounded-full w-8 h-8 inline-flex justify-center items-center mr-2">
              3
            </span>
            Keep It Subtle
          </h3>
          <p className="text-gray-700 mb-4">
            Animation nên tinh tế và hỗ trợ trải nghiệm người dùng, không gây
            phân tâm hoặc quá rực rỡ. Cần tránh các chuyển động phức tạp, dài
            hoặc hiệu ứng gây mất tập trung.
          </p>

          <div className="bg-white rounded-lg shadow-md p-4 mb-6">
            <h4 className="font-medium text-gray-800 mb-3">
              <span className="text-green-600 mr-2">✅</span> Các nguyên tắc cần
              tuân thủ:
            </h4>
            <ul className="space-y-2 ml-8 list-disc text-gray-700">
              <li>Giữ hiệu ứng nhẹ nhàng, tự nhiên và phù hợp mục đích</li>
              <li>Không để animation cản trở người dùng hoàn thành tác vụ</li>
              <li>
                Áp dụng minimum viable animation (MVA): chỉ đủ để truyền tải
                thông điệp
              </li>
              <li>
                Ưu tiên hiệu ứng transform và opacity thay vì
                left/top/right/bottom để tối ưu hiệu suất
              </li>
            </ul>
          </div>

          <button
            onClick={() => setShowDemo3(!showDemo3)}
            className="mb-4 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded transition-colors duration-300"
          >
            {showDemo3 ? "Ẩn demo" : "Xem demo"}
          </button>

          {showDemo3 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6 animate-fadeIn">
              <div className="bg-white rounded-lg shadow-md p-4">
                <h4 className="font-medium text-gray-800 mb-3">
                  <span className="text-green-600 mr-2">✅</span> Ví dụ tốt:
                </h4>

                <div className="space-y-4">
                  {/* Subtle button */}
                  <div>
                    <p className="text-sm text-gray-600 mb-2">
                      Nút phóng to nhẹ:
                    </p>
                    <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded transition-transform duration-200 hover:scale-[1.03] focus:outline-none">
                      Nút tinh tế
                    </button>
                  </div>

                  {/* Hover card */}
                  <div>
                    <p className="text-sm text-gray-600 mb-2">
                      Card với shadow subtle:
                    </p>
                    <div className="bg-gray-100 p-3 rounded transition-all duration-300 hover:shadow-md cursor-pointer">
                      Card với hiệu ứng hover nhẹ nhàng
                    </div>
                  </div>

                  {/* Smooth color transition */}
                  <div>
                    <p className="text-sm text-gray-600 mb-2">
                      Chuyển đổi màu mượt mà:
                    </p>
                    <div className="flex space-x-2">
                      <span className="px-3 py-1 bg-gray-200 rounded transition-colors duration-300 hover:bg-blue-100 hover:text-blue-700 cursor-pointer">
                        Item 1
                      </span>
                      <span className="px-3 py-1 bg-gray-200 rounded transition-colors duration-300 hover:bg-blue-100 hover:text-blue-700 cursor-pointer">
                        Item 2
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md p-4">
                <h4 className="font-medium text-gray-800 mb-3">
                  <span className="text-red-600 mr-2">❌</span> Ví dụ cần tránh:
                </h4>

                <div className="space-y-4">
                  {/* Over-animated button */}
                  <div>
                    <p className="text-sm text-gray-600 mb-2">
                      Nút bấm xoay vòng khi hover:
                    </p>
                    <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded transition-all duration-500 hover:rotate-[360deg] focus:outline-none">
                      Nút quá đà
                    </button>
                  </div>

                  {/* Jumping text */}
                  <div>
                    <p className="text-sm text-gray-600 mb-2">
                      Text nhảy múa khi hover:
                    </p>
                    <p className="inline-block bg-gray-100 p-2 rounded hover:animate-bounce">
                      Text nhảy lên xuống
                    </p>
                  </div>

                  {/* Overly complex transition */}
                  <div>
                    <p className="text-sm text-gray-600 mb-2">
                      Nhiều hiệu ứng cùng lúc:
                    </p>
                    <div className="bg-purple-100 p-3 rounded transition-all duration-700 hover:shadow-xl hover:rotate-2 hover:scale-110 hover:bg-yellow-100 cursor-pointer">
                      Quá nhiều hiệu ứng cùng lúc
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
            <h4 className="font-medium text-blue-700 mb-2">
              <span className="mr-2">📌</span> Lưu ý:
            </h4>
            <p className="text-gray-700">
              Tránh hiệu ứng gây chóng mặt hoặc khó chịu. Bằng cách giữ
              animation tinh tế, bạn đảm bảo trải nghiệm người dùng được nâng
              cao mà không gây phân tâm hoặc khó chịu.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AnimationDesignRules;
