import React, { useState, useRef, useEffect } from "react";
import AnimationDesignRules from "./AnimationDesignRule";
import LoadingContent from "./Skeleton";

interface AnimationExampleProps {
  title: string;
  description: string;
  demoElement?: React.ReactNode;
}

const UiAnimationGuide: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isComplete, setIsComplete] = useState<boolean>(false);
  const loadingBarRef = useRef<HTMLDivElement>(null);

  const tabs = [
    "UI Animation là gì?",
    "Các loại Animation",
    "Quy tắc thiết kế",
  ];

  // Handle loading animation example
  const simulateLoading = () => {
    setIsLoading(true);
    setIsComplete(false);

    setTimeout(() => {
      setIsLoading(false);
      setIsComplete(true);

      setTimeout(() => {
        setIsComplete(false);
      }, 2000);
    }, 2000);
  };

  // Animation examples
  const microInteractions: AnimationExampleProps[] = [
    {
      title: "Button Hover & Click",
      description:
        "Hiệu ứng nút bấm thay đổi màu khi hover và phóng to khi nhấn.",
      demoElement: (
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md transition duration-300 transform hover:scale-105 active:scale-95"
          onClick={() => {}}
        >
          Hover & Click Me
        </button>
      ),
    },
    {
      title: "Like Animation",
      description: 'Icon "like" phóng to khi được nhấn.',
      demoElement: (
        <button className="group">
          <svg
            className="w-8 h-8 fill-current text-gray-400 group-hover:text-red-500 transition-all duration-300 transform group-hover:scale-110 group-active:scale-125"
            viewBox="0 0 24 24"
          >
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
        </button>
      ),
    },
    {
      title: "Error Shake",
      description: "Ô nhập rung nhẹ để báo lỗi khi nhập sai.",
      demoElement: (
        <div>
          <input
            type="text"
            placeholder="Email không hợp lệ..."
            className="border border-red-400 text-red-500 px-3 py-2 rounded-md focus:outline-none animate-wiggle"
          />
        </div>
      ),
    },
  ];

  const transitions: AnimationExampleProps[] = [
    {
      title: "Slide Down Menu",
      description: "Menu trượt xuống từ trên.",
      demoElement: (
        <div className="relative">
          <button
            className="bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded-md"
            onClick={(e) => {
              const target = e.currentTarget.nextElementSibling;
              if (target instanceof HTMLElement) {
                target.classList.toggle("hidden");
                target.classList.toggle("animate-slideDown");
              }
            }}
          >
            Open Menu
          </button>
          <div className="absolute w-48 mt-1 bg-white shadow-lg rounded-md py-2 hidden z-10">
            <a href="#" className="block px-4 py-2 hover:bg-gray-100">
              Menu Item 1
            </a>
            <a href="#" className="block px-4 py-2 hover:bg-gray-100">
              Menu Item 2
            </a>
            <a href="#" className="block px-4 py-2 hover:bg-gray-100">
              Menu Item 3
            </a>
          </div>
        </div>
      ),
    },
    {
      title: "Fade In",
      description: "Hiệu ứng mờ dần hiện lên.",
      demoElement: (
        <div>
          <button
            className="bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded-md"
            onClick={(e) => {
              const target = e.currentTarget.nextElementSibling;
              if (target instanceof HTMLElement) {
                target.classList.toggle("hidden");
                target.classList.toggle("animate-fadeIn");
              }
            }}
          >
            Toggle Fade
          </button>
          <div className="mt-3 p-4 bg-purple-100 rounded-md hidden">
            <p className="text-purple-800">Nội dung hiện mờ dần lên!</p>
          </div>
        </div>
      ),
    },
    {
      title: "Scale Transition",
      description: "Hiệu ứng phóng to hoặc thu nhỏ khi xuất hiện/biến mất.",
      demoElement: (
        <div>
          <button
            className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md"
            onClick={(e) => {
              const target = e.currentTarget.nextElementSibling;
              if (target instanceof HTMLElement) {
                if (target.classList.contains("hidden")) {
                  target.classList.remove("hidden");
                  target.classList.add("animate-scaleIn");
                } else {
                  target.classList.add("animate-scaleOut");
                  setTimeout(() => {
                    target.classList.add("hidden");
                    target.classList.remove("animate-scaleOut");
                  }, 300);
                }
              }
            }}
          >
            Toggle Scale
          </button>
          <div className="mt-3 p-4 bg-green-100 rounded-md shadow-md hidden origin-top-left">
            <p className="text-green-800">Hiệu ứng scale (phóng to/thu nhỏ)!</p>
          </div>
        </div>
      ),
    },
  ];

  const loadingAnimations: AnimationExampleProps[] = [
    {
      title: "Loading Spinner",
      description: "Biểu tượng quay khi tải nội dung.",
      demoElement: (
        <div>
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md flex items-center space-x-2"
            onClick={simulateLoading}
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <svg
                  className="animate-spin h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                <span>Đang tải...</span>
              </>
            ) : isComplete ? (
              <>
                <svg
                  className="h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>Hoàn thành!</span>
              </>
            ) : (
              <span>Tải dữ liệu</span>
            )}
          </button>
        </div>
      ),
    },
    {
      title: "Progress Bar",
      description: "Thanh tiến trình khi tải dữ liệu lớn.",
      demoElement: (
        <div className="w-full">
          <button
            className="bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded-md mb-3"
            onClick={() => {
              if (!isLoading) {
                simulateLoading();
                if (loadingBarRef.current) {
                  loadingBarRef.current.style.width = "0%";
                  const animate = () => {
                    if (loadingBarRef.current) {
                      const currentWidth = parseInt(
                        loadingBarRef.current.style.width || "0"
                      );
                      if (currentWidth < 100) {
                        loadingBarRef.current.style.width = `${Math.min(
                          currentWidth + 5,
                          100
                        )}%`;
                        setTimeout(animate, 100);
                      }
                    }
                  };
                  animate();
                }
              }
            }}
            disabled={isLoading}
          >
            {isLoading
              ? "Đang tải..."
              : isComplete
              ? "Hoàn thành!"
              : "Bắt đầu tải"}
          </button>

          <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div
              ref={loadingBarRef}
              className="bg-purple-600 h-2.5 rounded-full transition-all duration-300 ease-out"
              style={{ width: "0%" }}
            ></div>
          </div>
        </div>
      ),
    },
    {
      title: "Skeleton Screen",
      description: "Hiển thị khung skeleton trước khi nội dung được tải.",
      demoElement: <LoadingContent />,
    },
  ];

  useEffect(() => {
    // Add custom animation classes to Tailwind
    const style = document.createElement("style");
    style.textContent = `
      @keyframes wiggle {
        0%, 100% { transform: translateX(0); }
        25% { transform: translateX(-5px); }
        75% { transform: translateX(5px); }
      }
      @keyframes slideDown {
        from { transform: translateY(-10px); opacity: 0; }
        to { transform: translateY(0); opacity: 1; }
      }
      @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
      }
      @keyframes scaleIn {
        from { transform: scale(0.8); opacity: 0; }
        to { transform: scale(1); opacity: 1; }
      }
      @keyframes scaleOut {
        from { transform: scale(1); opacity: 1; }
        to { transform: scale(0.8); opacity: 0; }
      }
      .animate-wiggle {
        animation: wiggle 0.5s ease-in-out;
      }
      .animate-slideDown {
        animation: slideDown 0.3s ease-out forwards;
      }
      .animate-fadeIn {
        animation: fadeIn 0.5s ease-out forwards;
      }
      .animate-scaleIn {
        animation: scaleIn 0.3s ease-out forwards;
      }
      .animate-scaleOut {
        animation: scaleOut 0.3s ease-in forwards;
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  // Example Section Component
  const AnimationSection: React.FC<{
    title: string;
    examples: AnimationExampleProps[];
  }> = ({ title, examples }) => (
    <section className="mb-8">
      <h3 className="text-xl font-semibold text-blue-700 mb-4">{title}</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {examples.map((example, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow"
          >
            <h4 className="text-lg font-medium text-gray-800 mb-2">
              {example.title}
            </h4>
            <p className="text-gray-600 mb-4">{example.description}</p>
            <div className="flex justify-center items-center h-16 mb-2">
              {example.demoElement}
            </div>
          </div>
        ))}
      </div>
    </section>
  );

  // Animation principles with examples
  return (
    <div className="max-w-5xl mx-auto px-4 py-8 bg-gray-50 min-h-screen">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-blue-700 mb-2">UI Animation</h1>
        <p className="text-gray-600 text-lg">
          Chuyển động tạo nên trải nghiệm tuyệt vời
        </p>
      </div>

      {/* Tabs */}
      <div className="flex justify-center overflow-x-auto mb-6 bg-white rounded-lg shadow">
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className={`px-4 py-3 whitespace-nowrap font-medium transition-colors ${
              activeTab === index
                ? "text-blue-600 border-b-2 border-blue-600"
                : "text-gray-600 hover:text-blue-500"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Tab content */}
      <div className="bg-white rounded-lg shadow-md p-6">
        {/* Tab 1: What is UI Animation */}
        {activeTab === 0 && (
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              UI Animation là gì?
            </h2>
            <p className="text-gray-700 mb-6">
              UI Animation là chuyển động của các thành phần trong giao diện
              người dùng để cung cấp phản hồi, hướng dẫn hoặc tạo trải nghiệm
              mượt mà hơn.
            </p>

            <div className="bg-blue-50 rounded-lg p-5 mb-6">
              <h3 className="text-xl font-semibold text-blue-700 mb-3">
                Tại sao UI Animation quan trọng?
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✅</span>
                  <div>
                    <strong>Cải thiện UX:</strong> Giúp người dùng hiểu cách hệ
                    thống hoạt động.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✅</span>
                  <div>
                    <strong>Tăng tính tương tác:</strong> Làm cho ứng dụng hấp
                    dẫn hơn.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✅</span>
                  <div>
                    <strong>Hướng dẫn hành vi:</strong> Điều hướng người dùng
                    qua các bước một cách trực quan.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✅</span>
                  <div>
                    <strong>Phản hồi trực quan:</strong> Cung cấp phản hồi tức
                    thì cho hành động của người dùng.
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-gray-100 p-5 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Ví dụ:
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">🚀</span>
                  <div>
                    Khi nhấn nút, nó sẽ phóng to nhẹ để phản hồi.
                    <div className="mt-2">
                      <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md transition duration-300 transform hover:scale-105 active:scale-95">
                        Nhấn vào tôi
                      </button>
                    </div>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">🚀</span>
                  <div>
                    Khi tải dữ liệu, có loading spinner để người dùng biết hệ
                    thống đang xử lý.
                    <div className="mt-2">
                      <div className="animate-spin h-6 w-6 border-4 border-blue-500 rounded-full border-t-transparent"></div>
                    </div>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">🚀</span>
                  <div>
                    Hiệu ứng thông báo xuất hiện và mờ dần.
                    <div className="mt-2">
                      <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-3 rounded animate-fadeIn">
                        Thao tác thành công!
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        )}

        {/* Tab 2: Types of UI Animation */}
        {activeTab === 1 && (
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Các loại UI Animation phổ biến
            </h2>

            <AnimationSection
              title="1. Microinteractions (Tương tác nhỏ)"
              examples={microInteractions}
            />

            <AnimationSection
              title="2. Transitions (Chuyển đổi màn hình)"
              examples={transitions}
            />

            <AnimationSection
              title="3. Loading & Skeleton Screen (Màn hình tải dữ liệu)"
              examples={loadingAnimations}
            />

            <section className="mb-8">
              <h3 className="text-xl font-semibold text-blue-700 mb-4">
                4. Parallax Scrolling
              </h3>
              <p className="text-gray-700 mb-3">
                Hiệu ứng khi cuộn trang làm cho các phần tử di chuyển với tốc độ
                khác nhau.
              </p>

              <div className="bg-gray-100 p-4 rounded-lg mb-4">
                <h4 className="font-medium text-gray-800 mb-2">Ví dụ:</h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✅</span>
                    <span>
                      Hình nền cuộn chậm hơn nội dung tạo hiệu ứng chiều sâu.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✅</span>
                    <span>Khi cuộn xuống, text có thể fade-in nhẹ.</span>
                  </li>
                </ul>
              </div>

              <div className="relative h-32 overflow-hidden bg-gray-200 rounded-lg">
                <div
                  className="absolute inset-0 bg-blue-700 opacity-10 transform translate-y-2"
                  style={{
                    backgroundImage:
                      'url("data:image/svg+xml,%3Csvg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="%239C92AC" fill-opacity="0.4" fill-rule="evenodd"%3E%3Ccircle cx="3" cy="3" r="3"/%3E%3Ccircle cx="13" cy="13" r="3"/%3E%3C/g%3E%3C/svg%3E")',
                  }}
                ></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <p className="text-xl font-bold text-blue-700">
                    Parallax Effect Demo
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-blue-700 mb-4">
                5. Hover Effects
              </h3>
              <p className="text-gray-700 mb-3">
                Dùng trên web để tạo cảm giác tương tác.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white rounded-lg shadow-md p-4 transition-all duration-300 hover:shadow-lg hover:scale-105">
                  <h4 className="font-medium text-gray-800 mb-2">
                    Card Hover Effect
                  </h4>
                  <p className="text-gray-600">
                    Hover vào card này để thấy hiệu ứng nổi lên.
                  </p>
                </div>

                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="p-4">
                    <h4 className="font-medium text-gray-800 mb-2">
                      Image Zoom Effect
                    </h4>
                    <div className="h-32 bg-gray-200 overflow-hidden">
                      <div className="w-full h-full bg-blue-200 transition-transform duration-500 ease-in-out hover:scale-110 flex items-center justify-center">
                        <span className="text-blue-800">Hover để zoom</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow-md p-4">
                  <h4 className="font-medium text-gray-800 mb-2">
                    Button Hover Effects
                  </h4>
                  <div className="space-y-2">
                    <button className="w-full bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded transition-colors duration-300">
                      Color Change
                    </button>
                    <button className="w-full border border-purple-500 text-purple-500 hover:bg-purple-500 hover:text-white py-2 px-4 rounded transition-all duration-300">
                      Fill Effect
                    </button>
                  </div>
                </div>
              </div>
            </section>
          </div>
        )}

        {/* Tab 3: Design Rules */}
        {activeTab === 2 && <AnimationDesignRules />}
      </div>
    </div>
  );
};

export default UiAnimationGuide;
