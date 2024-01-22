// member.service.js
const MemberModel = require("../models/member.model");

class MemberService {
  static getAllMembers(callback) {
    MemberModel.getAllMembers(callback);
  }

  static createMember(newMember, callback) {
    MemberModel.emailExists(newMember, function (emailExistsResult) {
      if (emailExistsResult.status === "error") {
        callback(emailExistsResult);
      }

      if (emailExistsResult.status === "success") {
        if (emailExistsResult.exists) {
          callback({
            status: "error",
            message: "Email already exists",
          });
        } else {
          MemberModel.createMember(newMember, function (createMemberResult) {
            callback(createMemberResult);
          });
        }
      }
    });
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
