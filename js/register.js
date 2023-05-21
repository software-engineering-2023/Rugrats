import { users } from "./dummyData";



// Select the registration form and inputs
const regform = document.querySelector("#regform");
const firstname = document.querySelector("#Firstame");
const lastname = document.querySelector("#Lastname");
const password = document.querySelector("#password");
const email = document.querySelector("#Email");
const natID = document.querySelector("#natID");
const AccountNumber = document.querySelector("#AccountNumber");



// Handle registration form submission
registerForm.addEventListener("submit", function (event) {
  event.preventDefault(); // prevent the form from being submitted

  const username = firstname.value +"."+lastname.value;
  user = {username:username,password: password.value, accounts:[AccountNumber]}

  users.push(users);

  window.location.replace("index.html");
  alert("Successfully registered you banky coustomer!!!!" + username);



});


