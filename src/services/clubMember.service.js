// clubClubMember.service.js
const ClubMemberModel = require("../models/clubMember.model");
const ClubModel = require("../models/club.model");
const ClubMemSlot = require("../models/clubMemSlot.model");

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

  static getbyslotid(slotId, callback) {
    ClubMemSlot.getClubMemsBySlotId(slotId, (response) => {
      if (response.status === "success") {
        ClubMemberModel.getbyslotids(response.result, callback);
      }
    });
  }

  static getByIdMemberClub(clubId, MemberId, callback) {
    ClubMemberModel.getByIdMemberClub(clubId, MemberId, callback);
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
    ClubMemberModel.createClubMember(body, (result) => {
      if (result.status === "success") {
        // Nếu tạo clubMember thành công, thực hiện gọi hàm addMember của ClubService
        ClubModel.addMember(body.clubId, (addMemberResult) => {
          // Kiểm tra kết quả của hàm addMember
          if (addMemberResult.status === "success") {
            // Nếu thêm thành viên thành công, gọi callback với kết quả
            callback({
              status: "success",
              message: "Joined club successfully",
            });
          } else {
            // Nếu có lỗi khi thêm thành viên, gọi callback với thông báo lỗi
            callback({
              status: "error",
              message: "Error joining club: " + addMemberResult.message,
            });
          }
        });
      } else {
        // Nếu có lỗi khi tạo clubMember, gọi callback với thông báo lỗi
        callback({
          status: "error",
          message: "Error joining club: " + result.message,
        });
      }
    });
  }

  static leaving_club(body, callback) {
    ClubMemberModel.leaving_club(body, (result) => {
      if (result.status === "success") {
        // Nếu tạo clubMember thành công, thực hiện gọi hàm addMember của ClubService
        ClubModel.removeMember(body.clubId, (addMemberResult) => {
          // Kiểm tra kết quả của hàm addMember
          if (addMemberResult.status === "success") {
            // Nếu thêm thành viên thành công, gọi callback với kết quả
            callback({
              status: "success",
              message: "Leaving club successfully",
            });
          } else {
            // Nếu có lỗi khi thêm thành viên, gọi callback với thông báo lỗi
            callback({
              status: "error",
              message: "Error Leaving club: " + addMemberResult.message,
            });
          }
        });
      } else {
        // Nếu có lỗi khi tạo clubMember, gọi callback với thông báo lỗi
        callback({
          status: "error",
          message: "Error joining club: " + result.message,
        });
      }
    });
  }
}

module.exports = ClubMemberService;
