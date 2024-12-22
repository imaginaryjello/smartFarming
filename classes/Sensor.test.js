"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Sensor_1 = __importDefault(require("./Sensor"));
describe("Sensor Class", () => {
    let sensor;
    beforeEach(() => {
        // Initialize the sensor before each test
        sensor = new Sensor_1.default("Temperature", "Living Room", {});
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
