import React, { useState } from "react";
import { Brain, ChevronDown, ChevronUp } from "lucide-react";

const Calculation = () => {
  const [expandedSection, setExpandedSection] = useState<number | null>(null);

  const topics = [
    {
      icon: Brain,
      title: "Tầng và khối",
      description: "Hiểu được tầng là gì và khối là gì",
      content: (
        <>
          <h4 className="font-semibold mb-3">Tầng (Layer) là gì?</h4>
          <p className="mb-4">
            <strong>Định nghĩa:</strong> Tầng là một đơn vị cơ bản trong mạng
            nơ-ron, thực hiện một phép biến đổi lên dữ liệu đầu vào. Bạn có thể
            hình dung nó như một &quot;trạm xử lý&quot; trong một dây chuyền sản
            xuất. Ví dụ:
            <ul>
              <li>
                Tầng Kết nối Đầy đủ (Dense Layer): Mỗi nơ-ron trong tầng này kết
                nối với tất cả các nơ-ron ở tầng trước. Ví dụ, nếu bạn có một
                bức ảnh và muốn phân loại nó (mèo hay chó), tầng kết nối đầy đủ
                sẽ &quot;nhìn&quot; vào tất cả các pixel của ảnh và đưa ra quyết
                định.
              </li>
              <li>
                Tầng Tích chập (Convolutional Layer): Tầng này đặc biệt hữu ích
                cho việc xử lý ảnh. Nó sử dụng các &quot;bộ lọc&quot; nhỏ để tìm
                kiếm các đặc trưng như cạnh, góc, hoặc các hình dạng cụ thể
                trong ảnh.
              </li>
              <li>
                Tầng Pooling: Tầng này giảm kích thước của dữ liệu, giúp mạng
                nơ-ron hoạt động nhanh hơn và giảm nguy cơ &quot;học tủ&quot;
                (overfitting).
              </li>
            </ul>
          </p>
          <h4 className="font-semibold mb-3">Khối (Block) là gì?</h4>
          <p className="mb-4">
            <strong>Định nghĩa:</strong> Khối là một tập hợp các tầng được ghép
            lại với nhau để tạo thành một đơn vị lớn hơn. Nó giống như một
            &quot;module&quot; hoặc một &quot;linh kiện&quot; trong một cỗ máy.
            Một khối có thể đơn giản chỉ là một tầng, hoặc phức tạp hơn, bao gồm
            nhiều tầng kết hợp với nhau. <br></br>Ví dụ: Trong một mạng nơ-ron
            phức tạp để nhận diện khuôn mặt, một khối có thể bao gồm một tầng
            tích chập, một tầng ReLU (hàm kích hoạt), và một tầng pooling. Khối
            này sẽ chịu trách nhiệm trích xuất các đặc trưng cơ bản từ khuôn mặt
            (ví dụ: vị trí của mắt, mũi, miệng). Một khối cũng có thể là toàn bộ
            một mô hình nhỏ, được sử dụng lại nhiều lần trong một mạng lớn hơn.
          </p>
          <h4 className="font-semibold mb-3">
            Khối Tuần tự (Sequential Block) là gì?
          </h4>
          <p className="mb-4">
            Định nghĩa: Khối tuần tự là một loại khối đặc biệt, trong đó các
            tầng được xếp chồng lên nhau theo một thứ tự nhất định. Dữ liệu sẽ
            đi qua từng tầng một, từ đầu đến cuối. Nó giống như một &quot;dây
            chuyền lắp ráp&quot;, nơi mỗi công đoạn (tầng) thực hiện một nhiệm
            vụ cụ thể. Ví dụ: Bạn có thể tạo một khối tuần tự để phân loại ảnh,
            bao gồm các tầng sau: Tầng tích chập (để trích xuất đặc trưng) Tầng
            ReLU (để thêm tính phi tuyến) Tầng pooling (để giảm kích thước) Tầng
            kết nối đầy đủ (để đưa ra dự đoán)
          </p>
          <h4 className="font-semibold mb-3">
            Khối Tùy chỉnh (Custom Block) là gì?
          </h4>
          <p className="mb-4">
            <strong>Định nghĩa:</strong> Khối tùy chỉnh là một khối do bạn tự
            định nghĩa, cho phép bạn tạo ra các kiến trúc mạng nơ-ron phức tạp
            và linh hoạt hơn. Bạn có thể tự do sắp xếp các tầng, thêm các phép
            toán đặc biệt, hoặc thậm chí sử dụng các cấu trúc điều khiển (ví dụ:
            vòng lặp, điều kiện) để xử lý dữ liệu. <br></br>Ví dụ: Bạn muốn tạo
            một khối có khả năng tự động điều chỉnh số lượng tầng dựa trên độ
            phức tạp của dữ liệu đầu vào. Bạn có thể sử dụng một vòng lặp để
            thêm các tầng tích chập cho đến khi đạt được một mức độ trích xuất
            đặc trưng nhất định. Bạn muốn tạo một khối kết hợp thông tin từ
            nhiều nguồn khác nhau (ví dụ: ảnh và văn bản). Bạn có thể sử dụng
            các phép toán để hợp nhất các đặc trưng từ hai nguồn này trước khi
            đưa vào các tầng tiếp theo.
          </p>
          <h4 className="font-semibold mb-3">Tóm tắt:</h4>
          <p className="mb-4">
            Tầng: Đơn vị cơ bản thực hiện biến đổi dữ liệu. <br></br>
            Khối: Tập hợp các tầng, tạo thành một đơn vị lớn hơn. <br></br>
            Khối Tuần tự: Các tầng được xếp chồng lên nhau theo thứ tự.{" "}
            <br></br>
            Khối Tùy chỉnh: Khối do bạn tự định nghĩa, linh hoạt và phức tạp
            hơn. <br></br>
          </p>
        </>
      ),
    },
  ];

  return (
    <div className="p-24">
      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-md p-6">
          {/* Introduction */}
          <div className="prose max-w-none">
            <p className="text-gray-600">
              In this blog, we&apos;ll discuss deep learning concepts from{" "}
              <a
                href="https://d2l.aivivn.com/chapter_multilayer-perceptrons/index_vn.html"
                className="text-indigo-600 hover:text-indigo-800"
                target="_blank"
                rel="noopener noreferrer"
              >
                Chapter 5 of the D2L book
              </a>
              .
            </p>
          </div>

          {/* Topics Grid */}
          <div className="space-y-4 mt-8">
            {topics.map((topic, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-lg p-6 transition-all duration-200"
              >
                <div
                  className="flex items-start gap-4 cursor-pointer"
                  onClick={() =>
                    setExpandedSection(expandedSection === index ? null : index)
                  }
                >
                  <topic.icon className="w-6 h-6 text-indigo-600 flex-shrink-0" />
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold text-gray-900">
                        {topic.title}
                      </h3>
                      {expandedSection === index ? (
                        <ChevronUp className="w-5 h-5 text-gray-500" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-gray-500" />
                      )}
                    </div>
                    <p className="mt-2 text-sm text-gray-600">
                      {topic.description}
                    </p>
                  </div>
                </div>
                {expandedSection === index && (
                  <div className="mt-4 pt-4 border-t border-gray-200 text-gray-700">
                    {topic.content}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Calculation;
