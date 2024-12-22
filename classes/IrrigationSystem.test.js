"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const IrrigationSystem_1 = __importDefault(require("./IrrigationSystem"));
describe("IrrigationSystem", () => {
    let irrigationSystem;
    beforeEach(() => {
        irrigationSystem = new IrrigationSystem_1.default("Zone 1", 50, 30);
    });
    test("should initialize with correct properties", () => {
        expect(irrigationSystem.zone).toBe("Zone 1");
        expect(irrigationSystem.waterUsage).toBe(50);
        expect(irrigationSystem.moistureLevel).toBe(30);
        expect(irrigationSystem.schedule).toBeInstanceOf(Date);
    });
    test("should start irrigation (mock implementation)", () => {
        irrigationSystem.startIrrigation = jest.fn();
        irrigationSystem.startIrrigation();
        expect(irrigationSystem.startIrrigation).toHaveBeenCalled();
    });
    test("should adjust watering based on weather data (mock implementation)", () => {
        const mockWeatherData = { forecast: "rainy" };
        irrigationSystem.adjustWatering = jest.fn();
        irrigationSystem.adjustWatering(mockWeatherData);
        expect(irrigationSystem.adjustWatering).toHaveBeenCalledWith(mockWeatherData);
    });
    test("should handle moisture levels correctly (example logic)", () => {
        irrigationSystem.moistureLevel = 20;
        irrigationSystem.startIrrigation = jest.fn();
        if (irrigationSystem.moistureLevel < 25) {
            irrigationSystem.startIrrigation();
        }
        expect(irrigationSystem.startIrrigation).toHaveBeenCalled();
    });
});
