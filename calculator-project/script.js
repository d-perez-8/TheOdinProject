let currentOperator = null;
let firstOperand = '';
let secondOperand = '';

const btns = document.querySelectorAll('button');
const displayValue = document.querySelector('.display');
const clearBtn = document.querySelector('.clear');
const addBtn = document.querySelector('.addition');
const subtractBtn = document.querySelector('.subtraction');
const multiplyBtn = document.querySelector('.multiplication');
const divideBtn = document.querySelector('.division');
const equalBtn = document.querySelector('.equal');
const operatorBtn = document.querySelectorAll('.operator');

clearBtn.addEventListener('click', clearDisplay);
// equalBtn.addEventListener('click', operate);

btns.forEach(btn => {
    btn.addEventListener('click', e => {
        firstOperand += btn.value;
        displayValue.innerHTML = firstOperand;
        if (btn == operatorBtn) {
            secondOperand += btn.value;
            displayValue.innerHTML = secondOperand
        } else if (btn == equalBtn) {
            operate;
        }
    })
});

function clearDisplay() {
    firstOperand = '';
    secondOperand = '';
    currentOperator = null;
    displayValue.innerHTML = firstOperand;
}

// OPERATEORS //
const addition = function(a, b) {
    a + b;
};
const subtraction = function(a, b) {
    a - b;
};
const multiplication = function(a, b) {
    a * b;
};
const division = function(a, b) {
    a / b;
};

const operate = function(operator, a, b) {
    switch (operator) {
        case addBtn:
            return addition(a, b);
        case subtractBtn:
            return subtraction(a, b);
        case multiplyBtn:
            return subtraction(a, b);
        case divideBtn:
            if (b === 0) {
                return null
            } else {
                division([a, b])
            }
    }
};