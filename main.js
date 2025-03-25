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

clearButton.addEventListener('click', function () {
  number1 = '';
  number2 = '';
  operator = '';
  result = '';
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
});

numbers.forEach((number) => {
  number.addEventListener('click', (e) => {
    if (operator === '') {
      number1 += e.target.textContent;
    } else {
      number2 += e.target.textContent;
    }
  });
});

operators.forEach((op) => {
  op.addEventListener('click', (e) => {
    operator = e.target.textContent;
  });
});
