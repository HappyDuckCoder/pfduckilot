import React, { useState } from "react";

interface FontTypeProps {
  name: string;
  description: string;
  examples: string[];
  useCases: string[];
}

const TypographyGuide: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(0);

  const fontTypes: FontTypeProps[] = [
    {
      name: "Serif",
      description: "Có chân, cổ điển",
      examples: ["Times New Roman", "Georgia"],
      useCases: ["Văn bản dài", "Nội dung trang web tin tức"],
    },
    {
      name: "Sans-serif",
      description: "Không có chân, hiện đại",
      examples: ["Roboto", "Arial"],
      useCases: ["Dễ đọc trên màn hình", "Ứng dụng công nghệ"],
    },
    {
      name: "Monospace",
      description: "Khoảng cách chữ bằng nhau",
      examples: ["Courier", "Consolas"],
      useCases: ["Hiển thị code", "Dữ liệu bảng biểu"],
    },
    {
      name: "Display",
      description: "Kiểu chữ trang trí, nghệ thuật",
      examples: ["Lobster", "Pacifico"],
      useCases: ["Tiêu đề", "Nội dung quảng cáo"],
    },
  ];

  const tabs = [
    "Typography là gì?",
    "Các yếu tố chính",
    "Cách chọn font",
    "Google Fonts",
    "Sai lầm phổ biến",
  ];

  const FontTypeCard: React.FC<FontTypeProps> = ({
    name,
    description,
    examples,
    useCases,
  }) => (
    <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow">
      <h3 className="text-xl font-bold text-blue-600">{name}</h3>
      <p className="text-gray-700 mb-2">{description}</p>
      <div className="mb-2">
        <span className="font-medium text-gray-800">Ví dụ:</span>{" "}
        {examples.join(", ")}
      </div>
      <div>
        <span className="font-medium text-gray-800">Ứng dụng:</span>
        <ul className="list-disc list-inside">
          {useCases.map((useCase, index) => (
            <li key={index} className="text-gray-700">
              {useCase}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );

  const hierarchyExample = [
    { level: "H1", size: "32px", description: "Tiêu đề chính" },
    { level: "H2", size: "24px", description: "Tiêu đề phụ" },
    { level: "Body", size: "16px", description: "Nội dung chính" },
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 py-8 bg-gray-50 min-h-screen">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-blue-700 mb-2">
          Typography trong UI/UX
        </h1>
        <p className="text-gray-600 text-lg">
          Nghệ thuật và kỹ thuật sắp xếp chữ viết
        </p>
      </div>

      {/* Tabs */}
      <div className="flex overflow-x-auto mb-6 bg-white rounded-lg shadow">
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
        {/* Tab 1: What is Typography */}
        {activeTab === 0 && (
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Typography là gì?
            </h2>
            <p className="text-gray-700 mb-4">
              Typography là nghệ thuật và kỹ thuật sắp xếp chữ viết để nội dung
              dễ đọc, dễ hiểu và trực quan hơn. Trong UI/UX, typography ảnh
              hưởng lớn đến trải nghiệm người dùng, giúp tạo cảm xúc và điều
              hướng họ qua giao diện.
            </p>

            <div className="bg-blue-50 rounded-lg p-4 mb-6">
              <h3 className="text-xl font-semibold text-blue-700 mb-2">
                Tại sao Typography quan trọng?
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✅</span>
                  <span>Cải thiện khả năng đọc (Readability)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✅</span>
                  <span>
                    Tạo hệ thống phân cấp thông tin rõ ràng (Hierarchy)
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✅</span>
                  <span>Thể hiện cá tính thương hiệu (Brand Identity)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✅</span>
                  <span>Tăng tính khả dụng (Usability)</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-100 p-4 rounded-lg">
              <p className="font-medium text-gray-800">
                <span className="text-blue-600 mr-2">🚀</span>
                Ví dụ: Google sử dụng font Roboto trên Android để tối ưu hiển
                thị trên nhiều thiết bị.
              </p>
            </div>
          </div>
        )}

        {/* Tab 2: Key Elements */}
        {activeTab === 1 && (
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Các yếu tố chính trong Typography
            </h2>

            <section className="mb-8">
              <h3 className="text-xl font-semibold text-blue-700 mb-3">
                1. Font & Typeface
              </h3>
              <p className="text-gray-700 mb-3">
                <strong>Typeface (Họ chữ):</strong> Một tập hợp các kiểu chữ có
                thiết kế chung (Ví dụ: Roboto, Arial, Times New Roman).
                <br />
                <strong>Font:</strong> Một biến thể cụ thể của typeface (Ví dụ:
                Roboto Bold 16px).
              </p>

              <h4 className="font-medium text-gray-800 mb-2">
                Phân loại typeface phổ biến:
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                {fontTypes.map((type, index) => (
                  <FontTypeCard key={index} {...type} />
                ))}
              </div>
            </section>

            <section className="mb-8">
              <h3 className="text-xl font-semibold text-blue-700 mb-3">
                2. Hierarchy (Hệ thống phân cấp chữ)
              </h3>
              <p className="text-gray-700 mb-3">
                Hierarchy giúp người dùng dễ dàng quét nội dung và biết đâu là
                thông tin quan trọng nhất.
              </p>

              <div className="bg-blue-50 rounded-lg p-4 mb-4">
                <h4 className="font-medium text-gray-800 mb-2">
                  Cách tạo hierarchy:
                </h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✅</span>
                    <span>
                      <strong>Size (Kích thước):</strong> Tiêu đề lớn hơn nội
                      dung.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✅</span>
                    <span>
                      <strong>Weight (Độ đậm nhạt):</strong> Bold cho phần quan
                      trọng.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✅</span>
                    <span>
                      <strong>Color (Màu sắc):</strong> Dùng màu nổi bật cho
                      điểm nhấn.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✅</span>
                    <span>
                      <strong>Spacing (Khoảng cách):</strong> Dãn cách giúp nội
                      dung dễ đọc hơn.
                    </span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-100 p-4 rounded-lg mb-3">
                <h4 className="font-medium text-gray-800 mb-2">Ví dụ:</h4>
                {hierarchyExample.map((item, index) => (
                  <div key={index} className="mb-2">
                    <div
                      className={`font-${
                        item.level === "Body" ? "normal" : "bold"
                      }`}
                      style={{
                        fontSize:
                          item.level === "H1"
                            ? "32px"
                            : item.level === "H2"
                            ? "24px"
                            : "16px",
                      }}
                    >
                      {item.level} - {item.size} ({item.description})
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="mb-8">
              <h3 className="text-xl font-semibold text-blue-700 mb-3">
                3. Line Height & Letter Spacing
              </h3>
              <p className="text-gray-700 mb-3">
                <strong>Line Height (Độ cao dòng):</strong> Khoảng cách giữa các
                dòng giúp chữ dễ đọc hơn.
                <br />
                <strong>Letter Spacing (Khoảng cách giữa chữ):</strong> Điều
                chỉnh khoảng cách để tăng tính thẩm mỹ.
              </p>

              <div className="bg-blue-50 rounded-lg p-4 mb-4">
                <h4 className="font-medium text-gray-800 mb-2">
                  Quy tắc chung:
                </h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✅</span>
                    <span>
                      Line height nên từ 1.4x – 1.6x so với font size.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✅</span>
                    <span>Letter spacing có thể tăng nhẹ cho chữ in hoa.</span>
                  </li>
                </ul>
              </div>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-blue-700 mb-3">
                4. Tương phản chữ & nền
              </h3>
              <p className="text-gray-700 mb-3">
                Chữ phải có độ tương phản cao để đảm bảo dễ đọc, đặc biệt là
                trên nền màu sắc khác nhau.
              </p>

              <div className="bg-blue-50 rounded-lg p-4 mb-4">
                <h4 className="font-medium text-gray-800 mb-2">
                  Mẹo tối ưu độ tương phản:
                </h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✅</span>
                    <span>Nền sáng → Chữ tối (Đen trên trắng).</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✅</span>
                    <span>Nền tối → Chữ sáng (Trắng trên đen).</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✅</span>
                    <span>Tránh dùng chữ màu xám nhạt trên nền trắng.</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-100 p-4 rounded-lg">
                <p className="font-medium text-gray-800">
                  <span className="text-blue-600 mr-2">🚀</span>
                  Công cụ kiểm tra độ tương phản: WebAIM Contrast Checker
                </p>
              </div>
            </section>
          </div>
        )}

        {/* Tab 3: How to Choose Fonts */}
        {activeTab === 2 && (
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Cách chọn font cho UI/UX
            </h2>

            <section className="mb-8">
              <h3 className="text-xl font-semibold text-blue-700 mb-3">
                1. Chọn font phù hợp với thương hiệu
              </h3>
              <p className="text-gray-700 mb-3">
                Mỗi loại font mang một sắc thái khác nhau:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                <div className="bg-white rounded-lg shadow p-3">
                  <h4 className="font-bold text-gray-800 mb-1">
                    Chuyên nghiệp
                  </h4>
                  <p className="text-gray-600">Roboto, Open Sans, Helvetica</p>
                </div>
                <div className="bg-white rounded-lg shadow p-3">
                  <h4 className="font-bold text-gray-800 mb-1">Thân thiện</h4>
                  <p className="text-gray-600">Poppins, Nunito</p>
                </div>
                <div className="bg-white rounded-lg shadow p-3">
                  <h4 className="font-bold text-gray-800 mb-1">Sang trọng</h4>
                  <p className="text-gray-600">Playfair Display, Lora</p>
                </div>
              </div>

              <div className="bg-gray-100 p-4 rounded-lg mb-4">
                <h4 className="font-medium text-gray-800 mb-2">Ví dụ:</h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">🚀</span>
                    <span>
                      Ứng dụng ngân hàng → Sans-serif (Hiện đại & chuyên nghiệp)
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">🚀</span>
                    <span>
                      Website mỹ phẩm → Serif hoặc Display (Sang trọng & nghệ
                      thuật)
                    </span>
                  </li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h3 className="text-xl font-semibold text-blue-700 mb-3">
                2. Kết hợp font hiệu quả
              </h3>

              <div className="bg-blue-50 rounded-lg p-4 mb-4">
                <h4 className="font-medium text-gray-800 mb-2">Quy tắc:</h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✅</span>
                    <span>Chỉ nên dùng tối đa 2 fonts trong một thiết kế.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✅</span>
                    <span>Kết hợp Sans-serif với Serif để tạo điểm nhấn.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✅</span>
                    <span>
                      Dùng biến thể của cùng một font thay vì nhiều font khác
                      nhau.
                    </span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-100 p-4 rounded-lg mb-4">
                <h4 className="font-medium text-gray-800 mb-2">Ví dụ:</h4>
                <ul className="space-y-2">
                  <li>
                    <strong>Sans-serif + Serif:</strong> Roboto (Body) +
                    Playfair Display (Heading).
                  </li>
                  <li>
                    <strong>Cùng một họ font:</strong> Roboto Regular (Body) +
                    Roboto Bold (Heading).
                  </li>
                </ul>
              </div>

              <div className="p-4 border border-blue-200 rounded-lg">
                <h4 className="font-medium text-gray-800 mb-2">
                  Công cụ gợi ý font kết hợp:
                </h4>
                <ul className="space-y-1">
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✅</span>
                    <span>Fontjoy</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✅</span>
                    <span>Google Fonts Pairings</span>
                  </li>
                </ul>
              </div>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-blue-700 mb-3">
                3. Kích thước chữ phù hợp cho UI
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                <div className="bg-white rounded-lg shadow p-3">
                  <h4 className="font-bold text-gray-800 mb-1">
                    Tiêu đề (H1-H3)
                  </h4>
                  <p className="text-gray-600">24px – 32px</p>
                </div>
                <div className="bg-white rounded-lg shadow p-3">
                  <h4 className="font-bold text-gray-800 mb-1">
                    Nội dung chính
                  </h4>
                  <p className="text-gray-600">16px – 18px</p>
                </div>
                <div className="bg-white rounded-lg shadow p-3">
                  <h4 className="font-bold text-gray-800 mb-1">
                    Chú thích nhỏ
                  </h4>
                  <p className="text-gray-600">12px – 14px</p>
                </div>
              </div>

              <div className="bg-blue-50 rounded-lg p-4 mb-4">
                <h4 className="font-medium text-gray-800 mb-2">
                  Mẹo tối ưu UX:
                </h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✅</span>
                    <span>Tránh dùng chữ quá nhỏ (&lt;14px).</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✅</span>
                    <span>Font size tối thiểu trên mobile: 16px.</span>
                  </li>
                </ul>
              </div>
            </section>
          </div>
        )}

        {/* Tab 4: Google Fonts */}
        {activeTab === 3 && (
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Sử dụng Google Fonts trong UI/UX
            </h2>
            <p className="text-gray-700 mb-4">
              Google Fonts là thư viện font miễn phí, tối ưu cho web & mobile.
            </p>

            <div className="bg-blue-50 rounded-lg p-4 mb-6">
              <h3 className="text-xl font-semibold text-blue-700 mb-3">
                Cách sử dụng:
              </h3>
              <ol className="space-y-3">
                <li className="flex">
                  <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">
                    1
                  </span>
                  <span>Chọn font từ Google Fonts.</span>
                </li>
                <li className="flex">
                  <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">
                    2
                  </span>
                  <span>Copy link vào &lt;head&gt; của HTML.</span>
                </li>
                <li className="flex">
                  <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">
                    3
                  </span>
                  <div>
                    <span>Sử dụng trong CSS:</span>
                    <pre className="bg-gray-800 text-green-400 p-3 rounded mt-2 overflow-x-auto">
                      {`body {
  font-family: 'Roboto', sans-serif;
}`}
                    </pre>
                  </div>
                </li>
              </ol>
            </div>

            <div className="bg-white rounded-lg shadow-md p-4">
              <h3 className="text-xl font-semibold text-blue-700 mb-3">
                Mẹo chọn Google Fonts:
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✅</span>
                  <div>
                    <strong>Roboto, Open Sans:</strong> Tốt cho mọi loại thiết
                    kế.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✅</span>
                  <div>
                    <strong>Lora, Playfair Display:</strong> Tốt cho giao diện
                    sang trọng.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✅</span>
                  <div>
                    <strong>Poppins, Nunito:</strong> Tốt cho thiết kế sáng tạo.
                  </div>
                </li>
              </ul>
            </div>
          </div>
        )}

        {/* Tab 5: Common Mistakes */}
        {activeTab === 4 && (
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Sai lầm phổ biến khi sử dụng Typography
            </h2>

            <div className="bg-red-50 rounded-lg p-5 mb-6">
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">❌</span>
                  <span>Dùng quá nhiều font trong một thiết kế.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">❌</span>
                  <span>Chữ quá nhỏ hoặc quá sát nhau.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">❌</span>
                  <span>Không kiểm tra độ tương phản giữa chữ và nền.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">❌</span>
                  <span>
                    Không kiểm tra hiển thị trên các thiết bị khác nhau.
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-green-50 rounded-lg p-5">
              <h3 className="text-xl font-semibold text-green-700 mb-3">
                Cách khắc phục:
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✅</span>
                  <span>Giữ thiết kế đơn giản, tối đa 2 fonts.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✅</span>
                  <span>Kiểm tra độ tương phản trước khi xuất bản.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✅</span>
                  <span>Kiểm tra hiển thị trên mobile & desktop.</span>
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TypographyGuide;
