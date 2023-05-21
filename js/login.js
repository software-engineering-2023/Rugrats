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
  .money {
    content: url("https://w7.pngwing.com/pngs/251/257/png-transparent-ancient-egypt-egyptian-pound-bi-metallic-coin-egyptian-culture-medal-egypt-world.png");
    position: absolute;
    width: 100px;
    height: 100px;
    background: white;
    border-radius: 50%;
  }
  .money:nth-child(1) {
    opacity: 0.6064;
    transform: translate(56.5936vw, -10px) scale(0.1606);
    animation: fall-1 22s -16s linear infinite;
  }
  @keyframes fall-1 {
    34.585% {
      transform: translate(57.9903vw, 34.585vh) scale(0.1606);
    }
    to {
      transform: translate(57.29195vw, 100vh) scale(0.1606);
    }
  }
  .money:nth-child(2) {
    opacity: 0.0623;
    transform: translate(38.6106vw, -10px) scale(0.3982);
    animation: fall-2 17s -21s linear infinite;
  }
  @keyframes fall-2 {
    70.443% {
      transform: translate(37.0175vw, 70.443vh) scale(0.3982);
    }
    to {
      transform: translate(37.81405vw, 100vh) scale(0.3982);
    }
  }
  .money:nth-child(3) {
    opacity: 0.7242;
    transform: translate(18.1453vw, -10px) scale(0.9984);
    animation: fall-3 10s -24s linear infinite;
  }
  @keyframes fall-3 {
    71.78% {
      transform: translate(22.1161vw, 71.78vh) scale(0.9984);
    }
    to {
      transform: translate(20.1307vw, 100vh) scale(0.9984);
    }
  }
  .money:nth-child(4) {
    opacity: 0.6578;
    transform: translate(78.6562vw, -10px) scale(0.6578);
    animation: fall-4 20s -28s linear infinite;
  }
  @keyframes fall-4 {
    60.825% {
      transform: translate(78.6562vw, 60.825vh) scale(0.6578);
    }
    to {
      transform: translate(78.6562vw, 100vh) scale(0.6578);
    }
  }
  .money:nth-child(5) {
    opacity: 0.6578;
    transform: translate(78.6562vw, -10px) scale(0.6578);
    animation: fall-5 20s -28s linear infinite;
  }
  @keyframes fall-5 {
    60.825% {
      transform: translate(78.6562vw, 60.825vh) scale(0.6578);
    }
    to {
      transform: translate(78.6562vw, 100vh) scale(0.6578);
    }
  }
  .money:nth-child(6) {
    opacity: 0.6578;
    transform: translate(78.6562vw, -10px) scale(0.6578);
    animation: fall-6 20s -28s linear infinite;
  }
  @keyframes fall-6 {
    60.825% {
      transform: translate(78.6562vw, 60.825vh) scale(0.6578);
    }
    to {
      transform: translate(78.6562vw, 100vh) scale(0.6578);
    }
  }
  .money:nth-child(7) {
    opacity: 0.6578;
    transform: translate(78.6562vw, -10px) scale(0.6578);
    animation: fall-7 20s -28s linear infinite;
  }
  @keyframes fall-7 {
    60.825% {
      transform: translate(78.6562vw, 60.825vh) scale(0.6578);
    }
    to {
      transform: translate(78.6562vw, 100vh) scale(0.6578);
    }
  
}
}
