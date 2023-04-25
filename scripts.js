// Select the form and result elements from the HTML using data attributes
const form = document.querySelector("[data-form]");
const result = document.querySelector("[data-result]");

/**
 * Check if given value is numeric and not an empty string
 * @param {*} value - value to check
 * @returns {boolean} Whether value is numeric and not an empty string
 */
function isNumeric(value) {
  return !isNaN(value) && value !== "";
}

/**
 *
 * 
 * 
 * @param {string} dividend - dividend input value
 * @param {string} divider - divider input value
 * @returns {string|null} error message if issue with inputs, null otherwise
 * @throws {Error} If inputs are not numeric
 */
function validateInputs(dividend, divider) {
  if (dividend === "" || divider === "") {
    return "Division not performed. Both values are required in inputs. Try again.";
  }
  if (!isNumeric(dividend) || !isNumeric(divider)) {
    throw new Error("Invalid input: not a number");
  }
  if (divider <= 0) {
    console.error("Invalid input: negative or zero divider");
    return "Division not performed. Invalid number provided. Try again.";
  }
  return null;
}

// Add submit event listener to the form element
form.addEventListener("submit", (event) => {
  // Prevent default form submission behavior
  event.preventDefault();
  // Extract input values from the form data using Object.fromEntries
  const entries = new FormData(event.target);
  const { dividend, divider } = Object.fromEntries(entries);

  try {
    // Validate the input values
    const errorMessage = validateInputs(dividend, divider);
    if (errorMessage) {
      // If there's an error, set the error message to the result element and returns
      result.innerText = errorMessage;
      return;
    }

    // If there are no errors, perform division operation and set result to result element
    const divisionResult = Math.floor(dividend / divider);
    result.innerText = divisionResult;
  } catch (error) {
    // If there's a critical error, log error to the console,replace body content with error message
    console.error(error);
    document.body.innerHTML =
      "Something critical went wrong. Please reload the page.";
  }
});
/* changes
When dividing numbers that result in a decimal, only the whole number part is shown.
When either or both inputs are missing, an appropriate message is displayed.
When an invalid number is provided, the division is not performed, a message is displayed,
 and an error is logged in the browser console.
When non-numeric inputs are provided, the program crashes with an error message and logs
 the error in the browser console.
*/

/* original
const form = document.querySelector("[data-form]");
const result = document.querySelector("[data-result]");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const entries = new FormData(event.target);
  const { dividend, divider } = Object.fromEntries(entries);
  result.innerText = dividend / divider;
});
*/

const x = NaN;

console.log(x === NaN); //false

console.log(Number.isNaN(x)); //true

console.log(x !== x); //true
