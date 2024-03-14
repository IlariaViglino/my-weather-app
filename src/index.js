function changeBackground(event) {
  event.preventDefault();
  let body = document.querySelector("body");
  body.classList.add("city-background");
}
let submit = document.querySelector("#submit-button");
submit.addEventListener("submit", changeBackground);

//Search engine
function capitalizeFirstLetter(string) {
  string = string.replaceAll(" ", "");
  let firstLetter = string.charAt(0);
  firstLetter = firstLetter.toUpperCase();
  let remainder = string.slice(1).toLowerCase();
  return firstLetter + remainder;
}
function changeCity(event) {
  event.preventDefault();
  let input = document.querySelector("#search-input");
  input = capitalizeFirstLetter(input.value);
  document.querySelector(".current-city").innerHTML = input;
}

let searchForm = document.querySelector(".enter-city-form");
searchForm.addEventListener("submit", changeCity);

//Date
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let now = new Date();
let day = days[now.getDay()];
let date = document.querySelector(".date");
date.innerHTML = `${day} ${now.getHours()}:${now.getMinutes()}`;
