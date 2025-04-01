import SplitText from "@/components/ui/SplitText";
import React, { useState } from "react";

// Định nghĩa kiểu dữ liệu cho mỗi mục trong quy trình AI cá nhân hóa
type ProcessStep = {
  id: string;
  title: string;
  description: string;
  details: string[];
};

// Định nghĩa kiểu dữ liệu cho dữ liệu AI cá nhân hóa
interface AIPersonalizationData {
  overview: {
    definition: string;
    howItWorks: string;
    valueForUsers: string[];
    valueForBusinesses: string[];
    examples: string[];
  };
  process: ProcessStep[];
}

const AIPersonal: React.FC = () => {
  // Dữ liệu về AI cá nhân hóa từ tài liệu
  const aiPersonalizationData: AIPersonalizationData = {
    overview: {
      definition:
        "AI cá nhân hóa là một nhánh của Trí tuệ nhân tạo (AI) tập trung vào việc điều chỉnh và tùy biến trải nghiệm, nội dung, sản phẩm hoặc dịch vụ cho từng người dùng cá nhân dựa trên dữ liệu về hành vi, sở thích, nhu cầu và bối cảnh của họ.",
      howItWorks:
        "AI cá nhân hóa sử dụng các thuật toán Máy học (Machine Learning) để phân tích lượng lớn dữ liệu người dùng (như lịch sử duyệt web, lịch sử mua hàng, thông tin nhân khẩu học, tương tác trên mạng xã hội, vị trí địa lý, thời gian trong ngày,...). Từ đó, hệ thống học hỏi, dự đoán sở thích, nhu cầu tiếp theo và tự động điều chỉnh nội dung, đề xuất hoặc giao diện cho phù hợp.",
      valueForUsers: [
        "Trải nghiệm tốt hơn: Nhận được nội dung, sản phẩm, dịch vụ đúng với sở thích và nhu cầu, không bị làm phiền bởi những thứ không liên quan.",
        "Tiết kiệm thời gian: Dễ dàng khám phá những gì họ quan tâm mà không cần tốn công tìm kiếm.",
        "Cảm thấy được thấu hiểu: Tăng sự gắn kết với thương hiệu hoặc dịch vụ.",
      ],
      valueForBusinesses: [
        "Tăng tương tác và gắn kết (Engagement): Người dùng có xu hướng tương tác nhiều hơn với nội dung/sản phẩm phù hợp.",
        "Tỷ lệ chuyển đổi cao hơn (Conversion Rate): Đề xuất đúng sản phẩm/dịch vụ cho đúng người vào đúng thời điểm giúp tăng khả năng mua hàng.",
        "Cải thiện lòng trung thành của khách hàng (Customer Loyalty): Trải nghiệm cá nhân hóa tốt giúp giữ chân khách hàng.",
        "Tối ưu hóa Marketing: Phân phối quảng cáo và thông điệp hiệu quả hơn, giảm chi phí lãng phí.",
        "Thu thập Insights giá trị: Hiểu sâu hơn về khách hàng để cải thiện sản phẩm và chiến lược kinh doanh.",
      ],
      examples: [
        "Thương mại điện tử: Gợi ý sản phẩm tương tự hoặc bổ sung dựa trên lịch sử xem/mua hàng (Amazon, Shopee, Tiki).",
        "Giải trí trực tuyến: Đề xuất phim/nhạc dựa trên lịch sử xem/nghe (Netflix, Spotify, YouTube).",
        "Nội dung/Tin tức: Hiển thị bài viết, tin tức phù hợp với sở thích đọc của người dùng (Facebook Feed, Google News).",
        "Marketing/Quảng cáo: Hiển thị quảng cáo nhắm mục tiêu đến các đối tượng cụ thể (Google Ads, Facebook Ads).",
        "Giáo dục: Điều chỉnh lộ trình học tập và bài tập phù hợp với năng lực của từng học viên.",
        "Chăm sóc sức khỏe: Gợi ý chế độ ăn uống, luyện tập cá nhân hóa.",
      ],
    },
    process: [
      {
        id: "define-objectives",
        title: "Xác định mục tiêu và phạm vi",
        description:
          "Xác định rõ những gì bạn muốn cá nhân hóa và mục tiêu kinh doanh cụ thể.",
        details: [
          "Mục tiêu: Bạn muốn cá nhân hóa cái gì (nội dung, sản phẩm, giao diện, quảng cáo,...)? Mục tiêu kinh doanh cụ thể là gì (tăng tương tác, tăng doanh số, giảm tỷ lệ rời bỏ,...)?",
          "Phạm vi: Cá nhân hóa áp dụng cho đối tượng nào? Trên nền tảng nào (web, app)? Mức độ cá nhân hóa ra sao?",
          "Chỉ số đo lường (Metrics): Xác định cách đo lường sự thành công (ví dụ: tỷ lệ nhấp chuột (CTR), tỷ lệ chuyển đổi, thời gian trên trang, điểm hài lòng,...).",
        ],
      },
      {
        id: "data-collection",
        title: "Thu thập và Chuẩn bị dữ liệu",
        description:
          "Thu thập, làm sạch và chuẩn bị dữ liệu cần thiết cho mô hình AI cá nhân hóa.",
        details: [
          "Thu thập dữ liệu: Xác định các nguồn dữ liệu cần thiết (dữ liệu nhân khẩu học, hành vi, ngữ cảnh, dữ liệu người dùng cung cấp).",
          "Làm sạch và Tiền xử lý: Dữ liệu thô thường lộn xộn, thiếu sót. Cần làm sạch, chuẩn hóa định dạng, tích hợp từ nhiều nguồn.",
          "Trích xuất đặc trưng (Feature Engineering): Biến đổi dữ liệu thô thành các đặc trưng (features) có ý nghĩa mà mô hình AI có thể học được.",
          "Tuân thủ các quy định về quyền riêng tư dữ liệu (GDPR, CCPA) và đảm bảo tính đạo đức trong việc sử dụng dữ liệu.",
        ],
      },
      {
        id: "model-selection",
        title: "Lựa chọn và Huấn luyện Mô hình",
        description:
          "Chọn thuật toán AI/ML phù hợp và huấn luyện mô hình với dữ liệu đã chuẩn bị.",
        details: [
          "Lựa chọn thuật toán: Học có giám sát, học không giám sát, lọc cộng tác, lọc dựa trên nội dung, học sâu, hoặc học tăng cường.",
          "Phân chia dữ liệu: Chia bộ dữ liệu thành các tập huấn luyện, kiểm định và kiểm tra.",
          "Huấn luyện mô hình: Sử dụng tập huấn luyện để 'dạy' mô hình nhận diện các mẫu và mối quan hệ trong dữ liệu.",
        ],
      },
      {
        id: "model-evaluation",
        title: "Đánh giá Mô hình",
        description:
          "Đánh giá hiệu suất của mô hình dựa trên các chỉ số đã xác định.",
        details: [
          "Sử dụng tập kiểm tra (dữ liệu mà mô hình chưa từng thấy) để đánh giá hiệu suất.",
          "So sánh hiệu suất của các mô hình khác nhau hoặc các phiên bản khác nhau của cùng một mô hình.",
          "Các chỉ số đánh giá: Độ chính xác, Độ phủ, Độ đa dạng, Precision, Recall, F1-Score, NDCG,...",
        ],
      },
      {
        id: "model-deployment",
        title: "Triển khai Mô hình",
        description:
          "Tích hợp mô hình đã được huấn luyện vào hệ thống thực tế.",
        details: [
          "Triển khai dưới dạng API, dịch vụ vi mô (microservice), hoặc nhúng trực tiếp.",
          "Xem xét các yếu tố như khả năng mở rộng, độ trễ, và tính sẵn sàng.",
          "Sử dụng A/B testing để so sánh hiệu quả của hệ thống cá nhân hóa mới với hệ thống cũ.",
        ],
      },
      {
        id: "monitoring-optimization",
        title: "Giám sát và Tối ưu hóa",
        description:
          "Theo dõi hiệu suất của mô hình trong môi trường thực tế và liên tục cải thiện.",
        details: [
          "Giám sát liên tục: Theo dõi hiệu suất của mô hình trong môi trường thực tế.",
          "Thu thập phản hồi: Thu thập phản hồi trực tiếp (đánh giá, bình luận) và gián tiếp (thay đổi hành vi) từ người dùng.",
          "Tái huấn luyện (Retraining): Cập nhật và huấn luyện lại mô hình định kỳ với dữ liệu mới nhất.",
          "Tối ưu hóa: Liên tục thử nghiệm các thuật toán mới, đặc trưng mới, hoặc cách tiếp cận khác.",
        ],
      },
    ],
  };

  // State để theo dõi bước được chọn
  const [selectedStep, setSelectedStep] = useState<ProcessStep | null>(null);

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <div className="mb-8">
        <SplitText
          text="AI Personalization"
          className="text-3xl font-bold text-white mb-6 mt-20"
        />
        <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
          <h2 className="text-xl font-semibold mb-3 text-blue-600">
            Định nghĩa
          </h2>
          <p className="text-gray-700 mb-4">
            {aiPersonalizationData.overview.definition}
          </p>

          <h2 className="text-xl font-semibold mb-3 text-blue-600">
            Cách thức hoạt động
          </h2>
          <p className="text-gray-700 mb-4">
            {aiPersonalizationData.overview.howItWorks}
          </p>

          <div className="grid md:grid-cols-2 gap-6 mt-6">
            <div className="bg-blue-50 rounded-lg p-4">
              <h2 className="text-xl font-semibold mb-3 text-blue-600">
                Giá trị cho người dùng
              </h2>
              <ul className="list-disc pl-5 text-gray-700">
                {aiPersonalizationData.overview.valueForUsers.map(
                  (value, index) => (
                    <li key={index} className="mb-2">
                      {value}
                    </li>
                  )
                )}
              </ul>
            </div>

            <div className="bg-blue-50 rounded-lg p-4">
              <h2 className="text-xl font-semibold mb-3 text-blue-600">
                Giá trị cho doanh nghiệp
              </h2>
              <ul className="list-disc pl-5 text-gray-700">
                {aiPersonalizationData.overview.valueForBusinesses.map(
                  (value, index) => (
                    <li key={index} className="mb-2">
                      {value}
                    </li>
                  )
                )}
              </ul>
            </div>
          </div>

          <div className="mt-6">
            <h2 className="text-xl font-semibold mb-3 text-blue-600">
              Ví dụ ứng dụng
            </h2>
            <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {aiPersonalizationData.overview.examples.map((example, index) => (
                <li
                  key={index}
                  className="bg-gray-50 p-3 rounded border border-gray-200"
                >
                  {example}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <SplitText
          text="Quy trình xây dựng AI cá nhân hóa"
          className="text-3xl font-bold text-white mb-6 mt-20"
        />

        <div className="grid grid-cols-1 md:grid-cols-7 gap-2 md:gap-4 lg:gap-6 mb-8">
          {aiPersonalizationData.process.map((step, index) => (
            <div
              key={step.id}
              className={`relative ${
                index < aiPersonalizationData.process.length - 1
                  ? "after:content-[''] after:absolute after:top-1/2 after:right-0 after:w-full after:h-1 after:bg-blue-200 after:-z-10 after:hidden md:after:block"
                  : ""
              }`}
            >
              <button
                onClick={() => setSelectedStep(step)}
                className={`w-full h-24 flex flex-col items-center justify-center p-2 rounded-lg transition-all ${
                  selectedStep?.id === step.id
                    ? "bg-blue-600 text-white shadow-lg scale-105"
                    : "bg-blue-100 text-blue-700 hover:bg-blue-200"
                }`}
              >
                <div className="font-bold text-lg mb-1">{index + 1}</div>
                <div className="text-xs text-center">{step.title}</div>
              </button>
            </div>
          ))}
        </div>

        {selectedStep ? (
          <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-blue-500">
            <h3 className="text-xl font-bold text-blue-700 mb-3">
              {selectedStep.title}
            </h3>
            <p className="text-gray-700 mb-4">{selectedStep.description}</p>
            <ul className="list-disc pl-5 text-gray-700 space-y-2">
              {selectedStep.details.map((detail, index) => (
                <li key={index}>{detail}</li>
              ))}
            </ul>
          </div>
        ) : (
          <div className="bg-blue-50 p-6 rounded-lg text-center">
            <p className="text-blue-600">
              Chọn một bước trong quy trình để xem chi tiết
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AIPersonal;
