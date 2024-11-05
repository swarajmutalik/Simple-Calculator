// It is for selecting the display field of the calculator.
const display = document.getElementById("display");

// It selects all the buttons in the calculator.
const buttons = document.querySelectorAll("button");

// It is to store the number that the user is currently typing.
let currentInput = "";

// It is to store the previous number before an operation.
let previousInput = "";

// It is to store the operator that is selected by the user.
let operator = "";

// This flag ensures that multiple operators are not being entered before a second number.
let isOperatorActive = false; // Changed to false for consistent Boolean behavior

// This function updates the display of the calculator.
function updateDisplay(value) {
  display.value = value;
}

// It loops through every button and adds an event listener to each button. When the button is clicked, the callback function is triggered.
// The buttonValue is used to store the content of the button that was clicked.
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const buttonValue = button.textContent; // Fixed typo here

    // If the clear button is clicked, then the following things will happen:
    // The variables currentInput, previousInput, and operator are reset to empty strings.
    // The display is cleared by calling the updateDisplay('').
    if (button.id === "clear") {
      currentInput = "";
      previousInput = "";
      operator = "";
      isOperatorActive = false;
      updateDisplay("");
      return;
    }

    // If the equals button is clicked, then the following things will happen:
    // First, we will check if currentInput, previousInput, and operator are all set.
    // Then, we call the calculate function to perform the operation by passing in the required variables, and we update currentInput with the result.
    // Then, we reset operator and previousInput for a new calculation, update the display with the result, and set isOperatorActive to false so that the user can continue entering numbers.
    if (button.id === "equals") {
      if (previousInput !== "" && currentInput !== "" && operator !== "") {
        currentInput = calculate(previousInput, currentInput, operator);
        operator = "";
        previousInput = "";
        updateDisplay(currentInput);
        isOperatorActive = false;
      }
      return;
    }

    // If an operation button is clicked, the following will happen:
    // If currentInput is empty or if isOperatorActive is true, the function exits.
    // If there is an existing operator, it performs the last operation to get a result before setting the new operator.
    // The clicked operator is stored in the operator variable, and currentInput is cleared to prepare for the next number input.
    if (button.id === "op") {
      if (currentInput === "") return;
      if (isOperatorActive) return;

      if (operator !== "") {
        currentInput = calculate(previousInput, currentInput, operator);
        updateDisplay(currentInput);
      }
      operator = buttonValue; // Set the operator to the button's text
      previousInput = currentInput;
      currentInput = "";
      isOperatorActive = true;
      return;
    }

    // It checks if currentInput already has a decimal. If not, it adds a decimal point to currentInput, and updateDisplay(currentInput) ensures that the display reflects this addition.
    if (button.id === "decimal") {
      if (!currentInput.includes(".")) {
        currentInput += ".";
        updateDisplay(currentInput);
      }
      return;
    }

    // If the +/- button is clicked, currentInput is converted to a number, multiplied by -1, and converted back to a string.
    // The updateDisplay(currentInput) updates the display to reflect the sign change.
    if (button.id === "misc") {
      if (currentInput) {
        currentInput = (parseFloat(currentInput) * -1).toString();
        updateDisplay(currentInput);
      }
      return;
    }

    // It checks if a button clicked is a digit. If so, it appends the buttonValue to currentInput to form the full number
    // and sets isOperatorActive to false, allowing operators to be pressed after entering numbers.
    if (!isNaN(buttonValue)) {
      currentInput += buttonValue;
      updateDisplay(currentInput);
      isOperatorActive = false;
    }
  });
});

// This function performs the actual calculation based on the provided operator.
function calculate(num1, num2, operator) {
  const number1 = parseFloat(num1);
  const number2 = parseFloat(num2);

  switch (operator) {
    case "+":
      return (number1 + number2).toString();
    case "-":
      return (number1 - number2).toString();
    case "*":
      return (number1 * number2).toString();
    case "/":
      return number2 !== 0 ? (number1 / number2).toString() : "Error"; // Handle division by zero
    default:
      return num2;
  }
}
