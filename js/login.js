const users = [{ username: "aya", password: "aya", accounts: [0, 1] }];

const admins = [{ username: "atti", password: "atti123" }];

const bankers = [{ username: "banker", password: "banker123" }];

// Toggle the navbar collapse on mobile devices
function toggleNavbar() {
  const navbar = document.getElementById("navbarNav");
  navbar.classList.toggle("show");
}

// Select the login form and inputs
const loginForm = document.getElementById("login-form");
const loginUsernameInput = document.querySelector("#login-username");
const loginPasswordInput = document.querySelector("#login-password");

// Handle login form submission
loginForm.addEventListener("submit", function (event) {
  console.log("entered form submit");
  event.preventDefault(); // prevent the form from being submitted

  const username = loginUsernameInput.value;
  const password = loginPasswordInput.value;

  // Call the authentication function to check the credentials
  let type = authenticateLogin(username, password);
  console.log(type);

  if (type == 1) window.location.href = "homepage.html";
  else {
    if (type == 2) window.location.replace("adminhomepage.html");
    else {
      if (type == 3) window.location.replace("bankershomepage.html");
    }
  }
});

// Authentication function for login
function authenticateLogin(username, password) {
  console.log(username, password);
  // Check if the credentials are valid, for example, by sending a request to a back-end server

  let flag = false;

  users.forEach((element) => {
    console.log(element.username, element.password);
    if (element.username == username) {
      if (element.password == password) {
        flag = true;
        return;
      }
      alert("Incorrect password.");
      return -1;
    }
  });

  if (flag) return 1;

  admins.forEach((element) => {
    if (element.username == username) {
      if (element.password == password) {
        flag = true;
        return;
      }
      alert("Incorrect password.");
      return -1;
    }
  });

  if (flag) return 2;

  bankers.forEach((element) => {
    if (element.username == username) {
      if (element.password == password) {
        flag = true;
        return;
      }
      alert("Incorrect password.");
      return -1;
    }
  });

  if (flag) return 3;

  // If the credentials areinvalid:
  alert("Invalid username");
  return -1;
}
