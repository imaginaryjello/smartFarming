import { SupplyChainItem } from "./SupplyChainItem";
import { spyOn } from "jest-mock";

describe("SupplyChainItem Class", () => {
  let item: SupplyChainItem;

  beforeEach(() => {
    item = new SupplyChainItem(
      "Apple",
      100,
      new Date("2024-12-31"),
      "In Stock"
    );
  });

  it("should create a SupplyChainItem instance", () => {
    expect(item).toBeTruthy();
    expect(item.itemName).toBe("Apple");
    expect(item.quantity).toBe(100);
    expect(item.expirationDate).toEqual(new Date("2024-12-31"));
    expect(item.status).toBe("In Stock");
  });

  it("should update stock quantity", () => {
    const consoleSpy = jest.spyOn(console, "log"); // Spy on console.log
    item.updateStock(50);
    expect(item.quantity).toBe(50);
    expect(consoleSpy).toHaveBeenCalledWith("Updated stock for Apple: 50");
  });
});
