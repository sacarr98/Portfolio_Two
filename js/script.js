// Questions that will be loaded into the question panel area
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

},
{
    q: "Which religion has a God specified for each Rain, Money, Children, and Love?",
    a: [{ text: "Islam", isCorrect: false },
    { text: "Buddism", isCorrect: false },
    { text: "Hinduism", isCorrect: true },
    { text: "Jainism", isCorrect: false }
    ]

},
{
    q: "What is the currency of Pakistan?",
    a: [{ text: "Pound", isCorrect: false },
    { text: "Euro", isCorrect: false },
    { text: "Riyal", isCorrect: false },
    { text: "Rupee", isCorrect: true }
    ]

},
{
    q: "Which popular Disney show was Miley Cyrus part of?",
    a: [{ text: "Hannah Montanna", isCorrect: true },
    { text: "Two Broke Girls", isCorrect: false },
    { text: "Live it like Beckham", isCorrect: false },
    { text: "Suite life of Jack and Cody", isCorrect: false }
    ]

}

];

let currQuestion = 0;


/**
 *  The main game "loop", called when the script is first loaded
 * and after the user's answer has been processed
 * loads questions from the array into the question panel area
 */
function loadQues() {
    const question = document.getElementById("ques");
    const opt = document.getElementById("opt");

    question.textContent = Questions[currQuestion].q;
    opt.innerHTML = "";

    for (let i = 0; i < Questions[currQuestion].a.length; i++) {
        const choicesdiv = document.createElement("div");
        const choice = document.createElement("input");
        const choiceLabel = document.createElement("label");

        choice.type = "radio";
        choice.name = "answer";
        choice.value = i;

        choiceLabel.textContent = Questions[currQuestion].a[i].text;

        choicesdiv.appendChild(choice);
        choicesdiv.appendChild(choiceLabel);
        opt.appendChild(choicesdiv);
    }

}

loadQues();


/**
 *  Displays a congratulations message when player completes the quiz 
 */
function congratulations() {
    const congratsMessage = document.getElementById("congratulations");
    congratsMessage.textContent = `Well done for Completing the Quiz!`;
}

/**
 * Gets the current score from the DOM and increments it by 1
 */
function incrementScore() {

    let oldscore = parseInt(document.getElementById("correct_score").innerText);
    document.getElementById("correct_score").innerText = ++oldscore;

}
/**
 * Gets the current tally of incorrect answers from the DOM and increments it by 1
 */
function incrementWrongAnswer() {

    let oldscore = parseInt(document.getElementById("incorrect").innerText);
    document.getElementById("incorrect").innerText = ++oldscore;

}

/**
 *  Loads next question, if all questions complete loads final score page
 */
function nextQuestion() {
    if (currQuestion < Questions.length - 1) {
        currQuestion++;
        loadQues();
    } else {
        document.getElementById("opt").remove();
        document.getElementById("ques").remove();
        document.getElementById("btn").remove();
        document.getElementById("exit").remove();
        congratulations();
    }
}

/**
 *  Checks players answer and loads the increment right/wrong answer function accordingly
 */
function checkAns() {
    const selectedAns = parseInt(document.querySelector('input[name="answer"]:checked').value);
    if (Questions[currQuestion].a[selectedAns].isCorrect) {
        alert("Hey! You got it right!");
        incrementScore();
        nextQuestion();
    } else {
        alert("Awwww... better luck next time");
        incrementWrongAnswer();
        nextQuestion();
    }
}

function escape() {
    document.getElementById("opt").remove();
    document.getElementById("ques").remove();
    document.getElementById("btn").remove();
    document.getElementById("exit").remove();
    congratulations();
}