let number1 = '',
  number2 = '',
  operator = '',
  result = '';
const numbers = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operator');
const clearButton = document.getElementById('clear');
const equal = document.getElementById('equal');
const decimal = document.getElementById('decimal');
const backspace = document.getElementById('backspace');
const negative = document.getElementById('negative');
const resultDisplay = document.getElementById('result');
const number1Display = document.getElementById('number1');
const number2Display = document.getElementById('number2');
const operatorDisplay = document.getElementById('operator');

function updateDisplay() {
  number1Display.textContent = number1;
  number2Display.textContent = number2;
  operatorDisplay.textContent = operator;
  resultDisplay.textContent = result;
}

clearButton.addEventListener('click', function () {
  number1 = '';
  number2 = '';
  operator = '';
  result = '';
  updateDisplay();
});

equal.addEventListener('click', function () {
  switch (operator) {
    case '+':
      result = parseInt(number1) + parseInt(number2);
      console.log(result);
      break;
    case '-':
      result = parseInt(number1) - parseInt(number2);
      break;
    case '*':
      result = parseInt(number1) * parseInt(number2);
      break;
    case '/':
      result = parseInt(number1) / parseInt(number2);
  }
  updateDisplay();
});

numbers.forEach((number) => {
  number.addEventListener('click', (e) => {
    if (operator === '') {
      number1 += e.target.textContent;
      result += e.target.textContent;
      updateDisplay();
    } else {
      number2 += e.target.textContent;
      result += e.target.textContent;
      updateDisplay();
    }
  });
});

operators.forEach((op) => {
  op.addEventListener('click', (e) => {
    operator = e.target.textContent;
      result += e.target.textContent;
      updateDisplay();
  });
});
