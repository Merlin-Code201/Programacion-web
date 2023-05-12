const calculateBtn = document.querySelector('#calculate-btn');
const resultDiv = document.querySelector('#result');

calculateBtn.addEventListener('click', () => {
  const num1 = parseInt(document.querySelector('#num1').value);
  const num2 = parseInt(document.querySelector('#num2').value);
  const operator = document.querySelector('#operator').value;
  let result;
  if (operator === '+') {
    result = num1 + num2;
  } else if (operator === '-') {
    result = num1 - num2;
  } else if (operator === '*') {
    result = num1 * num2;
  } else if (operator === '/') {
    result = num1 / num2;
  }
  resultDiv.innerHTML = `El resultado es: ${result}`;
});
