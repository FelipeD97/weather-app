const apiKey = "88046bf7db800bafadd6f356173c3a84";

let lat = 33.906991;
let lon = -84.3686985;

// API URLs 
const dailyWeatherLink = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=imperial`;
const weeklyWeatherLink = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=imperial`;
const geocodeAPI = `http://api.openweathermap.org/geo/1.0/direct?q=Atlanta&limit=1&appid=${apiKey}`;

// Fetch URL Function 
const get = async(url) => {
    return fetch(url)
        .then((response) => response.json());
}

// Convert Location to Lat-Long Coordinates for Weather API

const convertLocation = async() => {
    let lat = 0
    let coordinates = get(geocodeAPI).then(data => {
        // console.log(data[0]);
        let latitude = data[0].lat;
        let longitude = data[0].lon;
        let coordinates = [latitude, longitude]
        return coordinates
    });
    coordinates.then(data => {console.log(data)})
};

convertLocation()

// console.log(convertLocation().latitude)

const todayWeather = document.querySelector("#weather-content");

// Get Current Day Weather 
const getWeather = () => {
    get(dailyWeatherLink).then(data => {
        console.log(data.main);
        let temperature = document.createElement("h3");
        temperature.innerText = data.main.temp;
        todayWeather.append(temperature);
    });
};

// getWeather();

// Get Weekly Forecast 
// const getWeeklyForecast = () => {
//     get(weeklyWeatherLink).then(data => {
//         console.log(data);
//     });
// };

// getWeeklyForecast();

const temperatures = {
    hot: [],
    warm: [],
    cool: [],
    cold: [],
    veryCold: []
}

const getOutfit = () => {

}