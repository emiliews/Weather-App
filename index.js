let now = new Date();
let day = now.getDay();
let hour = now.getHours();
let minute = now.getMinutes();

function date() {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let currentDay = days[day];
  let currentHour = hour;
  let minutes = minute.toString();
  let currentMinute = minutes.padStart(2, "0");

  let weekday = document.querySelector("#day");
  let time = document.querySelector("#time");

  weekday.innerHTML = `${currentDay}`;
  time.innerHTML = `${currentHour}:${currentMinute}`;
}

date();

//let weather = {
//  paris: {
//    temp: 19.7,
//    humidity: 80
//  },
//  tokyo: {
//    temp: 17.3,
//    humidity: 50
//  },
//  lisbon: {
//    temp: 30.2,
//    humidity: 20
//  },
//  "san francisco": {
//    temp: 20.9,
//    humidity: 100
//  },
//  moscow: {
//    temp: -5,
//    humidity: 20
// }
//};

// let city = prompt("Enter a city");
// city = city.toLowerCase();
//if (weather[city] !== undefined) {
//  let temperature = weather[city].temp;
//  let humidity = weather[city].humidity;
//  let temperatureRound = Math.round(temperature);

//  alert(
//    `It is currently ${temperatureRound}°C in ${city} with a humidity of ${humidity}%`
//  );
//} else {
//  alert(
//    `Sorry we don't know the weather for this city, try going to https://www.google.com/search?q=weather+${city}`
//  );
//}

function showWeather(response) {
  document.querySelector("#city-header").innerHTML = response.data.name;
  document.querySelector("#temp").innerHTML = Math.round(
    response.data.main.temp
  );
  document.querySelector("#wind").innerHTML = Math.round(
    response.data.wind.speed
  );
  //document.querySelector("#precipitation").innerHTML = Math.round(response.data.rain.1h);
  document.querySelector("#maxTemp").innerHTML = Math.round(
    response.data.main.temp_max
  );
  document.querySelector("#minTemp").innerHTML = Math.round(
    response.data.main.temp_min
  );
}

function searchCity(city) {
  let apiKey = "7e2e99ff7bbaffece2246f5b3f04400c";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
  //let apiUrl = `https://pro.openweathermap.org/data/2.5/forecast/hourly?q=${city}&appid=${apiKey}`;
  axios.get(apiUrl).then(showWeather);
}

function submitCity(event) {
  event.preventDefault();
  let city = document.querySelector("#city-input").value;
  searchCity(city);
}

function searchLocation(position) {
  let apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(showWeather);
}

function getCurrentLocation(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(searchLocation);
}

let searchCityForm = document.querySelector("#search-form");
searchCityForm.addEventListener("submit", submitCity);

let currentLocationButton = document.querySelector("#currentButton");
currentLocationButton.addEventListener("click", getCurrentLocation);

searchCity("New York");

//function convertToFahrenheit(event) {
//  event.preventDefault();
//  let temperatureElement = document.querySelector("#temp");
//  temperatureElement.innerHTML = 71.5;
//}

// function convertToCelsius(event) {
//  event.preventDefault();
//  let temperatureElement = document.querySelector("#temp");
//  temperatureElement.innerHTML = 22;
//}

// let fahrenheitLink = document.querySelector("#fahrenheit-link");
// fahrenheitLink.addEventListener("click", convertToFahrenheit);

//let celsiusLink = document.querySelector("#celsius-link");
//celsiusLink.addEventListener("click", convertToCelsius);
