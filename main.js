import './style.css'


const num1 = document.querySelector('.calc__display-current');
const num2 = document.querySelector('.calc__display-prev');
const one = document.querySelector('.calc__one');
const two = document.querySelector('.calc__two');


let operation;

function calc(){

    let result;
    const number1 = Number(num1.value);
    const number2 = Number(num2.value);
    console.log(number1)

    switch(operation) {
        case '/':
            result = number1 / number2;
            break;
        case '+':
            result = number1 + number2;
            break;    
    }

}
calc();
