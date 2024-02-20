// club.service.js
const ClubModel = require("../models/club.model");

class ClubService {
  static getAllClubs(callback) {
    ClubModel.getAllClubs(callback);
  }

  static createClub(newClub, callback) {
    ClubModel.createClub(newClub, callback);
  }

  static getClubById(clubId, callback) {
    ClubModel.getClubById(clubId, callback);
  }

  static updateClub(clubId, updatedClub, callback) {
    ClubModel.updateClub(clubId, updatedClub, callback);
  }

  static deleteClub(clubId, callback) {
    ClubModel.deleteClub(clubId, callback);
  }

  static addMember(clubId, callback) {
    ClubModel.deleteClub(clubId, callback);
  }

  static removeMember(clubId, callback) {
    ClubModel.deleteClub(clubId, callback);
  }
}

module.exports = ClubService;
