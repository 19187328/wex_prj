const form = document.getElementById("signup-form");
const emailError = document.getElementById("email-error");
const passwordError = document.getElementById("password-error");
const confirmPasswordError = document.getElementById("confirm-password-error");

form.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent default form submission

  const userId = document.getElementById("user-id").value;
  const firstName = document.getElementById("first-name").value;
  const surname = document.getElementById("surname").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirm-password").value;

  let isValid = true;

  // Clear previous errors
  clearErrors();

  // User ID check (not done here for simplicity)

  // First Name check
  if (!firstName) {
    showError("first-name-error", "Please enter your first name.");
    isValid = false;
  }

  // Surname check
  if (!surname) {
    showError("surname-error", "Please enter your surname.");
    isValid = false;
  }
  // Email check
  const emailRegex = /^[\w.%+-]+@(?:[a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}$/;
  if (!emailRegex.test(email)) {
    showError(
      "email-error",
      "Please enter a valid email address (e.g., example@gmail.com or example@outlook.com)."
    );
    isValid = false;
  }

  // Password check
  if (password.length < 8) {
    showError("password-error", "Password must be at least 8 characters long.");
    isValid = false;
  }

  // Confirm password check
  if (password !== confirmPassword) {
    showError(
      "confirm-password-error",
      "Passwords do not match. Please try again."
    );
    isValid = false;
  }

  // Submit form if everything is valid
  if (isValid) {
    // Simulate form submission (replace with your actual form submission logic)
    alert("Form submitted successfully!");
  }
});

function showError(elementId, message) {
  document.getElementById(elementId).textContent = message;
}

function clearErrors() {
  emailError.textContent = "";
  passwordError.textContent = "";
  confirmPasswordError.textContent = "";
}
