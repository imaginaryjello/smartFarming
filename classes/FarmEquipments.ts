class FarmEquipment {
  equipmentType: string;
  location: string;
  status: string;
  usageHours: number;

  constructor(
    equipmentType: string,
    location: string,
    status: string,
    usageHours: number
  ) {
    this.equipmentType = equipmentType;
    this.location = location;
    this.status = status;
    this.usageHours = usageHours;
  }

  performTask(task: string) {
    // Logic to perform a specific task
  }

  maintenanceCheck() {
    // Logic to check if the equipment needs maintenance
  }
}
