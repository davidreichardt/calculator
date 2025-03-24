let number1 = 0,
  number2 = 0,
  operator = '';
const ADD = (number1, number2) => number1 + number2;
const SUBTRACT = (number1, number2) => number1 - number2;
const MULTIPLY = (number1, number2) => number1 * number2;
const DIVIDE = (number1, number2) => number1 / number2;

function operate(number1, number2, operator) {
  switch (operator) {
    case '+':
      ADD(number1, number2);
      break;
    case '-':
      SUBTRACT(number1, number2);
      break;
    case '*':
      MULTIPLY(number1, number2);
      break;
    case '/':
      DIVIDE(number1, number2);
  }
}
