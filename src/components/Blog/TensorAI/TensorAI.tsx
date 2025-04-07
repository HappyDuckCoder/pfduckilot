import SplitText from "@/components/ui/SplitText";
import React, { useState } from "react";

const TensorArtInfo: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("overview");
  const [expandedSections, setExpandedSections] = useState<{
    [key: string]: boolean;
  }>({
    "what-is": true,
    models: true,
    features: true,
    pros: true,
    cons: true,
  });

  const toggleSection = (section: string) => {
    setExpandedSections({
      ...expandedSections,
      [section]: !expandedSections[section],
    });
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <div className="flex items-center gap-2 mb-6 mt-20 text-white">
        <SplitText text="Tensor.art" className="text-3xl font-bold" />
      </div>

      {/* Custom Tabs */}
      <div className="mb-6 w-full flex rounded-md overflow-hidden border">
        <button
          onClick={() => setActiveTab("overview")}
          className={`flex-1 py-2 px-4 ${
            activeTab === "overview" ? "bg-blue-500 text-white" : "bg-gray-100"
          }`}
        >
          Tổng quan
        </button>
        <button
          onClick={() => setActiveTab("models")}
          className={`flex-1 py-2 px-4 ${
            activeTab === "models" ? "bg-blue-500 text-white" : "bg-gray-100"
          }`}
        >
          Mô hình & Tính năng
        </button>
        <button
          onClick={() => setActiveTab("review")}
          className={`flex-1 py-2 px-4 ${
            activeTab === "review" ? "bg-blue-500 text-white" : "bg-gray-100"
          }`}
        >
          Đánh giá
        </button>
      </div>

      {/* Overview Tab Content */}
      {activeTab === "overview" && (
        <div className="bg-white rounded-lg shadow p-4 mb-4">
          <div className="border-b pb-4 mb-4">
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggleSection("what-is")}
            >
              <h2 className="text-xl font-bold flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M12 16v-4"></path>
                  <path d="M12 8h.01"></path>
                </svg>
                Tensor.art là gì?
              </h2>
              {expandedSections["what-is"] ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m18 15-6-6-6 6"></path>
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m6 9 6 6 6-6"></path>
                </svg>
              )}
            </div>
            {expandedSections["what-is"] && (
              <div className="mt-4 space-y-4">
                <p>
                  Tensor.art là một nền tảng sáng tạo AI, cho phép người dùng
                  tạo ra các tác phẩm nghệ thuật và hình ảnh từ văn bản mô tả
                  (text-to-image). Sử dụng các mô hình học sâu (deep learning),
                  Tensor.art có thể chuyển đổi các mô tả văn bản thành những bức
                  tranh độc đáo và sáng tạo, từ đó mở rộng khả năng sáng tác
                  nghệ thuật của người dùng mà không cần kỹ năng vẽ.
                </p>
                <p>
                  Các tác phẩm nghệ thuật trên nền tảng này thường được tạo ra
                  bằng cách áp dụng các mô hình AI mạnh mẽ như Stable Diffusion
                  hoặc những công nghệ tiên tiến khác trong lĩnh vực học máy
                  (machine learning) và xử lý hình ảnh (image generation).
                </p>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Models Tab Content */}
      {activeTab === "models" && (
        <div className="space-y-6">
          <div className="bg-white rounded-lg shadow p-4 mb-4">
            <div className="border-b pb-4 mb-4">
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggleSection("models")}
              >
                <h2 className="text-xl font-bold flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m21 12-8-10v5H5v10h8v5z"></path>
                  </svg>
                  Các mô hình AI nổi bật
                </h2>
                {expandedSections["models"] ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m18 15-6-6-6 6"></path>
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m6 9 6 6 6-6"></path>
                  </svg>
                )}
              </div>
              {expandedSections["models"] && (
                <div className="mt-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="border rounded-lg p-4">
                      <h3 className="font-semibold mb-2">Stable Diffusion</h3>
                      <p>
                        Là một mô hình tạo hình ảnh nổi bật, ổn định và có khả
                        năng tạo ra các hình ảnh chi tiết từ mô tả văn bản. Nó
                        đặc biệt hữu ích khi bạn muốn hình ảnh có chất lượng cao
                        và sắc nét.
                      </p>
                    </div>
                    <div className="border rounded-lg p-4">
                      <h3 className="font-semibold mb-2">DALL·E</h3>
                      <p>
                        DALL·E là một mô hình AI của OpenAI, nổi bật với khả
                        năng sáng tạo hình ảnh vô cùng đa dạng và phong phú từ
                        những mô tả đơn giản.
                      </p>
                    </div>
                    <div className="border rounded-lg p-4">
                      <h3 className="font-semibold mb-2">MidJourney</h3>
                      <p>
                        Một trong những mô hình AI rất được yêu thích, nổi bật
                        với khả năng tạo ra những hình ảnh nghệ thuật mang tính
                        thẩm mỹ cao và phong cách riêng biệt.
                      </p>
                    </div>
                    <div className="border rounded-lg p-4">
                      <h3 className="font-semibold mb-2">DeepDream</h3>
                      <p>
                        Một mô hình AI khác giúp tạo ra các hình ảnh với phong
                        cách siêu thực và huyền bí, thường được sử dụng để tạo
                        ra các tác phẩm mang tính hình ảnh mạnh mẽ và kỳ lạ.
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggleSection("features")}
            >
              <h2 className="text-xl font-bold flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                </svg>
                Các tính năng trên Tensor.art
              </h2>
              {expandedSections["features"] ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m18 15-6-6-6 6"></path>
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m6 9 6 6 6-6"></path>
                </svg>
              )}
            </div>
            {expandedSections["features"] && (
              <div className="mt-4">
                <ul className="space-y-4">
                  <li className="border-l-4 border-blue-500 pl-4 py-2">
                    <h3 className="font-semibold">Template tạo hình ảnh</h3>
                    <p>
                      Nền tảng cung cấp các template sẵn có mà người dùng có thể
                      chọn lựa, giúp dễ dàng tạo ra các tác phẩm nghệ thuật từ
                      các chủ đề khác nhau.
                    </p>
                  </li>
                  <li className="border-l-4 border-purple-500 pl-4 py-2">
                    <h3 className="font-semibold">Text-to-Image</h3>
                    <p>
                      Tính năng chính của Tensor.art, cho phép bạn nhập mô tả
                      văn bản và AI sẽ tạo ra hình ảnh dựa trên đó. Bạn có thể
                      thử nghiệm với các mô tả khác nhau để xem sự thay đổi
                      trong kết quả.
                    </p>
                  </li>
                  <li className="border-l-4 border-indigo-500 pl-4 py-2">
                    <h3 className="font-semibold">
                      Tạo hình ảnh với phong cách riêng
                    </h3>
                    <p>
                      Tensor.art cũng cho phép người dùng tạo hình ảnh theo các
                      phong cách nghệ thuật cụ thể, ví dụ như tranh vẽ, ảnh chân
                      dung, hoạt hình, v.v.
                    </p>
                  </li>
                  <li className="border-l-4 border-pink-500 pl-4 py-2">
                    <h3 className="font-semibold">
                      Tùy chỉnh độ sáng tạo và chi tiết
                    </h3>
                    <p>
                      Một số mô hình AI trên Tensor.art cho phép người dùng điều
                      chỉnh độ sáng tạo và độ chi tiết của hình ảnh, từ đó giúp
                      bạn tạo ra những tác phẩm phù hợp với yêu cầu và sở thích
                      cá nhân.
                    </p>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Review Tab Content */}
      {activeTab === "review" && (
        <div className="space-y-6">
          <div className="bg-white rounded-lg shadow p-4 mb-4">
            <div className="border-b pb-4 mb-4">
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggleSection("pros")}
              >
                <h2 className="text-xl font-bold text-green-600 flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                  </svg>
                  Ưu điểm
                </h2>
                {expandedSections["pros"] ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m18 15-6-6-6 6"></path>
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m6 9 6 6 6-6"></path>
                  </svg>
                )}
              </div>
              {expandedSections["pros"] && (
                <div className="mt-4">
                  <ul className="list-disc list-inside space-y-2">
                    <li className="pl-2">
                      <span className="font-medium">Dễ sử dụng:</span> Với giao
                      diện thân thiện và dễ thao tác, người dùng không cần phải
                      có kinh nghiệm trong việc tạo hình ảnh hay nghệ thuật số.
                      Chỉ cần một mô tả văn bản đơn giản, bạn có thể tạo ra
                      những bức tranh độc đáo.
                    </li>
                    <li className="pl-2">
                      <span className="font-medium">Chất lượng cao:</span> Các
                      mô hình AI như Stable Diffusion và DALL·E mang lại hình
                      ảnh chất lượng cao, sắc nét và chi tiết.
                    </li>
                    <li className="pl-2">
                      <span className="font-medium">
                        Nhiều tùy chọn sáng tạo:
                      </span>{" "}
                      Với khả năng tùy chỉnh mô tả văn bản và phong cách nghệ
                      thuật, người dùng có thể thử nghiệm và sáng tạo không giới
                      hạn.
                    </li>
                    <li className="pl-2">
                      <span className="font-medium">Cộng đồng và chia sẻ:</span>{" "}
                      Người dùng có thể dễ dàng chia sẻ tác phẩm của mình với
                      cộng đồng, từ đó nhận được những phản hồi và cải tiến.
                    </li>
                  </ul>
                </div>
              )}
            </div>

            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggleSection("cons")}
            >
              <h2 className="text-xl font-bold text-red-600 flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M12 16v-4"></path>
                  <path d="M12 8h.01"></path>
                </svg>
                Nhược điểm
              </h2>
              {expandedSections["cons"] ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m18 15-6-6-6 6"></path>
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m6 9 6 6 6-6"></path>
                </svg>
              )}
            </div>
            {expandedSections["cons"] && (
              <div className="mt-4">
                <ul className="list-disc list-inside space-y-2">
                  <li className="pl-2">
                    <span className="font-medium">
                      Giới hạn trong một số trường hợp:
                    </span>{" "}
                    Mặc dù AI có thể tạo ra hình ảnh tuyệt vời từ văn bản, đôi
                    khi kết quả có thể không chính xác hoặc không đúng như mong
                    muốn, đặc biệt là với các mô tả phức tạp.
                  </li>
                  <li className="pl-2">
                    <span className="font-medium">Chi phí:</span> Một số tính
                    năng của Tensor.art có thể yêu cầu người dùng trả phí hoặc
                    đăng ký để sử dụng đầy đủ các công cụ.
                  </li>
                  <li className="pl-2">
                    <span className="font-medium">
                      Quá trình tạo hình ảnh có thể lâu:
                    </span>{" "}
                    Tuy rằng các mô hình AI của Tensor.art thường khá mạnh mẽ,
                    đôi khi việc tạo ra một bức tranh có thể mất vài phút tùy
                    vào độ phức tạp và chi tiết của mô tả.
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default TensorArtInfo;
