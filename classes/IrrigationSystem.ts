class IrrigationSystem {
  zone: string;
  waterUsage: number;
  schedule: Date;
  moistureLevel: number;

  constructor(zone: string, waterUsage: number, moistureLevel: number) {
    this.zone = zone;
    this.waterUsage = waterUsage;
    this.moistureLevel = moistureLevel;
    this.schedule = new Date();
  }

  startIrrigation() {
    console.log(`Irrigation started in zone: ${this.zone}`);
  }

  adjustWatering(weatherData: any) {
    if (weatherData.forecast === "rainy") {
      console.log(
        `Watering schedule adjusted in zone: ${this.zone} due to forecast: ${weatherData.forecast}`
      );
    } else {
      console.log(`No adjustments needed for zone: ${this.zone}`);
    }
  }
}

export default IrrigationSystem;
