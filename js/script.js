// Questions that will be loaded into the question panel area
const Questions = [{
    Qs: "What is the national language of Canada?",
    As: [{ text: "English", isCorrect: false },
    { text: "French", isCorrect: false },
    { text: "Dutch", isCorrect: true },
    { text: "Spanish", isCorrect: false }
    ]

},
{
    Qs: "Brazil is the biggest producer of?",
    As: [{ text: "Rice", isCorrect: false, isSelected: false },
    { text: "Potatoes", isCorrect: false },
    { text: "Oil", isCorrect: false },
    { text: "Coffee", isCorrect: true }
    ]

},
{
    Qs: "How many colors in the Rainbow?",
    As: [{ text: "Five", isCorrect: false },
    { text: "Six", isCorrect: false },
    { text: "Seven", isCorrect: true },
    { text: "Eight", isCorrect: false }
    ]

},
{
    Qs: "Which religion has a God specified for each Rain, Money, Children, and Love?",
    As: [{ text: "Islam", isCorrect: false },
    { text: "Buddism", isCorrect: false },
    { text: "Hinduism", isCorrect: true },
    { text: "Jainism", isCorrect: false }
    ]

},
{
    Qs: "What is the currency of Pakistan?",
    As: [{ text: "Pound", isCorrect: false },
    { text: "Euro", isCorrect: false },
    { text: "Riyal", isCorrect: false },
    { text: "Rupee", isCorrect: true }
    ]

},
{
    Qs: "Which popular Disney show was Miley Cyrus part of?",
    As: [{ text: "Hannah Montanna", isCorrect: true },
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

    question.textContent = Questions[currQuestion].Qs;
    opt.innerHTML = "";

    for (let i = 0; i < Questions[currQuestion].As.length; i++) {
        const choicesdiv = document.createElement("div");
        const choice = document.createElement("input");
        const choiceLabel = document.createElement("label");

        choice.type = "radio";
        choice.name = "answer";
        choice.value = i;

        choiceLabel.textContent = Questions[currQuestion].As[i].text;

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
    if (Questions[currQuestion].As[selectedAns].isCorrect) {
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

/**
 *  Allows player to choose a username
 */
let usernames = [];

let form = document.getElementById("registration-form");

form.addEventListener('submit', handleSubmit);

let errorMsg = document.getElementById("errors");

function handleSubmit(event) {
    event.preventDefault();

    if (usernames.includes(username.value)) {
        errorMsg.innerHTML = "<p>Sorry, the username <name> is already in use. Please choose another username.</p>";
    } else {
        usernames.push(username.value);
        console.log(usernames);
        let htmlResponse2 = `Hi ${username.value} thanks for signing up!`;

        let helloDiv = document.getElementById("hello");
        helloDiv.innerHTML = htmlResponse2;
        helloDiv.style.display = 'block';

    }

}

/**
 *  User Feedback
 */

let userFeedback;
let feedbackForm = document.getElementById("feedback-form");
form.addEventListener('submit', handleSubmit2);

function handleSubmit2(event) {
    event.preventDefault();
    userFeedback = document.getElementById("feedback").value;
    console.log(userFeedback);
    let htmlResponse = "<p>Thanks for leaving us a message! We'll be sure to get back to you soon</p>";

    let responseDiv = document.getElementById("response-message");
    responseDiv.innerHTML = htmlResponse;
    responseDiv.style.display = 'block';


}