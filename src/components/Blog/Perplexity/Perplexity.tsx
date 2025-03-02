import SplitText from "@/components/ui/SplitText";
import React from "react";

const Perplexity = () => {
  return (
    <section
      id="hero-section"
      className="px-7 pb-10 md:pb-40 pt-24 flex flex-col items-center justify-center"
    >
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className=" ">
          <SplitText
            text="Giới thiệu về Perplexity AI"
            className="text-4xl md:text-6xl text-lightColor font-extrabold mb-4"
          />
          <p className="text-lg text-lightColor mb-6">
            Perplexity AI là một công cụ AI tích hợp các công nghệ máy học và
            ngôn ngữ tự nhiên tiên tiến nhất hiện nay. Ra mắt vào năm 2022 bởi
            Aravind Srinivas và đội ngũ chuyên gia AI, Perplexity AI nhắm mục
            đích tạo ra một cách tiếp cận mới trong việc tìm kiếm thông tin,
            giúp người dùng nhận được các câu trả lời chính xác, nhanh chóng và
            dễ hiểu.
          </p>
          <p className="text-lg text-lightColor mb-6">
            Khác với các công cụ tìm kiếm truyền thống như Google, Perplexity AI
            không chỉ cung cấp danh sách các trang web mà trực tiếp đưa ra các
            câu trả lời được tổng hợp từ nhiều nguồn khác nhau.
          </p>

          <h2 className="text-2xl font-bold text-lightColor mt-8 mb-4">
            Chức năng chính của Perplexity AI
          </h2>
          <ul className="list-disc list-inside text-lightColor mb-6">
            <li>
              <strong>Giao diện đàm thoại</strong>: Người dùng có thể đặt câu
              hỏi và nhận được câu trả lời ngay lập tức, tương tự như tương tác
              với một trí tuệ nhân tạo thông minh.
            </li>
            <li>
              <strong>Chế độ &quot;Deep Research&quot;</strong>: Giúp tìm kiếm
              và phân tích thông tin sâu hơn, dành nhiều thời gian để đưa ra kết
              quả chi tiết.
            </li>
            <li>
              <strong>Tích hợp nguồn dữ liệu phong phú</strong>: Perplexity AI
              trích dẫn nguồn gốc của thông tin, giúp người dùng xác minh tính
              đúng đắn.
            </li>
            <li>
              <strong>API Sonar</strong>: Cung cấp API cho các nhà phát triển,
              giúp tích hợp khả năng tìm kiếm AI vào các ứng dụng khác.
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-lightColor mt-8 mb-4">
            Cách sử dụng hiệu quả Perplexity AI
          </h2>
          <ul className="list-disc list-inside text-lightColor mb-6">
            <li>
              <strong>Sử dụng câu hỏi rõ ràng</strong>: Để nhận được kết quả
              chính xác nhất, hãy sử dụng ngôn ngữ rõ ràng, tránh mô tả mơ hồ.
            </li>
            <li>
              <strong>Tận dụng chế độ &quot;Deep Research&quot;</strong>: Khi
              cần tìm hiểu vấn đề sâu hơn, hãy bật chế độ này để AI có thời gian
              tổng hợp thông tin tốt nhất.
            </li>
            <li>
              <strong>Kiểm tra nguồn dữ liệu</strong>: Mỗi câu trả lời của
              Perplexity AI thường có trích dẫn nguồn, hãy xác minh để đảm bảo
              tính chính xác.
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-lightColor mt-8 mb-4">
            Cách lấy API của Perplexity AI
          </h2>
          <ol className="list-decimal list-inside text-lightColor mb-6">
            <li>
              <strong>Đăng ký tài khoản</strong>: Truy cập trang web chính thức
              của Perplexity AI và đăng ký tài khoản.
            </li>
            <li>
              <strong>Truy cập trang API</strong>: Sau khi đăng nhập, tìm đến
              phần API trong cài đặt tài khoản.
            </li>
            <li>
              <strong>Tạo khoá API</strong>: Nhấn &quot;Generate API Key&quot;
              để tạo khoá API cá nhân.
            </li>
            <li>
              <strong>Tích hợp API vào ứng dụng</strong>: Dùng khoá API để tích
              hợp vào các dự án phát triển.
            </li>
          </ol>

          <h2 className="text-2xl font-bold text-lightColor mt-8 mb-4">
            Tổng kết
          </h2>
          <p className="text-lg text-lightColor mb-6">
            Perplexity AI là một công cụ AI tiềm năng, giúp người dùng tìm kiếm
            và phân tích thông tin nhanh chóng, chính xác. Bằng việc tận dụng
            các chức năng như &quot;Deep Research&quot;, API Sonar và giao diện
            đàm thoại thông minh, Perplexity AI đang dần trở thành một đối thủ
            đáng gờm trên thị trường AI và công nghệ tìm kiếm.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Perplexity;
