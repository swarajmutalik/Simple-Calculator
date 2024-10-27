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
