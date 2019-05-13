const questions = {
    Question1: {
        a: "Perfect 4th",
        b: "Major 3rd",
        c: "Minor 2nd",
        d: "None of th above"
    },
    Question2: {
        a: "Perfect 4th",
        b: "Major 3rd",
        c: "Minor 2nd",
        d: "None of th above"
    },
    Question3: {
        a: "Perfect 4th",
        b: "Major 3rd",
        c: "Minor 2nd",
        d: "None of th above"
    },
    Question4: {
        a: "Perfect 4th",
        b: "Major 3rd",
        c: "Minor 2nd",
        d: "None of th above"
    },
};

function loadQuestions() {
    let answer1 = document.getElementById("answer-a")
    answer1.innerText =  questions.Question1.a
};

document.addEventListener('DOMContentLoaded', () => {
    console.log("interval script loaded")
    loadQuestions()
});