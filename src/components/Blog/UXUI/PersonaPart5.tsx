import React from "react";
import { User } from "lucide-react";

const personas = [
  {
    name: "Minh",
    age: 32,
    job: "Quản lý dự án",
    goal: "Tìm kiếm giải pháp quản lý thời gian hiệu quả và giao diện trực quan.",
    painPoints:
      "Chán nản với các ứng dụng phức tạp, thiếu tính năng tích hợp đồng bộ.",
  },
  {
    name: "Hồng",
    age: 25,
    job: "Sinh viên",
    goal: "Học tập và tra cứu thông tin một cách nhanh chóng qua điện thoại.",
    painPoints:
      "Ứng dụng học tập quá nhiều bước đăng nhập phức tạp, không thân thiện với giao diện di động.",
  },
  {
    name: "Nam",
    age: 40,
    job: "Doanh nhân",
    goal: "Mở rộng mạng lưới kinh doanh và quản lý tài chính hiệu quả.",
    painPoints:
      "Khó khăn trong việc theo dõi tài chính cá nhân do nhiều công cụ phân tán.",
  },
  {
    name: "Linh",
    age: 29,
    job: "Nhà thiết kế UX/UI",
    goal: "Tạo ra những trải nghiệm người dùng mượt mà và thân thiện.",
    painPoints: "Thiếu công cụ hỗ trợ nghiên cứu người dùng một cách hiệu quả.",
  },
  {
    name: "Dũng",
    age: 35,
    job: "Lập trình viên Full-stack",
    goal: "Phát triển ứng dụng web hiệu suất cao và dễ bảo trì.",
    painPoints:
      "Khó khăn trong việc tối ưu hóa hiệu suất khi xử lý dữ liệu lớn.",
  },
];

const PersonaPart5 = () => {
  return (
    <div className="p-6 text-white">
      <div className="space-y-6">
        {personas.map((persona, index) => (
          <div
            key={index}
            className="p-6 rounded-xl shadow-2xl bg-gray-900 border-l-8 border-purple-500 transition-transform transform hover:scale-110 hover:rotate-1 hover:shadow-purple-500/50 duration-300 ease-in-out"
          >
            <h3 className="text-3xl font-extrabold text-blue-300 flex items-center gap-2 animate-bounce-slow">
              <User className="text-white" size={28} /> {persona.name}
            </h3>
            <p className="text-white mt-2">Tuổi: {persona.age}</p>
            <p className="text-white">Nghề nghiệp: {persona.job}</p>
            <div className="mt-4">
              <h4 className="text-green-400 font-semibold">Mục tiêu</h4>
              <p className="text-white mt-2">{persona.goal}</p>
            </div>
            <div className="mt-2">
              <h4 className="text-red-400 font-semibold">Pain Points</h4>
              <p className="text-white mt-2">{persona.painPoints}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PersonaPart5;
