// Questions that will be asked
const Questions = [{
    q: "What is the national language of Canada?",
    a: [{ text: "English", isCorrect: false },
    { text: "French", isCorrect: false },
    { text: "Dutch", isCorrect: true },
    { text: "Spanish", isCorrect: false }
    ]

},
{
    q: "Brazil is the biggest producer of?",
    a: [{ text: "Rice", isCorrect: false, isSelected: false },
    { text: "Potatoes", isCorrect: false },
    { text: "Oil", isCorrect: false },
    { text: "Coffee", isCorrect: true }
    ]

},
{
    q: "How many colors in the Rainbow?",
    a: [{ text: "Five", isCorrect: false },
    { text: "Six", isCorrect: false },
    { text: "Seven", isCorrect: true },
    { text: "Eight", isCorrect: false }
    ]

}

];

let currQuestion = 0;
let score = 0;

function loadQues() {
    const question = document.getElementById("ques");
    const opt = document.getElementById("opt");

    question.textContent = Questions[currQuestion].q;
    opt.innerHTML = "";

}