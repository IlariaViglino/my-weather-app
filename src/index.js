//change background
function changeBackground(event) {
  event.preventDefault();
  let body = document.querySelector("body");
  body.classList.add("city-background");
}
let submit = document.querySelector("#submit-button");
submit.addEventListener("submit", changeBackground);

//API
function displayTemp(response) {
  let temp = document.querySelector(".current-temperature-value");
  temp.innerHTML = Math.round(response.data.temperature.current);
}
function displayDescription(response) {
  let descriptionElement = document.querySelector(".description");
  descriptionElement.innerHTML = response.data.condition.description;
}
function displayHumidity(response) {
  let humidityElement = document.querySelector(".humidity");
  humidityElement.innerHTML = response.data.temperature.humidity;
}
function displayWind(response) {
  let windElement = document.querySelector(".wind");
  windElement.innerHTML = Math.round(response.data.wind.speed);
}
function displayIcon(response) {
  let emojiElement = document.querySelector(".current-temperature-icon");
  let url = response.data.condition.icon_url;
  emojiElement.innerHTML = `<img src=${url} width="80">`;
}
function apiCity(city) {
  let key = "do37btb04e66032f8eb1ab0493255777";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${key}&units=metric`;
  axios.get(apiUrl).then(displayTemp);
  axios.get(apiUrl).then(displayDescription);
  axios.get(apiUrl).then(displayHumidity);
  axios.get(apiUrl).then(displayWind);
  axios.get(apiUrl).then(displayIcon);
}

//humidity

//wind

//icon

//Search engine
function capitalizeFirstLetter(string) {
  //string = string.replaceAll(" ", "");
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
  apiCity(input);
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
