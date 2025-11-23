const API_KEY = '596456a623d76b2aa059f51a494d883f';
const API_BASE = 'https://api.openweathermap.org/data/2.5';

const cityInput = document.getElementById('city-input');
const searchBtn = document.getElementById('search-btn');
const currentLocationBtn = document.getElementById('current-location-btn');
const loading = document.getElementById('loading');
const error = document.getElementById('error');
const errorMessage = document.getElementById('error-message');
const weatherInfo = document.getElementById('weather-info');
const recentSearches = document.getElementById('recent-searches');
const recentList = document.getElementById('recent-list');

let recentCities = JSON.parse(localStorage.getItem('recent-cities')) || [];

displayRecentSearches();

searchBtn.addEventListener('click', () => {
    const city = cityInput.value.trim();
    if (city) {
        getWeatherByCity(city);
    }
});

cityInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        const city = cityInput.value.trim();
        if (city) {
            getWeatherByCity(city);
        }
    }
});

currentLocationBtn.addEventListener('click', () => {
    if (navigator.geolocation) {
        showLoading();
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const lat = position.coords.latitude;
                const lon = position.coords.longitude;
                getWeatherByCoords(lat, lon);
            },
            (err) => {
                hideLoading();
                showError('Unable to get your location. Please enable location services.');
            }
        );
    } else {
        showError('Geolocation is not supported by your browser.');
    }
});

async function getWeatherByCity(city) {
    showLoading();
    
    try {
        const currentResponse = await fetch(
            `${API_BASE}/weather?q=${city}&units=metric&appid=${API_KEY}`
        );
        
        if (!currentResponse.ok) {
            throw new Error('City not found');
        }
        
        const currentData = await currentResponse.json();
        
        const forecastResponse = await fetch(
            `${API_BASE}/forecast?q=${city}&units=metric&appid=${API_KEY}`
        );
        
        const forecastData = await forecastResponse.json();
        
        displayWeather(currentData, forecastData);
        
        saveRecentCity(city);
        
        cityInput.value = '';
        
    } catch (err) {
        hideLoading();
        showError(err.message || 'Failed to fetch weather data. Please try again.');
    }
}

async function getWeatherByCoords(lat, lon) {
    try {
        const currentResponse = await fetch(
            `${API_BASE}/weather?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`
        );
        
        const currentData = await currentResponse.json();
        
        const forecastResponse = await fetch(
            `${API_BASE}/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`
        );
        
        const forecastData = await forecastResponse.json();
        
        displayWeather(currentData, forecastData);
        
    } catch (err) {
        hideLoading();
        showError('Failed to fetch weather data. Please try again.');
    }
}

function displayWeather(current, forecast) {
    hideLoading();
    hideError();
    
    document.getElementById('city-name').textContent = current.name;
    document.getElementById('country').textContent = current.sys.country;
    
    document.getElementById('temp').textContent = `${Math.round(current.main.temp)}°C`;
    document.getElementById('feels-like').textContent = 
        `Feels like ${Math.round(current.main.feels_like)}°C`;
    
    const iconCode = current.weather[0].icon;
    document.getElementById('weather-icon').src = 
        `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
    document.getElementById('description').textContent = current.weather[0].description;
    
    document.getElementById('humidity').textContent = `${current.main.humidity}%`;
    document.getElementById('wind-speed').textContent = `${current.wind.speed} m/s`;
    document.getElementById('pressure').textContent = `${current.main.pressure} hPa`;
    document.getElementById('visibility').textContent = `${(current.visibility / 1000).toFixed(1)} km`;
    
    displayForecast(forecast);
    
    weatherInfo.classList.remove('hidden');
}

function displayForecast(data) {
    const forecastContainer = document.getElementById('forecast-container');
    forecastContainer.innerHTML = '';
    
    const dailyForecasts = data.list.filter(item => 
        item.dt_txt.includes('12:00:00')
    );
    
    dailyForecasts.slice(0, 5).forEach(item => {
        const date = new Date(item.dt * 1000);
        const dayName = date.toLocaleDateString('en-US', { weekday: 'short' });
        
        const card = document.createElement('div');
        card.className = 'forecast-card';
        card.innerHTML = `
            <div class="day">${dayName}</div>
            <img src="https://openweathermap.org/img/wn/${item.weather[0].icon}.png" alt="Weather">
            <div class="temp">${Math.round(item.main.temp)}°C</div>
            <div class="desc">${item.weather[0].description}</div>
        `;
        
        forecastContainer.appendChild(card);
    });
}

function saveRecentCity(city) {
    recentCities = recentCities.filter(c => c.toLowerCase() !== city.toLowerCase());
    
    recentCities.unshift(city);
    
    recentCities = recentCities.slice(0, 5);
    
    localStorage.setItem('recent-cities', JSON.stringify(recentCities));
    
    displayRecentSearches();
}

function displayRecentSearches() {
    if (recentCities.length === 0) {
        recentSearches.classList.add('hidden');
        return;
    }
    
    recentSearches.classList.remove('hidden');
    recentList.innerHTML = '';
    
    recentCities.forEach(city => {
        const item = document.createElement('span');
        item.className = 'recent-item';
        item.textContent = city;
        item.addEventListener('click', () => getWeatherByCity(city));
        recentList.appendChild(item);
    });
}

function showLoading() {
    loading.classList.remove('hidden');
    error.classList.add('hidden');
    weatherInfo.classList.add('hidden');
}

function hideLoading() {
    loading.classList.add('hidden');
}

function showError(message) {
    error.classList.remove('hidden');
    errorMessage.textContent = message;
    weatherInfo.classList.add('hidden');
}

function hideError() {
    error.classList.add('hidden');
}