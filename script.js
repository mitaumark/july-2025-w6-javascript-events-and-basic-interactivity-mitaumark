// Part 1: Event Handling

// Show a message when the button is clicked
document.getElementById("clickMeBtn").addEventListener("click", function () {
  document.getElementById("clickMessage").textContent = "You clicked the me Hahaaa";
});

// Part 2: Interactive Elements

// Light/Dark mode toggle
document.getElementById("toggleThemeBtn").addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");
});

// Counter Game
let count = 0;
document.getElementById("incrementBtn").addEventListener("click", function () {
  count++;
  document.getElementById("counter").textContent = count;
});

// Part 3: Form Validation

// Form validation on submit
document.getElementById("signupForm").addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent form from submitting

  // Grab input values
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;

  // Error elements
  const nameError = document.getElementById("nameError");
  const emailError = document.getElementById("emailError");
  const passwordError = document.getElementById("passwordError");
  const successMsg = document.getElementById("formSuccess");

  // Reset messages
  nameError.textContent = "";
  emailError.textContent = "";
  passwordError.textContent = "";
  successMsg.textContent = "";

  // Validation flags
  let valid = true;

  // Name validation
  if (name.length < 2) {
    nameError.textContent = "Name must be at least 2 characters.";
    valid = false;
  }

  // Email validation (simple regex)
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    emailError.textContent = "Enter a valid email address.";
    valid = false;
  }

  // Password validation (min 6 characters, 1 number)
  const passwordRegex = /^(?=.*[0-9]).{6,}$/;
  if (!passwordRegex.test(password)) {
    passwordError.textContent = "Password must be at least 6 characters and include a number.";
    valid = false;
  }

  // If all valid, show success message
  if (valid) {
    successMsg.textContent = "✅ Form submitted successfully!";
  }
});
