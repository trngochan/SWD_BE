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

  static check_join(idMember, idClub, callback) {
    ClubMemberModel.check_join(idMember, idClub, callback);
  }

  static join_club(body, callback) {
    ClubMemberModel.createClubMember(body, callback);
  }

  static leaving_club(body, callback) {
    ClubMemberModel.leaving_club(body, callback);
  }
}

module.exports = ClubMemberService;
