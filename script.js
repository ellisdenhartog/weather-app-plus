let now = new Date();
let todayTime = document.querySelector("#today-time");
let hours = now.getHours();
if (hours < 10) {
  hours = `0${hours}`;
}
let minutes = now.getMinutes();
if (minutes < 10) {
  minutes = `0${minutes}`;
}

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];

let day = days[now.getDay()];

todayTime.innerHTML = `${day} ${hours}:${minutes}`;

function search(event) {
  event.preventDefault();
  let searchCity = document.querySelector("#search-city");
  let city = document.querySelector("h5");
  if (searchCity.value) {
    city.innerHTML = `${searchCity.value}`;
  } else {
    city.innerHTML = null;
    alert("Please type a city");
  }
}

function showTemperature(response) {
  let cityTemp = (document.querySelector(
    "#today-temperature"
  ).innerHTML = Math.round(response.data.main.temp));

  let cityName = (document.querySelector("#today-city").innerHTML =
    response.data.name);
}

function handleSearch(event) {
  event.preventDefault();
  let units = "metric";
  let searchCity = document.querySelector("#input").value;
  let apiKey = "842b36d55cb28eba74a018029d56b04c";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${searchCity}&appid=${apiKey}&units=${units}`;
  axios.get(`${apiUrl}&appid=${apiKey}`).then(showTemperature);
}

let form = document.querySelector("#search-city");
form.addEventListener("submit", handleSearch);
