"use strict";

const numbers = document.querySelectorAll('.number');
const screen = document.querySelector('#screen-output');
const zero = document.querySelector('#zero');
const clear = document.querySelector('#clear');
const period = document.querySelector('#period');
const plusKey = document.querySelector('#plusKey');
const equalsKey = document.querySelector('#equalsKey');
const subtractKey = document.querySelector('#subtractKey');
const multiplyKey = document.querySelector('#multiplyKey');
const divideKey = document.querySelector('#divideKey');

let operatorValue = undefined;
let previousOperation = undefined;
let answer = undefined;

function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

function operate(operator, num1, num2) {
    switch(operator) {
        case 'add':
            return add(num1, num2);
        case 'subtract':
            return subtract(num1, num2);
        case 'multiply':
            return multiply(num1, num2);
        case 'divide':
            return divide(num1, num2);
        default:
            return "No valid operand";
    }
}

// Listener and function call for non zero values 
numbers.forEach((number) => {
    number.addEventListener('click', () => {
        appendScreen(number);
    });
});

// Listener and append for the value zero
zero.addEventListener('click', () => {
    if (answer) {
        screen.textContent = '0';
        resetNumberVariables();
    }
    
    if (screen.textContent.length > 8) {
        return;
    }

    if (screen.textContent[0] === '0' && screen.textContent[1] !== '.') {
        return;
    }

    screen.append(zero.textContent);
});

// function to append non zero values
function appendScreen(number) {
    if (answer) {
        screen.textContent = '0';
        resetNumberVariables();
    }
    
    if (screen.textContent.length > 8) {
        return;
    }

    if (checkOperand(screen.textContent)) {
        screen.textContent = number.textContent;
        return;
    }

    if (screen.textContent[0] === '0' && !(screen.textContent.includes('.'))) {
        screen.textContent = number.textContent;
        return;
    }

    screen.append(number.textContent);
}

function CheckIfOperand() {
    if (operatorValue) {
        return true;
    }
}

// Checks if an operand has been clicked
function checkOperand(operand) {
    if (screen.textContent.includes('/')) {
        return true;
    }

    if (screen.textContent.includes('*')) {
        return true;
    }

    if (screen.textContent.includes('-')) {
        return true;
    }

    if (screen.textContent.includes('+')) {
        return true;
    }

    return false;
}

// Clears and sets the screen to zero
clear.addEventListener('click', () => {
    screen.textContent = '0';
    resetNumberVariables();
});

// Period Key
period.addEventListener('click', () => {
    if (screen.textContent.includes('.')) {
        return;
    }

    if (answer) {
        return;
    }

    screen.append(period.textContent);
});

// Plus operator
plusKey.addEventListener('click', () => {
    if (CheckIfOperand()) {
        return;
    }
    
    operatorValue = 'add';
    previousOperation = screen.textContent;
    screen.textContent = '+';
});

// Equals key function
equalsKey.addEventListener('click', () => {
    if (answer) {
        return;
    }

    if (previousOperation === undefined) {
        return;
    }

    answer = operate(operatorValue, Number(previousOperation), Number(screen.textContent));
    screen.textContent = answer;
});

// Resets math variables after operation
function resetNumberVariables() {
    answer = undefined;
    previousOperation = undefined;
    operatorValue = undefined;
}

// Subtract key
subtractKey.addEventListener('click', () => {
    if (CheckIfOperand()) {
        return;
    }

    operatorValue = 'subtract';
    previousOperation = screen.textContent;
    screen.textContent = '-';
});

// Multiply Key
multiplyKey.addEventListener('click', () => {
    if (CheckIfOperand()) {
        return;
    }

    operatorValue = 'multiply';
    previousOperation = screen.textContent;
    screen.textContent = '*';
});

// Divide Key
divideKey.addEventListener('click', () => {
    if (CheckIfOperand()) {
        return;
    }

    operatorValue = 'divide';
    previousOperation = screen.textContent;
    screen.textContent = '/';
});