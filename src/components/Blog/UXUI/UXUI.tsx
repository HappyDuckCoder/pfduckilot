import React, { useState } from "react";
import { Menu } from "lucide-react";
import PersonaPart2 from "./PersonaPart2";
import PersonaPart3 from "./PersonaPart3";
import PersonaPart4 from "./PersonaPart4";
import PersonaPart5 from "./PersonaPart5";
import YeuToTuongPhan from "./YeuToTuongPhan";
import ListComp from "./ListComp";
import CacLoaiCanhChinh from "./CacLoaiCanhChinh";
import NguyenTacCanChinh from "./NguyenTacCanChinh";
import SpacingGuidelines from "./CacLoaiKhoangCach";
import SpacingRules from "./SpacingRule";
import CacLoaiTinhDongNhat from "./CacLoaiDongNhat";
import QuyTacGiupDuyTriTinhDongNhat from "./LuatDongNhat";
import LoiDongNhat from "./LoiDongNhat";
import ColorTheoryGuide from "./ColorTheory";
import TypographyGuide from "./Typography";
import UiAnimationGuide from "./UIAnimation";

const blogContent = [
  {
    title: "UX và UI là gì?",
    sections: [
      {
        heading: "UX (User Experience - Trải nghiệm người dùng)",
        content: (
          <>
            <p>
              Là cách người dùng cảm nhận và tương tác với sản phẩm. UX tốt giúp
              người dùng dễ dàng sử dụng, tìm kiếm thông tin nhanh chóng và hài
              lòng với trải nghiệm tổng thể.
            </p>
          </>
        ),
      },
      {
        heading: "UI (User Interface - Giao diện người dùng)",
        content: (
          <>
            <p>
              Là phần hiển thị mà người dùng nhìn thấy và tương tác, bao gồm màu
              sắc, typography, nút bấm, hình ảnh, bố cục, v.v.
            </p>
          </>
        ),
      },
    ],
  },
  {
    title: "Persona",
    sections: [
      {
        heading: "Định nghĩa Persona",
        content: (
          <>
            <p>
              Persona là một hình mẫu đại diện của người dùng thật dựa trên
              nghiên cứu và dữ liệu thực tế. Nó không chỉ là một nhân vật hư cấu
              mà còn chứa đựng thông tin về nhu cầu, hành vi, động cơ, và những
              khó khăn mà người dùng gặp phải khi tương tác với sản phẩm.
            </p>
          </>
        ),
      },
      {
        heading: "Các thành phần chính của một Persona",
        content: (
          <>
            <PersonaPart2 />
          </>
        ),
      },
      {
        heading: "Lợi ích khi sử dụng Persona trong thiết kế UX",
        content: (
          <>
            <PersonaPart3 />
          </>
        ),
      },
      {
        heading: "Cách xây dựng Persona",
        content: (
          <>
            <PersonaPart4 />
          </>
        ),
      },
      {
        heading: "Ví dụ",
        content: (
          <>
            <PersonaPart5 />
          </>
        ),
      },
    ],
  },
  {
    title: "Quy tắc tương phản",
    sections: [
      {
        heading: "Tương phản la gì?",
        content: (
          <>
            <p>
              <strong>Tương phản (Contrast)</strong> là sự khác biệt rõ ràng
              giữa các yếu tố trong thiết kế, giúp phân biệt chúng với nhau.
              Điều này giúp người dùng dễ dàng nhận diện nội dung quan trọng và
              tạo ra một bố cục trực quan, dễ đọc.
            </p>
            <ul>
              {[
                "Ví dụ:",
                "Chữ trắng trên nền đen dễ đọc hơn chữ xám nhạt trên nền trắng.",
                'Nút "Mua ngay" màu đỏ trên nền trắng sẽ thu hút người dùng hơn.',
                "Tiêu đề lớn, đậm giúp phân biệt với nội dung văn bản nhỏ hơn.",
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  {index !== 0 && <span className="mr-2 text-lg">•</span>}
                  <p>{item}</p>
                </li>
              ))}
            </ul>
          </>
        ),
      },
      {
        heading: "Các yếu tố của tương phản trong UI/UX",
        content: (
          <>
            <YeuToTuongPhan />
          </>
        ),
      },
      {
        heading: "Khi nào nên sử dụng tương phản?",
        content: (
          <>
            <ListComp
              header=""
              list={[
                "Khi muốn thu hút sự chú ý đến một yếu tố quan trọng (ví dụ: CTA - Call to Action).",
                "Khi cần phân cấp nội dung rõ ràng (ví dụ: tiêu đề lớn, nội dung nhỏ hơn).",
                "Khi muốn cải thiện khả năng đọc và truy cập nội dung.",
                "Khi muốn tạo cảm giác trực quan, hiện đại và chuyên nghiệp cho giao diện.",
              ]}
            />
          </>
        ),
      },
      {
        heading: "Một số lỗi phổ biến khi sử dụng tương phản",
        content: (
          <>
            <ListComp
              header=""
              list={[
                "Dùng màu sắc có độ tương phản quá thấp, khiến nội dung khó đọc.",
                "Quá nhiều yếu tố nổi bật cùng lúc, làm mất đi điểm nhấn chính.",
                "Không kiểm tra tỷ lệ tương phản theo tiêu chuẩn WCAG (Web Content Accessibility Guidelines).",
              ]}
            />
          </>
        ),
      },
    ],
  },
  {
    title: "Quy tắc căn chỉnh",
    sections: [
      {
        heading: "Căn chỉnh la gì?",
        content: (
          <>
            <p>
              Căn chỉnh là cách các yếu tố trong thiết kế được sắp xếp theo một
              quy luật nhất định để tạo sự gọn gàng, nhất quán và dễ nhìn.
            </p>
            <ListComp
              header="Tại sao căn chỉnh quan trọng?"
              list={[
                "Giúp giao diện trông gọn gàng, chuyên nghiệp hơn.",
                "Tạo cảm giác trật tự, giúp người dùng dễ theo dõi nội dung.",
                "Hỗ trợ UX tốt hơn bằng cách dẫn mắt người dùng đến nội dung quan trọng.",
              ]}
            />
            <ListComp
              header="Ví dụ về căn chỉnh tốt và kém:"
              list={[
                "✅ Căn chỉnh tốt: Các phần tử được sắp xếp theo lưới (grid), tiêu đề và nội dung thẳng hàng.",
                "❌ Căn chỉnh kém: Nút bấm, văn bản và hình ảnh bị lệch nhau, gây rối mắt.",
              ]}
            />
          </>
        ),
      },
      {
        heading: "Các loại căn chỉnh trong UI/UX",
        content: (
          <>
            <CacLoaiCanhChinh />
          </>
        ),
      },
      {
        heading: "Các nguyên tắc quan trọng khi căn chỉnh",
        content: (
          <>
            <NguyenTacCanChinh />
          </>
        ),
      },
      {
        heading: "Sai lầm phổ biến khi căn chỉnh UI",
        content: (
          <>
            <ListComp
              header=""
              list={[
                "Thiếu nhất quán: Một số phần tử căn trái, một số căn giữa làm bố cục bị lộn xộn.",
                "Không dùng hệ thống lưới: Dễ làm thiết kế mất cân bằng, khó kiểm soát bố cục.",
                "Không kiểm tra khoảng cách: Nếu khoảng cách giữa các yếu tố không đồng đều, thiết kế sẽ trông rối mắt.",
              ]}
            />
          </>
        ),
      },
    ],
  },
  {
    title: "Khoảng cách",
    sections: [
      {
        heading: "Khoảng cách (Spacing) là gì?",
        content: (
          <>
            <p>
              Khoảng cách là khoảng trống giữa các phần tử trên giao diện, bao
              gồm:
            </p>
            <ListComp
              header=""
              list={[
                "Khoảng cách giữa chữ và dòng (Line Height).",
                "Khoảng cách giữa các đoạn văn (Paragraph Spacing).",
                "Khoảng cách giữa các thành phần giao diện (Padding & Margin).",
                "Khoảng cách giữa các phần lớn trong bố cục (White Space).",
              ]}
            />
            <ListComp
              header="Tại sao khoảng cách quan trọng?"
              list={[
                "Giúp nội dung dễ đọc và dễ hiểu hơn.",
                "Tạo sự phân cấp trực quan rõ ràng.",
                "Giúp giao diện không bị rối mắt, mang lại cảm giác chuyên nghiệp.",
                "Hướng dẫn mắt người dùng di chuyển theo đúng luồng nội dung.",
              ]}
            />
          </>
        ),
      },
      {
        heading: "Các loại khoảng cách trong UI/UX",
        content: (
          <>
            <SpacingGuidelines />
          </>
        ),
      },
      {
        heading: "Quy tắc sử dụng khoảng cách hiệu quả",
        content: (
          <>
            <SpacingRules />
          </>
        ),
      },
      {
        heading: "Sai lầm phổ biến khi sử dụng khoảng cách",
        content: (
          <>
            <ListComp
              header=""
              list={[
                "Khoảng cách quá chật chội: Giao diện rối mắt, khó sử dụng.",
                "Khoảng cách quá rộng: Giao diện bị loãng, người dùng mất tập trung.",
                "Không đồng nhất: Các phần tử có khoảng cách không nhất quán gây mất cân bằng.",
                "Nhồi nhét quá nhiều nội dung: Thiếu khoảng trắng làm người dùng ngợp.",
              ]}
            />
          </>
        ),
      },
    ],
  },
  {
    title: "Tính đồng nhất",
    sections: [
      {
        heading: "Tính đồng nhất (Consistency) là gì?",
        content: (
          <>
            <p>
              Tính đồng nhất là việc giữ cho các yếu tố thiết kế có cùng kiểu
              dáng, quy tắc và hành vi trong toàn bộ sản phẩm.
            </p>
            <ListComp
              header="Tại sao tính đồng nhất quan trọng?"
              list={[
                "Giúp người dùng dễ học cách sử dụng.",
                "Cải thiện trải nghiệm người dùng (UX) bằng cách giảm sự nhầm lẫn.",
                "Làm cho thương hiệu trông chuyên nghiệp và đáng tin cậy hơn.",
                "Tiết kiệm thời gian thiết kế và phát triển do có hệ thống rõ ràng.",
              ]}
            />
            <ListComp
              header="Ví dụ về tính đồng nhất tốt và kém:"
              list={[
                "✅ Tốt: Các nút có cùng màu sắc, kích thước và kiểu chữ trên toàn bộ ứng dụng.",
                "❌ Kém: Mỗi trang web sử dụng một kiểu font, màu khác nhau gây rối mắt.",
              ]}
            />
          </>
        ),
      },
      {
        heading: "Các loại tính đồng nhất trong UI/UX",
        content: (
          <>
            <CacLoaiTinhDongNhat />
          </>
        ),
      },
      {
        heading: "Quy tắc giúp duy trì tính đồng nhất trong UI/UX",
        content: (
          <>
            <QuyTacGiupDuyTriTinhDongNhat />
          </>
        ),
      },
      {
        heading: "Quy tắc giúp duy trì tính đồng nhất trong UI/UX",
        content: (
          <>
            <LoiDongNhat />
          </>
        ),
      },
    ],
  },
  {
    title: "Lý thuyết màu sắc",
    sections: [
      {
        heading: "",
        content: (
          <>
            <ColorTheoryGuide />
          </>
        ),
      },
    ],
  },
  {
    title: "Typography",
    sections: [
      {
        heading: "",
        content: (
          <>
            <TypographyGuide />
          </>
        ),
      },
    ],
  },
  {
    title: "UIAnimation",
    sections: [
      {
        heading: "",
        content: (
          <>
            <UiAnimationGuide />
          </>
        ),
      },
    ],
  },
];

