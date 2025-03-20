import React from "react";
import CodeBlockCal from "../Calculation/CalBlog";

const CollectData = () => {
  return (
    <div className="mx-auto max-w-screen-md lg:max-w-screen-lg p-6 sm:p-8 md:p-10 bg-slate-100 shadow-lg rounded-xl">
      <h2 className="text-blue-600 text-xl font-semibold mb-2">
        Phương pháp thu thập dữ liệu
      </h2>
      <p className="text-gray-700 mb-4">
        Dữ liệu được thu thập bằng cách sao chép thông tin từ các nguồn chính
        thức và lưu trữ dưới dạng tệp văn bản (.txt). Quá trình này giúp dễ dàng
        xử lý và tích hợp vào hệ thống chatbot.
      </p>

      <h2 className="text-blue-600 text-xl font-semibold mb-2">
        Quy trình thu thập dữ liệu
      </h2>
      <ul className="text-gray-700 list-disc pl-6 mt-2">
        {[
          "Xác định nguồn dữ liệu đáng tin cậy.",
          "Sao chép nội dung cần thiết từ hệ thống hoặc tài liệu y khoa.",
          "Chuyển đổi nội dung thành định dạng văn bản (.txt).",
          "Lưu trữ và tổ chức tệp theo danh mục để dễ dàng truy xuất.",
          "Tích hợp dữ liệu vào hệ thống chatbot để xử lý và tìm kiếm.",
        ].map((step, index) => (
          <li key={index}>{step}</li>
        ))}
      </ul>

      <h2 className="text-blue-600 text-xl font-semibold mt-4">
        Lợi ích của phương pháp này
      </h2>
      <ul className="text-gray-700 list-disc pl-6 mt-2">
        {[
          "Dữ liệu có cấu trúc đơn giản, dễ dàng xử lý.",
          "Tiết kiệm thời gian thu thập và tích hợp.",
          "Đảm bảo dữ liệu có thể được sử dụng ngay mà không cần chuyển đổi phức tạp.",
          "Phù hợp với các mô hình NLP sử dụng Vector Embedding để tìm kiếm thông tin.",
        ].map((benefit, index) => (
          <li key={index}>{benefit}</li>
        ))}
      </ul>

      <h2 className="text-blue-600 text-xl font-semibold mt-4">
        Lập trình tiền xử lý dữ liệu (Preprocessing)
      </h2>
      <p className="text-gray-700 mb-4">
        Sau khi thu thập, dữ liệu cần được làm sạch và chuẩn hóa trước khi đưa
        vào hệ thống AI.
      </p>

      <ul className="text-gray-700 list-disc pl-6 mt-2">
        {[
          "Loại bỏ các ký tự đặc biệt và khoảng trắng dư thừa.",
          "Chuẩn hóa chữ hoa - chữ thường để tránh trùng lặp.",
          "Xóa các dòng trống và nội dung không cần thiết.",
          "Sử dụng kỹ thuật Tokenization để phân tách từ ngữ.",
          "Chuyển đổi văn bản thành dạng vector để dễ dàng xử lý.",
        ].map((preprocessingStep, index) => (
          <li key={index}>{preprocessingStep}</li>
        ))}
      </ul>

      <h2 className="text-blue-600 text-xl font-semibold mt-4">
        Ví dụ code Python xử lý dữ liệu
      </h2>

      <CodeBlockCal
        codeData={{
          language: "python",
          filename: "collect_data.py",
          highlightLines: [5, 19, 36, 52],
          code: `import os
import re
import unicodedata

def preprocess_text(text):
    """
    Làm sạch nội dung văn bản tiếng Việt:
    - Chuẩn hóa Unicode để tránh lỗi mã hóa.
    - Loại bỏ ký tự đặc biệt (chỉ giữ lại chữ cái, số, khoảng trắng và dấu câu thông dụng).
    - Chuyển thành chữ thường.
    - Xóa khoảng trắng dư thừa và dòng trống.
    """
    text = unicodedata.normalize("NFC", text)  # Chuẩn hóa Unicode cho tiếng Việt
    text = re.sub(r"[^\w\s,\\.?!áàảãạăắằẳẵặâấầẩẫậéèẻẽẹêếềểễệíìỉĩịóòỏõọôốồổỗộơớờởỡợúùủũụưứừửữựýỳỷỹỵđ]", "", text)
    text = text.lower().strip()  # Chuyển thành chữ thường, xóa khoảng trắng đầu/cuối
    text = "\\n".join([line.strip() for line in text.split("\\n") if line.strip()])  # Xóa dòng trống
    return text

def preprocess_folder(folder_path):
    """
    Xử lý tất cả các file .txt trong thư mục.
    - Đọc nội dung, làm sạch và ghi đè lại file.
    """
    if not os.path.exists(folder_path):
        print(f"❌ Lỗi: Thư mục '{folder_path}' không tồn tại!")
        return
    
    txt_files = [f for f in os.listdir(folder_path) if f.endswith(".txt")]
    
    if not txt_files:
        print(f"⚠️ Không tìm thấy file .txt nào trong thư mục '{folder_path}'!")
        return
    
    print(f"🔍 Đang xử lý {len(txt_files)} file trong thư mục '{folder_path}'...\\n")

    for file_name in txt_files:
        file_path = os.path.join(folder_path, file_name)
        
        with open(file_path, "r", encoding="utf-8") as file:
            content = file.read()
        
        clean_content = preprocess_text(content)
        
        with open(file_path, "w", encoding="utf-8") as file:
            file.write(clean_content)
        
        print(f"✅ Đã xử lý: {file_name}")

    print("\\n🎉 Hoàn tất! Tất cả file đã được làm sạch.")

# Ví dụ sử dụng
if __name__ == "__main__":
    folder_path = "../database"  # Thay thế bằng đường dẫn thực tế
    preprocess_folder(folder_path)`,
        }}
      />
    </div>
  );
};

export default CollectData;
