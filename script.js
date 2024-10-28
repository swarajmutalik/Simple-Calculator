// It selects input field
const display = document.getElementById("display");

// It selects all the buttons in the calculator
const buttons = document.querySelectorAll("button");

// It is for storing the number that the user is currently typing
let currentInput = "";

// It stores the previous number that is entered before an operation
let previousInput = "";

// It is for storing the operator that is selected
let operator = "";

// This is a flag that is used to prevent multiple operators from being pressed consecutively without entering a second number
let isOperatorActive = false;

// It is a function that is used to update the calculator's display
// The value that is passed into this function is set as the value of the dsiplay element.
function updateDisplay(value) {
  display.value = value;
}

// It loops through each of the buttons in the nodelist.
// When a button is clicked, the callback function is triggered.
// buttonValue is used to store the text content of the button that was clicked.
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const buttonValue = button.textContent;
  });
});

// This logic is for when the clear button is clicked and the following things happen
// The display is cleared by calling the function - updateDisplay('')
if (button.id === "clear") {
  currentInput = "";
  previousInput = "";
  operator = "";
  isOperatorActive = false;
  updateDisplay("");
  return;
}
