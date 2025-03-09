const timeEl = document.getElementById('time');
const dateEl = document.getElementById('date');
const currentWeatherItemsEl = document.getElementById('current-weather-items');
const timezone = document.getElementById('time-zone');
const countryEl = document.getElementById('country');
const weatherForecastEl = document.getElementById('weather-forecast');
const currentTempEl = document.getElementById('current-temp');
inputPart = document.querySelector(".input-part"),
infoTxt = inputPart.querySelector(".info-txt"),
inputField = inputPart.querySelector("input");

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

const API_KEY = ''; // Add your OpenWeatherMap API key here
const weatherForm = document.querySelector('.weather-search form');
const cityInput = document.querySelector('#city-input');
const weatherInfo = document.querySelector('.weather-info');
const forecastContainer = document.querySelector('.forecast-container');

inputField.addEventListener("keyup", e =>{
    // if user pressed enter btn and input value is not empty
    if(e.key == "Enter" && inputField.value != ""){
        fetchData(inputField.value);
    }
});

function fetchData(city){
    //infoTxt.innerText = "Getting weather details...";
    infoTxt.classList.add("pending");
    // getting api response and returning it with parsing into js obj and in another 
    // then function calling weatherDetails function with passing api result as an argument
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`).then(res => res.json()).then(data => {

        nextLevel(data);
       // showWeatherData(data);
        }).catch(() =>{
        infoTxt.innerText = "Something went wrong";
        infoTxt.classList.replace("pending", "error");
    });
}
function nextLevel(mydata)
{
    let {lat, lon } = mydata.coord;
    fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=hourly,minutely&units=metric&appid=${API_KEY}`).then(res => res.json()).then(data => {

        showWeatherData(data);
        })
}

setInterval(() => {
    const time = new Date();
    const month = time.getMonth();
    const date = time.getDate();
    const day = time.getDay();
    const hour = time.getHours();
    const hoursIn12HrFormat = hour >= 13 ? hour %12: hour
    const minutes = time.getMinutes();
    const ampm = hour >=12 ? 'PM' : 'AM'

    timeEl.innerHTML = (hoursIn12HrFormat < 10? '0'+hoursIn12HrFormat : hoursIn12HrFormat) + ':' + (minutes < 10? '0'+minutes: minutes)+ ' ' + `<span id="am-pm">${ampm}</span>`

    dateEl.innerHTML = days[day] + ', ' + date+ ' ' + months[month]

}, 1000);

