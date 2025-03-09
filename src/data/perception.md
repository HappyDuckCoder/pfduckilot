Xin chào mọi người, It's Duckilot

Trong blog này mình sẽ viết về một số khái niệm trong học sâu, đây là phần tổng hợp kiến thức mình học được từ trang web

[https://d2l.aivivn.com/chapter_multilayer-perceptrons/index_vn.html]

Đây là chương 4 trong quyển sách trên nói về các khái niệm perception đa tầng

Trong blog này chúng ta sẽ thảo luận 7 phần chính

1. perception đa tầng
2. Dưới khớp và quá khớp
3. Suy giảm trọng số
4. Dropout
5. Lan truyền xuôi, lan truyền ngược
6. Ổn tính số học
7. Cân bằng tới môi trường
8. Lập trình dự đoán giá nhà

Phần 1: Perception đa tầng

1. Perception đa tầng

- Khái niệm:
  Ta biết rằng mỗi input đầu vào qua một tính toán để được đến node tiếp theo và tiếp tục tính toán cho đến khi nhân được kết quả.
  Quá trình tính toán thông qua các trọng số và kết quả trả về từ node trước --> điều chỉnh trọng số để mô hình để chính xác.
  Nhiều node tính toán trả về hình thành 1 tầng, ta gọi là tầng ẩn
  Tầng ẩn này đánh giá được mô hình kĩ hơn, học các đặc trưng tốt hơn

2. Hàm kích hoạt

- Hàm kích hoạt là hàm biến đổi đầu ra của mỗi node thành dạng "phi tuyến tính" (hay một dữ liệu đặc biệt) để đưa vào tính toán vào node tiếp theo
- Hàm kích hoạt phổ biến là ReLU
- ReLU là một hàm đơn giản, được định nghĩa như sau:

Nếu đầu vào x

- x nhỏ hơn 0, đầu ra sẽ là 0.
  Nếu đầu vào x
- x lớn hơn hoặc bằng 0, đầu ra sẽ là giá trị của x là x.
  Nó có thể được biểu diễn bằng hàm ReLU = max(0, x).

Phần 2: Dưới khớp, quá khớp

1. Các loại lỗi

- Lỗi Huấn Luyện (Training Error)
  Khái Niệm: Lỗi huấn luyện xảy ra khi mô hình của bạn học quá tốt trên tập dữ liệu huấn luyện, bao gồm cả nhiễu và biến động ngẫu nhiên. Điều này có thể dẫn đến việc mô hình hoạt động kém trên dữ liệu mới hoặc dữ liệu chưa từng gặp.
  Ví Dụ: Bạn tạo một mô hình dự đoán điểm số dựa trên dữ liệu của chính mình, bao gồm số giờ học và chất lượng tài liệu. Mô hình này đạt được độ chính xác cao trên dữ liệu của bạn, nhưng khi áp dụng cho dữ liệu của bạn bè hoặc người khác, mô hình không dự đoán chính xác. Điều này có thể xảy ra do mô hình đã học quá tốt trên dữ liệu cá nhân của bạn, bao gồm cả những đặc điểm riêng biệt không đại diện cho dữ liệu chung.

- Lỗi Khái Quát (Generalization Error)
  Khái Niệm: Lỗi khái quát xảy ra khi mô hình không thể dự đoán chính xác trên dữ liệu mới, chưa từng được sử dụng trong quá trình huấn luyện.
  Ví Dụ: Sau khi huấn luyện mô hình trên dữ liệu của mình, bạn sử dụng nó để dự đoán điểm số cho một kỳ thi mới. Tuy nhiên, mô hình không dự đoán chính xác do không thể khái quát hóa được các điều kiện mới như thay đổi trong đề thi hoặc cách chấm điểm.

2. Overfitting
   Ví Dụ: Bạn xây dựng một mô hình dự đoán điểm số thi phần bằng cách sử dụng một mạng nơ-ron sâu với nhiều lớp và nhiều tham số. Mô hình này đạt được độ chính xác rất cao trên tập dữ liệu huấn luyện, nhưng khi áp dụng cho tập dữ liệu kiểm tra, độ chính xác giảm đáng kể.
   Nguyên Nhân: Mô hình quá phức tạp, đã học cả nhiễu và các mẫu ngẫu nhiên trong dữ liệu huấn luyện, dẫn đến không thể khái quát hóa tốt trên dữ liệu mới.
   Giải Pháp: Sử dụng các kỹ thuật như Regularization (chuẩn hóa), Dropout (bỏ qua một số nơ-ron trong quá trình huấn luyện) để giảm độ phức tạp của mô hình và tránh quá khớp.
   Tóm lại, Underfitting xảy ra khi mô hình quá đơn giản, trong khi Overfitting xảy ra khi mô hình quá phức tạp. Cả hai đều ảnh hưởng đến khả năng khái quát hóa của mô hình trên dữ liệu mới.

3. Underfitting
   Ví Dụ: Bạn đang cố gắng xây dựng một mô hình dự đoán điểm số thi phần dựa trên số giờ học và chất lượng tài liệu. Tuy nhiên, mô hình của bạn quá đơn giản, chỉ sử dụng một hàm tuyến tính để dự đoán điểm số. Kết quả là mô hình không thể mô tả chính xác mối quan hệ giữa các biến đầu vào và điểm số, dẫn đến độ chính xác thấp trên cả tập dữ liệu huấn luyện và kiểm tra.
   Nguyên Nhân: Mô hình quá đơn giản, không đủ phức tạp để bắt được các xu hướng trong dữ liệu.
   Giải Pháp: Cần tăng độ phức tạp của mô hình bằng cách thêm các thành phần đa thức hoặc sử dụng các mô hình phi tuyến tính như mạng nơ-ron.

Phần 3: Suy giảm trọng số
Định nghĩa: Suy giảm trọng số (weight decay), còn được gọi là điều chuẩn L2, là một kỹ thuật điều chuẩn mô hình học máy có tham số. Nó hoạt động bằng cách thêm một thành phần phạt (penalty term) vào hàm mất mát (loss function) để hạn chế độ lớn của các trọng số (weights) trong mô hình.
Tại sao cần:

- Ngăn chặn quá khớp (overfitting): Suy giảm trọng số giúp ngăn chặn hiện tượng quá khớp, khi mô hình học quá sát dữ liệu huấn luyện và không khái quát hóa tốt cho dữ liệu mới. Bằng cách phạt các trọng số lớn, nó khuyến khích mô hình tìm các giải pháp đơn giản hơn, ít phức tạp hơn, từ đó cải thiện khả năng khái quát hóa.
- Điều chỉnh độ phức tạp của mô hình: Suy giảm trọng số cung cấp một cơ chế liên tục để điều chỉnh độ phức tạp của mô hình. Giá trị của hệ số điều chuẩn (λ) xác định mức độ phạt áp dụng cho các trọng số. λ nhỏ cho phép các trọng số lớn hơn, trong khi λ lớn buộc các trọng số phải nhỏ hơn.
- Điều Chuẩn L2 (Suy Giảm Trọng số)

* Định nghĩa và Cách Hoạt Động
  Chuẩn L2 sử dụng chuẩn Euclidean (khoảng cách Euclidean) của vector trọng số để làm thành phần phạt. Điều này có nghĩa là nó tính tổng bình phương của tất cả các trọng số và thêm vào hàm mất mát của mô hình.
  Công thức: Nếu w=(w1,w2,…,wn) là vector trọng số, thì thành phần phạt L2 được tính là  
  λ là tham số điều chỉnh mức độ phạt.
  Ưu Điểm
  Tránh Overfitting: L2 giúp giảm độ lớn của trọng số, khiến mô hình ít phụ thuộc vào một số đặc trưng nhất định, từ đó giảm khả năng overfitting.
  Phân bổ Trọng số: L2 khuyến khích các trọng số được phân bổ đồng đều, giúp giảm ảnh hưởng từ lỗi đo lường của từng biến đơn lẻ.
  Nhược Điểm
  Không tạo ra trọng số thưa thớt: L2 không đẩy các trọng số về 0, nên không tạo ra mô hình thưa thớt.

- Điều Chuẩn L1

* Định nghĩa và Cách Hoạt Động
  Chuẩn L1 sử dụng tổng giá trị tuyệt đối của vector trọng số để làm thành phần phạt. Điều này có nghĩa là nó tính tổng giá trị tuyệt đối của tất cả các trọng số và thêm vào hàm mất mát của mô hình.
  Công thức: Thành phần phạt L1 được tính là
  λ là tham số điều chỉnh mức độ phạt.
  Ưu Điểm
  Tạo ra trọng số thưa thớt: L1 có xu hướng tạo ra các trọng số bằng 0, giúp mô hình trở nên thưa thớt và giảm số lượng đặc trưng cần thiết.
  Robust với Ngoại Lệ: L1 ít nhạy cảm với điểm ngoại lệ hơn so với L2.
  Nhược Điểm
  Khó tính toán: L1 có thể khó tính toán hơn L2 do không liên tục tại điểm 0.

Phần 4: Dropout
Dropout là gì?
Dropout là một kỹ thuật điều chuẩn (regularization) được sử dụng trong mạng nơ-ron sâu để ngăn chặn hiện tượng quá khớp (overfitting). Quá khớp xảy ra khi mô hình học quá kỹ dữ liệu huấn luyện, dẫn đến việc nó hoạt động kém trên dữ liệu mới.
Về cơ bản, Dropout hoạt động bằng cách ngẫu nhiên tắt một số nơ-ron trong mạng trong quá trình huấn luyện. Điều này có nghĩa là, trong mỗi lần lặp huấn luyện, một số nơ-ron sẽ bị loại bỏ khỏi mạng một cách ngẫu nhiên, cùng với tất cả các kết nối đến và đi từ các nơ-ron đó. Tỷ lệ nơ-ron bị loại bỏ được gọi là "tỷ lệ dropout" (dropout rate), thường được đặt trong khoảng từ 0.2 đến 0.5.
Tại sao Dropout lại hiệu quả?
Dropout hiệu quả vì nó giúp ngăn chặn các nơ-ron trong mạng trở nên quá phụ thuộc vào nhau. Khi một nơ-ron bị loại bỏ, các nơ-ron khác buộc phải học cách bù đắp cho sự thiếu hụt này. Điều này dẫn đến việc các nơ-ron trở nên mạnh mẽ hơn và ít nhạy cảm hơn với các thay đổi nhỏ trong dữ liệu đầu vào.
Ngoài ra, Dropout còn có thể được xem như là một phương pháp tạo ra nhiều mô hình con khác nhau. Mỗi khi một tập hợp các nơ-ron khác nhau bị loại bỏ, ta sẽ có một mô hình con khác nhau. Khi kết thúc quá trình huấn luyện, ta có thể xem như là đã huấn luyện một tập hợp lớn các mô hình con, và kết quả dự đoán cuối cùng là kết quả trung bình của tất cả các mô hình con này. Việc lấy trung bình các mô hình con thường giúp cải thiện khả năng khái quát hóa của mô hình.
Ứng dụng thực tế của Dropout
Dropout được sử dụng rộng rãi trong nhiều ứng dụng khác nhau của mạng nơ-ron sâu, bao gồm:
Thị giác máy tính: Dropout được sử dụng trong các mô hình phân loại ảnh, nhận diện đối tượng và phân đoạn ảnh.
Xử lý ngôn ngữ tự nhiên: Dropout được sử dụng trong các mô hình dịch máy, phân tích cảm xúc và tạo sinh văn bản.
Nhận dạng giọng nói: Dropout được sử dụng trong các mô hình nhận dạng giọng nói và tổng hợp giọng nói.
Hệ thống khuyến nghị: Dropout được sử dụng trong các mô hình khuyến nghị sản phẩm, phim và nhạc.
Ví dụ thường gặp về Dropout
Một ví dụ thường gặp về Dropout là trong các mạng nơ-ron tích chập (Convolutional Neural Networks - CNN) được sử dụng để phân loại ảnh. Trong các CNN, Dropout thường được áp dụng cho các tầng kết nối đầy đủ (fully connected layers) ở cuối mạng.
Ví dụ: giả sử bạn có một CNN với ba tầng tích chập và hai tầng kết nối đầy đủ. Bạn có thể áp dụng Dropout với tỷ lệ 0.5 cho tầng kết nối đầy đủ đầu tiên. Điều này có nghĩa là, trong mỗi lần lặp huấn luyện, 50% số nơ-ron trong tầng kết nối đầy đủ đầu tiên sẽ bị loại bỏ một cách ngẫu nhiên.

Phần 5: Lan truyền xuôi, lan truyền ngược

1. Lan truyền xuôi (Forward Propagation)
   Đầu vào: Ảnh được đưa vào mạng nơ-ron.
   Tầng ẩn 1: Ảnh được xử lý qua các lớp convolution và pooling để trích xuất đặc trưng.
   Tầng ẩn 2: Các đặc trưng được xử lý qua các lớp fully connected để tạo ra các đặc trưng phức tạp hơn.
   Tầng đầu ra: Dự đoán nhãn "mèo" hoặc "chó" dựa trên các đặc trưng đã trích xuất.
2. Lan truyền ngược (Backpropagation)
   Tính mất mát: So sánh dự đoán với nhãn thực tế và tính toán hàm mất mát (ví dụ: cross-entropy).
   Tính gradient: Tính toán gradient của mất mát đối với mỗi tham số trong mạng.
   Cập nhật tham số: Sử dụng gradient để cập nhật các trọng số và hệ số điều chỉnh trong mạng.
   Ví dụ cụ thể:
   Giả sử chúng ta có một mạng nơ-ron đơn giản với hai tầng ẩn:
   Tầng ẩn 1 (ReLU): Nhận ảnh đầu vào và trích xuất các đặc trưng cơ bản.
   Tầng ẩn 2 (ReLU): Nhận đặc trưng từ tầng ẩn 1 và trích xuất các đặc trưng phức tạp hơn.
   Tầng đầu ra (Softmax): Dự đoán nhãn "mèo" hoặc "chó".
   Lan truyền xuôi:
   Ảnh đầu vào được xử lý qua tầng ẩn 1 để tạo ra đặc trưng cơ bản.
   Đặc trưng cơ bản được xử lý qua tầng ẩn 2 để tạo ra đặc trưng phức tạp hơn.
   Đặc trưng phức tạp được đưa vào tầng đầu ra để dự đoán nhãn.
   Lan truyền ngược:
   So sánh dự đoán với nhãn thực tế và tính toán mất mát.
   Tính toán gradient của mất mát đối với mỗi tham số trong mạng.
   Cập nhật các trọng số và hệ số điều chỉnh dựa trên gradient.
   Ý nghĩa thực tế:
   Lan truyền xuôi giúp mạng nơ-ron đưa ra dự đoán dựa trên dữ liệu đầu vào.
   Lan truyền ngược giúp mạng nơ-ron học hỏi từ sai sót và cải thiện độ chính xác dự đoán qua thời gian.
3. Lan truyền xuôi (Forward Propagation)
   Tương tự như: Quá trình học tập và chuẩn bị cho kỳ thi.
   Đầu vào: Thông tin từ sách giáo khoa, bài giảng trên lớp.
   Tầng ẩn 1: Học sinh ghi chú và tổng hợp thông tin.
   Tầng ẩn 2: Học sinh ôn tập và thực hành các bài tập.
   Tầng đầu ra: Học sinh tham gia kỳ thi và đưa ra câu trả lời.
   Quá trình này tương tự như lan truyền xuôi vì thông tin được xử lý tuần tự từ đầu vào đến đầu ra. Mỗi bước đều dựa trên thông tin từ bước trước đó.
4. Lan truyền ngược (Backpropagation)
   Tương tự như: Quá trình đánh giá và cải thiện sau khi thi.
   Tính mất mát: So sánh kết quả thi với điểm số mong muốn.
   Tính gradient: Xác định những phần nào cần cải thiện (ví dụ: môn nào yếu).
   Cập nhật tham số: Điều chỉnh chiến lược học tập cho kỳ thi tiếp theo.
   Quá trình này tương tự như lan truyền ngược vì nó bắt đầu từ kết quả cuối cùng (điểm số thi), sau đó phân tích ngược lại để tìm ra những điểm cần cải thiện. Từ đó, học sinh có thể điều chỉnh cách học của mình để đạt được kết quả tốt hơn.

Phần 6: ổn định số học
Ổn định số học (numerical stability) là khả năng của một thuật toán để duy trì tính chính xác và độ tin cậy của kết quả khi thực hiện các phép tính số học trên máy tính. Trong bối cảnh mạng nơ-ron sâu, ổn định số học đề cập đến việc kiểm soát và ngăn chặn các vấn đề như tiêu biến gradient (vanishing gradient) và bùng nổ gradient (exploding gradient) trong quá trình huấn luyện.

Tại sao cần ổn định số học?
Đảm bảo hội tụ: Nếu gradient quá nhỏ (tiêu biến), quá trình học sẽ diễn ra rất chậm hoặc không thể hội tụ. Nếu gradient quá lớn (bùng nổ), quá trình học sẽ trở nên không ổn định và có thể phá hỏng mô hình.
Duy trì tính chính xác: Các phép tính số học trên máy tính có độ chính xác giới hạn. Nếu không kiểm soát được sự tăng trưởng hoặc giảm sút của các giá trị, sai số có thể tích lũy và làm mất ý nghĩa của kết quả.
Phá vỡ tính đối xứng: Khởi tạo ngẫu nhiên giúp phá vỡ tính đối xứng trong mạng, cho phép các nơ-ron học các đặc trưng khác nhau.
Ví dụ thực tế
Tiêu biến gradient với hàm sigmoid: Hàm sigmoid có đạo hàm nhỏ khi đầu vào rất lớn hoặc rất nhỏ. Trong mạng sâu, gradient có thể bị nhân liên tiếp qua nhiều tầng sigmoid, dẫn đến gradient rất nhỏ và làm chậm quá trình học.
Bùng nổ gradient với ma trận lớn: Khi nhân nhiều ma trận với các giá trị lớn, kết quả có thể tăng lên rất nhanh, vượt quá khả năng biểu diễn của số học máy tính và gây ra bùng nổ gradient.
Ví dụ liên quan đến học sinh
Hãy tưởng tượng một học sinh đang cố gắng giải một bài toán phức tạp gồm nhiều bước tính toán.
Ổn định số học: Tương tự như việc học sinh cẩn thận kiểm tra từng bước tính toán để tránh sai sót nhỏ tích lũy thành sai sót lớn, ổn định số học giúp mạng nơ-ron duy trì sự chính xác trong quá trình học.
Tiêu biến gradient: Nếu mỗi bước tính toán chỉ mang lại một thay đổi rất nhỏ, học sinh có thể cảm thấy nản và mất động lực để tiếp tục, giống như việc tiêu biến gradient làm chậm quá trình học của mạng.
Bùng nổ gradient: Nếu một bước tính toán nào đó tạo ra một kết quả quá lớn, học sinh có thể bị choáng ngợp và không biết phải làm gì tiếp theo, tương tự như việc bùng nổ gradient làm mất ổn định quá trình học.
Để giải quyết các vấn đề này, người ta sử dụng các kỹ thuật như khởi tạo tham số cẩn thận (ví dụ: Xavier initialization), sử dụng các hàm kích hoạt phù hợp (ví dụ: ReLU), và các phương pháp điều chuẩn (ví dụ: dropout).

Phần 7: Cân nhắc tới môi trường

1. Dịch chuyển phân phối (Distribution Shift)
   1.1. Dịch chuyển phân phối là gì?
   Dịch chuyển phân phối xảy ra khi phân phối dữ liệu mà mô hình học máy được huấn luyện khác với phân phối dữ liệu mà mô hình gặp phải trong thực tế. Điều này có thể dẫn đến sự suy giảm hiệu suất của mô hình.
   1.2. Tại sao cần quan tâm đến dịch chuyển phân phối?
   Mô hình hoạt động kém trong thực tế: Mô hình có thể đạt độ chính xác cao trên tập kiểm tra, nhưng lại hoạt động kém khi triển khai thực tế do dữ liệu thực tế khác với dữ liệu huấn luyện.
   Tự làm hỏng mô hình: Việc đưa ra quyết định dựa trên mô hình có thể ảnh hưởng đến môi trường và làm thay đổi phân phối dữ liệu, khiến mô hình trở nên kém chính xác hơn.
   1.3. Ví dụ thực tế
   Chẩn đoán y khoa: Một mô hình được huấn luyện để phát hiện bệnh ung thư bằng cách sử dụng dữ liệu từ cả người khỏe mạnh và người bệnh. Tuy nhiên, dữ liệu từ người khỏe mạnh chủ yếu được thu thập từ sinh viên trẻ tuổi, trong khi dữ liệu từ người bệnh là từ người lớn tuổi. Khi mô hình được sử dụng trong thực tế, nó có thể hoạt động kém do sự khác biệt về tuổi tác và các yếu tố khác giữa dữ liệu huấn luyện và dữ liệu thực tế.
   Xe tự hành: Một hệ thống phát hiện lề đường được huấn luyện bằng dữ liệu giả từ một bộ kết xuất đồ họa. Tuy nhiên, dữ liệu giả có thể không phản ánh chính xác sự đa dạng của lề đường trong thế giới thực, dẫn đến hiệu suất kém khi hệ thống được sử dụng trên xe tự hành thực tế.
   Lọc thư rác: Một mô hình lọc thư rác có thể hoạt động tốt trong việc phát hiện các thư rác đã biết, nhưng lại không hiệu quả khi những người gửi thư rác thay đổi chiến thuật và tạo ra các mẫu thư mới.
   1.4. Ví dụ học sinh
   Một học sinh huấn luyện một mô hình để phân loại ảnh mèo và chó bằng cách sử dụng ảnh từ Internet. Tuy nhiên, khi học sinh thử nghiệm mô hình trên ảnh tự chụp bằng điện thoại, mô hình hoạt động kém do chất lượng ảnh và góc chụp khác với dữ liệu huấn luyện.
   1.5. Các loại dịch chuyển phân phối
   Có ba loại dịch chuyển phân phối chính:
   Dịch chuyển hiệp biến (Covariate Shift): Phân phối của đầu vào P(x)
   P(x) thay đổi, nhưng phân phối có điều kiện của nhãn P(y∣x) không đổi.
   Ví dụ: Huấn luyện mô hình phân loại mèo và chó bằng ảnh thật, nhưng kiểm tra bằng ảnh hoạt hình.
   Dịch chuyển nhãn (Label Shift): Phân phối của nhãn P(y)
   P(y) thay đổi, nhưng phân phối có điều kiện của đầu vào P(x∣y) không đổi.
   Ví dụ: Dự đoán kết quả chẩn đoán bệnh dựa trên các triệu chứng. Tỷ lệ mắc bệnh thay đổi theo thời gian hoặc địa điểm.
   Dịch chuyển khái niệm (Concept Shift): Định nghĩa của nhãn thay đổi.
   Ví dụ: Định nghĩa của "đồ uống có ga" khác nhau ở các vùng khác nhau.
2. Hiệu chỉnh phân phối (Distribution Alignment)
   2.1. Hiệu chỉnh phân phối là gì?
   Hiệu chỉnh phân phối là các kỹ thuật được sử dụng để giảm thiểu tác động của dịch chuyển phân phối lên hiệu suất mô hình.
   2.2. Tại sao cần hiệu chỉnh phân phối?
   Cải thiện hiệu suất mô hình: Hiệu chỉnh phân phối có thể giúp mô hình hoạt động tốt hơn trong các tình huống mà phân phối dữ liệu thay đổi.
   Đảm bảo tính công bằng: Hiệu chỉnh phân phối có thể giúp giảm thiểu sự thiên vị trong mô hình do sự khác biệt trong phân phối dữ liệu.
   2.3. Ví dụ thực tế
   Hiệu chỉnh dịch chuyển hiệp biến: Sử dụng các kỹ thuật như tầm quan trọng mẫu (sample weighting) để điều chỉnh trọng số của các mẫu huấn luyện sao cho phù hợp với phân phối mục tiêu.
   Domain Adaptation: Huấn luyện mô hình trên một miền (ví dụ: dữ liệu tổng hợp) và sau đó điều chỉnh mô hình để hoạt động tốt trên một miền khác (ví dụ: dữ liệu thực tế).
   2.4. Ví dụ học sinh
   Một học sinh huấn luyện một mô hình để nhận dạng chữ viết tay bằng cách sử dụng dữ liệu từ một bộ dữ liệu tiêu chuẩn. Tuy nhiên, khi học sinh thử nghiệm mô hình trên chữ viết tay của chính mình, mô hình hoạt động kém do phong cách viết khác với dữ liệu huấn luyện. Để cải thiện hiệu suất, học sinh có thể sử dụng các kỹ thuật hiệu chỉnh phân phối như:
   Thu thập thêm dữ liệu: Thu thập thêm dữ liệu chữ viết tay của chính mình và sử dụng nó để tinh chỉnh mô hình.
   Tăng cường dữ liệu: Sử dụng các kỹ thuật tăng cường dữ liệu để tạo ra các biến thể của dữ liệu huấn luyện hiện có, giúp mô hình trở nên mạnh mẽ hơn trước sự thay đổi về phong cách viết.
3. Dịch chuyển hiệp biến (Covariate Shift)
   1.1. Hiệu chỉnh
   Dịch chuyển hiệp biến xảy ra khi phân phối của đầu vào thay đổi, nhưng phân phối có điều kiện của nhãn không đổi. Để hiệu chỉnh, bạn có thể sử dụng các kỹ thuật như:
   Tầm quan trọng mẫu (Importance Weighting): Gán trọng số cho các mẫu huấn luyện dựa trên sự khác biệt giữa phân phối huấn luyện và phân phối kiểm tra.
   Huấn luyện lại mô hình: Sử dụng dữ liệu mới đại diện cho phân phối kiểm tra để huấn luyện lại mô hình.
   1.2. Ví dụ
   Huấn luyện mô hình nhận dạng hình ảnh: Một mô hình được huấn luyện trên ảnh chụp trong điều kiện ánh sáng ban ngày, nhưng khi kiểm tra trên ảnh chụp vào ban đêm, hiệu suất giảm. Để hiệu chỉnh, bạn có thể thu thập thêm ảnh chụp vào ban đêm và huấn luyện lại mô hình.
   Phân loại văn bản: Một mô hình được huấn luyện để phân loại văn bản trên dữ liệu từ các bài báo, nhưng khi áp dụng cho dữ liệu từ mạng xã hội, mô hình hoạt động kém do sự khác biệt về ngôn ngữ và ngữ pháp. Để hiệu chỉnh, bạn có thể sử dụng tầm quan trọng mẫu để điều chỉnh trọng số của các mẫu huấn luyện dựa trên sự khác biệt về phân phối dữ liệu.
4. Dịch chuyển nhãn (Label Shift)
   2.1. Hiệu chỉnh
   Dịch chuyển nhãn xảy ra khi phân phối của nhãn thay đổi, nhưng phân phối có điều kiện của đầu vào không đổi. Để hiệu chỉnh, bạn có thể sử dụng các kỹ thuật như:
   Huấn luyện lại mô hình với dữ liệu mới: Thu thập dữ liệu mới phản ánh phân phối nhãn mới và huấn luyện lại mô hình.
   Điều chỉnh trọng số nhãn: Gán trọng số cho các nhãn dựa trên sự khác biệt giữa phân phối huấn luyện và phân phối kiểm tra.
   2.2. Ví dụ
   Dự đoán kết quả bầu cử: Một mô hình được huấn luyện để dự đoán kết quả bầu cử dựa trên dữ liệu từ một khu vực, nhưng khi áp dụng cho một khu vực khác, mô hình hoạt động kém do sự khác biệt về tỷ lệ cử tri. Để hiệu chỉnh, bạn có thể thu thập dữ liệu mới từ khu vực mới và huấn luyện lại mô hình.
   Phân loại sản phẩm: Một mô hình được huấn luyện để phân loại sản phẩm dựa trên dữ liệu từ một mùa, nhưng khi áp dụng cho mùa khác, mô hình hoạt động kém do sự thay đổi về nhu cầu sản phẩm. Để hiệu chỉnh, bạn có thể điều chỉnh trọng số của các nhãn dựa trên sự khác biệt về phân phối sản phẩm giữa các mùa.
5. Dịch chuyển khái niệm (Concept Shift)
   3.1. Hiệu chỉnh
   Dịch chuyển khái niệm xảy ra khi định nghĩa của nhãn thay đổi. Để hiệu chỉnh, bạn cần:
   Cập nhật dữ liệu và nhãn: Thu thập dữ liệu mới với định nghĩa nhãn mới và huấn luyện lại mô hình.
   Sử dụng học chuyển giao (Transfer Learning): Sử dụng kiến thức từ mô hình đã huấn luyện để nhanh chóng thích nghi với định nghĩa nhãn mới.
   3.2. Ví dụ
   Phân loại hình ảnh động vật: Một mô hình được huấn luyện để phân loại hình ảnh động vật dựa trên dữ liệu cũ, nhưng sau đó định nghĩa về một số loài động vật được thay đổi. Để hiệu chỉnh, bạn cần thu thập dữ liệu mới với định nghĩa mới và huấn luyện lại mô hình.
   Phân loại văn bản: Một mô hình được huấn luyện để phân loại văn bản dựa trên dữ liệu cũ, nhưng sau đó cách phân loại được thay đổi (ví dụ: thêm hoặc xóa các loại phân loại). Để hiệu chỉnh, bạn có thể sử dụng học chuyển giao để nhanh chóng thích nghi với hệ thống phân loại mới.
   Mỗi loại dịch chuyển phân phối đòi hỏi một cách tiếp cận hiệu chỉnh riêng biệt để đảm bảo rằng mô hình hoạt động tốt trong các điều kiện mới.
