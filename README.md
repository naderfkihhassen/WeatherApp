# 🌤️ Weather App

A clean and simple weather application that displays current weather conditions and forecasts for any location. Get real-time weather data with a beautiful, responsive interface.

## ✨ Features

- 🌍 **Location Search** - Find weather for any city worldwide
- 🌡️ **Current Weather** - Temperature, conditions, and "feels like" temperature
- 📅 **5-Day Forecast** - Plan ahead with extended forecasts
- 💧 **Detailed Metrics** - Humidity, wind speed, pressure, and visibility
- 📍 **Geolocation** - Automatically detect your current location
- 🎨 **Dynamic Icons** - Weather-appropriate icons and backgrounds
- 📱 **Responsive Design** - Perfect on desktop, tablet, and mobile
- ⚡ **Fast & Lightweight** - Quick loading and minimal data usage

## 🚀 Live Demo

[**Try it here →**](https://naderfkihhassen.github.io/WeatherApp/)

## 🛠️ Technologies Used

- **HTML5** - Structure and semantic markup
- **CSS3** - Modern styling with animations
- **JavaScript (ES6+)** - API integration and DOM manipulation
- **Weather API** - Real-time weather data (OpenWeatherMap/WeatherAPI)

## 📋 Prerequisites

To run this project, you'll need:

- A Weather API key (free from [OpenWeatherMap](https://openweathermap.org/api) or [WeatherAPI](https://www.weatherapi.com/))
- A modern web browser
- Internet connection

## 💻 Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/naderfkihhassen/WeatherApp.git
   cd WeatherApp
   ```

2. **Get your API key**
   - Sign up at [OpenWeatherMap](https://openweathermap.org/api) or your preferred weather API
   - Copy your API key

3. **Add your API key**
   - Open `script.js`
   - Replace `YOUR_API_KEY` with your actual API key:
     ```javascript
     const API_KEY = 'your_api_key_here';
     ```

4. **Open the application**
   - Simply open `index.html` in your browser
   - Or use a local server:
     ```bash
     # Using Python
     python -m http.server 8000
     
     # Using Node.js
     npx serve
     ```

5. **Start checking the weather!**

## 🎯 How to Use

### Search by City
1. Type a city name in the search bar
2. Press Enter or click the Search button
3. View current weather and 5-day forecast

### Use Your Location
1. Click the "Use My Location" button
2. Allow location access when prompted
3. Weather for your area will display automatically

### Understanding the Display

**Current Weather Card:**
- Large temperature display
- Weather condition (sunny, cloudy, rainy, etc.)
- "Feels like" temperature
- City name and country

**Weather Details:**
- 💧 Humidity percentage
- 💨 Wind speed
- 🌡️ Atmospheric pressure
- 👁️ Visibility distance

**5-Day Forecast:**
- Daily high/low temperatures
- Weather conditions
- Day of the week

## 📁 Project Structure

```
WeatherApp/
├── index.html          # Main HTML file
├── style.css           # Styles and animations
├── script.js           # API calls and logic
├── assets/            
│   └── icons/         # Weather icons (if local)
└── README.md          # Documentation
```

## 🌟 Key Features Explained

### Real-Time Weather Data
The app fetches live weather data from a reliable API, ensuring you always get accurate, up-to-date information.

### Geolocation Support
Automatically detect user location using the browser's Geolocation API for quick local weather access.

### Responsive Design
Fluid layout that adapts to any screen size, from large desktop monitors to small mobile phones.

### Dynamic UI
Weather icons and background colors change based on current conditions (sunny, rainy, cloudy, etc.).

## 🔧 API Configuration

### Using OpenWeatherMap API

```javascript
const API_KEY = 'your_api_key';
const API_URL = 'https://api.openweathermap.org/data/2.5/weather';

// Fetch weather by city
fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`)
```

### Using WeatherAPI

```javascript
const API_KEY = 'your_api_key';
const API_URL = 'https://api.weatherapi.com/v1/current.json';

// Fetch weather by city
fetch(`${API_URL}?key=${API_KEY}&q=${city}`)
```

## 🎨 Customization

You can customize:
- **Temperature Units**: Toggle between Celsius and Fahrenheit
- **Color Scheme**: Edit CSS variables for different themes
- **Weather Icons**: Use your own icon set
- **Layout**: Modify the grid layout in CSS

## 📊 Weather Data Displayed

- **Temperature** - Current temperature in °C or °F
- **Feels Like** - What the temperature actually feels like
- **Conditions** - Description of current weather
- **Humidity** - Percentage of moisture in air
- **Wind Speed** - Wind velocity in km/h or mph
- **Pressure** - Atmospheric pressure in hPa
- **Visibility** - How far you can see in km
- **Forecast** - 5-day weather prediction

## 🌐 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Opera (latest)

## 🐛 Troubleshooting

**Weather not loading?**
- Check your internet connection
- Verify your API key is correct and active
- Ensure you haven't exceeded API rate limits

**Geolocation not working?**
- Check browser location permissions
- Ensure you're using HTTPS (required for geolocation)

**City not found?**
- Try using the full city name
- Include country code (e.g., "London, UK")

## 🚀 Future Enhancements

Potential features to add:
- [ ] Hourly forecast
- [ ] Weather alerts and warnings
- [ ] Multiple location favorites
- [ ] Historical weather data
- [ ] Weather maps
- [ ] Dark/Light theme toggle
- [ ] Share weather on social media
- [ ] Offline caching

## 🤝 Contributing

Contributions are welcome! To contribute:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/enhancement`)
3. Commit your changes (`git commit -am 'Add new feature'`)
4. Push to the branch (`git push origin feature/enhancement`)
5. Create a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Nader Fkih Hassen**

- GitHub: [@naderfkihhassen](https://github.com/naderfkihhassen)
- LinkedIn: [Nader Fkih Hassen](https://linkedin.com/in/nader-fkih-hassen)
- Portfolio: [naderfkihhassen.github.io/Portfolio](https://naderfkihhassen.github.io/Portfolio/)

## 🙏 Acknowledgments

- Weather data provided by OpenWeatherMap/WeatherAPI
- Icons from [Weather Icons](https://erikflowers.github.io/weather-icons/) (if you used them)

## 📧 Contact

Questions or feedback? Reach out at: naderfkihhassen@gmail.com

---

⭐️ If you found this project useful, please give it a star!
