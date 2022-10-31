//app state
let questions = [
  {
    q: "__ is the declaration keyword for declaring function scoped variables that can be reassigned",
    a: "var",
  },
  {
    q: "__ is the declaration keyword for declaring block scoped variables that cannot be reassigned",
    a: "const",
  },
  {
    q: "__ is the declaration keyword for declaring block scoped variables that can be reassigned",
    a: "let",
  },
];
let currentQIdx = 0;
let score = 0;
//select elements

let title = document.getElementById("Title");
let form = document.querySelector("form");
let input = document.getElementById("answer");
let submitBtn = document.getElementById("submitBtn");

//load question on load
title.textContent = questions[currentQIdx].q;
//add event listener
//HTMLSubmitEvent
form.addEventListener("submit", (event) => {
  //prevents the submission behavior to send values a url-encoded data and refresh
  event.preventDefault();

  //check answer
  if (input.value.toLowerCase() == questions[currentQIdx].a) {
    score++;
  }

  //load next question
  currentQIdx++;

  if (questions[currentQIdx]) {
    title.textContent = questions[currentQIdx].q;
  } else {
    //next q is undefined (out of q's)
    title.textContent = `Finished. You scored a ${score}/${questions.length}`;
    //disable input when game is finished
    input.disabled = true;
    submitBtn.disabled = true;
  }
  //clear input value
  input.value = "";
});
