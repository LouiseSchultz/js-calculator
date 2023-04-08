class Calculator {
  constructor(lastNumber, currentNumber) {
    this.lastNumber = lastNumber;
    this.currentNumber = currentNumber;
    this.clear(); //nicht ganz verstanden
  }
  clear() {
    this.currentNumberFunc = ''; 
    this.lastNumberFunc = ''; 
    this.operation = undefined; //nicht ganz verstanden
  }

  addNumber(number) {
      
    if ( number === "," && (this.currentNumberFunc.includes(",") || this.currentNumberFunc.length === 0)) {
    } 
      // if (this.currentNumberFunc === "0") {
      //   this.currentNumberFunc = number.toString();
      // 
       else {
        this.currentNumberFunc =
          this.currentNumberFunc.toString() + number.toString();
      }
  }

  chooseOperation(operation) {
    if (this.currentNumberFunc === '') return
    if (this.lastNumberFunc !== '') {
        this.calculate()
    }
    this.operation = operation
    this.lastNumberFunc = this.currentNumberFunc
    this.currentNumberFunc = ''
  }

  calculate() {
let calculation 
const prev = parseFloat(this.lastNumberFunc)
const current = parseFloat(this.currentNumberFunc)
if (isNaN(prev) || isNaN(current)) return
switch (this.operation) {
  case "+":
    calculation = prev + current;
    break;
  case "-":
    calculation = prev - current;
    break;
  case "*":
    calculation = prev * current;
    break;
  case "/":
    calculation = prev / current;
    break;
    default:
      return
}
this.currentNumberFunc = calculation // whats now shown as "the first number" is the result of the calculation
this.operation = undefined //?
this.lastNumberFunc = '' // there's no last number in this case 

  }

  updateDisplay() {
    this.currentNumber.innerText = this.currentNumberFunc;
      this.lastNumber.innerText = this.lastNumberFunc;

}
}

const numberButtons = document.querySelectorAll("[data-number]");
const operationsButtons = document.querySelectorAll("[data-operation]");
const equalsButton = document.querySelector("[data-equals]");
const clearButton = document.querySelector("[data-clear]");
const lastNumber = document.querySelector("[data-last-number]");
const currentNumber = document.querySelector("[data-current-number]");

const calculator = new Calculator(lastNumber, currentNumber);

numberButtons.forEach((button) => {
  button.addEventListener("click", () => {
    calculator.addNumber(button.innerText);
    calculator.updateDisplay();
  });
});

clearButton.addEventListener("click", () => {
  calculator.clear();
  calculator.updateDisplay();
});

operationsButtons.forEach((button) => {
  button.addEventListener("click", () => {
    calculator.chooseOperation(button.id);
    calculator.updateDisplay();
  });
});



equalsButton.addEventListener('click', () => {
    calculator.calculate()
    calculator.updateDisplay()
})
// wenn 0 als erstes genommen wird und danach neuer zahl soll 0= neuer zahl

//rundet automatisch auf? aber bei geteilt funktioniert es

//wenn was ausgerechtnet wurde und eine neue zahl eingetippt wird soll es von 0 anfangen.

// geteilt von 0 soll error und nicht infinety werden