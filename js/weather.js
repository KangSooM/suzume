const API_KEY = "e5bd5ca3e742e76fa53ead7fcf094f5e";

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url).then(response => response.json()).then(data => {
        const city = document.querySelector("#geolocation span:first-child");
        const weather = document.querySelector("#geolocation span:last-child");
        city.innerText = `location : ${data.name}`;
        weather.innerText = `weather : ${data.weather[0].main} / ${data.main.temp} ℃`;
    });
}

function onGeoError() {
    alert("Can't find you. No weather for you");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);

