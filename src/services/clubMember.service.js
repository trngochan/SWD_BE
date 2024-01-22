// clubClubMember.service.js
const ClubMemberModel = require("../models/clubMember.model");

class ClubMemberService {
  static getAllClubMembers(callback) {
    ClubMemberModel.getAllClubMembers(callback);
  }

  static createClubMember(newClubMember, callback) {
    ClubMemberModel.createClubMember(newClubMember, callback);
  }

  static getClubMemberById(clubMemberId, callback) {
    ClubMemberModel.getClubMemberById(clubMemberId, callback);
  }

  static updateClubMember(clubMemberId, updatedClubMember, callback) {
    ClubMemberModel.updateClubMember(clubMemberId, updatedClubMember, callback);
  }

  static deleteClubMember(clubMemberId, callback) {
    ClubMemberModel.deleteClubMember(clubMemberId, callback);
  }
}

module.exports = ClubMemberService;
