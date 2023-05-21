import { users, admins, bankers } from "./dummyData";

// Toggle the navbar collapse on mobile devices
function toggleNavbar() {
  const navbar = document.getElementById("navbarNav");
  navbar.classList.toggle("show");
}

// Select the login form and inputs
const loginForm = document.querySelector("#login-form");
const loginUsernameInput = document.querySelector("#login-username");
const loginPasswordInput = document.querySelector("#login-password");

/*
// Select the registration form and inputs
const registerForm = document.querySelector("#register-form");
const registerUsernameInput = document.querySelector("#register-username");
const registerPasswordInput = document.querySelector("#register-password");
const registerConfirmPasswordInput = document.querySelector(
  "#register-confirm-password"
);
*/

// Handle login form submission
loginForm.addEventListener("submit", function (event) {
  event.preventDefault(); // prevent the form from being submitted

  const username = loginUsernameInput.value;
  const password = loginPasswordInput.value;

  // Call the authentication function to check the credentials
  type = authenticateLogin(username, password);

  if (type == 1) window.location.replace("home.html");
  else {
    if (type == 2) window.location.replace("adminHome.html");
    else {
      if (type == 3) window.location.replace("bankerHome.html");
    }
  }
});

/*
// Handle registration form submission
registerForm.addEventListener("submit", function (event) {
  event.preventDefault(); // prevent the form from being submitted

  const username = registerUsernameInput.value;
  const password = registerPasswordInput.value;
  const confirmPassword = registerConfirmPasswordInput.value;

  // Check if the password and confirm password fields match
  if (password === confirmPassword) {
    // Call the function to create and authenticate the new user account
    authenticateRegistration(username, password);
  } else {
    alert("Passwords do not match.");
  }
});

*/

// Authentication function for login
function authenticateLogin(username, password) {
  // Check if the credentials are valid, for example, by sending a request to a back-end server
  users.forEach((element) => {
    if (element.username == username) {
      if (element.password == password) {
        return 1;
      }
      alert("Incorrect password.");
      return -1;
    }
  });

  admins.forEach((element) => {
    if (element.username == username) {
      if (element.password == password) {
        return 2;
      }
      alert("Incorrect password.");
      return -1;
    }
  });

  bankers.forEach((element) => {
    if (element.username == username) {
      if (element.password == password) {
        return 3;
      }
      alert("Incorrect password.");
      return -1;
    }
  });

  // If the credentials areinvalid:
  alert("Invalid username");
  return -1;
}
