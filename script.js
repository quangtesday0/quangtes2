const questions = [
{
  question: "1. Đối tượng nghiên cứu của thống kê học là:",
  options: [
    "Mặt lượng trong mối liên hệ mật thiết với mặt chất trong điều kiện thời gian và địa điểm cụ thể",
    "Nghiên cứu hiện tượng số lớn trong điều kiện thời gian và địa điểm cụ thể",
    "Mặt lượng thuần tuý của hiện tượng số lớn trong điều kiện thời gian và địa điểm cụ thể",
    "Mặt lượng trong mối liên hệ mật thiết với mặt chất của các hiện tượng và quá trình kinh tế - xã hội số lớn, trong điều kiện thời gian và địa điểm cụ thể"
  ],
  correctAnswer: 3
},
{
  question: "2. Thống kê nghiên cứu:",
  options: [
    "Hiện tượng kinh tế",
    "Hiện tượng xã hội",
    "Hiện tượng tự nhiên",
    "Cả a và b"
  ],
  correctAnswer: 3
},
{
  question: "3. Tổng thể thống kê là:",
  options: [
    "tập hợp các hiện tượng cá biệt.",
    "các đơn vị cần được quan sát mặt lượng.",
    "hiện tượng số lớn bao gồm các đơn vị hoặc phần tử cấu thành hiện tượng",
    "tập hợp những đơn vị hoặc những phần tử cấu thành hiện tượng cần được quan sát và phân tích mặt lượng của chúng."
  ],
  correctAnswer: 3
},
{
  question: "4. Tổng thể nào dưới đây là tổng thể tiềm ẩn:",
  options: [
    "Tổng thể những người yêu nhạc đỏ",
    "Tổng thể sinh viên đang học trường đại học Công nghệ Đông Á",
    "Tổng thể sinh viên khoa QTKD trường đại học Công nghệ Đông Á",
    "Tổng thể giảng viên trường đại học Công nghệ Đông Á"
  ],
  correctAnswer: 0
},
{
  question: "5. Tiêu thức thuộc tính là:",
  options: [
    "phản ánh quy mô khối lượng của hiện tượng nghiên cứu",
    "biểu hiện trực tiếp bằng các con số.",
    "tiêu thức không được biểu hiện trực tiếp bằng con số mà nó phản ánh tính chất của đơn vị tổng thể",
    "tiêu thức phản ánh mặt lượng của hiện tượng."
  ],
  correctAnswer: 2
},
{
  question: "6. Tiêu thức số lượng là:",
  options: [
    "phản ánh quy mô khối lượng của hiện tượng nghiên cứu",
    "là tiêu thức biểu hiện trực tiếp bằng các con số, phản ánh mặt lượng của đơn vị tổng thể.",
    "là tiêu thức không được biểu hiện trực tiếp bằng con số mà nó phản ánh các thuộc tính của đơn vị tổng thể",
    "Tất cả các phương án trên đều sai."
  ],
  correctAnswer: 1
},
{
  question: "7. Trong các tiêu thức sau, tiêu thức nào là tiêu thức thuộc tính:",
  options: [
    "Số trường đại học.",
    "Số sinh viên trong một lớp học.",
    "Ngành nghề đào tạo.",
    "Dân số của một quốc gia."
  ],
  correctAnswer: 2
},
{
  question: "8. Trong các tiêu thức sau, tiêu thức nào là tiêu thức số lượng:",
  options: [
    "Nghề nghiệp",
    "Giới tính",
    "Quốc tịch của khách du lịch",
    "Tiền lương của người lao động"
  ],
  correctAnswer: 3
},
{
  question: "9. Trong các nội dung sau, nội dung nào là chỉ tiêu thống kê:",
  options: [
    "Tổng số dân Việt Nam vào 0h ngày 1/4/2019 khoảng 98 triệu người.",
    "Tổng số dân thành thị của Việt Nam là 17,92 triệu người.",
    "Dân số nữ chiếm 49,2 % tổng dân số.",
    "Tốc độ phát triển doanh thu năm 2021 so với 2020 là 125%"
  ],
  correctAnswer: 3
},
{
  question: "10. Chỉ tiêu thống kê phản ánh:",
  options: [
    "Đặc điểm của từng đơn vị tổng thể",
    "Đặc điểm của toàn bộ đơn vị tổng thể",
    "Mặt lượng gắn với mặt chất của hiện tượng kinh tế – xã hội số lớn trong điều kiện thời gian cụ thể",
    "Mặt lượng trong mối liên hệ mật thiết với mặt chất của các hiện tượng kinh tế – xã hội số lớn trong điều kiện thời gian và không gian cụ thể."
  ],
  correctAnswer: 3
},
{
  question: "11. Nghiên cứu về hiệu quả phương pháp giảng dạy trực tuyến của các giảng viên trường Đại học Công nghệ Đông Á. Nếu coi tất cả các giảng viên của trường Đại học Công nghệ Đông Á là tổng thể chung, giảng viên khoa Quản trị kinh doanh trường Đại học Công nghệ Đông Á là:",
  options: [
    "Tổng thể",
    "Tổng thể bộ phận",
    "Đơn vị mẫu",
    "Đơn vị tổng thể"
  ],
  correctAnswer: 1
},
{
  question: "12. Nghiên cứu tình hình tự chủ tài chính tại các trường đại học trên địa bàn thành phố Hà Nội. Nếu coi trường Đại học Công nghệ Đông Á là một đơn vị tổng thể, tổng thể thống kê là:",
  options: [
    "Bộ giáo dục và đào tạo",
    "Các trường đại học trên địa bàn thành phố Hà Nội",
    "Các trường Đại học khối kinh tế tại Hà Nội",
    "Sở giáo dục đào tạo Hà Nội"
  ],
  correctAnswer: 1
},
{
  question: "13. Trong các nội dung sau, nội dung nào là chỉ tiêu thống kê:",
  options: [
    "Giá trị sản xuất của doanh nghiệp A là 12500 tỷ đồng",
    "Giá trị sản xuất năm 2023 là 12500 tỷ đồng",
    "Giá trị sản xuất của doanh nghiệp A năm 2023 là 12500 tỷ đồng",
    "Doanh nghiệp A có 12500 tỷ đồng"
  ],
  correctAnswer: 2
},
{
  question: "14. Trong các tiêu thức sau, đâu là tiêu thức số lượng:",
  options: [
    "Nghề nghiệp",
    "Tình trạng hôn nhân",
    "Tính cách",
    "Năng suất lao động"
  ],
  correctAnswer: 3
},
{
  question: "15. Đối tượng nghiên cứu của thống kê học là mặt lượng trong mối liên hệ mật thiết với mặt chất của hiện tượng và quá trình kinh tế - xã hội số lớn, trong điều kiện nào?",
  options: [
    "Thời gian cụ thể",
    "Địa điểm cụ thể",
    "Không gian, thời gian và địa điểm cụ thể",
    "Thời gian và địa điểm cụ thể"
  ],
  correctAnswer: 3
},
{
  question: "16. Tổng thể nào dưới đây là tổng thể tiềm ẩn:",
  options: [
    "Tổng thể sinh viên trường Đại học Công nghệ Đông Á",
    "Tổng thể sinh viên nữ trường Đại học Công nghệ Đông Á",
    "Tổng thể sinh viên nam trường Đại học Công nghệ Đông Á",
    "Tổng thể sinh viên trường Đại học Công nghệ Đông Á yêu thích môn nguyên lý thống kê"
  ],
  correctAnswer: 3
},
{
  question: "Chương 2 - Câu 1. Các yêu cầu của điều tra thống kê:",
  options: [
    "Trung thực, chính xác - khách quan",
    "Đầy đủ, kịp thời",
    "Trung thực, chính xác, khách quan",
    "Trung thực, chính xác - khách quan, đầy đủ và kịp thời"
  ],
  correctAnswer: 3
},
{
  question: "Câu 2. Nhược điểm của điều tra toàn bộ:",
  options: [
    "Tốn kém thời gian",
    "Tốn kém thời gian và chi phí",
    "Thông tin không đầy đủ và toàn diện",
    "Kết quả không suy rộng cho tổng thể"
  ],
  correctAnswer: 1
},
{
  question: "Câu 3. Phương pháp đăng ký trực tiếp là phương pháp mà:",
  options: [
    "Cán bộ điều tra phải trực tiếp tiếp xúc với đối tượng điều tra",
    "Cán bộ điều tra trực tiếp tiến hành hoặc giám sát việc cân, đo, đong, đếm",
    "Cán bộ tự ghi chép những thông tin thu được vào phiếu điều tra.",
    "Tất cả các phương án trên"
  ],
  correctAnswer: 3
},
{
  question: "Câu 4. Ưu điểm của điều tra toàn bộ là:",
  options: [
    "Cung cấp thông tin thống kê đầy đủ, toàn diện và trực tiếp",
    "Dễ tổ chức",
    "Tiết kiệm thời gian và chi phí",
    "Có thể được sử dụng trong mọi trường hợp"
  ],
  correctAnswer: 0
},
{
  question: "Câu 5. Căn cứ vào tính liên tục hay không liên tục của việc thu thập ghi chép tài liệu thống kê đối với các hiện tượng KT - XH, điều tra thống kê gồm:",
  options: [
    "Điều tra không thường xuyên và điều tra toàn bộ",
    "Điều tra toàn bộ và điều tra không toàn bộ",
    "Điều tra thường xuyên và điều tra không thường xuyên",
    "Tất cả các phương án trên đều sai"
  ],
  correctAnswer: 2
},
{
  question: "Câu 6. Nhược điểm của phương pháp phỏng vấn trực tiếp là:",
  options: [
    "Không đảm bảo chất lượng của các tài liệu thu được",
    "Tốn kém về thời gian",
    "Tốn kém về chi phí",
    "Cả B và C"
  ],
  correctAnswer: 3
},
{
  question: "Câu 7. Điều tra không toàn bộ bao gồm:",
  options: [
    "Điều tra chọn mẫu, điều tra trọng điểm, điều tra thường xuyên",
    "Điều tra chọn mẫu, điều tra trọng điểm, điều tra chuyên đề",
    "Điều tra chọn mẫu, điều tra chuyên đề, điều tra thường xuyên",
    "Điều tra trọng điểm, điều tra chuyên đề, điều tra không thường xuyên"
  ],
  correctAnswer: 1
},
{
  question: "Câu 8. Điều tra trọng điểm là một loại:",
  options: [
    "Điều tra toàn bộ",
    "Điều tra không toàn bộ",
    "Điều tra thường xuyên",
    "Điều tra không thường xuyên"
  ],
  correctAnswer: 1
},
{
  question: "Câu 9. Ưu điểm của phỏng vấn gián tiếp là",
  options: [
    "Dễ tổ chức",
    "Tiết kiệm chi phí",
    "Giảm thiểu số lượng điều tra viên",
    "Tất cả các đáp án trên"
  ],
  correctAnswer: 3
},
{
  question: "Câu 10. Chọn đáp án đúng điền vào chỗ trống: “Điều tra thống kê là việc tổ chức một cách khoa học theo một kế hoạch thống nhất việc…… về hiện tượng nghiên cứu trong điều kiện cụ thể về thời gian, không gian”.",
  options: [
    "Thu thập, tổng hợp",
    "Thu thập, ghi chép tài liệu",
    "Thu thập, ghi chép nguồn tài liệu ban đầu",
    "Tổng hợp, ghi chép"
  ],
  correctAnswer: 2
},
{
  question: "Câu 11. Khi muốn biết số lượng doanh nghiệp hoạt động trong lĩnh vực xây dựng trên địa bàn tỉnh Hải Dương, ta tiến hành:",
  options: [
    "Điều tra chuyên đề",
    "Điều tra chọn mẫu",
    "Điều tra trọng điểm",
    "Điều tra toàn bộ"
  ],
  correctAnswer: 3
},
{
  question: "Câu 12. Các cuộc điều tra toàn bộ hiện nay được Tổng cục thống kê tổ chức điều tra:",
  options: [
    "Tổng điều tra dân số và nhà ở",
    "Tổng điều tra nông nghiệp và nông thôn",
    "Tổng điều tra kinh tế",
    "Tất các đáp án trên"
  ],
  correctAnswer: 3
},
{
  question: "Câu 13. Tiêu thức phân tổ là:",
  options: [
    "Tiêu thức số lượng",
    "Tiêu thức chất lượng",
    "Tiêu thức thuộc tính",
    "Tiêu thức được chọn làm căn cứ tiến hành phân tổ thống kê"
  ],
  correctAnswer: 3
},
{
  question: "Câu 14. Phân tổ thống kê là căn cứ vào bao nhiêu tiêu thức để tiến hành phân chia các đơn vị của hiện tượng nghiên cứu thành các tổ và tiểu tổ có tính chất khác nhau?",
  options: [
    "Một",
    "Hai",
    "Một hay một số",
    "Nhiều"
  ],
  correctAnswer: 2
},
{
  question: "Câu 15. Tần số tổ i là:",
  options: [
    "Số lần lặp lại của các lượng biến trong tổ i hay số lượng các đơn vị trong tổ i",
    "Tỷ trọng số đơn vị chiếm trong tổng thể",
    "Số đơn vị của tổng thể",
    "Tổng các tần số của các tổ từ tổ 1 đến tổ i"
  ],
  correctAnswer: 0
},
{
  question: "Câu 16. Tổ mở là tổ:",
  options: [
    "Không có giới hạn dưới tổ cuối cùng",
    "Không có giới hạn trên tổ đầu tiên",
    "Không có giới hạn dưới tổ đầu tiên và không có giới hạn trên tổ cuối cùng",
    "Tất cả các đáp án trên đều sai"
  ],
  correctAnswer: 2
},
{
  question: "Câu 17. Tần suất của tổ i là:",
  options: [
    "Tỷ trọng số đơn vị tổ i chiếm trong tổng thể",
    "Số lượng các đơn vị trong tổng thể",
    "Số đơn vị của tổ i",
    "Tất cả các đáp án trên đều sai"
  ],
  correctAnswer: 0
},
{
  question: "Câu 1. Doanh thu của doanh nghiệp X tháng 4 đạt được là 124 tỷ đồng, kế hoạch đặt ra doanh thu của doanh nghiệp X tháng 5 là 136,4 tỷ đồng. Nhiệm vụ kế hoạch doanh thu của doanh nghiệp X tháng 5 năm N so với tháng 4 năm N:",
  options: [
    "Giảm 2%",
    "Tăng 12%",
    "Giảm 20%",
    "Tăng 10%"
  ],
  correctAnswer: 1
},
{
  question: "Câu 2. Kế hoạch đặt ra giá trị sản xuất của doanh nghiệp B tháng 7 là 7 tỷ đồng, thực tế tháng 7 giá trị sản xuất của doanh nghiệp B đạt được là 6,3 tỷ đồng. Giá trị sản xuất tháng 7 của doanh nghiệp B:",
  options: [
    "Vượt kế hoạch 10 %",
    "Không hoàn thành kế hoạch 10%",
    "Không hoàn thành kế hoạch 90%",
    "Vượt kế hoạch 20%"
  ],
  correctAnswer: 1
},
{
  question: "Câu 3. Lợi nhuận của công ty bảo hiểm X tháng 9 đạt được là 200 triệu đồng. Trong đó lợi nhuận của chi nhánh 1 là 80 triệu đồng, chi nhánh 2 là 50 triệu đồng, chi nhánh 3 là 70 triệu đồng. Tỷ trọng lợi nhuận của chi nhánh 1 công ty bảo hiểm X tháng 9:",
  options: [
    "40%",
    "34%",
    "80%",
    "38%"
  ],
  correctAnswer: 0
},
{
  question: "Câu 4. Năng suất lao động 6 công nhân của doanh nghiệp H tháng 6 lần lượt là (ĐVT: Kg): 50; 62; 80; 52; 30; 38. Năng suất lao động bình quân của 6 công nhân của doanh nghiệp H tháng 6:",
  options: [
    "41 kg",
    "42 kg",
    "52 kg",
    "54 kg"
  ],
  correctAnswer: 1
},
{
  question: "Câu 5. Doanh thu của doanh nghiệp A tháng 8, tháng 9 lần lượt là: 1250; 1320 triệu đồng. Doanh thu của doanh nghiệp tháng 9 so với tháng 8:",
  options: [
    "Tăng 60 triệu đồng",
    "Tăng 70 triệu đồng",
    "Tăng 80 triệu đồng",
    "Giảm 90 triệu đồng"
  ],
  correctAnswer: 1
},
{
  question: "Câu 6. Cho doanh thu của cửa hàng B năm 2020 là 5000 tỷ đồng; kế hoạch doanh thu năm 2021 là 5400 tỷ đồng. Kế hoạch doanh thu của cửa hàng B năm 2021 so với năm 2020:",
  options: [
    "110%",
    "108%",
    "108,4%",
    "107%"
  ],
  correctAnswer: 0
},
{
  question: "Câu 7. Cửa hàng C đặt kế hoạch doanh thu năm 2021 là 2140 tỷ đồng. Thực tế năm 2021, doanh thu cửa hàng C đạt 2200 tỷ đồng. Tỷ lệ hoàn thành kế hoạch doanh thu bán hàng của cửa hàng C năm 2021:",
  options: [
    "102,8%",
    "85,19%",
    "95,02%",
    "115,3%"
  ],
  correctAnswer: 0
},
{
  question: "Câu 8. Một công ty đặt kế hoạch doanh thu năm 2021 là 10840 tỷ đồng. Thực tế năm 2021, doanh thu của công ty đạt 10300 tỷ đồng. Tỷ lệ hoàn thành kế hoạch doanh thu bán hàng của công ty năm 2021:",
  options: [
    "102,8%",
    "85,19%",
    "95,02%",
    "115,3%"
  ],
  correctAnswer: 2
},
{
  question: "Câu 9. Cho doanh thu của một công ty năm 2020 là 10000 tỷ đồng, năm 2021 là 10300 tỷ đồng. Doanh thu của công ty năm 2021 so với năm 2020:",
  options: [
    "1,03 lần",
    "1,6897 lần",
    "0,9776 lần",
    "95,78%"
  ],
  correctAnswer: 0
},
{
  question: "Câu 10. Kế hoạch giá trị sản xuất của công ty X quý II năm 2023 là 4875 triệu đồng. Xí nghiệp số 1 trong công ty X đặt kế hoạch giá trị sản xuất quý II là 1000 triệu đồng. Tỷ trọng giá trị sản xuất của xí nghiệp số 1 so với toàn công ty kế hoạch quý II năm 2023:",
  options: [
    "20%",
    "30%",
    "40%",
    "50%"
  ],
  correctAnswer: 0
},
{
  question: "Câu 11. Công ty X quý I năm 2023 có giá trị sản xuất là 3800 triệu đồng. Xí nghiệp số 2 trong công ty X đạt giá trị sản xuất quý I năm 2023 là 1300 tỷ đồng. Kết cấu giá trị sản xuất của xí nghiệp số 2 quý I năm 2023:",
  options: [
    "23,68%",
    "34,21%",
    "42,11%",
    "10,75%"
  ],
  correctAnswer: 1
},
{
  question: "Câu 12. Xí nghiệp số 3 có giá trị sản xuất quý I năm 2023 là 1600 triệu đồng. Xí nghiệp số 3 đặt kế hoạch giá trị sản xuất quý II năm 2023 là 2500 triệu đồng. Tỷ lệ % hoàn thành kế hoạch giá trị sản xuất của xí nghiệp số 3 quý II năm 2023:",
  options: [
    "83%",
    "100%",
    "120%",
    "97,5%"
  ],
  correctAnswer: 0
},
{
  question: "Câu 13. Giá trị sản xuất của xí nghiệp số 1 quý I năm 2023 là 900 triệu đồng, quý II năm 2023 là 1000 triệu đồng. Tốc độ phát triển giá trị sản xuất xí nghiệp số 1 quý II so với quý I năm 2023:",
  options: [
    "128,29%",
    "129,69%",
    "138,46 %",
    "111,11%"
  ],
  correctAnswer: 3
},
{
  question: "Câu 14. Công ty X đặt kế hoạch giá trị sản xuất quý II năm 2023 là 5000 triệu đồng. Thực tế, giá trị sản xuất quý II năm 2023 của công ty X là 4875 triệu đồng. Tỷ lệ % hoàn thành kế hoạch giá trị sản xuất của toàn công ty quý II năm 2023:",
  options: [
    "81,34%",
    "106%",
    "125%",
    "97,55%"
  ],
  correctAnswer: 3
},
{
  question: "Câu 1 (Chương 4). Có tài liệu về doanh thu của doanh nghiệp A qua các năm như sau:\nNăm 2016 2017 2018 2019 2020\nDoanh thu (tỷ đồng) 1105 1212 1310 1250 1315\nLượng tăng (giảm) tuyệt đối doanh thu của doanh nghiệp A năm 2019 so với năm 2018:",
  options: [
    "-60 tỷ đồng",
    "50 tỷ đồng",
    "-70 tỷ đồng",
    "60 tỷ đồng"
  ],
  correctAnswer: 0
},
{
  question: "Câu 2 (Chương 4). Có tài liệu về giá trị sản xuất của doanh nghiệp A qua các năm như sau:\nNăm 2016 2017 2018 2019 2020\nGiá trị sản xuất (tỷ đồng) 1105 1212 1310 1250 1315\nTốc độ phát triển định định gốc về giá trị sản xuất năm 2018 so với năm 2016:",
  options: [
    "1,1855 lần",
    "1,3035 lần",
    "1,4068 lần",
    "1,4659 lần"
  ],
  correctAnswer: 1
},
{
  question: "Câu 3 (Chương 4). Doanh thu của doanh nghiệp A năm 2015 là 1256 tỷ đồng, năm 2020 là 1785 tỷ đồng. Lượng tăng (giảm) tuyệt đối bình quân năm về doanh thu của doanh nghiệp giai đoạn 2015-2020:",
  options: [
    "104,7 tỷ đồng",
    "105,8 tỷ đồng",
    "106,3 tỷ đồng",
    "107,2 tỷ đồng"
  ],
  correctAnswer: 1
},

{
  question: "Câu 4 (Chương 4). Lợi nhuận của doanh nghiệp A năm 2016 là 256 tỷ đồng, năm 2020 là 785 tỷ đồng. Tốc độ phát triển bình quân năm về lợi nhuận của doanh nghiệp giai đoạn 2016-2020:",
  options: [
    "106,58%",
    "115,12%",
    "124,34%",
    "132,3%"
  ],
  correctAnswer: 2
},
{
  question: "Câu 5 (Chương 4). Có tài liệu về giá trị sản xuất của doanh nghiệp A qua các năm như sau:\nNăm 2016 2017 2018 2019 2020\nGiá trị sản xuất (triệu đồng) 1105 1212 1310 1250 1315\nGiá trị sản xuất bình quân năm của doanh nghiệp A giai đoạn 2016-2020:",
  options: [
    "1186,5 triệu đồng/năm",
    "1238,4 triệu đồng/năm",
    "1268,5 triệu đồng/năm",
    "1318,3 triệu đồng/năm"
  ],
  correctAnswer: 1
},
{
  question: "Câu 6 (Chương 4). Doanh nghiệp A sử dụng số lượng lao động năm 2015 là 1250 người, năm 2022 là 1432 người. Lượng tăng giảm tuyệt đối định gốc về số lao động của doanh nghiệp A năm 2022 so với năm 2015:",
  options: [
    "175 người",
    "182 người",
    "193 người",
    "203 người"
  ],
  correctAnswer: 2
},
  {
    "question": "Câu 1. Lượng hàng hóa tiêu thụ mặt hàng B tháng 7 là 1250 sản phẩm, tháng 8 giảm 120 sản phẩm so với tháng 7. Lượng hàng hóa tiêu thụ mặt hàng B tháng 8:",
    "options": [
      "1130 sản phẩm",
      "1198 sản phẩm",
      "1206 sản phẩm",
      "đáp án khác"
    ],
    "correctAnswer": 0
  },
  {
    "question": "Câu 2. Lượng hàng hóa tiêu thụ mặt hàng A tháng 6, tháng 7 lần lượt là: 870 sản phẩm; 780 sản phẩm. Chỉ số đơn về lượng hàng hóa tiêu thụ sản phẩm A tháng 7 so với tháng 6:",
    "options": [
      "0,8966 lần",
      "0.9144 lần",
      "0,9677 lần",
      "1,0586 lần"
    ],
    "correctAnswer": 0
  },
  {
    "question": "Câu 3. Doanh thu của doanh nghiệp tháng 7, tháng 8 lần lượt là: 1250 triệu đồng; 1380 triệu đồng. Chỉ số tổng hợp về doanh thu của doanh nghiệp tháng 8 so với tháng 7:",
    "options": [
      "1,104 lần",
      "1,256 lần",
      "1,287 lần",
      "1,308 lần"
    ],
    "correctAnswer": 0
  },
  {
    "question": "Câu 4. Doanh thu của doanh nghiệp tháng 8 là 1540 triệu đồng. Doanh thu của doanh nghiệp tháng 8 giả định với giá bán tính theo tháng 7 là 1450 triệu đồng. Chỉ số chung về giá bán tháng 8 so với tháng 7:",
    "options": [
      "1,028 lần",
      "1,062 lần",
      "1,086 lần",
      "1,108 lần"
    ],
    "correctAnswer": 0
  },
  {
    "question": "Câu 5. Doanh thu của doanh nghiệp tháng 7 là 1465 triệu đồng. Doanh thu của doanh nghiệp tháng 8 giả định với giá bán tính theo tháng 7 là 1561 triệu đồng. Chỉ số chung về giá bán tháng 8 so với tháng 7:",
    "options": [
      "0,869 lần",
      "0,912 lần",
      "1,066 lần",
      "1,127 lần"
    ],
    "correctAnswer": 3
  },
  {
    "question": "Câu 6. Đơn giá bán hàng hóa A tháng 4 năm 2023 là 3,5 triệu đồng/sp, tháng 5 năm 2023 là 3,8 triệu đồng/sp. Chỉ số đơn về giá bán hàng hóa A tháng 5 so với tháng 4 năm 2023:",
    "options": [
      "1,0857 lần",
      "130,05%",
      "104,04%",
      "115,20%"
    ],
    "correctAnswer": 0
  },
  {
    "question": "Câu 7. Mặt hàng B có lượng tiêu thụ tháng 4 là 1050 sp, tháng 5 là 1200 sản phẩm. Chỉ số đơn về lượng tiêu thụ hàng hóa B tháng 5 so với tháng 4 năm 2023:",
    "options": [
      "109,09%",
      "134,23%",
      "82,86%",
      "95,25%"
    ],
    "correctAnswer": 0
  },

];

