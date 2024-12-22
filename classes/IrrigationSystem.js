"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class IrrigationSystem {
    constructor(zone, waterUsage, moistureLevel) {
        this.zone = zone;
        this.waterUsage = waterUsage;
        this.moistureLevel = moistureLevel;
        this.schedule = new Date();
    }
    startIrrigation() {
        console.log(`Irrigation started in zone: ${this.zone}`);
    }
    adjustWatering(weatherData) {
        if (weatherData.forecast === "rainy") {
            console.log(`Watering schedule adjusted in zone: ${this.zone} due to forecast: ${weatherData.forecast}`);
        }
        else {
            console.log(`No adjustments needed for zone: ${this.zone}`);
        }
    }
}
exports.default = IrrigationSystem;
