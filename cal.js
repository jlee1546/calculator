/* This is the JavaScript for the Calculator project @The_Odin_Project*/
let digit1, digit2, operator;
// Functions that do the calculation for the calculator

function add(num1,num2) {
    return num1 + num2;
}

function subtract(num1,num2) {
    return num1 - num2;
}

function multiply(num1,num2) {
    return num1 * num2;
}

function divide(num1,num2) {
    return num1 / num2;
}
function allClear() {
    const screenOutput = document.getElementById("to-screen");
    screenOutput.value= "";
}

// Function that calls a calculation function to operate on two numbers
function operate(calculateFunc,num1,num2) {
    return calculateFunc(num1,num2);
}
// Function that writes to the input field producting screen output
function toScreen(value) {
    
    const screenOutput = document.getElementById("to-screen");
    screenOutput.value += value;
}
//  Adds event listener to digit buttons
const digit = document.querySelectorAll('.digit').forEach(item => {
    item.addEventListener('click', event => {
        toScreen(item.value);
        if (digit2 === undefined) {
            digit1 += item.value;
        } else {
            digit2 += item.value;
        }
        console.log(digit1);
        console.log(digit2);
        
    });
});

// Adds event listener to all-clear
const clear = document.querySelector('.all-clear');
clear.addEventListener('click', function() {
    allClear();
    digit1 = "";
    digit2 = "";
});

// Adds eventlistener to = button

const equals = document.querySelector('.operation');
equals.addEventListener('click', function() {
    operate(operation,num1,num2)
});

// Adds event listner to operator buttons
//const opertator = document.querySelector('')
