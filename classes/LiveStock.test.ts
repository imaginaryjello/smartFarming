import { Livestock } from "./LiveStock";

describe("Livestock Class", () => {
  let livestock: Livestock;

  beforeEach(() => {
    livestock = new Livestock("L001", "Healthy", "Barn A", "Standard Diet");
  });

  it("should create a Livestock instance", () => {
    expect(livestock).toBeTruthy();
    expect(livestock.id).toBe("L001");
    expect(livestock.healthStatus).toBe("Healthy");
    expect(livestock.location).toBe("Barn A");
    expect(livestock.dietPlan).toBe("Standard Diet");
  });

  it("should update location based on RFID data", () => {
    const rfidData = { location: "Field B" };
    livestock.trackLocation(rfidData);
    expect(livestock.location).toBe("Field B");
  });

  it("should monitor health status", () => {
    const consoleSpy = jest.spyOn(console, "log"); // Spy on console.log
    livestock.monitorHealth();
    expect(consoleSpy).toHaveBeenCalledWith(
      "Monitoring health status of livestock L001"
    );
  });

  it("should feed according to the diet plan", () => {
    const consoleSpy = jest.spyOn(console, "log"); // Spy on console.log
    livestock.feed();
    expect(consoleSpy).toHaveBeenCalledWith(
      "Feeding livestock L001 with diet plan: Standard Diet"
    );
  });
});
