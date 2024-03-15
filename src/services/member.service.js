// member.service.js
const MemberModel = require("../models/member.model");
const WalletModel = require("../models/wallet.model");

class MemberService {
  static getAllMembers(filters, callback) {
    MemberModel.getAllMembers(filters, callback);
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
            console.log(createMemberResult);
            if (createMemberResult.status === "success") {
              WalletModel.createWallet(
                {
                  memberId: createMemberResult.user.id,
                  memberName: newMember.name,
                },
                (respone) => {
                  if (respone.status === "success") {
                    console.log(respone);
                    callback(createMemberResult);
                  } else {
                    callback(respone);
                  }
                }
              );
            }
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
