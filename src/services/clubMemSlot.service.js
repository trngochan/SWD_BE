// clubMemSlot.service.js
const ClubMemSlotModel = require("../models/clubMemSlot.model");

class ClubMemSlotService {
  static getAllClubMemSlots(callback) {
    ClubMemSlotModel.getAllClubMemSlots(callback);
  }

  static createClubMemSlot(newClubMemSlot, callback) {
    ClubMemSlotModel.createClubMemSlot(newClubMemSlot, callback);
  }

  static getClubMemSlotById(clubMemSlotId, callback) {
    ClubMemSlotModel.getClubMemSlotById(clubMemSlotId, callback);
  }

  static updateClubMemSlot(clubMemSlotId, updatedClubMemSlot, callback) {
    ClubMemSlotModel.updateClubMemSlot(clubMemSlotId, updatedClubMemSlot, callback);
  }

  static deleteClubMemSlot(clubMemSlotId, callback) {
    ClubMemSlotModel.deleteClubMemSlot(clubMemSlotId, callback);
  }
}

module.exports = ClubMemSlotService;
