//Default city

let key = "do37btb04e66032f8eb1ab0493255777";
let apiUrlCurrent = `https://api.shecodes.io/weather/v1/current?query=lausanne&key=${key}&units=metric`;
axios.get(apiUrlCurrent).then(displayTemp);
axios.get(apiUrlCurrent).then(displayDescription);
axios.get(apiUrlCurrent).then(displayHumidity);
axios.get(apiUrlCurrent).then(displayWind);
axios.get(apiUrlCurrent).then(displayIcon);
let key2 = "do37btb04e66032f8eb1ab0493255777";
let apiUrlForecast = `https://api.shecodes.io/weather/v1/forecast?query=lausanne&key=${key2}&units=metric`;
axios.get(apiUrlForecast).then(displayForecast);

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
function minutesFormat(minutes) {
  if (minutes < 10) {
    return `0${minutes}`;
  } else {
    return minutes;
  }
}
let minutes = minutesFormat(now.getMinutes());
date.innerHTML = `${day} ${now.getHours()}:${minutes}`;

//forecast

function formatDay(timestamp) {
  let date = new Date(timestamp * 1000);
  let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  let day = days[date.getDay()];
  return day;
}

function displayForecast(response) {
  let forecast = document.querySelector("#forecast");
  let forecastHtml = "";

  response.data.daily.forEach(function (day, index) {
    if (index < 5) {
      forecastHtml =
        forecastHtml +
        `<div class="weather-forecast-day">
          <div class="weather-forecast-date">${formatDay(day.time)}</div>
          <div class="weather-forecast-icon">
            <img
              src=${day.condition.icon_url}
              width="60"
            />
          </div>
          <div class="weather-forecast-temperatures">
            <div class="weather-forecast-temperature">
              <strong>${Math.round(day.temperature.maximum)}º</strong>
            </div>
            <div class="weather-forecast-temperature">${Math.round(
              day.temperature.minimum
            )}º</div>
          </div>
        </div>`;
    }
  });
  forecast.innerHTML = forecastHtml;
}

function forecastCity(city) {
  let key = "do37btb04e66032f8eb1ab0493255777";
  let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${key}&units=metric`;
  axios.get(apiUrl).then(displayForecast);
}

function changeCity(event) {
  event.preventDefault();
  let input = document.querySelector("#search-input");
  input = capitalizeFirstLetter(input.value);
  document.querySelector(".current-city").innerHTML = input;
  apiCity(input);
  forecastCity(input);
}

let searchForm = document.querySelector(".enter-city-form");
searchForm.addEventListener("submit", changeCity);