getWeatherData()
function getWeatherData () {
    navigator.geolocation.getCurrentPosition((success) => {
        
        let {latitude, longitude } = success.coords;

        fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=hourly,minutely&units=metric&appid=${API_KEY}`).then(res => res.json()).then(data => {

        console.log(data)
        showWeatherData(data);
        })

    })
}

function showWeatherData (data){
    let {humidity, pressure, sunrise, sunset, wind_speed} = data.current;

    timezone.innerHTML = inputField.value;
    //countryEl.innerHTML = data.lat + 'N ' + data.lon+'E'

    currentWeatherItemsEl.innerHTML = 
    `<div class="weather-item">
        <div>Humidity</div>
        <div>${humidity}%</div>
    </div>
    <div class="weather-item">
        <div>Pressure</div>
        <div>${pressure}</div>
    </div>
    <div class="weather-item">
        <div>Wind Speed</div>
        <div>${wind_speed}</div>
    </div>

    <div class="weather-item">
        <div>Sunrise</div>
        <div>${window.moment(sunrise * 1000).format('HH:mm a')}</div>
    </div>
    <div class="weather-item">
        <div>Sunset</div>
        <div>${window.moment(sunset*1000).format('HH:mm a')}</div>
    </div>
    
    
    `;

    let otherDayForcast = ''
    data.daily.forEach((day, idx) => {
        if(idx == 0){
            currentTempEl.innerHTML = `
            <img src="http://openweathermap.org/img/wn//${day.weather[0].icon}@4x.png" alt="weather icon" class="w-icon">
            <div class="other">
                <div class="day">${window.moment(day.dt*1000).format('dddd')}</div>
                <div class="temp">Night - ${day.temp.night}&#176;C</div>
                <div class="temp">Day - ${day.temp.day}&#176;C</div>
            </div>
            
            `
        }else{
            otherDayForcast += `
            <div class="weather-forecast-item">
                <div class="day">${window.moment(day.dt*1000).format('ddd')}</div>
                <img src="http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png" alt="weather icon" class="w-icon">
                <div class="temp">Night - ${day.temp.night}&#176;C</div>
                <div class="temp">Day - ${day.temp.day}&#176;C</div>
            </div>
            
            `
        }
    })


    weatherForecastEl.innerHTML = otherDayForcast;
}

weatherForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const city = cityInput.value.trim();
    if (!city) return;

    try {
        const weatherData = await getWeatherData(city);
        const forecastData = await getForecastData(city);
        displayWeatherInfo(weatherData);
        displayForecast(forecastData);
        updateFarmingTips(weatherData.weather[0].main);
    } catch (error) {
        console.error('Error fetching weather data:', error);
        alert('Could not fetch weather data. Please try again.');
    }
});

async function getWeatherData(city) {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`);
    if (!response.ok) throw new Error('Weather data not found');
    return response.json();
}

async function getForecastData(city) {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${API_KEY}`);
    if (!response.ok) throw new Error('Forecast data not found');
    return response.json();
}

function displayWeatherInfo(data) {
    const date = new Date().toLocaleDateString('en-US', { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    });

    weatherInfo.innerHTML = `
        <div class="weather-main">
            <div class="city-name">
                <h2>${data.name}, ${data.sys.country}</h2>
                <p>${date}</p>
            </div>
            <div class="weather-details">
                <div class="temp">
                    ${Math.round(data.main.temp)}°C
                    <div class="weather">
                        <img src="http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="${data.weather[0].description}">
                        <span>${data.weather[0].description}</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="weather-details-grid">
            <div class="detail-item">
                <i class="fas fa-tint"></i>
                <span>Humidity</span>
                <span>${data.main.humidity}%</span>
            </div>
            <div class="detail-item">
                <i class="fas fa-wind"></i>
                <span>Wind Speed</span>
                <span>${data.wind.speed} m/s</span>
            </div>
            <div class="detail-item">
                <i class="fas fa-cloud"></i>
                <span>Cloudiness</span>
                <span>${data.clouds.all}%</span>
            </div>
            <div class="detail-item">
                <i class="fas fa-compress-alt"></i>
                <span>Pressure</span>
                <span>${data.main.pressure} hPa</span>
            </div>
        </div>
    `;
}

function displayForecast(data) {
    const dailyForecasts = data.list.filter(item => item.dt_txt.includes('12:00:00'));
    forecastContainer.innerHTML = dailyForecasts.slice(0, 5).map(day => `
        <div class="forecast-item">
            <div class="date">${new Date(day.dt * 1000).toLocaleDateString('en-US', { weekday: 'short' })}</div>
            <img src="http://openweathermap.org/img/wn/${day.weather[0].icon}.png" alt="${day.weather[0].description}">
            <div class="temp">${Math.round(day.main.temp)}°C</div>
            <div class="description">${day.weather[0].description}</div>
        </div>
    `).join('');
}

function updateFarmingTips(weatherCondition) {
    const tipsContainer = document.querySelector('.tips-container');
    const tips = {
        Rain: {
            icon: 'fa-cloud-rain',
            title: 'Rainy Weather Tips',
            content: 'Protect crops from excess water. Check drainage systems. Consider indoor activities.'
        },
        Clear: {
            icon: 'fa-sun',
            title: 'Sunny Weather Tips',
            content: 'Ensure adequate irrigation. Protect plants from intense sunlight. Best time for harvesting.'
        },
        Clouds: {
            icon: 'fa-cloud',
            title: 'Cloudy Weather Tips',
            content: 'Good conditions for planting. Monitor humidity levels. Perfect for outdoor work.'
        },
        default: {
            icon: 'fa-seedling',
            title: 'General Farming Tips',
            content: 'Monitor crop health. Check soil moisture. Plan activities according to forecast.'
        }
    };

    const tip = tips[weatherCondition] || tips.default;
    tipsContainer.innerHTML = `
        <div class="tip">
            <i class="fas ${tip.icon}"></i>
            <h3>${tip.title}</h3>
            <p>${tip.content}</p>
        </div>
    `;
}

// Initialize with a default city
document.addEventListener('DOMContentLoaded', () => {
    cityInput.value = 'Mumbai';
    weatherForm.dispatchEvent(new Event('submit'));
});