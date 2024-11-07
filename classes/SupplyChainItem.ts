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
    // Logic to update stock
  }

  trackShipment() {
    // Logic to track item shipment
  }
}
