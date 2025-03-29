import React from "react";
import { Tab } from "@headlessui/react";

// Các loại phối màu
type ColorHarmony = {
  name: string;
  description: string;
  example: string;
};

// Ý nghĩa màu sắc
type ColorMeaning = {
  color: string;
  meaning: string;
  applications: string;
  bgClass: string;
  textClass: string;
};

// Component chính
const ColorTheoryGuide: React.FC = () => {
  // Dữ liệu về các loại phối màu
  const colorHarmonies: ColorHarmony[] = [
    {
      name: "Phối màu đơn sắc",
      description: "Sử dụng nhiều sắc thái khác nhau của cùng một màu.",
      example: "Một ứng dụng dùng các tông xanh dương nhạt, trung bình và đậm.",
    },
    {
      name: "Phối màu tương đồng",
      description: "Chọn 3 màu nằm cạnh nhau trên bánh xe màu.",
      example: "Xanh dương, Xanh lá, Xanh ngọc – tạo cảm giác hài hòa.",
    },
    {
      name: "Phối màu bổ túc",
      description: "Chọn 2 màu đối diện nhau trên bánh xe màu.",
      example:
        "Xanh dương & Cam - tạo sự tương phản mạnh, thích hợp để làm nổi bật nội dung quan trọng.",
    },
    {
      name: "Phối màu bổ túc tách đôi",
      description:
        "Chọn 1 màu chính và 2 màu phụ nằm đối diện nhưng hơi lệch nhau trên bánh xe màu.",
      example: "Giúp giữ được sự tương phản nhưng mềm mại hơn phối màu bổ túc.",
    },
    {
      name: "Phối màu bộ ba",
      description: "Chọn 3 màu cách đều nhau trên bánh xe màu.",
      example: "Đỏ - Xanh dương - Vàng, tạo sự cân bằng và sinh động.",
    },
    {
      name: "Phối màu bộ bốn",
      description: "Chọn 2 cặp màu bổ túc.",
      example:
        "Xanh lá & Đỏ, Xanh dương & Cam. Cần điều chỉnh độ sáng/tối để tránh gây rối mắt.",
    },
  ];

  // Dữ liệu về ý nghĩa màu sắc
  const colorMeanings: ColorMeaning[] = [
    {
      color: "🔵 Xanh dương",
      meaning: "Tin cậy, chuyên nghiệp",
      applications: "Facebook, LinkedIn",
      bgClass: "bg-blue-500",
      textClass: "text-white",
    },
    {
      color: "🔴 Đỏ",
      meaning: "Năng lượng, khẩn cấp",
      applications: "YouTube, Netflix",
      bgClass: "bg-red-500",
      textClass: "text-white",
    },
    {
      color: "🟡 Vàng",
      meaning: "Vui vẻ, sáng tạo",
      applications: "Snapchat, McDonald's",
      bgClass: "bg-yellow-400",
      textClass: "text-gray-800",
    },
    {
      color: "🟢 Xanh lá",
      meaning: "Thiên nhiên, cân bằng",
      applications: "Starbucks, Spotify",
      bgClass: "bg-green-500",
      textClass: "text-white",
    },
    {
      color: "🟣 Tím",
      meaning: "Sang trọng, sáng tạo",
      applications: "Twitch, Yahoo",
      bgClass: "bg-purple-500",
      textClass: "text-white",
    },
    {
      color: "⚫ Đen",
      meaning: "Quyền lực, cao cấp",
      applications: "Apple, Chanel",
      bgClass: "bg-black",
      textClass: "text-white",
    },
    {
      color: "⚪ Trắng",
      meaning: "Đơn giản, tinh khiết",
      applications: "Google, Tesla",
      bgClass: "bg-white",
      textClass: "text-gray-800",
    },
  ];

  // Công cụ hỗ trợ chọn màu
  const colorTools = [
    { name: "Adobe Color", url: "https://color.adobe.com" },
    { name: "Coolors", url: "https://coolors.co" },
    { name: "Material Design Colors", url: "https://materialui.co/colors" },
    {
      name: "Contrast Checker",
      url: "https://webaim.org/resources/contrastchecker/",
    },
    { name: "Accessible Colors", url: "https://accessible-colors.com" },
  ];

  // Các sai lầm phổ biến
  const commonMistakes = [
    "Dùng quá nhiều màu sắc khác nhau gây rối mắt.",
    "Thiếu độ tương phản khiến nội dung khó đọc.",
    "Chọn màu không phù hợp với cảm xúc thương hiệu.",
    "Không kiểm tra màu trên các màn hình và điều kiện ánh sáng khác nhau.",
  ];

  // Cách khắc phục
  const solutions = [
    "Dùng tối đa 3-5 màu chính để giữ thiết kế đơn giản.",
    "Luôn kiểm tra độ tương phản giữa chữ và nền.",
    "Kiểm tra thiết kế ở chế độ sáng & tối để đảm bảo dễ đọc.",
  ];

  return (
    <div className=" p-6 bg-white rounded-lg shadow-lg">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          Lý thuyết màu sắc (Color Theory)
        </h1>
        <p className="text-lg text-gray-600">
          Hệ thống các quy tắc và hướng dẫn giúp các nhà thiết kế hiểu cách màu
          sắc hoạt động, phối hợp và ảnh hưởng đến cảm xúc, hành vi của người
          dùng.
        </p>
      </div>

      {/* Tại sao Color Theory quan trọng */}
      <div className="mb-8 bg-blue-50 p-6 rounded-lg">
        <h2 className="text-2xl font-semibold text-blue-700 mb-4">
          📌 Tại sao Color Theory quan trọng trong UI/UX?
        </h2>
        <ul className="space-y-2">
          <li className="flex items-start">
            <span className="text-green-500 mr-2">✅</span>
            <span>Tạo cảm xúc phù hợp với sản phẩm.</span>
          </li>
          <li className="flex items-start">
            <span className="text-green-500 mr-2">✅</span>
            <span>Giúp nội dung dễ đọc, dễ nhận diện.</span>
          </li>
          <li className="flex items-start">
            <span className="text-green-500 mr-2">✅</span>
            <span>Hướng dẫn mắt người dùng đến các phần quan trọng.</span>
          </li>
          <li className="flex items-start">
            <span className="text-green-500 mr-2">✅</span>
            <span>Xây dựng nhận diện thương hiệu nhất quán.</span>
          </li>
        </ul>
        <div className="mt-4 italic text-gray-600">
          <span className="text-blue-500 font-bold">🚀 Ví dụ:</span> Facebook sử
          dụng màu xanh dương để tạo cảm giác tin cậy, trong khi YouTube dùng
          màu đỏ để kích thích sự chú ý.
        </div>
      </div>

      {/* Tabs cho các phần nội dung */}
      <Tab.Group>
        <Tab.List className="flex p-1 space-x-1 bg-blue-100 rounded-xl mb-6">
          <Tab
            className={({ selected }) =>
              `w-full py-2.5 text-sm font-medium leading-5 rounded-lg 
                ${
                  selected
                    ? "bg-blue-600 text-white shadow-md"
                    : "text-blue-700 hover:bg-blue-200"
                }`
            }
          >
            Bánh xe màu
          </Tab>
          <Tab
            className={({ selected }) =>
              `w-full py-2.5 text-sm font-medium leading-5 rounded-lg 
                ${
                  selected
                    ? "bg-blue-600 text-white shadow-md"
                    : "text-blue-700 hover:bg-blue-200"
                }`
            }
          >
            Phối màu
          </Tab>
          <Tab
            className={({ selected }) =>
              `w-full py-2.5 text-sm font-medium leading-5 rounded-lg 
                ${
                  selected
                    ? "bg-blue-600 text-white shadow-md"
                    : "text-blue-700 hover:bg-blue-200"
                }`
            }
          >
            Ý nghĩa màu sắc
          </Tab>
          <Tab
            className={({ selected }) =>
              `w-full py-2.5 text-sm font-medium leading-5 rounded-lg 
                ${
                  selected
                    ? "bg-blue-600 text-white shadow-md"
                    : "text-blue-700 hover:bg-blue-200"
                }`
            }
          >
            Công cụ & Lưu ý
          </Tab>
        </Tab.List>
        <Tab.Panels className="mt-2">
          {/* Bánh xe màu */}
          <Tab.Panel className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              📌 1. Bánh xe màu (Color Wheel)
            </h2>
            <p className="text-gray-700 mb-4">
              Bánh xe màu là công cụ giúp chúng ta hiểu cách màu sắc kết hợp với
              nhau. Nó được chia thành ba nhóm:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="bg-red-100 p-4 rounded-lg">
                <h3 className="font-bold text-lg mb-2">
                  Màu chính (Primary Colors)
                </h3>
                <div className="flex space-x-2">
                  <div className="w-12 h-12 bg-red-500 rounded-full"></div>
                  <div className="w-12 h-12 bg-yellow-500 rounded-full"></div>
                  <div className="w-12 h-12 bg-blue-500 rounded-full"></div>
                </div>
                <p className="mt-2 text-sm">Đỏ, Vàng, Xanh dương</p>
              </div>
              <div className="bg-orange-100 p-4 rounded-lg">
                <h3 className="font-bold text-lg mb-2">
                  Màu phụ (Secondary Colors)
                </h3>
                <div className="flex space-x-2">
                  <div className="w-12 h-12 bg-orange-500 rounded-full"></div>
                  <div className="w-12 h-12 bg-green-500 rounded-full"></div>
                  <div className="w-12 h-12 bg-purple-500 rounded-full"></div>
                </div>
                <p className="mt-2 text-sm">
                  Cam, Xanh lá, Tím (kết hợp từ màu chính)
                </p>
              </div>
              <div className="bg-green-100 p-4 rounded-lg">
                <h3 className="font-bold text-lg mb-2">
                  Màu bậc ba (Tertiary Colors)
                </h3>
                <div className="flex flex-wrap gap-2">
                  <div
                    className="w-8 h-8 rounded-full"
                    style={{ backgroundColor: "#FF4500" }}
                  ></div>
                  <div
                    className="w-8 h-8 rounded-full"
                    style={{ backgroundColor: "#FFB300" }}
                  ></div>
                  <div
                    className="w-8 h-8 rounded-full"
                    style={{ backgroundColor: "#9ACD32" }}
                  ></div>
                  <div
                    className="w-8 h-8 rounded-full"
                    style={{ backgroundColor: "#008B8B" }}
                  ></div>
                  <div
                    className="w-8 h-8 rounded-full"
                    style={{ backgroundColor: "#6A5ACD" }}
                  ></div>
                  <div
                    className="w-8 h-8 rounded-full"
                    style={{ backgroundColor: "#C71585" }}
                  ></div>
                </div>
                <p className="mt-2 text-sm">
                  Được tạo bằng cách pha trộn màu chính và màu phụ
                </p>
              </div>
            </div>
            <p className="text-gray-700">
              <strong>📌 Ứng dụng:</strong> Dựa vào bánh xe màu, ta có thể chọn
              bảng màu phù hợp theo các nguyên tắc phối màu.
            </p>
          </Tab.Panel>

          {/* Phối màu */}
          <Tab.Panel className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              📌 2. Các quy tắc phối màu (Color Harmony Rules)
            </h2>
            <div className="space-y-6">
              {colorHarmonies.map((harmony, index) => (
                <div
                  key={index}
                  className="border-l-4 border-blue-500 pl-4 py-2"
                >
                  <h3 className="font-bold text-lg text-blue-700">
                    {harmony.name}
                  </h3>
                  <p className="text-gray-700 mb-1">{harmony.description}</p>
                  <p className="text-gray-600 italic text-sm">
                    {harmony.example}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-6 bg-gray-100 p-4 rounded-lg">
              <h3 className="font-bold text-lg mb-2">📌 Ứng dụng:</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Phối màu đơn sắc cho thiết kế tối giản.</li>
                <li>Phối màu bổ túc để làm nổi bật Call-To-Action (CTA).</li>
              </ul>
            </div>
          </Tab.Panel>

          {/* Ý nghĩa màu sắc */}
          <Tab.Panel className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              📌 3. Ý nghĩa của màu sắc (Color Psychology)
            </h2>
            <p className="text-gray-700 mb-4">
              Màu sắc có thể ảnh hưởng đến cảm xúc và hành vi của người dùng.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              {colorMeanings.map((color, index) => (
                <div
                  key={index}
                  className={`${color.bgClass} ${color.textClass} p-4 rounded-lg`}
                >
                  <h3 className="font-bold text-lg">{color.color}</h3>
                  <p className="mb-1">{color.meaning}</p>
                  <p className="text-sm opacity-90">{color.applications}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 bg-gray-100 p-4 rounded-lg">
              <h3 className="font-bold text-lg mb-2">📌 Ứng dụng:</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Màu đỏ thường dùng cho thông báo quan trọng.</li>
                <li>
                  Màu xanh dương tạo cảm giác tin tưởng, thường dùng cho ngân
                  hàng & công ty công nghệ.
                </li>
              </ul>
            </div>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4 mt-8">
              📌 4. Độ tương phản & khả năng đọc (Contrast & Readability)
            </h2>
            <p className="text-gray-700 mb-4">
              Độ tương phản giữa văn bản và nền rất quan trọng để đảm bảo dễ
              đọc.
            </p>
            <div className="bg-yellow-100 p-4 rounded-lg mb-4">
              <p className="text-gray-800">
                WCAG (Web Content Accessibility Guidelines) khuyến nghị tỷ lệ
                tương phản tối thiểu 4.5:1 giữa văn bản và nền.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-lg border border-gray-300">
                <p className="text-gray-800 text-center">
                  Văn bản đen trên nền trắng
                </p>
                <div className="text-center mt-2 text-sm text-gray-500">
                  Tỷ lệ tương phản: 21:1 (Rất tốt)
                </div>
              </div>
              <div className="bg-blue-700 p-4 rounded-lg">
                <p className="text-white text-center">
                  Văn bản trắng trên nền xanh
                </p>
                <div className="text-center mt-2 text-sm text-blue-200">
                  Tỷ lệ tương phản: 8:1 (Tốt)
                </div>
              </div>
              <div className="bg-gray-200 p-4 rounded-lg">
                <p className="text-gray-500 text-center">
                  Văn bản xám trên nền xám nhạt
                </p>
                <div className="text-center mt-2 text-sm text-gray-600">
                  Tỷ lệ tương phản: 2.5:1 (Kém)
                </div>
              </div>
              <div className="bg-yellow-200 p-4 rounded-lg">
                <p className="text-yellow-800 text-center">
                  Văn bản nâu vàng trên nền vàng
                </p>
                <div className="text-center mt-2 text-sm text-yellow-700">
                  Tỷ lệ tương phản: 4.5:1 (Đạt yêu cầu)
                </div>
              </div>
            </div>
          </Tab.Panel>

          {/* Công cụ & Lưu ý */}
          <Tab.Panel className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              📌 5. Cách chọn bảng màu trong thiết kế UI/UX
            </h2>
            <div className="space-y-4 mb-8">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-bold text-lg text-blue-700">
                  Bước 1: Chọn màu chính (Primary Color)
                </h3>
                <p className="text-gray-700">
                  Dựa trên thương hiệu và thông điệp muốn truyền tải.
                </p>
                <p className="text-gray-600 italic text-sm mt-1">
                  Ví dụ: Ứng dụng tài chính thường chọn màu xanh dương để tạo sự
                  tin cậy.
                </p>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg">
                <h3 className="font-bold text-lg text-purple-700">
                  Bước 2: Chọn màu phụ (Secondary & Accent Colors)
                </h3>
                <p className="text-gray-700">
                  Chọn các màu bổ sung phù hợp với màu chính.
                </p>
                <p className="text-gray-600 italic text-sm mt-1">
                  Dùng để tạo điểm nhấn trên các nút bấm, biểu đồ, icon.
                </p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <h3 className="font-bold text-lg text-green-700">
                  Bước 3: Chọn màu nền và màu chữ
                </h3>
                <p className="text-gray-700">
                  Nền thường có màu trung tính (Trắng, Xám nhạt).
                </p>
                <p className="text-gray-600 italic text-sm mt-1">
                  Văn bản phải có độ tương phản cao để dễ đọc.
                </p>
              </div>
              <div className="bg-amber-50 p-4 rounded-lg">
                <h3 className="font-bold text-lg text-amber-700">
                  Bước 4: Kiểm tra độ tương phản và tính khả dụng
                </h3>
                <p className="text-gray-700">
                  Đảm bảo rằng màu sắc được sử dụng hợp lý để không gây mỏi mắt.
                </p>
              </div>
            </div>

            <h3 className="font-bold text-lg text-gray-800 mb-2">
              📌 Công cụ hỗ trợ chọn màu:
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              {colorTools.map((tool, index) => (
                <div
                  key={index}
                  className="bg-gray-100 p-4 rounded-lg text-center"
                  onClick={() => window.open(tool.url, "_blank")}
                >
                  <p className="font-medium text-blue-600">{tool.name}</p>
                </div>
              ))}
            </div>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              6. Sai lầm phổ biến khi chọn màu trong UI/UX
            </h2>
            <div className="mb-6">
              <ul className="space-y-2">
                {commonMistakes.map((mistake, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-red-500 mr-2">❌</span>
                    <span className="text-gray-700">{mistake}</span>
                  </li>
                ))}
              </ul>
            </div>

            <h3 className="font-bold text-lg text-gray-800 mb-2">
              ✅ Cách khắc phục:
            </h3>
            <ul className="space-y-2">
              {solutions.map((solution, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span className="text-gray-700">{solution}</span>
                </li>
              ))}
            </ul>
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
};

export default ColorTheoryGuide;
