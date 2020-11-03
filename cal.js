
let displayValue = "", digit1 = "", flag = false, operator = "";
//Functions for calculations

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

function calculate(operator,num1,num2) {
    if (operator === '+') {
        return add(num1,num2);
    } else if (operator === '-') {
        return subtract(num1,num2);
    } else if (operator === '*') {
        return multiply(num1,num2);
    } else if (operator === '/') {
        return divide(num1,num2);
    }
    return num2;
}

function toScreen() {
    const screen = document.querySelector('.screen');
    screen.value = displayValue;
    console.log(displayValue);
   
}

function writeDigit(number) {
    if (flag === true) {
        displayValue = number;
        flag = false;
    } else {
        displayValue = displayValue === '0' ? number : displayValue + number;
    }
    
    console.log(displayValue, digit1, flag, operator);
}

function acceptOperator(nextOperator) {
    const inputValue = parseFloat(displayValue);

    if (digit1 === undefined && !isNaN(inputValue)) {
        digit1 = inputValue;
    } else if (operator) {
        const result = calculate(operator,digit1,inputValue);

        displayValue = String(result);
        digit1 = result;
    }
    flag = true;
    operator = nextOperator;
    console.log(displayValue, digit1, flag, operator);
}


// Adds event listener to digit button

const digits = document.querySelectorAll('.digit');
digits.forEach(digit => {
    digit.addEventListener('click', event => {
        writeDigit(digit.value);
        toScreen();
    });
});

// Adds event listener to decimal button

const decimal = document.querySelector('.decimal');
decimal.addEventListener('click', function() {
    if (displayValue.includes('.')) {
        return;
    } else {
        displayValue += '.';
        toScreen();
    }
});

// Add event listener to AC button

const clear = document.querySelector('.all-clear');
clear.addEventListener('click', function() {
    digit1 = '';
    flag = '';
    operator = '';
    displayValue = '0';
    toScreen();
    
});

// Add event listener to + button

const plus = document.querySelector('.plus');
plus.addEventListener('click', function() {
    acceptOperator(plus.value);
    toScreen();
  
    
});

// Add event listener to - button

const minus = document.querySelector('.minus');
minus.addEventListener('click', function() {
    acceptOperator(minus.value);
    toScreen();
});

// Add event listener to x button

const times = document.querySelector('.times');
times.addEventListener('click', function() {
    acceptOperator(times.value);
    toScreen();
});

// Add event listener to divide button

const divis = document.querySelector('.divide');
divis.addEventListener('click', function() {
    acceptOperator(divis.value);
    toScreen();
});

// Add event listener to = button

const equal = document.querySelector('.equal');
equal.addEventListener('click', function() {
    acceptOperator(equal.value);
    toScreen();
})





