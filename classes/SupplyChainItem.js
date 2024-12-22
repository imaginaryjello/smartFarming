"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SupplyChainItem = void 0;
class SupplyChainItem {
    constructor(itemName, quantity, expirationDate, status) {
        this.itemName = itemName;
        this.quantity = quantity;
        this.expirationDate = expirationDate;
        this.status = status;
    }
    updateStock(newQuantity) {
        this.quantity = newQuantity;
        console.log(`Updated stock for ${this.itemName}: ${this.quantity}`);
    }
    trackShipment() {
        console.log(`Tracking shipment for ${this.itemName}`);
        // Logic to track shipment
    }
}
exports.SupplyChainItem = SupplyChainItem;