const UXUI = () => {
  const [showTOC, setShowTOC] = useState(false);

  return (
    <div className="relative flex">
      {/* Toggle Button */}
      <button
        className="fixed top-5 left-5 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition z-50"
        onClick={() => setShowTOC(!showTOC)}
      >
        <Menu size={24} />
      </button>

      {/* Table of Contents */}
      <aside
        className={`fixed top-0 left-0 h-full bg-white p-6 shadow-2xl border-r border-gray-300 overflow-y-auto transition-transform duration-300 z-40 md:w-1/4 w-1/2 ${
          showTOC ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <h3 className="text-xl md:text-2xl font-bold text-gray-700 text-center mb-5 md:mt-0 mt-20">
          📌 Table of Contents
        </h3>
        <ul className="space-y-4 text-sm md:text-lg">
          {blogContent.map((post, index) => (
            <li key={index}>
              <a
                href={`#${post.title.replace(/\s+/g, "-").toLowerCase()}`}
                className="text-blue-500 hover:text-blue-700 cursor-pointer transition-colors"
              >
                {post.title}
              </a>
              <ul className="ml-4 mt-2 space-y-2 text-gray-600">
                {post.sections.map((section, secIndex) => (
                  <li key={secIndex}>
                    <a
                      href={`#${section.heading
                        .replace(/\s+/g, "-")
                        .toLowerCase()}`}
                      className="text-xs md:text-sm hover:text-gray-800"
                    >
                      {section.heading}
                    </a>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </aside>

      {/* Main Content */}
      <div className="p-6 text-white min-h-screen flex flex-col items-center w-3/4 mx-auto">
        <header className="text-center py-20">
          <h1 className="text-3xl md:text-5xl font-extrabold text-gray-100 drop-shadow-lg tracking-wide">
            🚀 AI Agent & AI Agentic
          </h1>
        </header>
        <div className="">
          <div className="grid gap-8">
            {blogContent.map((post, index) => (
              <div
                key={index}
                id={post.title.replace(/\s+/g, "-").toLowerCase()}
                className="bg-white/5 rounded-lg p-6 shadow-lg"
              >
                <h2 className="text-xl md:text-3xl font-bold border-b-4 border-blue-400 pb-4 mb-6 text-gray-100 uppercase tracking-wide">
                  {post.title}
                </h2>
                {post.sections.map((section, secIndex) => (
                  <div
                    key={secIndex}
                    id={section.heading.replace(/\s+/g, "-").toLowerCase()}
                    className="mb-6"
                  >
                    <h3 className="text-lg md:text-2xl font-semibold text-gray-100 mb-2">
                      {section.heading}
                    </h3>
                    <p className="text-sm md:text-lg text-gray-400 leading-relaxed tracking-wide">
                      {section.content}
                    </p>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UXUI;
