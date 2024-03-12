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

let enterCity = document.querySelector("#enter-city");
function capitalizeFirstLetter(string) {
  string = string.replaceAll(" ", "");
  let firstLetter = string.charAt(0);
  firstLetter = firstLetter.toUpperCase();
  let remainder = string.slice(1).toLowerCase();
  return firstLetter + remainder;
}
function changeCity(event) {
  event.preventDefault();
  let city = document.querySelector(".current-city");
  let cityInput = document.querySelector("#search-input");
  cityInput = capitalizeFirstLetter(cityInput.value);
  city.innerHTML = cityInput;
}
enterCity.addEventListener("submit", changeCity);
