let display = document.getElementById('display');
    let currentNumber = '';
    let currentOperator = '';
    let result = 0;

    function appendNumber(number) {
      currentNumber += number;
      display.innerHTML = currentNumber;
    }

    function appendOperator(operator) {
      if (currentOperator) {
        calculate();
      }
      currentOperator = operator;
      result = parseFloat(currentNumber);
      currentNumber = '';
    }

    function appendDecimal(decimal) {
      if (!currentNumber.includes(decimal)) {
        currentNumber += decimal;
        display.innerHTML = currentNumber;
      }
    }

    function calculate() {
      if (!currentOperator || !currentNumber) {
        return;
      }
      let number = parseFloat(currentNumber);
      switch (currentOperator) {
        case '+':
          result += number;
          break;
        case '-':
          result -= number;
          break;
        case '*':
          result *= number;
          break;
        case '/':
          result /= number;
          break;
      }
      currentNumber = '';
      currentOperator = '';
      display.innerHTML = result;
    }

    function clearDisplay() {
      currentNumber = '';
      currentOperator = '';
      result = 0;
      display.innerHTML = result;
    }