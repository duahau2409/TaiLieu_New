const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const geography = [
  {
    question: "Câu 1: Đặc điểm chung của nhóm các nước đang phát triển là?",
    answerA:
      "A. GDP bình quân đầu người thấp, chỉ số HDI ở mức cao, nợ nước ngoài nhiều.",
    answerB:
      "B. GDP bình quân đầu người cao, chỉ số HDI ở mức thấp, nợ nước ngoài nhiều.",
    answerC:
      "C. GDP bình quân đầu người thấp, chỉ số HDI ở mức thấp, nợ nước ngoài nhiều.",
    answerD:
      "D. Năng suất lao động xã hội cao, chỉ số HDI ở mức thấp, nợ nước ngoài nhiều.",
  },
  {
    question: "Câu 2: Ý nào sau đây không phải là đặc điểm chung của nhóm các nước kinh tế phát triển?",
    answerA:
      "A. Đầu tư nước ngoài lớn.",
    answerB:
      "B. Ngành dịch vụ chiếm tỉ trọng lớn.",
    answerC:
      "C. Chỉ số phát triển con người (HDI) cao",
    answerD:
      "D. Thu nhập bình quân đầu người không cao.",
  },
  {
    question: "Câu 3: “ Trải qua quá trình công nghiệp hóa và đạt trình độ phát triển nhất định về công nghiệp” là đặc điểm nổi bật của nhóm nước?",
    answerA:
      "A. Công nghiệp mới.",
    answerB:
      "B. Kinh tế đang phát triển.",
    answerC:
      "C. Kinh tế phát triển.",
    answerD:
      "D. Chậm phát triển.",
  }
];

const history = [
  {
    question: "Câu 1: Đại biểu xuất sắc cho nền bi kịch cổ điển Pháp ở buổi đầu thời cận đại là",
    answerA:
      "A. La Phông-ten.",
    answerB:
      "B. Mô-li-e.",
    answerC:
      "C. Coóc-nây.",
    answerD:
      "D. Sếch-xpia.",
  },
  {
    question: "Câu 2: Cuộc Duy tân Minh Trị của Nhật Bản được tiến hành từ năm",
    answerA:
      "A. 1868.",
    answerB:
      "B. 1889.",
    answerC:
      "C. 1886.",
    answerD:
      "D. 1898.",
  },
];

const render = (exams) => {
  const content = exams.map((exam, index) => {
    console.log(exam.question);
    return `
            <div class="question">${exam.question}</div>
            <div class="row">
                <div class="col">
                    <input type="radio" name="answer + ${index}" id="answerA"></input>
                    <label for="answerA">${exam.answerA}</label>
                </div>
                <div class="col">
                    <input type="radio" name="answer + ${index}" id="answerB"></input>
                    <label for="answerB">${exam.answerB}</label>
                </div>
                <div class="col">
                    <input type="radio" name="answer + ${index}" id="answerC"></input>
                    <label for="answerC">${exam.answerC}</label>
                </div>
                <div class="col">
                    <input type="radio" name="answer + ${index}" id="answerD"></input>
                    <label for="answerD">${exam.answerD}</label>
                </div>
            </div>
            </div>
        `;
  });
  content.push('<button class="button">Nộp bài</button>')
  $(".content").innerHTML = content.join("");
};

const handleExam = (examName) => {
    if(examName === 'dia') render(geography)
    if(examName === 'su') render(history)
};