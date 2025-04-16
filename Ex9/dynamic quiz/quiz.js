// Questions data
const questions = [
    {
      question: "What does HTML stand for?",
      options: [
        "Hyper Text Markup Language",
        "High Text Machine Language",
        "Hyper Tool Multi Language",
        "Home Tool Markup Language"
      ],
      answer: 0
    },
    {
      question: "Which tag is used to define a JavaScript in HTML?",
      options: [
        "<js>",
        "<script>",
        "<javascript>",
        "<code>"
      ],
      answer: 1
    },
    {
      question: "Which of the following is NOT a JavaScript data type?",
      options: [
        "Number",
        "Boolean",
        "String",
        "Float"
      ],
      answer: 3
    }
  ];
  
  // Render the quiz dynamically
  function loadQuiz() {
    const form = document.getElementById("quizForm");
    questions.forEach((q, index) => {
      const div = document.createElement("div");
      div.classList.add("question");
  
      const title = document.createElement("h3");
      title.innerText = `${index + 1}. ${q.question}`;
      div.appendChild(title);
  
      q.options.forEach((opt, i) => {
        const label = document.createElement("label");
        const input = document.createElement("input");
        input.type = "radio";
        input.name = `q${index}`;
        input.value = i;
  
        label.appendChild(input);
        label.append(` ${opt}`);
        div.appendChild(label);
        div.appendChild(document.createElement("br"));
      });
  
      form.appendChild(div);
    });
  }
  
  // Handle submission
  function submitQuiz() {
    let score = 0;
  
    questions.forEach((q, index) => {
      const selected = document.querySelector(`input[name="q${index}"]:checked`);
      if (selected && parseInt(selected.value) === q.answer) {
        score++;
      }
    });
  
    document.getElementById("score").innerText = `Your Score: ${score} / ${questions.length}`;
  }
  
  window.onload = loadQuiz;
  