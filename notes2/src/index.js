//Select Elements
let firstInput = document.querySelector("#firstInput");
let secondInput = document.querySelector("#SecondInput");
let btn1 = document.querySelector("#bnt1");
let btn2 = document.querySelector("#bnt2");
let btn3 = document.querySelector("#bnt3");

//Event Listeners

window.addEventListener("keyup", (event) => {
  console.log(event);

  switch (event.key) {
    case "1":
      firstInput.focus();
      break;
    case "2":
      secondInput.focus();
      break;
    case "3":
      btn1.focus();
      break;
    case "4":
      btn2.focus();
      break;
    case "5":
      btn3.focus();
      break;
  }
});
