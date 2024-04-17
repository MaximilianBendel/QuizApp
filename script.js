let questions = [
    {
        "question": "Wer hat HTML erfunden?",
        "answer1": "Robbie Williams",
        "answer2": "Lady Gaga",
        "answer3": "Tim Berners Lee",
        "answer4": "Justin Bieber",
        "rightAnswer": 3
    },

    {
        "question": "Welches Attribut kann man NICHT für Textarea verwenden?",
        "answer1": "readonly",
        "answer2": "max",
        "answer3": "from",
        "answer4": "spellcheck",
        "rightAnswer": 1
    },

    {
        "question": "Wie wählst du alle Elemente vom Typ &lt;a&gt; mit dem Attribut title aus?",
        "answer1": "a[title]{...}",
        "answer2": "a > title{...}",
        "answer3": "a.title{...}",
        "answer4": "a=title{...}",
        "rightAnswer": 1
    }
];

let currentQuestion = 0;
let numberRightAnswer = 0;

function render() {
    document.getElementById('question-number').innerHTML = questions.length;
    showCurrentQuestion();
}

function showCurrentQuestion() {
    if (currentQuestion >= questions.length) {
        showEndScreen();
    } else {
        let percent = currentQuestion / questions.length;
        calculateProgressBar(percent);
        let question = questions[currentQuestion];
        document.getElementById('current.question-number').innerHTML = currentQuestion + 1;
        showQuestions(question);
    }
}

function answer(selector) {
    let question = questions[currentQuestion];
    let selectorNumber = selector.slice(-1);
    let numberOfRightAnswer = `answer${question['rightAnswer']}`;
    if (selectorNumber == question['rightAnswer']) {
        console.log('Richtig');
        document.getElementById(selector).classList.add('bg-success');
        numberRightAnswer++;
    }
    else {
        console.log('Falsch');
        document.getElementById(selector).classList.add('bg-danger');
        document.getElementById(numberOfRightAnswer).classList.add('bg-success');
    }
    document.getElementById('next-button').disabled = false;
}

function nextQuestion() {
    currentQuestion++;
    resetButtons();
    showCurrentQuestion();

}

function resetButtons() {
    document.getElementById('next-button').disabled = true;
    document.getElementById('answer1').classList.remove('bg-danger');
    document.getElementById('answer1').classList.remove('bg-success');
    document.getElementById('answer2').classList.remove('bg-danger');
    document.getElementById('answer2').classList.remove('bg-success');
    document.getElementById('answer3').classList.remove('bg-danger');
    document.getElementById('answer3').classList.remove('bg-success');
    document.getElementById('answer4').classList.remove('bg-danger');
    document.getElementById('answer4').classList.remove('bg-success');
}

function showQuestions(question) {
    document.getElementById('question').innerHTML = question['question'];
    document.getElementById('answer1').innerHTML = question['answer1'];
    document.getElementById('answer2').innerHTML = question['answer2'];
    document.getElementById('answer3').innerHTML = question['answer3'];
    document.getElementById('answer4').innerHTML = question['answer4'];
}

function calculateProgressBar(percent) {
    percent = Math.round(percent * 100);
    document.getElementById('progress-bar').innerHTML = `${percent}%`;
    document.getElementById('progress-bar').style.width = `${percent}%`;
}

function showEndScreen() {
    document.getElementById('question-body').style = "display:none";
    document.getElementById('endscreen').style = "display:flex; align-items:center; flex-direction: column; gap:50px;";
    document.getElementById('endscreen-number-all').innerHTML = questions.length;
    document.getElementById('number-right-answer').innerHTML = numberRightAnswer;
}

function reset() {
    currentQuestion = 0;
    numberRightAnswer = 0;
    render();
    document.getElementById('question-body').style = "";
    document.getElementById('endscreen').style = "display: none;";
}