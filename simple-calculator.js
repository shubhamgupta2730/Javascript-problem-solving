//simple calculator: +, -, /, *

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b == 0) {
    return `Cannot divide by 0`;
  }
  return a / b;
}

function calculate() {
  const num1 = parseFloat(prompt("Enter first number: "));
  const num2 = parseFloat(prompt("Enter second number: "));
  const operation = prompt("Enter the operation to be performed: (+ - * /): ");
  let result;
  switch (operation) {
    case '+':
      result = add(num1, num2);
      break;
    case '-':
      result = subtract(num1, num2);
      break;
    case '*':
      result = multiply(num1, num2);
      break;
    case '/':
      result = divide(num1, num2);
      break;
    default:
      result = "Invalid operation";
      break;
  }
  console.log(`Result is: ${result}`);
}

calculate();

