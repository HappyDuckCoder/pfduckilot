import SplitText from "@/components/ui/SplitText";
import React from "react";

interface Section {
  title: string;
  content: string | CodeSnippet[] | TableData;
}

interface CodeSnippet {
  code: string;
  description?: string;
}

interface TableData {
  headers: string[];
  rows: string[][];
}

const BeautifulSoupDocumentation: React.FC = () => {
  const documentSections: Section[] = [
    {
      title: "Tài liệu: Tìm hiểu BeautifulSoup và Crawl dữ liệu Web",
      content: "",
    },
    {
      title: "1. BeautifulSoup là gì?",
      content:
        "BeautifulSoup là một thư viện Python giúp trích xuất dữ liệu từ các trang HTML và XML một cách dễ dàng. Nó thường được dùng để crawl dữ liệu (thu thập dữ liệu) từ các trang web tĩnh.\n\nCông dụng chính:\n- Trích xuất dữ liệu từ HTML\n- Tìm kiếm nhanh theo tag, id, class\n- Làm sạch nội dung HTML\n- Hỗ trợ kết hợp tốt với thư viện requests hoặc urllib",
    },
    {
      title: "2. Cơ chế hoạt động của BeautifulSoup",
      content:
        "Cách hoạt động:\n1. Gửi yêu cầu đến trang web bằng requests\n2. Nhận về mã nguồn HTML của trang\n3. Dùng BeautifulSoup để parse HTML thành một cấu trúc cây\n4. Dùng các hàm tìm kiếm để lấy ra các phần tử mong muốn (tag, class, id,...)",
    },
    {
      title: "Khi nào crawl được, khi nào không?",
      content: {
        headers: ["Trường hợp", "Có thể crawl", "Lý do"],
        rows: [
          [
            "Web tĩnh (HTML cố định)",
            "Có",
            "Dữ liệu hiển thị trực tiếp trong HTML",
          ],
          [
            "Web động (dùng JavaScript)",
            "Không",
            "BeautifulSoup không chạy được JavaScript",
          ],
          [
            "Web chặn bot (Cloudflare, CAPTCHA)",
            "Không",
            "Cần xử lý nâng cao (headers, Selenium, v.v.)",
          ],
        ],
      },
    },
    {
      title: "3. Các cú pháp cơ bản",
      content: "",
    },
    {
      title: "a) Crawl cơ bản – Lấy nội dung HTML",
      content: [
        {
          code: `import requests
from bs4 import BeautifulSoup

url = "http://lamdongcdc.vn/"
res = requests.get(url)
soup = BeautifulSoup(res.content, "html.parser")
print(soup.prettify())`,
        },
      ],
    },
    {
      title: "b) Crawl toàn bộ – Lấy toàn bộ các thẻ cụ thể",
      content: [
        {
          code: `all_links = soup.find_all('a')
for link in all_links:
    print(link.get('href'), link.text)`,
        },
      ],
    },
    {
      title: "c) Crawl theo class",
      content: [
        {
          code: `titles = soup.find_all(class_='name')
for item in titles:
    print(item.text)

# hoặc dùng CSS selector
titles = soup.select('.name a')`,
        },
      ],
    },
    {
      title: "d) Crawl theo tag",
      content: [
        {
          code: `title = soup.find('h2')
print(title.text)`,
        },
      ],
    },
    {
      title: "e) Crawl theo ID bất kỳ",
      content: [
        {
          code: `main_content = soup.find(id='main-content')
print(main_content.text)`,
        },
      ],
    },
    {
      title: "4. Lưu dữ liệu vào file CSV",
      content: [
        {
          code: `import csv

data = [
    ["Tiêu đề", "Link"],
    ["Bài viết 1", "http://example.com/1"],
    ["Bài viết 2", "http://example.com/2"],
]

with open("data.csv", "w", newline="", encoding="utf-8") as f:
    writer = csv.writer(f)
    writer.writerows(data)

print("Đã lưu vào data.csv")`,
        },
      ],
    },
    {
      title: "Gợi ý thêm:",
      content:
        "- Dùng try/except để tránh lỗi khi trang web thay đổi.\n- Nếu bị chặn, thêm headers giả lập trình duyệt:\nheaders = {'User-Agent': 'Mozilla/5.0'}\nrequests.get(url, headers=headers)",
    },
  ];

  const renderContent = (content: string | CodeSnippet[] | TableData) => {
    if (typeof content === "string") {
      return <div className="whitespace-pre-line text-gray-700">{content}</div>;
    } else if (Array.isArray(content)) {
      // Code snippets
      return (
        <div className="space-y-2">
          {content.map((snippet, idx) => (
            <div
              key={idx}
              className="bg-gray-100 p-4 rounded-md overflow-x-auto"
            >
              <pre className="text-sm text-gray-800">{snippet.code}</pre>
              {snippet.description && (
                <p className="mt-2 text-gray-600 text-sm">
                  {snippet.description}
                </p>
              )}
            </div>
          ))}
        </div>
      );
    } else {
      // Table data
      return (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                {content.headers.map((header, idx) => (
                  <th
                    key={idx}
                    className="py-2 px-4 border-b text-left font-medium text-gray-700"
                  >
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {content.rows.map((row, rowIdx) => (
                <tr
                  key={rowIdx}
                  className={rowIdx % 2 === 0 ? "bg-white" : "bg-gray-50"}
                >
                  {row.map((cell, cellIdx) => (
                    <td
                      key={cellIdx}
                      className="py-2 px-4 border-b text-gray-800"
                    >
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    }
  };

  return (
    <div className="mx-auto py-8 px-4">
      <SplitText
        text={documentSections[0].title as string}
        className="text-3xl mt-20 mb-10 mx-auto font-bold text-white"
      />
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="p-6 space-y-8">
          {documentSections.slice(1).map((section, index) => (
            <section key={index} className="pb-4">
              <h2 className="text-xl font-semibold text-gray-800 mb-3">
                {section.title}
              </h2>
              {section.content && renderContent(section.content)}
            </section>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BeautifulSoupDocumentation;
