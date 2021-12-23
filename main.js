import "./style.css";

const calcBtnNumbers = document.querySelectorAll(".calc__btn-num");
const currentDisplay = document.querySelector(".calc__display-current");
const currentOperand = document.querySelectorAll(".calc__btn-operand");
let textDisplay = [];
let prevNum;

calcBtnNumbers.forEach((item) =>
  item.addEventListener("click", function () {
    let current = item.getAttribute("value");
    textDisplay.push(current);
    // console.log(current);
    prevNum = textDisplay.toString().split(",").join("");
    currentDisplay.innerHTML = prevNum;
  })
);

currentOperand.forEach((item) =>
  item.addEventListener("click", function () {
    let operand = item.getAttribute("value");
    textDisplay.push(operand);
    console.log(textDisplay);
    currentDisplay.innerHTML = prevNum + " " + operand;
  })
);


