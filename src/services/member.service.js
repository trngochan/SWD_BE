// member.service.js
const MemberModel = require("../models/member.model");

class MemberService {
  static getAllMembers(callback) {
    MemberModel.getAllMembers(callback);
  }

  static createMember(newMember, callback) {
    MemberModel.createMember(newMember, callback);
  }

  static getMemberById(memberId, callback) {
    MemberModel.getMemberById(memberId, callback);
  }

  static updateMember(memberId, updatedMember, callback) {
    MemberModel.updateMember(memberId, updatedMember, callback);
  }

  static deleteMember(memberId, callback) {
    MemberModel.deleteMember(memberId, callback);
  }
}

module.exports = MemberService;
