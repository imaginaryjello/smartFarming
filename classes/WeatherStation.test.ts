import { WeatherStation } from "./WeatherStation";

describe("WeatherStation Class", () => {
  let station: WeatherStation;

  beforeEach(() => {
    station = new WeatherStation(25, 60, 15, "Sunny");
  });

  it("should create a WeatherStation instance", () => {
    expect(station).toBeTruthy();
    expect(station.temperature).toBe(25);
    expect(station.humidity).toBe(60);
    expect(station.windSpeed).toBe(15);
    expect(station.forecast).toBe("Sunny");
  });

  it("should collect weather data", () => {
    const consoleSpy = jest.spyOn(console, "log"); // Spy on console.log
    station.collectData();
    expect(consoleSpy).toHaveBeenCalledWith("Collecting weather data...");
  });

  it("should predict weather", () => {
    const consoleSpy = jest.spyOn(console, "log"); // Spy on console.log
    station.predictWeather();
    expect(consoleSpy).toHaveBeenCalledWith(
      "Predicting weather based on collected data..."
    );
  });
});
