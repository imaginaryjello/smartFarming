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
    // Simulate data collection
    this.data = { temperature: 25, humidity: 60 }; // Example simulated data
    this.lastUpdated = new Date();
  }

  sendData() {
    // Logic to send sensor data to a remote system
    console.log(
      `Sending data from ${this.sensorType} at ${this.location}:`,
      this.data
    );
  }
}

export default Sensor;
