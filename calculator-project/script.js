let currentOperator = null;
let firstOperand = '';
let secondOperand = '';

const displayValue = document.querySelector('.display');
const clearBtn = document.querySelector('.clear');
const equalBtn = document.querySelector('.equal');
const operatorBtn = document.querySelectorAll('.operator');
const numberBtn = document.querySelectorAll('.number')

clearBtn.addEventListener('click', clearDisplay);
equalBtn.addEventListener('click', calculate);


numberBtn.forEach((button) => 
    button.addEventListener('click', () => appendNumber(button.textContent))
)

operatorBtn.forEach((button) => 
    button.addEventListener('click', () => setOperator(button.textContent)) 
)

function appendNumber(number) {
    displayValue.textContent += number;
}

function setOperator(operator) {
    // if (currentOperator !== null) calculate();
    firstOperand = displayValue.textContent;
    currentOperator = operator;
    displayValue.textContent = '';
}

function calculate() {
    secondOperand = displayValue.textContent;
    displayValue.textContent = operate(
        currentOperator, firstOperand, secondOperand).toPrecision(10);
}

function clearDisplay() {
    firstOperand = '';
    secondOperand = '';
    currentOperator = null;
    displayValue.textContent = '';
}

// OPERATEORS //
const addition = function(a, b) {
    return a + b;
};
const subtraction = function(a, b) {
    return a - b;
};
const multiplication = function(a, b) {
    return a * b;
};
const division = function(a, b) {
    return a / b;
};

const operate = function(operator, a, b) {
    a = +a;
    b = +b;

    switch (operator) {
        case '+':
            return addition(a, b);
        case '-':
            return subtraction(a, b);
        case 'x':
            return multiplication(a, b);
        case '÷':
            if (b === 0) {
                return alert("Cannot divide by 0!");
            } else {
                return division(a, b);
            }
    }
};