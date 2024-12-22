class SupplyChainItem {
  itemName: string;
  quantity: number;
  expirationDate: Date;
  status: string;

  constructor(
    itemName: string,
    quantity: number,
    expirationDate: Date,
    status: string
  ) {
    this.itemName = itemName;
    this.quantity = quantity;
    this.expirationDate = expirationDate;
    this.status = status;
  }

  updateStock(newQuantity: number) {
    this.quantity = newQuantity;
    console.log(`Updated stock for ${this.itemName}: ${this.quantity}`);
  }

  trackShipment() {
    console.log(`Tracking shipment for ${this.itemName}`);
    // Logic to track shipment
  }
}
export { SupplyChainItem };
