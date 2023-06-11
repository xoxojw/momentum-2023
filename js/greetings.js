const loginForm = document.getElementById("login-form");
const loginInput = loginForm.querySelector("input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

const onLoginSubmit = (event) => {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  paintGreetings(username);
};

const date = new Date();
const hours = date.getHours();
console.log(hours);

const paintGreetings = (username) => {
  document.title = `${username}'s DashBoard`;
  if (5 <= hours && hours < 12) {
    greeting.innerText = `Good Morning, ${username}.`;
  } else if (12 <= hours && hours < 18) {
    greeting.innerText = `Good Afternoon, ${username}.`;
  } else if (18 <= hours && hours < 24) {
    greeting.innerText = `Good Evening, ${username}.`;
  } else {
    greeting.innerText = `Good Night, ${username}.`;
  }
  greeting.classList.remove(HIDDEN_CLASSNAME);
};

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  // show the form
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  // show the greetings
  paintGreetings(savedUsername);
}