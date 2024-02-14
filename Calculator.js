function calculate() {
    var number1 = parseFloat(document.getElementById('number1').value);
    var number2 = parseFloat(document.getElementById('number2').value);
    var operator = document.getElementById('operator').value;
    var answer = document.getElementById('answer');

    if (isNaN(number1) || isNaN(number2)) {
      answer.value = "Please enter valid numbers.";
      return;
    }

    switch (operator) {
      case '+':
        answer.value = number1 + number2;
        break;
      case '-':
        answer.value = number1 - number2;
        break;
      case '*':
        answer.value = number1 * number2;
        break;
      case '/':
        if (number2 === 0) {
          answer.value = "Cannot divide by zero.";
        } else {
          answer.value = number1 / number2;
        }
        break;
      default:
        answer.value = "Invalid operator.";
    }
  }

  document.querySelectorAll('input[type="number"], select').forEach(item => {
    item.addEventListener('change', () => {
      document.getElementById('answer').value = "";
    });
  });