// slot.service.js
const SlotModel = require("../models/slot.model");

class SlotService {
  static getAllSlots(callback) {
    SlotModel.getAllSlots(callback);
  }

  static createSlot(newSlot, callback) {
    SlotModel.createSlot(newSlot, callback);
  }

  static getSlotById(slotId, callback) {
    SlotModel.getSlotById(slotId, callback);
  }

  static updateSlot(slotId, updatedSlot, callback) {
    SlotModel.updateSlot(slotId, updatedSlot, callback);
  }

  static deleteSlot(slotId, callback) {
    SlotModel.deleteSlot(slotId, callback);
  }
}

module.exports = SlotService;
