"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WeatherStation = void 0;
class WeatherStation {
    constructor(temperature, humidity, windSpeed, forecast) {
        this.temperature = temperature;
        this.humidity = humidity;
        this.windSpeed = windSpeed;
        this.forecast = forecast;
    }
    collectData() {
        console.log("Collecting weather data...");
        // Logic to collect weather data, e.g., fetching data from external API
    }
    predictWeather() {
        console.log("Predicting weather based on collected data...");
        // Logic to predict weather based on temperature, humidity, and wind speed
    }
}
exports.WeatherStation = WeatherStation;
