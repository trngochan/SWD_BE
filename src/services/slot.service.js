// slot.service.js
const SlotModel = require("../models/slot.model");
const ClubMemSlot = require("../models/clubMemSlot.model");
const { response } = require("express");

class SlotService {
  static getAllSlots(callback) {
    SlotModel.getAllSlots(callback);
  }

  static getSlotJoined(idclummem, callback) {
    ClubMemSlot.getSlotJoinedIDByClubMember(idclummem, (response) => {
      if (response.status === "success") {
        SlotModel.getSlotJoined(response.result, callback);
      } else {
        callback(response);
      }
    });
  }

  static getSlotNotJoin(idclummem, callback) {
    ClubMemSlot.getSlotJoinedIDByClubMember(idclummem, (response) => {
      if (response.status === "success") {
        SlotModel.getSlotNotJoin(response.result, callback);
      } else {
        callback(response);
      }
    });
  }

  static createSlot(newSlot, callback) {
    SlotModel.createSlot(newSlot, callback);
  }

  static getSlotById(slotId, callback) {
    SlotModel.getSlotById(slotId, callback);
  }

  static getByIdClubMember(clubMemberId, callback) {
    SlotModel.getByIdClubMember(clubMemberId, callback);
  }

  static updateSlot(slotId, updatedSlot, callback) {
    SlotModel.updateSlot(slotId, updatedSlot, callback);
  }

  static deleteSlot(slotId, callback) {
    SlotModel.deleteSlot(slotId, callback);
  }

  static getByIdClub(clubId, callback) {
    SlotModel.getByIdClub(clubId, callback);
  }
}

module.exports = SlotService;
