const API_KEY = "f2607caf98a57987d7cda1e1b4034769";

const onGeoOk = (position) => {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weather = document.querySelector("#weather-container span:first-child");
      const city = document.querySelector("#weather-container span:last-child");
      city.innerText = `${data.name}`;
      weather.innerText = `${data.weather[0].main} ${data.main.temp.toFixed(1)}°`;
    });
}

const onGeoError = () => {
  const lat = 40.714
  const lon = -74.006;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weather = document.querySelector("#weather-container span:first-child");
      const city = document.querySelector("#weather-container span:last-child");
      city.innerText = `${data.name}`;
      weather.innerText = `${data.weather[0].main} ${data.main.temp.toFixed(1)}°`;
    });
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);