const apiKey = "20abcd40ead44f67b14200455250801";
const apiURL = "https://api.weatherapi.com/v1/current.json";

async function checkWeather(city) {
    const response = await fetch(`${apiURL}?key=${apiKey}&q=${city}`);
    const data = await response.json();
    console.log(data);

    document.querySelector(".city").innerHTML = data.location.name;
    document.querySelector(".temp").innerHTML = `${data.current.temp_c}°C`;
    document.querySelector(".humidity").innerHTML = `${data.current.humidity}%`;
    document.querySelector(".wind").innerHTML = `${data.current.wind_kph} km/h`;

    const weatherCondition = data.current.condition.text.toLowerCase();
    let weatherIcon = "images/rain.png"; // Default icon

    if (weatherCondition.includes("cloud")) {
        weatherIcon = "images/cloudy.png";
    } else if (weatherCondition.includes("clear")) {
        weatherIcon = "images/clear.png";
    } else if (weatherCondition.includes("rain")) {
        weatherIcon = "images/rain.png";
    } else if (weatherCondition.includes("drizzle")) {
        weatherIcon = "images/drizzle.png";
    } else if (weatherCondition.includes("mist")) {
        weatherIcon = "images/mist.png";
    }

    document.querySelector(".weather-icon").src = weatherIcon;
    document.querySelector(".weather").style.display = "block";
}

document.querySelector("button").addEventListener("click", () => {
    const city = document.querySelector("input").value;
    checkWeather(city);
});

// Default city
checkWeather("Cairo");