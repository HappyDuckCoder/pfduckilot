import React from "react";

// Define TypeScript interfaces
interface PhaseStep {
  title: string;
  description: string;
  tasks: string[];
}

interface ProjectPhase {
  name: string;
  description: string;
  steps: PhaseStep[];
  icon: React.ReactNode;
}

const projectPhases: ProjectPhase[] = [
  {
    name: "Khởi động dự án",
    description: "Đây là bước khởi động toàn bộ quá trình.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      </svg>
    ),
    steps: [
      {
        title: "Xác định mục tiêu",
        description: "Xác định mục tiêu và sản phẩm bàn giao (deliverables).",
        tasks: [
          "Xác định mục tiêu chính của dự án",
          "Liệt kê các sản phẩm bàn giao (deliverables)",
          "Xác định các chỉ số đo lường thành công",
        ],
      },
      {
        title: "Xác định nguồn lực",
        description:
          "Xác định ngân sách, nguồn lực cần thiết và ai tham gia dự án.",
        tasks: [
          "Xác định ngân sách cần thiết",
          "Liệt kê nguồn lực con người, thiết bị, phần mềm",
          "Xác định những bên liên quan (stakeholders)",
        ],
      },
      {
        title: "Ghi lại thông tin",
        description:
          "Ghi lại toàn bộ thông tin để trình bày giá trị dự án và xin phê duyệt.",
        tasks: [
          "Lập đề xuất dự án",
          "Thuyết trình để xin phê duyệt",
          "Nhận phản hồi và điều chỉnh nếu cần",
        ],
      },
    ],
  },
  {
    name: "Lập kế hoạch",
    description:
      "Sau khi được phê duyệt, bạn lập kế hoạch cụ thể để đạt mục tiêu.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
        />
      </svg>
    ),
    steps: [
      {
        title: "Lập ngân sách",
        description: "Xây dựng kế hoạch chi tiết cho ngân sách.",
        tasks: [
          "Ước tính chi phí chi tiết",
          "Phân bổ ngân sách theo các hạng mục",
          "Dự phòng cho các rủi ro tài chính",
        ],
      },
      {
        title: "Lập lịch trình",
        description: "Thiết lập lịch trình và các cột mốc quan trọng.",
        tasks: [
          "Xác định các cột mốc chính",
          "Chia nhỏ công việc thành các nhiệm vụ",
          "Thiết lập thời gian bắt đầu và kết thúc cho từng nhiệm vụ",
        ],
      },
      {
        title: "Quản lý rủi ro",
        description: "Lường trước rủi ro và lập kế hoạch xử lý.",
        tasks: [
          "Xác định các rủi ro tiềm tàng",
          "Đánh giá mức độ ảnh hưởng của từng rủi ro",
          "Lập kế hoạch ứng phó cho từng trường hợp",
        ],
      },
    ],
  },
  {
    name: "Thực hiện và hoàn thành công việc",
    description: "Đội ngũ sẽ thực hiện các nhiệm vụ theo kế hoạch.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
        />
      </svg>
    ),
    steps: [
      {
        title: "Theo dõi tiến độ",
        description:
          "Vai trò của người quản lý dự án: theo dõi tiến độ, tạo động lực, gỡ rối khi có vấn đề.",
        tasks: [
          "Giám sát tiến độ công việc",
          "Tổ chức họp định kỳ để cập nhật tình trạng",
          "Điều chỉnh kế hoạch khi cần thiết",
        ],
      },
      {
        title: "Quản lý chất lượng",
        description: "Đảm bảo công việc hoàn thành đúng hạn và chất lượng.",
        tasks: [
          "Thiết lập tiêu chuẩn chất lượng rõ ràng",
          "Tổ chức kiểm tra chất lượng định kỳ",
          "Xử lý các vấn đề về chất lượng khi phát sinh",
        ],
      },
      {
        title: "Giao tiếp với các bên",
        description: "Duy trì giao tiếp với stakeholders và team.",
        tasks: [
          "Cập nhật tiến độ cho các bên liên quan",
          "Xử lý các thay đổi yêu cầu từ khách hàng",
          "Đảm bảo thông tin được truyền đạt đúng và đủ",
        ],
      },
    ],
  },
  {
    name: "Kết thúc dự án",
    description: "Khi mọi việc đã xong, đây là lúc kết thúc.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
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
    ),
    steps: [
      {
        title: "Xác nhận hoàn thành",
        description:
          "Xác nhận mọi nhiệm vụ đã hoàn thành, kể cả những nhiệm vụ được bổ sung sau.",
        tasks: [
          "Kiểm tra tất cả deliverables",
          "Nhận xác nhận từ các bên liên quan",
          "Hoàn thành các thủ tục tài chính còn lại",
        ],
      },
      {
        title: "Đánh giá dự án",
        description:
          "Hãy dành thời gian để phản ánh lại: điều gì làm tốt và điều gì có thể cải thiện.",
        tasks: [
          "Tổ chức cuộc họp retrospective",
          "Ghi lại bài học kinh nghiệm",
          "Xây dựng báo cáo đánh giá cuối cùng",
        ],
      },
      {
        title: "Ăn mừng thành công",
        description: "Sau khi hoàn thành dự án, hãy ăn mừng với nhóm của bạn!",
        tasks: [
          "Tổ chức sự kiện ăn mừng",
          "Ghi nhận đóng góp của các thành viên",
          "Chia sẻ thành công với toàn tổ chức",
        ],
      },
    ],
  },
];
const ProjectLifecycleComponent: React.FC = () => {
  // Project lifecycle data based on the document
  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-8 mt-20 text-center text-blue-600">
        Vòng đời dự án (Project Life Cycle)
      </h1>

      <div className="space-y-12">
        {projectPhases.map((phase, phaseIndex) => (
          <div
            key={phaseIndex}
            className="bg-white rounded-lg shadow-lg overflow-hidden"
          >
            <div className="bg-blue-500 text-white p-4 flex items-center">
              <div className="mr-4">{phase.icon}</div>
              <div>
                <h2 className="text-xl font-bold">
                  Giai đoạn {phaseIndex + 1}: {phase.name}
                </h2>
                <p className="text-blue-100">{phase.description}</p>
              </div>
            </div>

            <div className="p-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {phase.steps.map((step, stepIndex) => (
                  <div
                    key={stepIndex}
                    className="bg-gray-50 p-4 rounded-md border border-gray-200"
                  >
                    <h3 className="font-bold text-lg text-blue-700 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{step.description}</p>
                    <ul className="list-disc pl-5 space-y-1">
                      {step.tasks.map((task, taskIndex) => (
                        <li key={taskIndex} className="text-gray-700">
                          {task}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectLifecycleComponent;
