import React from "react";

interface Section {
  id: number;
  title: string;
  content: string[];
  code?: string;
}

const WebScrapingArticle: React.FC = () => {
  const articleTitle =
    "Web Scraping: Tự động lấy dữ liệu từ web – Hướng dẫn cho người mới bắt đầu";

  const sections: Section[] = [
    {
      id: 1,
      title: "Giới thiệu về Web Scraping",
      content: [
        "Trong thời đại dữ liệu, thông tin là một tài nguyên quý giá. Nhưng không phải lúc nào dữ liệu cũng có sẵn dưới dạng API hay bảng dễ tải xuống. Đây là lúc Web Scraping phát huy tác dụng – một kỹ thuật giúp tự động thu thập dữ liệu từ các trang web một cách nhanh chóng.",
        "Từ việc cập nhật giá sản phẩm, theo dõi tin tức đến nghiên cứu thị trường, Web Scraping có vô số ứng dụng thực tế. Trong bài viết này, chúng ta sẽ tìm hiểu về Web Scraping, cách sử dụng Python để thu thập dữ liệu và một số nguyên tắc quan trọng để tránh vi phạm điều khoản của website.",
      ],
    },
    {
      id: 2,
      title: "Những công nghệ cần biết để Web Scraping",
      content: [
        "Trước khi bắt tay vào Web Scraping, bạn cần nắm vững một số công nghệ:",
        "• HTML & CSS: Hiểu cấu trúc trang web để lấy dữ liệu chính xác.",
        "• XPath & CSS Selectors: Hai cách phổ biến để truy xuất phần tử trên trang web.",
        "• API: Nếu trang web có API chính thức, bạn nên ưu tiên sử dụng thay vì Scraping.",
        "Ngoài ra, bạn cũng nên làm quen với các công cụ như BeautifulSoup, Scrapy, Selenium để xử lý dữ liệu linh hoạt hơn.",
      ],
    },
    {
      id: 3,
      title: "Cách lấy dữ liệu từ một trang web đơn giản với Python",
      content: [
        "Để bắt đầu, ta có thể sử dụng requests để tải nội dung trang web và BeautifulSoup để trích xuất dữ liệu. Ví dụ: Lấy tiêu đề tin tức từ một trang web:",
        "Dữ liệu sau đó có thể được lưu vào file CSV hoặc JSON để dễ dàng xử lý.",
      ],
      code: `import requests
from bs4 import BeautifulSoup

url = "https://example-news.com"
response = requests.get(url)
soup = BeautifulSoup(response.text, "html.parser")

titles = soup.find_all("h2")
for title in titles:
    print(title.text)`,
    },
    {
      id: 4,
      title: "Web Scraping nâng cao với Selenium",
      content: [
        "Một số trang web sử dụng JavaScript để hiển thị nội dung, khiến phương pháp trên không hiệu quả. Trong trường hợp này, Selenium có thể giúp bạn tự động hóa trình duyệt để lấy dữ liệu:",
        "Với Selenium, bạn có thể nhập liệu vào form, cuộn trang hoặc thậm chí xử lý captcha nếu cần.",
      ],
      code: `from selenium import webdriver

driver = webdriver.Chrome()
driver.get("https://example.com")
content = driver.page_source
driver.quit()`,
    },
    {
      id: 5,
      title: "Những vấn đề pháp lý và đạo đức khi Web Scraping",
      content: [
        "Không phải website nào cũng cho phép Web Scraping. Để tránh vi phạm chính sách, bạn cần:",
        "• Kiểm tra file robots.txt: Nếu website cấm scraping, bạn không nên tiếp tục.",
        "• Không gửi quá nhiều request trong thời gian ngắn: Tránh làm quá tải server.",
        "• Luôn trích dẫn nguồn dữ liệu nếu bạn sử dụng công khai.",
      ],
    },
    {
      id: 6,
      title: "Tổng kết & Tài nguyên hữu ích để học Web Scraping",
      content: [
        "Web Scraping là một kỹ năng hữu ích giúp tự động hóa việc thu thập dữ liệu. Tuy nhiên, cần sử dụng một cách có trách nhiệm và hợp pháp.",
        "Bạn có thể tìm hiểu thêm tại:",
        "• Docs của BeautifulSoup: https://www.crummy.com/software/BeautifulSoup/bs4/doc/",
        "• Scrapy - Framework Web Scraping: https://scrapy.org/",
        "• Học Selenium miễn phí: https://www.selenium.dev/documentation/",
      ],
    },
  ];

  const CodeBlock: React.FC<{ code: string }> = ({ code }) => (
    <div className="bg-gray-800 rounded-md p-4 my-4 overflow-x-auto">
      <pre className="text-gray-100 font-mono text-sm">{code}</pre>
    </div>
  );

  return (
    <div>
      <div className="max-w-4xl mx-auto p-6 bg-white dark:bg-gray-900 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-blue-700 dark:text-blue-400 mb-8">
          {articleTitle}
        </h1>

        {sections.map((section) => (
          <div key={section.id} className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
              {section.id}. {section.title}
            </h2>

            <div className="space-y-4">
              {section.content.map((paragraph, index) => (
                <p
                  key={index}
                  className="text-gray-700 dark:text-gray-300 leading-relaxed"
                >
                  {paragraph}
                </p>
              ))}
            </div>

            {section.code && <CodeBlock code={section.code} />}
          </div>
        ))}

        <div className="mt-10 pt-6 border-t border-gray-200 dark:border-gray-700">
          <p className="text-gray-600 dark:text-gray-400 text-sm italic">
            Cập nhật lần cuối: {new Date().toLocaleDateString("vi-VN")}
          </p>
        </div>
      </div>
    </div>
  );
};

export default WebScrapingArticle;
