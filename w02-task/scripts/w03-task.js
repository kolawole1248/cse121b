// Step 1: Addition Feature (Function Declaration)
function add(number1, number2) {
  return number1 + number2;
}

function addNumbers() {
  let addNumber1 = Number(document.querySelector('#add1').value) || 0;
  let addNumber2 = Number(document.querySelector('#add2').value) || 0;
  document.querySelector('#sum').value = add(addNumber1, addNumber2);
}

document.querySelector('#addNumbers').addEventListener('click', addNumbers);

// Step 2: Subtraction Feature (Function Expression)
const subtract = function (number1, number2) {
  return number1 - number2;
};

const subtractNumbers = function () {
  let subtractNumber1 = Number(document.querySelector('#subtract1').value) || 0;
  let subtractNumber2 = Number(document.querySelector('#subtract2').value) || 0;
  document.querySelector('#difference').value = subtract(subtractNumber1, subtractNumber2);
};

document.querySelector('#subtractNumbers').addEventListener('click', subtractNumbers);

// Step 3: Multiplication Feature (Arrow Functions)
const multiply = (number1, number2) => number1 * number2;

const multiplyNumbers = () => {
  let factor1 = Number(document.querySelector('#factor1').value) || 0;
  let factor2 = Number(document.querySelector('#factor2').value) || 0;
  document.querySelector('#product').value = multiply(factor1, factor2);
};

document.querySelector('#multiplyNumbers').addEventListener('click', multiplyNumbers);

// Step 4: Division Feature (Combination of Function Declaration Types)
function divide(number1, number2) {
  return number1 / number2;
}

const divideNumbers = () => {
  let dividend = Number(document.querySelector('#dividend').value) || 0;
  let divisor = Number(document.querySelector('#divisor').value) || 1;
  document.querySelector('#quotient').value = divide(dividend, divisor);
};

document.querySelector('#divideNumbers').addEventListener('click', divideNumbers);

// Step 5: Selection Structures
document.querySelector('#getTotal').addEventListener('click', function () {
  let subtotal = parseFloat(document.querySelector('#subtotal').value) || 0;
  let isMember = document.querySelector('#member').checked;
  let discount = isMember ? 0.2 : 0;
  let total = subtotal - subtotal * discount;
  document.querySelector('#total').textContent = `$${total.toFixed(2)}`;
});

// Step 6: Array Methods - Functional Programming
let numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

document.querySelector('#array').textContent = numbersArray.join(', ');

document.querySelector('#odds').textContent = numbersArray.filter(number => number % 2 !== 0).join(', ');

document.querySelector('#evens').textContent = numbersArray.filter(number => number % 2 === 0).join(', ');

document.querySelector('#sumOfArray').textContent = numbersArray.reduce((sum, number) => sum + number, 0);

document.querySelector('#multiplied').textContent = numbersArray.map(number => number * 2).join(', ');

document.querySelector('#sumOfMultiplied').textContent = numbersArray.map(number => number * 2).reduce((sum, number) => sum + number, 0);
