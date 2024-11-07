class Crop {
  type: string;
  growthStage: string;
  healthStatus: string;
  yields: number;

  constructor(
    // Constructor method is used to initialize the object
    incommingtype: string,
    growthStage: string,
    healthStatus: string,
    yields: number
  ) {
    this.type = incommingtype;
    this.growthStage = growthStage;
    this.healthStatus = healthStatus;
    this.yields = yields;
  }

  monitorHealth(sensorData: any) {
    // Logic to monitor health based on sensor data
  }

  predictYield() {
    // Logic to predict yield based on crop type, growth stage
  }

  harvest() {
    // Logic to harvest the crop and update the yield
    //Logic to update the growth stage
  }
}
