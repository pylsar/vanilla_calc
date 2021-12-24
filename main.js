import "./style.css";

const calcBtnNumbers = document.querySelectorAll(".calc__btn-num");
const currentDisplay = document.querySelector(".calc__display-current");
const nextDisplay = document.querySelector(".calc__display-prev");
const operandDisplay = document.querySelector(".calc__operand");
const currentOperand = document.querySelectorAll(".calc__btn-operand");
const equal = document.querySelector(".calc__btn-equal");
const cancel = document.querySelector(".calc__cancel");
const backspace = document.querySelector(".calc__back");
let textDisplay = [];
let nextTextDisplay = [];
let prevNum;
let operandMain = "";
let nextNum;

calcBtnNumbers.forEach((item) =>
  item.addEventListener("click", function () {
    let current = item.getAttribute("value");

    if (operandMain !== "") {
      // console.log(1);
      // console.log(operandMain);
      nextTextDisplay.push(current);
      nextNum = nextTextDisplay.toString().split(",").join("");
      nextDisplay.innerHTML = nextNum;
    } else {
      textDisplay.push(current);
      // console.log(current);
      prevNum = textDisplay.toString().split(",").join("");
      currentDisplay.innerHTML = prevNum;
    }
  })
);

currentOperand.forEach((item) =>
  item.addEventListener("click", function () {
    let operand = item.getAttribute("value");
    operandMain = operand;
    operandDisplay.innerHTML = operand;
  })
);

equal.addEventListener("click", function () {
  // console.log(prevNum);
  // console.log(operandMain);
  let result;
  if (operandMain === "+") {
    result = Number(prevNum) + Number(nextNum);
  } else if (operandMain === "-") {
    result = Number(prevNum) - Number(nextNum);
  } else if (operandMain === "/") {
    result = Number(prevNum) / Number(nextNum);
  } else if (operandMain === "*") {
    result = Number(prevNum) * Number(nextNum);
  } else if (operandMain === "pow") {
    result = Math.pow(Number(prevNum), Number(nextNum));
  }
  clear();
  prevNum = result;
  currentDisplay.innerHTML = result;
});

cancel.addEventListener("click", function () {
  clear();
});

function clear() {
  nextDisplay.innerHTML = "";
  operandDisplay.innerHTML = "";
  prevNum = "";
  nextNum = "";
  currentDisplay.innerHTML = "";
  textDisplay = [];
  nextTextDisplay = [];
  operandMain = "";
}

backspace.addEventListener("click", function () {
  if (operandMain === "←" && prevNum) {
    prevNum = prevNum.slice(0, -1);
    currentDisplay.innerHTML = prevNum;
    operandDisplay.innerHTML = "";
    nextDisplay.innerHTML = "";
  }
  // nextNum = nextNum.slice(0, -1);
  // nextDisplay.innerHTML = nextNum;
});
