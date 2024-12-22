import Sensor from "./Sensor";
import { spyOn } from "jest-mock";

describe("Sensor Class", () => {
  let sensor: Sensor;

  beforeEach(() => {
    // Initialize the sensor before each test
    sensor = new Sensor("Temperature", "Living Room", {});
  });

  it("should create a Sensor instance", () => {
    expect(sensor).toBeTruthy();
    expect(sensor.sensorType).toBe("Temperature");
    expect(sensor.location).toBe("Living Room");
  });

  it("should collect data", () => {
    sensor.collectData();
    expect(sensor.data).toEqual({ temperature: 25, humidity: 60 }); // Expected simulated data
    expect(sensor.lastUpdated).toBeInstanceOf(Date);
  });
});