// Mảng lưu thứ tự hiện tại
let currentQuestions = [...questions];

// Hàm tráo mảng (Fisher–Yates)
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

// Hàm load quiz
function loadQuiz(isShuffle = false) {
  const form = document.getElementById("quizForm");
  form.innerHTML = ""; // reset form

  if (isShuffle) shuffleArray(currentQuestions);
  else currentQuestions = [...questions];

  currentQuestions.forEach((q, index) => {
    const div = document.createElement("div");
    div.className = "question";

    const questionHtml = document.createElement("p");
    questionHtml.textContent = `${q.question}`;

    const answerContainer = document.createElement("div");

    q.options.forEach((opt, i) => {
      const label = document.createElement("label");
      label.innerHTML = `<input type="radio" name="q${index}" value="${i}"> ${opt}`;

      const input = label.querySelector("input");
      input.addEventListener("change", function () {
        const resultDiv = div.querySelector(".result");
        if (parseInt(this.value) === q.correctAnswer) {
          resultDiv.innerHTML = `✅ <span class="correct">Đúng</span>`;
        } else {
          resultDiv.innerHTML = `❌ <span class="wrong">Sai</span> – Đáp án đúng: <span class="correct">${q.options[q.correctAnswer]}</span>`;
        }
        div.querySelectorAll(`input[name="q${index}"]`).forEach(r => r.disabled = true);
      });

      answerContainer.appendChild(label);
      answerContainer.appendChild(document.createElement("br"));
    });

    const result = document.createElement("div");
    result.className = "result";

    div.appendChild(questionHtml);
    div.appendChild(answerContainer);
    div.appendChild(result);
    form.appendChild(div);
  });
}

// Gắn sự kiện cho nút tráo
document.getElementById("shuffleBtn").addEventListener("click", () => loadQuiz(true));

// Load lần đầu giữ thứ tự
loadQuiz(false);