import "./style.css";

const calcBtnNumbers = document.querySelectorAll(".calc__btn-num");
const currentDisplay = document.querySelector(".calc__display-current");
const nextDisplay = document.querySelector('.calc__display-prev');
const operandDisplay = document.querySelector('.calc__operand');
const currentOperand = document.querySelectorAll(".calc__btn-operand");
const equal = document.querySelector('.calc__btn-equal');
let textDisplay = [];
let nextTextDisplay = [];
let prevNum;
let operandMain = "";
let nextNum;

calcBtnNumbers.forEach((item) =>
  item.addEventListener("click", function () {
    let current = item.getAttribute("value");
   

    if(operandMain !== ''){
        console.log(1)
        console.log(operandMain)
        nextTextDisplay.push(current)
        nextNum = nextTextDisplay.toString().split(',').join('');
        nextDisplay.innerHTML = nextNum;
    }else{
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

equal.addEventListener('click', function(){
    console.log(prevNum)
    console.log(operandMain)
})


