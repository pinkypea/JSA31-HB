const apiKey = "1e9148c51058e8ca85a13584b4cbd6d5";

document.getElementById('getWeather').addEventListener('click', () => {
  const city = document.getElementById('city').value;
  if (city) {
    getWeatherByCity(city);
  } else {
    alert('Please enter a city name.');
  }
});

document.getElementById('getLocationWeather').addEventListener('click', () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;
      getWeatherByLocation(latitude, longitude);
    }, () => {
      alert('Unable to retrieve your location.');
    });
  } else {
    alert('Geolocation is not supported by your browser.');
  }
});

function getWeatherByCity(city) {
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
    .then(response => response.json())
    .then(data => displayWeather(data))
    .catch(error => console.error('Error fetching weather data:', error));
}

function getWeatherByLocation(lat, lon) {
  fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`)
    .then(response => response.json())
    .then(data => displayWeather(data))
    .catch(error => console.error('Error fetching weather data:', error));
}

function displayWeather(data) {
  if (data.cod === 200) {
    document.getElementById('weatherInfo').innerHTML = `
      <h2>${data.name}</h2>
      <p>Temperature: ${data.main.temp}°C</p>
      <p>Weather: ${data.weather[0].description}</p>
    `;
  } else {
    document.getElementById('weatherInfo').innerHTML = `<p>${data.message}</p>`;
  }
}
