class Sensor {
  sensorType: string;
  location: string;
  data: any;
  lastUpdated: Date;

  constructor(sensorType: string, location: string, data: any) {
    this.sensorType = sensorType;
    this.location = location;
    this.data = data;
    this.lastUpdated = new Date();
  }

  collectData() {
    // Logic to collect data from the sensor
    this.data = {}; // Sample placeholder
    this.lastUpdated = new Date();
  }

  sendData() {
    //testing
    //New line was added
    // Logic to send sensor data to the relevant system
  }
}
