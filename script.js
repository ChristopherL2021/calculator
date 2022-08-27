"use strict";

const numbers = document.querySelectorAll('.number');
const screen = document.querySelector('#screen-output');
const zero = document.querySelector('#zero');
const clear = document.querySelector('#clear');
const period = document.querySelector('#period');

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

function operate(operand, num1, num2) {
    switch(operand) {
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
    if (screen.textContent.length > 8) {
        return;
    }

    if (screen.textContent[0] === '0' && !(screen.textContent.includes('.'))) {
        screen.textContent = number.textContent;
        return;
    }

    screen.append(number.textContent);
}

// Clears and sets the screen to zero
clear.addEventListener('click', () => {
    screen.textContent = '0';
});

period.addEventListener('click', () => {
    if (screen.textContent.includes('.')) {
        return;
    }

    screen.append(period.textContent);
});